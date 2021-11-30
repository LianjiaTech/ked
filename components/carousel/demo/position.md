---
order: 1
title: 垂直
---

垂直显示。

```jsx
import { Carousel } from '@ke/ked'

ReactDOM.render(
  <Carousel dotPosition="right">
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
  mountNode,
)
```

```css
/* For demo */
.ked-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ked-carousel .slick-slide h3 {
  color: #fff;
}
```
