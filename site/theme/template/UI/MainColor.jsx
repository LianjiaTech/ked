import React from 'react'
import { Row, Col } from '@ke/ked'

export default class Palette extends React.Component {
  componentDidMount() {}

  render() {
    const { boxSeparate, colorObj } = this.props
    const boxClassName = boxSeparate ? 'ui-color-separate ui-color-content' : 'ui-color-content'
    return (
      <div className={boxClassName}>
        <h3>{colorObj.name}</h3>
        <p className="desc">{colorObj.desc}</p>
        <Row className="color-wrap">
          {colorObj.list.map((item, index) => {
            const i = index
            return (
              <Col span={4} className="color-box" key={`${item.bgColor}_${i}`}>
                <div
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                    opacity: item.opacity,
                    borderColor: item.borderColor,
                  }}
                >
                  {item.bgColor} {item.opacity}
                </div>
                <div className="color-text">
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
