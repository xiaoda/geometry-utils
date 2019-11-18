#!/usr/bin/env node

const utils = require('./index')
const demo = utils.getPointByPointRadianDistance(
  [1, 1],
  Math.PI * .25,
  1
)
console.log(demo)
