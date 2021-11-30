---
order: 0
title: 基本使用
---

## 基本使用

```jsx
import { Mentions } from '@ke/ked';

const { Option } = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

ReactDOM.render(
  <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>,
  mountNode,
);
```
