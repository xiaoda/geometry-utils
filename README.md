# geometry-utils
This project contains geometry algorithms needed for graphical development like shader. It's written in JavaSript.

## Common API
### includes
判断数组是否包含元素。使用 JSON.stringify 转换后比对，以支持对象、数组等数据类型。

### isBetween
判断数字 x 是否位于特定范围内。使用依次相减后相乘取正负的方法判断。

### isBetweenByOdd
isBetween 的拓展方法，判断数字 x 是否奇数次位于多个界限内。在判断点是否位于多边形内部时用到。

### formatRadian
格式化弧度，使其位于 -Math.PI 到 Math.PI 之间，方便三角函数计算。

## Basic API
### getDistanceBetweenPoints
获取两点间距离。

### getPointBetweenPointsByX
在两点连成的线段中获取特定 x 坐标的点，不存在则返回 null。

### getPointBetweenPointsByY
在两点连成的线段中获取特定 y 坐标的点，不存在则返回 null。

### getRadian
获取三个点构成的角的弧度。

### transformPointByRadian
将点围绕原点旋转一定弧度后得到新的点。

## Specific API
### isPointInPolygonByIntersection
判断点是否位于多边形内。判断依据是：找到多边形边界上所有与该点横坐标、纵坐标相同的点，依次判断在水平、垂直方向该点是否奇数次处于多个交点范围内。

### isPointInPolygonByRadian
判断点是否位于多边形内。判断依据是：将多边形上任意两个相邻顶点与该点形成的角度累加，若为 Math.PI * 2 则位于多边形内，若为 0 则位于多边形外。

### getPointDistanceFromPolygon
获取点到多边形的最近距离。在依次获取点到多边形各边界的距离时，为方便计算，将边界的两个顶点移动至原点和 x 轴上，同时将该点相应地移动至新的点坐标。这样移动后，新点的 y 坐标或到顶点的距离就是点到边界的距离。
