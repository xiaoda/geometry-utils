#!/usr/bin/env node

const utils = require('./index')
const demo = utils.getDistanceFromPointToLineSegment(
  [2, 3], [3, 2], [1, 1]
)
console.log(demo)
