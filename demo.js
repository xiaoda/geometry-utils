#!/usr/bin/env node

const utils = require('./index')
const result1 = utils.isPointInPolygonByIntersection(
  [
    [10, 20],
    [20, 90],
    [90, 80],
    [80, 10]
  ],
  [0, 0]
)
const result2 = utils.getRadian([1, 0], [0, 0], [-1, -1])
const result3 = utils.isPointInPolygonByAngle(
  [
    [1, 1],
    [1, 5],
    [5, 5],
    [5, 1]
  ],
  [1, 1]
)
console.log(result3)
