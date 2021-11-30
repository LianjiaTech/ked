import React from 'react'
import { Link } from 'react-router'
import { Button } from '@ke/ked'

export default function Cover() {
  return (
    <div className="cover-wrapper">
      <div className="cover-content">
        <div className="cover-icon">
          <img src="https://img.ljcdn.com/beike/ked/1617095504422.png" alt="" />
        </div>
        <h3>KED</h3>
        <Button type="primary" size="large">
          <Link className="start" to="/docs/react/introduce">
            开始使用
          </Link>
        </Button>
        <div className="slogan">基于 Ke Design UED 规范, 贝壳 B 端 React 基础通用组件库</div>
      </div>
    </div>
  )
}
