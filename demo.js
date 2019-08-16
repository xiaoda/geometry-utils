#!/usr/bin/env node

const utils = require('./index')
const demo = utils.isPointInCircle([5, 5], 5, [2, 2])
console.log(demo)
