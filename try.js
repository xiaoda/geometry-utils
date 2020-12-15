#!/usr/bin/env node

const utils = require('./index')
const result = utils.getDistanceFromPointToLine(
  [1, 0], [1, 1], [2, 2]
)
console.log(result)
