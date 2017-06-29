const names = ["A", "B", "C"]

for (const name of names) {
  console.log(name)
}

const CHARACTER_LIMIT = 25;
const posts = [
  "#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
  "Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
  "I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
  for (const post of posts) {
    console.log(post.slice(0, CHARACTER_LIMIT));
  }
}

displayPosts();



const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

for (let day of days) {
  let [h, ...other] = day
  console.log(...h.toUpperCase(), ...other, 'FUCK')
  console.log(firstUpperCase(day))
}


/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);


function sum() {
  console.log(arguments)
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
}


function sum(...nums) {
  console.log(nums)
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(20, 30))

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
  // console.log(nums)
  if (nums.length === 0) {
    return 0
  }
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total / nums.length;

}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
