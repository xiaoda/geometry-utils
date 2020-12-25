#!/usr/bin/env node

const utils = require('./index')
const result = utils.getCrossPointBetweenLineSegments(
  [[0, 5], [5, 0]], [[0, -5], [6, 1]]
)
console.log(result)
