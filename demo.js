#!/usr/bin/env node

const utils = require('./index')
const demo = utils.getPointByPointRadianDistance(
  [0, 1],
  -Math.PI * .5,
  1
)
console.log(demo)
