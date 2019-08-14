#!/usr/bin/env node

const utils = require('./index')
const demo = utils.getPointDistanceFromPolygon(
  [[2, 5], [5, 8], [8, 5], [5, 2]], [4, 1]
)
console.log(demo)
