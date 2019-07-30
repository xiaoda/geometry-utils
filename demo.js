#!/usr/bin/env node

const utils = require('./index')
const demo = utils.isPointInPolygon([[10, 20], [20, 90], [90, 80], [80, 10]], [0, 0])
console.log(demo)
