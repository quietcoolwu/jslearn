/*
 * Programming Quiz: Using Let and Const (1-1)
 */

const CHARACTER_LIMIT = 255;
const posts = [
  "#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
  "Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
  "I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
  // const i = 0 failed for `i++` statement. otherwise it works.
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].slice(0, CHARACTER_LIMIT));
  }
}

displayPosts();


/*
 * Instructions: Change the `greeting` string to use a template literal.
 */

const myName = `[Kai Wu]`;
const greeting = `Hello, my name is  ${myName}`;
console.log(greeting);


/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
  name: 'Cheetah',
  scientificName: 'Acinonyx jubatus',
  lifespan: '10-12 years',
  speed: '68-75 mph',
  diet: 'carnivore',
  summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
  fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;
console.log(first, second, third);

const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29,
  calculateWorth() {
    return this.karat * 100.0 * Math.PI
  }
};

const {
  type,
  color
} = gemstone;

console.log(type, color, gemstone.calculateWorth());

const circle = {
  radius: 10,
  color: 'orange',
  getArea: function () {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function () {
    return 2 * Math.PI * this.radius;
  }
};

let {
  radius,
  getArea,
  getCircumference
} = circle;


// When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to this in the circle object which results in an area that is NaN.
console.log(circle.getArea())
console.log(getArea())

/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

let [one, b, p, two, c, e, u, three, d] = things

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
