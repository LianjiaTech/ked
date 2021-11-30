/* eslint-disable react/no-string-refs, react/prefer-es6-class */
import React from 'react';
import { mount } from 'enzyme';
import Upload from '..';
import Form from '../../form';
import { T, fileToObject, genPercentAdd, getFileItem, removeFileItem } from '../utils';
import { setup, teardown } from './mock';
import { resetWarned } from '../../_util/warning';
import mountTest from '../../../../tests/shared/mountTest';

describe('Upload', () => {
  mountTest(Upload);

  beforeEach(() => setup());
  afterEach(() => teardown());

  // https://github.com/react-component/upload/issues/36
  it('should get refs inside Upload in componentDidMount', () => {
    let ref;
    class App extends React.Component {
      componentDidMount() {
        ref = this.refs.input;
      }

      render() {
        return (
          <Upload supportServerRender={false}>
            <input ref="input" />
          </Upload>
        );
      }
    }
    mount(<App />);
    expect(ref).toBeDefined();
  });

  it('return promise in beforeUpload', (done) => {
    const data = jest.fn();
    const props = {
      action: 'http://upload.com',
      beforeUpload: () => new Promise((resolve) => setTimeout(() => resolve('success'), 100)),
      data,
      onChange: ({ file }) => {
        if (file.status !== 'uploading') {
          expect(data).toHaveBeenCalled();
          done();
        }
      },
    };

    const wrapper = mount(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    wrapper.find('input').simulate('change', {
      target: {
        files: [{ file: 'foo.png' }],
      },
    });
  });

  it('should update progress in IE', (done) => {
    const originSetInterval = window.setInterval;
    process.env.TEST_IE = true;
    Object.defineProperty(window, 'setInterval', {
      value: (fn) => fn(),
    });
    const props = {
      action: 'http://upload.com',
      onChange: ({ file }) => {
        if (file.status !== 'uploading') {
          process.env.TEST_IE = undefined;
          Object.defineProperty(window, 'setInterval', {
            value: originSetInterval,
          });
          done();
        }
      },
    };

    const wrapper = mount(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );
    wrapper.find('input').simulate('change', {
      target: {
        files: [{ file: 'foo.png' }],
      },
    });
  });

  it('beforeUpload can be falsy', (done) => {
    const props = {
      action: 'http://upload.com',
      beforeUpload: false,
      onChange: ({ file }) => {
        if (file.status !== 'uploading') {
          done();
        }
      },
    };

    const wrapper = mount(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    wrapper.find('input').simulate('change', {
      target: {
        files: [{ file: 'foo.png' }],
      },
    });
  });

  it('upload promise return file in beforeUpload', (done) => {
    const data = jest.fn();
    const props = {
      action: 'http://upload.com',
      beforeUpload: (file) =>
        new Promise((resolve) =>
          setTimeout(() => {
            const result = file;
            result.name = 'test.png';
            resolve(result);
          }, 100),
        ),
      data,
      onChange: ({ file }) => {
        if (file.status !== 'uploading') {
          expect(data).toHaveBeenCalled();
          expect(file.name).toEqual('test.png');
          done();
        }
      },
    };

    const wrapper = mount(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    wrapper.find('input').simulate('change', {
      target: {
        files: [{ file: 'foo.png' }],
      },
    });
  });

  it('should not stop upload when return value of beforeUpload is false', (done) => {
    const fileList = [
      {
        uid: 'bar',
        name: 'bar.png',
      },
    ];
    const mockFile = new File(['foo'], 'foo.png', {
      type: 'image/png',
    });
    const data = jest.fn();
    const props = {
      action: 'http://upload.com',
      fileList,
      beforeUpload: () => false,
      data,
      onChange: ({ file, fileList: updatedFileList }) => {
        expect(file instanceof File).toBe(true);
        expect(updatedFileList.map((f) => f.name)).toEqual(['bar.png', 'foo.png']);
        expect(data).not.toHaveBeenCalled();
        done();
      },
    };

    const wrapper = mount(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    wrapper.find('input').simulate('change', {
      target: {
        files: [mockFile],
      },
    });
  });

  it('should increase percent automatically when call autoUpdateProgress in IE', (done) => {
    let uploadInstance;
    let lastPercent = -1;
    const props = {
      action: 'http://upload.com',
      onChange: ({ file }) => {
        if (file.percent === 0 && file.status === 'uploading') {
          // manually call it
          uploadInstance.autoUpdateProgress(0, file);
        }
        if (file.status === 'uploading') {
          expect(file.percent).toBeGreaterThan(lastPercent);
          lastPercent = file.percent;
        }
        if (file.status === 'done' || file.status === 'error') {
          done();
        }
      },
    };

    const wrapper = mount(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    wrapper.find('input').simulate('change', {
      target: {
        files: [{ file: 'foo.png' }],
      },
    });

    uploadInstance = wrapper.instance();
  });

  it('should not stop upload when return value of beforeUpload is not false', (done) => {
    const data = jest.fn();
    const props = {
      action: 'http://upload.com',
      beforeUpload() {},
      data,
      onChange: () => {
        expect(data).toHaveBeenCalled();
        done();
      },
    };

    const wrapper = mount(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    wrapper.find('input').simulate('change', {
      target: {
        files: [{ file: 'foo.png' }],
      },
    });
  });

  // https://github.com/ant-design/ant-design/issues/14779
  it('should contain input file control if upload button is hidden', () => {
    const wrapper = mount(
      <Upload action="http://upload.com">
        <button type="button">upload</button>
      </Upload>,
    );

    expect(wrapper.find('input[type="file"]').length).toBe(1);
    wrapper.setProps({ children: null });
    expect(wrapper.find('input[type="file"]').length).toBe(1);
  });

  // https://github.com/ant-design/ant-design/issues/14298
  it('should not have id if upload children is null, avoid being triggered by label', () => {
    // eslint-disable-next-line
    class Demo extends React.Component {
      render() {
        const {
          form: { getFieldDecorator },
          children,
        } = this.props;
        return (
          <Form>
            <Form.Item label="Upload">
              {getFieldDecorator('upload', { valuePropName: 'fileList' })(
                <Upload>{children}</Upload>,
              )}
            </Form.Item>
          </Form>
        );
      }
    }
    const WrappedDemo = Form.create()(Demo);
    const wrapper = mount(
      <WrappedDemo>
        <div>upload</div>
      </WrappedDemo>,
    );
    expect(wrapper.find('input#upload').length).toBe(1);
    wrapper.setProps({ children: null });
    expect(wrapper.find('input#upload').length).toBe(0);
  });

  // https://github.com/ant-design/ant-design/issues/16478
  it('should not have id if Upload is disabled, avoid being triggered by label', () => {
    // eslint-disable-next-line
    class Demo extends React.Component {
      render() {
        const {
          form: { getFieldDecorator },
          disabled,
        } = this.props;
        return (
          <Form>
            <Form.Item label="Upload">
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
              })(
                <Upload disabled={disabled}>
                  <div>upload</div>
                </Upload>,
              )}
            </Form.Item>
          </Form>
        );
      }
    }
    const WrappedDemo = Form.create()(Demo);
    const wrapper = mount(<WrappedDemo />);
    expect(wrapper.find('input#upload').length).toBe(1);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('input#upload').length).toBe(0);
  });

  // https://github.com/ant-design/ant-design/issues/24197
  it('should not have id if Upload.Dragger is disabled, avoid being triggered by label', () => {
    // eslint-disable-next-line
    class Demo extends React.Component {
      render() {
        const {
          form: { getFieldDecorator },
          disabled,
        } = this.props;
        return (
          <Form>
            <Form.Item label="Upload">
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
              })(
                <Upload.Dragger disabled={disabled}>
                  <div>upload</div>
                </Upload.Dragger>,
              )}
            </Form.Item>
          </Form>
        );
      }
    }
    const WrappedDemo = Form.create()(Demo);
    const wrapper = mount(<WrappedDemo />);
    expect(wrapper.find('input#upload').length).toBe(1);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('input#upload').length).toBe(0);
  });

  it('should be controlled by fileList', () => {
    const fileList = [
      {
        uid: '-1',
        name: 'foo.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ];
    const wrapper = mount(<Upload />);
    expect(wrapper.instance().state.fileList).toEqual([]);
    wrapper.setProps({ fileList });
    expect(wrapper.instance().state.fileList).toEqual(fileList);
  });

  describe('util', () => {
    // https://github.com/react-component/upload/issues/36
    it('should T() return true', () => {
      const res = T();
      expect(res).toBe(true);
    });

    it('should be able to copy file instance', () => {
      const file = new File([], 'aaa.zip');
      const copiedFile = fileToObject(file);
      ['uid', 'lastModified', 'lastModifiedDate', 'name', 'size', 'type'].forEach((key) => {
        expect(key in copiedFile).toBe(true);
      });
    });

    it('should be able to progress from 0.1 ', () => {
      // 0.1 -> 0.98
      const getPercent = genPercentAdd();
      let curPercent = 0;
      curPercent = getPercent(curPercent);
      expect(curPercent).toBe(0.1);
    });

    it('should be able to progress to 0.98 ', () => {
      // 0.1 -> 0.98
      const getPercent = genPercentAdd();
      let curPercent = 0;
      for (let i = 0; i < 500; i += 1) {
        curPercent = getPercent(curPercent);
      }
      expect(parseFloat(curPercent.toFixed(2))).toBe(0.98);
    });

    it('should be able to get fileItem', () => {
      const file = { uid: '-1', name: 'item.jpg' };
      const fileList = [
        {
          uid: '-1',
          name: 'item.jpg',
        },
      ];
      const targetItem = getFileItem(file, fileList);
      expect(targetItem).toBe(fileList[0]);
    });

    it('should be able to remove fileItem', () => {
      const file = { uid: '-1', name: 'item.jpg' };
      const fileList = [
        {
          uid: '-1',
          name: 'item.jpg',
        },
        {
          uid: '-2',
          name: 'item2.jpg',
        },
      ];
      const targetItem = removeFileItem(file, fileList);
      expect(targetItem).toEqual(fileList.slice(1));
    });

    it('should not be able to remove fileItem', () => {
      const file = { uid: '-3', name: 'item.jpg' };
      const fileList = [
        {
          uid: '-1',
          name: 'item.jpg',
        },
        {
          uid: '-2',
          name: 'item2.jpg',
        },
      ];
      const targetItem = removeFileItem(file, fileList);
      expect(targetItem).toBe(null);
    });
  });

  it('should support linkProps as object', () => {
    const fileList = [
      {
        uid: '-1',
        name: 'foo.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
        linkProps: {
          download: 'image',
          rel: 'noopener',
        },
      },
    ];
    const wrapper = mount(<Upload fileList={fileList} />);
    const linkNode = wrapper.find('a.ant-upload-list-item-name');
    expect(linkNode.props().download).toBe('image');
    expect(linkNode.props().rel).toBe('noopener');
  });

  it('should support linkProps as json stringify', () => {
    const linkPropsString = JSON.stringify({
      download: 'image',
      rel: 'noopener',
    });
    const fileList = [
      {
        uid: '-1',
        name: 'foo.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
        linkProps: linkPropsString,
      },
    ];
    const wrapper = mount(<Upload fileList={fileList} />);
    const linkNode = wrapper.find('a.ant-upload-list-item-name');
    expect(linkNode.props().download).toBe('image');
    expect(linkNode.props().rel).toBe('noopener');
  });

  it('should not stop remove when return value of onRemove is false', (done) => {
    const mockRemove = jest.fn(() => false);
    const props = {
      onRemove: mockRemove,
      fileList: [
        {
          uid: '-1',
          name: 'foo.png',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png',
        },
      ],
    };

    const wrapper = mount(<Upload {...props} />);

    wrapper.find('div.ant-upload-list-item i.anticon-delete').simulate('click');

    setImmediate(() => {
      wrapper.update();

      expect(mockRemove).toHaveBeenCalled();
      expect(props.fileList).toHaveLength(1);
      expect(props.fileList[0].status).toBe('done');
      done();
    });
  });

  // https://github.com/ant-design/ant-design/issues/18902
  it('should not abort uploading until return value of onRemove is resolved as true', (done) => {
    let wrapper;

    const props = {
      onRemove: () =>
        new Promise(
          (resolve) =>
            setTimeout(() => {
              wrapper.update();
              expect(props.fileList).toHaveLength(1);
              expect(props.fileList[0].status).toBe('uploading');
              resolve(true);
            }),
          100,
        ),
      fileList: [
        {
          uid: '-1',
          name: 'foo.png',
          status: 'uploading',
          url: 'http://www.baidu.com/xxx.png',
        },
      ],
      onChange: () => {
        expect(props.fileList).toHaveLength(1);
        expect(props.fileList[0].status).toBe('removed');
        done();
      },
    };

    wrapper = mount(<Upload {...props} />);

    wrapper.find('div.ant-upload-list-item i.anticon-delete').simulate('click');
  });

  it('should not stop download when return use onDownload', (done) => {
    const mockRemove = jest.fn(() => false);
    const props = {
      onRemove: mockRemove,
      showUploadList: {
        showDownloadIcon: true,
      },
      fileList: [
        {
          uid: '-1',
          name: 'foo.png',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png',
        },
      ],
    };

    const wrapper = mount(<Upload {...props} onDownload={() => {}} />);

    wrapper.find('div.ant-upload-list-item i.anticon-download').simulate('click');

    setImmediate(() => {
      wrapper.update();

      expect(props.fileList).toHaveLength(1);
      expect(props.fileList[0].status).toBe('done');
      done();
    });
  });

  // https://github.com/ant-design/ant-design/issues/14439
  it('should allow call abort function through upload instance', () => {
    const wrapper = mount(
      <Upload>
        <button type="button">upload</button>
      </Upload>,
    );
    expect(typeof wrapper.instance().upload.abort).toBe('function');
  });

  it('unmount', () => {
    const wrapper = mount(
      <Upload>
        <button type="button">upload</button>
      </Upload>,
    );
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
    expect(clearIntervalSpy).not.toHaveBeenCalled();
    wrapper.unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });

  it('correct dragCls when type is drag', () => {
    const fileList = [{ status: 'uploading', uid: 'file' }];
    const wrapper = mount(
      <Upload type="drag" fileList={fileList}>
        <button type="button">upload</button>
      </Upload>,
    );
    expect(wrapper.find('.ant-upload-drag-uploading').length).toBe(1);
  });

  it('return when targetItem is null', () => {
    const fileList = [{ uid: 'file' }];
    const wrapper = mount(
      <Upload type="drag" fileList={fileList}>
        <button type="button">upload</button>
      </Upload>,
    ).instance();
    expect(wrapper.onSuccess('', { uid: 'fileItem' })).toBe(undefined);
    expect(wrapper.onProgress('', { uid: 'fileItem' })).toBe(undefined);
    expect(wrapper.onError('', '', { uid: 'fileItem' })).toBe(undefined);
  });

  it('warning if set `value`', () => {
    resetWarned();

    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    mount(<Upload value={[]} />);
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [ked: Upload] `value` is not validate prop, do you mean `fileList`?',
    );
    errorSpy.mockRestore();
  });
});
