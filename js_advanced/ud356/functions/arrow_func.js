const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(name => name.length > 6);
const titleNames = names.map(name => name.toUpperCase());
console.log(longNames, titleNames)

// setTimeout(() => {
//   console.log('starting the test1');
//   // test.start();
// }, 5000);
//
// setTimeout(_ => {
//   console.log('starting the test2');
//   // test.start();
// }, 2000);

const vowels = 'aeiou'.split('');
const bigVowels = vowels.map((letter) => letter.toUpperCase());
console.log(bigVowels)


const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black'];

const crazyColors = colors.map(color => {
  const jumble = color.split('').reverse();
  console.log(jumble);
  return jumble.join('') + '!';
});

const crazyColorsSimple = colors.map(color => color.split('').reverse().join('') + '!');

console.log(crazyColors, crazyColorsSimple)

/*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);
console.log(...squares);
