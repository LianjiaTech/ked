---
order: 2
title: 设计规范
---

`ked` 组件库采用 Ke Design 设计规范与标准，想了解最新的设计规范和更多信息，请以此文档为准，点击[最新设计规范](http://design.ke.com/page/knowledge?base_id=12&knowledge_id=276)查看。

## 背景

传统的页面产出流程是瀑布流式的 -一个工作流程中会涉及到不同的PM、设计师及前端工程师。部分项目在时间紧张的情况下会出现分批交付并行开发的情况、如此多的角色共同参与一个项目下，合作方如果没有紧密咬合、足够的沟通，将会导致大量重复性的工作，增加项目周期、管理难度。

B端产品往往拥有复杂的业务逻辑且页面量级巨大，快速迭代也会引发频繁的变动以及并行概率的增加，需要设计师与开发能够快速的产出方案保证上线。这样的工作模式引发的副作用如：“体验一致性差”、“设计效率低”、“还原度不可控”的问题也逐渐显现，变成一个急待解决的问题。

B类产品中存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容，那么是不是可以通过这种方式从现在的模式中，解绑一下呢？

## 传统工作模式的创新

**运用组件化思维，构建一套设计系统，将产品需求场景化、视觉表达模块化，每个组件基于复用为目的，使其具备独立的完整解决方案**  
**降低冗余的生产成本，最终解决用户体验一致性的问题。**

## AM 设计系统构成

AM 是一个企业级中后台前端/设计解决方案，秉承组件化思维，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源。 AM 设计系统的基础构成包括 **“设计语言/文件”** 与 **“前端展示/代码”** 两个部分。  
【设计语言/文件】基于组件化思维及『简洁』『高效』『自然』的设计价值观提炼出的视觉传达规范/基础组件/业务组件/配套设计资源，包括但不限于视觉传达规范：如配色、字体、KA 品牌传达等 ；基础组件：界面的实体组成要素，例如按钮、输入框、表单元素等；以及业务组件：如业务弹窗、筛选项等。  
【前端展示/代码】 可访问的设计系统站点；提供设计规范与物料的阅读，提供前端开发指南与组件 API 代码

## 设计系统的物料构成

我们提供的完整的设计系统物料具备以下部分：【Design Language 设计语言】包括 Logo、品牌色、KA 定制方案……；【Layout 布局】 包括模板、页面框架、响应式与网格规则……  
【Style 设计风格】包括配色、字体字号、投影、图标、Design Token……  
【UI Patterns 设计模式】基础组件，包括 button, form, dialog...  
【BizComponents 业务组件】链接文件组件库 UI kit, 链接文件 Guidline

## 设计系统的使用与维护

【构建 ked 的设计师与前端】承担整个团队的用户体验一致性与提升效能的 KPI；设计师需要负责分发、同步、更新在业务演进过程中不断迭代的设计系统物料；开发需要负责代码分发、版本管理、DEMO/API 查询、质量管理、发布流程。  
【AM 的体验者】团队全员，Design System 需要在项目中不断更迭与完善，如果您在使用过程中有新的组件样式希望贡献，或有问题/建议欢迎反馈到组件中台小组

## 通用颜色规范

```__react
import Palette from '../../site/theme/template/UI/MainColor';

const  colorObj = {
  name: '主色',
  desc: '主要用于button、icon，以及搜索等处',
  list: [
    { title: '', desc: '主色调 normal', bgColor: '#0984F9' },
    { title: '', desc: 'hover + 20% #ffffff', bgColor: '#3a9cfa' },
    { title: '', desc: 'active + 10% #000000', bgColor: '#0876df' },
  ]
}
ReactDOM.render(<Palette colorObj={colorObj} />, mountNode);
```

```__react
import Palette from '../../site/theme/template/UI/MainColor';

const  colorObj = {
  name: '单色',
  desc: '主要用于button、icon，以及搜索等处',
  list: [
    { title: '主要信息', desc: '搜索结果页摘要的主色调', bgColor: '#333333' },
    { title: '次要信息', desc: '搜索结果页摘要的颜色', bgColor: '#9399A5' },
    { title: '辅助内容信息', desc: '时间等', bgColor: '#DDDDDD' },
    { title: '辅助线条颜色', desc: '搜索结果页卡片描边颜色', bgColor: '#EEEEEE', color: '#9399A5' },
    { title: '背景色', desc: '搜索结果页部分内容的背景色', bgColor: '#f8f8f8', color: '#9399A5' },
  ]
}
ReactDOM.render(<Palette boxSeparate colorObj={colorObj} />, mountNode);
```

```__react
import Palette from '../../site/theme/template/UI/MainColor';

const  colorObj = {
  name: '辅助色',
  desc: '',
  list: [
    { title: '', desc: '', bgColor: '#44C2FF' },
    { title: '', desc: '', bgColor: '#44C2FF', opacity: '0.75' },
    { title: '', desc: '', bgColor: '#44C2FF', opacity: '0.5' },
    { title: '', desc: '', bgColor: '#44C2FF', opacity: '0.25' },
  ]
}
ReactDOM.render(<Palette colorObj={colorObj} />, mountNode);
```

```__react
import Palette from '../../site/theme/template/UI/MainColor';

const  colorObj = {
  name: '',
  desc: '用于与主色并列的其他高亮选项',
  list: [
    { title: '', desc: '', bgColor: '#FF5722' },
    { title: '', desc: '', bgColor: '#FF5722', opacity: '0.75' },
    { title: '', desc: '', bgColor: '#FF5722', opacity: '0.5' },
    { title: '', desc: '', bgColor: '#FF5722', opacity: '0.25' },
  ]
}
ReactDOM.render(<Palette colorObj={colorObj} />, mountNode);
```

```__react
import Palette from '../../site/theme/template/UI/MainColor';

const  colorObj = {
  name: '',
  desc: '价格、评分色',
  list: [
    { title: '错误提示与气泡消息/徽标色', desc: '搜索结果页飘红', bgColor: '#FA3F3F' },
    { title: '警告提示/异常', desc: '', bgColor: '#FAAD14' },
    { title: '成功提示/成功', desc: '', bgColor: '#52C41A' },
  ]
}
ReactDOM.render(<Palette colorObj={colorObj} />, mountNode);
```

## 通用字色规范

```__react
import Palette from '../../site/theme/template/UI/MainColor';

const  colorObj = {
  name: '字色',
  list: [
    { title: '主要信息', desc: '搜索结果页摘要的主色调', bgColor: '#333333' },
    { title: '次要信息', desc: '搜索结果页摘要的颜色', bgColor: '#9399A5' },
    { title: '不可点击', desc: '灰态等', bgColor: '#DDDDDD' },
    { title: '实底Button、标签文字', desc: '反白展示效果', bgColor: '#FFFFFF', color: '#9399A5', borderColor: '#d5d5d5' },
  ]
}
ReactDOM.render(<Palette boxSeparate colorObj={colorObj} />, mountNode);
```

```__react
import Palette from '../../site/theme/template/UI/MainColor';

const  colorObj = {
  name: '辅助色',
  list: [
    { title: '', desc: '与品牌挂靠、功能、文字链', bgColor: '#0984F9' },
    { title: '', desc: '用于与主色并列的其他高亮选项', bgColor: '#44C2FF' },
    { title: '', desc: '价格、评分色、提示信息、运营信息', bgColor: '#FF5722' },
    { title: '', desc: '错误提示与气泡消息', bgColor: '#FA3F#F'},
  ]
}
ReactDOM.render(<Palette boxSeparate colorObj={colorObj} />, mountNode);
```

## 通用字号规范

### 文字

<div class="sample-box">
    <p><strong style="font-size: 30px;">特殊</strong><strong style="font-size: 30px;">30px</strong><span>特殊数据展示</span></p>
    <p><strong style="font-size: 20px;">标题H1</strong><strong style="font-size: 20px;">20px</strong><span>一级信息:主标题、列表通用标题字号等</span></p>
    <p><strong style="font-size: 16px;">标题H2</strong><strong style="font-size: 16px;">16px</strong><span>一级信息:卡片标题栏文字等</span></p>
    <p><strong style="font-size: 16px;">正文内容1</strong><strong style="font-size: 16px;">16px</strong><span>二级信息:正文文字、辅助信息等</span></p>
    <p><strong style="font-size: 14px;">正文内容2</strong><strong style="font-size: 14px;">14px</strong><span>二级信息:辅助信息等</span></p>
    <p><strong style="font-size: 12px;">次要信息</strong><strong style="font-size: 12px;">12px</strong><span>附属信息、注释文字</span></p>
</div>

_【注】极端情况会做特殊字号补充_

### 文字与间距关系示例

<div class="img-box"><img src="https://img.ljcdn.com/beike/ant-man/img/ui/1571734713029.png"></div>

**在做设计的时候保留字框的高度，并对文字顶部与底部距离做相应的修改，以保证视觉的对齐**

<div class="preview-image-box">
    <div class="preview-image-wrapper"><img src="https://img.ljcdn.com/beike/ant-man/img/ui/1571734718037.png"></div>
</div>

## 通用图标规范

<div class="sample-box">
    <p><strong>Cell icon_12*12</strong><span>基础警告提示</span></p>
    <p><strong>Cell icon_16*16</strong><span>操作状态提示</span></p>
    <p><strong>Cell icon_20*20</strong><span>弹窗提示</span></p>
    <p><strong>Cell icon_48*48</strong><span>二级信息：正文文字、辅助信息等</span></p>
</div>

<style>
  .sample-box p {
    margin-bottom: 20px;
  }
  .sample-box p strong {
    display: inline-block;
    min-width: 200px;
  }
  .preview-image-box {
    width: 500px;
    margin: 0 0 30px 25px;
  }
  .preview-image-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 16px;
    text-align: center;
    background: #f2f4f5;
  }
  .preview-image-box img {
      max-width: 100%;
      padding: 12px;
      background: #fff;
      border-radius: 4px;
      cursor: pointer;
      -webkit-transition: all .3s;
      transition: all .3s;
  }
</style>
