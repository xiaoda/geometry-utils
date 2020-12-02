#!/usr/bin/env node

function test (num) {
  return num + 1
}

const utils = require('./index')
const result = utils.repeatedlyCall(
  test, 5, 0
)
console.log(result)
