# geometry-utils
This project contains geometry algorithms needed for graphical development like shader. It's written in JavaSript.

## Common API
### clone
深拷贝对象或数组。

### unique
数组元素去重，支持数组、对象类型元素（深拷贝方式）。

### isObjectsEqual
以递归方式比较多个对象或数组内容是否一致。

### includes
判断数组是否包含元素，支持对数组、对象类型的元素进行递归比较。

### isBetween
判断数字 x 是否位于给定范围内。使用依次相减后相乘取正负的方法判断。

### isBetweenByOdd
isBetween 的拓展方法，判断数字 x 是否奇数次位于多个界限内。在判断点是否位于多边形内部时用到。

### mix & changeByPercent
根据给定比例混合两个数值；也可以理解为在给定数值基础上按百分比改变。

### map
根据给定参照映射数值。

### clamp
获取数值在给定范围内的落点。

### formatRadian
格式化弧度，使其位于 -Math.PI 到 Math.PI 之间，方便三角函数计算。

### linearChange
在给定时间内线性改变目标值。

### debounce
函数防抖

### throttle
函数节流

### setTimeoutCustom
自定义定时器，可控制精度。

### setIntervalCustom
自定义定时间隔，可控制精度。

### chain
函数链式操作。

## Basic API
### getDistanceBetweenPoints
获取两点间距离。

### getPointByOffset
获取点偏移后的坐标。

### getMidPointBetweenPoints
按比例获取两点间的（中）点。

### getPointBetweenPointsByX
在两点连成的线段中获取给定 x 坐标的点，不存在则返回 null。

### getPointBetweenPointsByY
在两点连成的线段中获取给定 y 坐标的点，不存在则返回 null。

### getPointByPointDirectionDistance
依据点、方向、距离获取新的点。

### getPointByPointRadianDistance
根据点、弧度、距离获取新的点。

### getCurvePointBetweenPoints
获取两点间曲线的中点。

### getDirection
生成方向。

### getVerticalDirection
获取垂直的方向。

### mergeVectors
合并向量。

### getQuadrant
获取点或方向所在的象限。

### getQuadrantFromRadian
获取弧度所在的象限。

### getRadian
获取三个点构成的角的弧度。

### getRadianFromXAxis
获取点对应的弧度。

### transformPointByRadian
将点围绕原点旋转一定弧度后得到新的点。

## Specific API
### isPointInPolygonByIntersection
判断点是否位于多边形内。判断依据是：找到多边形边界上所有与该点横坐标、纵坐标相同的点，依次判断在水平、垂直方向该点是否奇数次处于多个交点范围内。

### isPointInPolygonByRadian
判断点是否位于多边形内。判断依据是：将多边形上任意两个相邻顶点与该点形成的角度累加，若为 Math.PI * 2 则位于多边形内，若为 0 则位于多边形外。

### getPointDistanceFromPolygon
获取点到多边形的最近距离。在依次获取点到多边形各边界的距离时，为方便计算，将边界的两个顶点移动至原点和 x 轴上，同时将该点相应地移动至新的点坐标。这样移动后，新点的 y 坐标或到顶点的距离就是点到边界的距离。

### isPointInCircle
判断点是否位于圆内，判断依据是点到圆心的距离。

### getPointDistanceFromCircle
获取点到圆的距离。
