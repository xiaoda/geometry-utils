#!/usr/bin/env node

const utils = require('./index')
const demo = utils.getPointByPointRadianDistance(
  [1, 1],
  0,
  1
)
console.log(demo)
