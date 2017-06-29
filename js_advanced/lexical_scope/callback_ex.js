"use strict"

function waitThreeSeconds(){
  let ms = 3000 + new Date().getTime()
  while (new Date() < ms){}
  console.log("Finished Function!")
}

function clickHandler(){
  console.log("Click Event!")
}

document.addEventListener('click', clickHandler)

waitThreeSeconds()
console.log("Finished Execution!")
