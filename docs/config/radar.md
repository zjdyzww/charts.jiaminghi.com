---
sidebarDepth: 2
---

# series[i] ({type: 'radar', ...})

将series子元素的`type`属性配置为`radar`，即可使用雷达图。

:::tip
使用雷达图需要配置`radar`雷达坐标系。
:::

## show

```js
/**
 * @description 是否显示该雷达图
 * @type {Boolean}
 * @default show = true
 */
```

## radarStyle

```js
/**
 * @description 雷达图默认样式
 * @type {Object}
 * @default style = {Class Style的配置项}
 */
radarStyle: {
  lineWidth: 1
}
```

## point

```js
/**
 * @description 雷达图球点配置
 * @type {Object}
 */
```

### point.show

```js
/**
 * @description 是否显示雷达图球点
 * @type {Boolean}
 * @default show = true
 */
```

### point.radius

```js
/**
 * @description 球点半径
 * @type {Number}
 * @default radius = 2
 */
```

### point.style

```js
/**
 * @description 雷达图球点默认样式
 * @type {Object}
 * @default style = {Class Style的配置项}
 */
style: {
  fill: '#fff'
}
```

## label

```js
/**
 * @description 雷达图标签配置
 * @type {Object}
 */
```

### label.show

```js
/**
 * @description 是否显示标签
 * @type {Boolean}
 * @default show = true
 */
```

### label.offset

```js
/**
 * @description 标签位置偏移
 * @type {Array}
 * @default offset = [0, 0]
 */
```

### label.labelGap

```js
/**
 * @description 标签与雷达图间的间隔
 * @type {Number}
 * @default labelGap = 5
 */
```

### label.formatter

```js
/**
 * @description 标签格式化
 * @type {String|Function}
 * @default formatter = null
 * @example formatter = 'Score-{value}'
 * @example formatter = (label) => (label)
 */
```

### label.style

```js
/**
 * @description 标签默认样式
 * @type {Object}
 * @default style = {Class Style的配置项}
 */
style: {
  fontSize: 10
}
```

## animationCurve

```js
/**
 * @description 雷达图缓动曲线
 * @type {String}
 * @default animationCurve = 'easeOutCubic'
 */
```

## animationFrane

```js
/**
 * @description 雷达图缓动效果帧数
 * @type {Number}
 * @default animationFrame = 50
 */
```