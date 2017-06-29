function b() {
  console.log("Called b!")
}

b()

console.log(a)
var a
// a = undefined;
a = 'Hello, world!'


if (a === undefined) {
  console.log('a is undefined:', a)
} else {
  console.log('a is defined:', a)
}

console.log(a)
