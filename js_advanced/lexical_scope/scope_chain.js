"use strict"

function b() {
  console.log(myVar)
}

function a() {
  function b() {
    console.log(myVar)
  }

  let myVar = 2
  console.log(myVar)
  b()
  console.log(myVar)
}

var myVar = 1
a()
b()
