#!/usr/bin/env node

const utils = require('./index')
const demo = utils.isObjectsEqual(
  {a: 1, b: 2},
  {b: 2, a: 1}
)
console.log(demo)
