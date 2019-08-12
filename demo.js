#!/usr/bin/env node

const utils = require('./index')
const demo = utils.getPointDistanceFromPolygon(
  [[0, 0], [0, 5], [5, 5], [5, 0]], [1, 2]
)
console.log(demo)
