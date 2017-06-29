"use strict"

let myVar = "100"
function b() {
  let myVar = "20"
  console.log(myVar)
  myVar = "30"
  console.log(myVar)
}


console.log(myVar)
b()
