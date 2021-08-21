'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/
/*
//////// function
function logger() {
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(7, 2));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
// Expressions vs declarations
// Function declaration(宣言)
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression(式)
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}
const age2 = calcAge2(1992);
//console.log(age1, age2);
*/
/*
///// Function Arrow
const birthYear = 1991;
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/
/*
////// Inside other Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3 ) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins ){
    console.log(`Koalas win ${avgKoalas} vs. ${avgKoalas}`);
  } else {
    console.log('Nothing');
  }
}

const Dolphins1 = 85;
const Dolphins2 = 54;
const Dolphins3 = 41;

const Koalas1 = 23;
const Koalas2 = 34;
const Koalas3 = 27;

const scoreDolphins = calcAverage(Dolphins1, Dolphins2, Dolphins3);
const scoreKoalas = calcAverage(Koalas1, Koalas2, Koalas3);
checkWinner(scoreDolphins, scoreKoalas);
*/
/*
// Array
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);

const years = new Array(1991, 1984, 2008, 2020);
*/

// Element
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends)

// Remove elements
friends.pop(); // Last
const poppoed = friends.pop(); 
console.log(poppoed)
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends);

friends.push(23);
console.log(friends.includes('Steven'))

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/
///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
const bills = [125, 555, 44];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(tips);
console.log(total);
*/
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + 'nameKey']);
// console.log(jonas['last' + 'nameKey']);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
}  else {
  console.log('Wrong request! Choooose');
}

// add object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonaschmedtman';
console.log(jonas);

console.log(jonas.friends[0]);
console.log(jonas.friends.length);
*/
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function() {
    return 2037 - this.birthYear;
  }
};

console.log(jonas.calcAge(1991));
*/


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const Mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

const John = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

Mark.calcBMI()
John.calcBMI()

console.log(Mark.bmi)
if (Mark.calcBMI() > John.calcBMI()) {
  console.log(`${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.bmi}) is higher than ${John.firstName} ${John.lastName}'s (${John.bmi})!`)
} else {
  console.log(`John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!`)
}
console.log(`${Mark.firstName} is ${Mark.calcBMI()}`)
*//*
for(let rep = 1; rep <= 10; rep++) {
  console.log(`go to ${rep}`)
}*/
/*
const jonas = [
  'Jonas',
  'Schedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]

const jonasArray = {
  firstName: 'Jonas',
  lastName: 'Schedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function() {
    return 2037 - this.birthYear;
  }
};
const types = [];
for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
  // continue is skip
  if(typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  // break is stop(end)
  if(typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const jonas = [
  'Jonas',
  'Schedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
]

// 0, 1, ,,,, 4
// 4, 3, ,,,, 0
for(let i = jonas.length; i > 0; i-- ) {
  console.log(i, jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++){
    console.log(`--- repetition ${rep}`)
  }
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`)
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6 ) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const tips = [];
const totals = [];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function (bill) {
  return tips.push(bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
}

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
  totals.push(bills[i] + tips[i]);
}

console.log(tips)
console.log(totals)

function calcAverage(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
      sum = arr[i] + sum;
      sum += arr[i];
  }
  return console.log(sum / arr.length);
}
calcAverage(totals)