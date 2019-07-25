#!/usr/bin/env node

const utils = require('./index')
const demo = utils.isPointInConvexPolygon([[0, 0], [0, 10], [10, 0]], [10, 10])
console.log(demo)
