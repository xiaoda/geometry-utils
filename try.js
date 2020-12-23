#!/usr/bin/env node

const utils = require('./index')
const result = utils.getCrossPointBetweenLines(
  [[0, 5], [5, 0]], [[0, -5], [5, 0]]
)
console.log(result)
