"use strict"


var b
function foo(a) {
  // console.log(a + b, b)
  // Invalid in Strict Mode
  b = a
  console.log(typeof(b))
  console.log(a + b, b)
}
// console.log(b)
foo(2)
var b
console.log(b)
