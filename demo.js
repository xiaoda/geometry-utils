#!/usr/bin/env node

const utils = require('./index')
const demo = utils.getCurvePointBetweenPoints([0, 2], [2, 0], 1)
console.log(demo)
