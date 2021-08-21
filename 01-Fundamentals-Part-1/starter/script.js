/*
let collect = 'amazing';
if (collect === 'amazing') alert("JavaScript is FUN!");

console.log('Jonas');

// typeof は型の結果が返される
console.log(typeof 23);
console.log(null);


// Operator
const firstName = 'Miho';
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2019;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(firstName + ' ' + firstName);

let x = 10 + 5;
x += 10; // x = 15 + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
console.log(x);

// Comparision operators
console.log(ageJonas > ageSara); // true or false, > < >= <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;
console.log(isFullAge);

let x, y;
x = y = 35 - 20 + 4; //  x = y = 19
console.log(x, y);
*/

// Coding Challenge 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
  BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
  1. StoreMark'sandJohn'smassandheightinvariables
  2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
  3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
  Test data:
  § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


var MarkWeight = 78;
var Markheight = 1.69;
var JohnWeight = 95;
var Johnheight = 1.95;

var MarkBMI = MarkWeight / (Markheight * Markheight)
var JohnBMI = JohnWeight / (Johnheight * Johnheight)

console.log(MarkBMI)
console.log(JohnBMI);

let markHigherBMI =  MarkBMI > JohnBMI;
console.log(markHigherBMI, MarkBMI, JohnBMI);

*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + " , a " + (year - birthYear) + " years old" + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName} , a ${year - birthYear} year old ${job} !`
console.log(jonasNew)

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license")
} else {
  console.log("No")
}

const birthYear = 1991;

*/
/*
const massJohn = 78;
const heightJohn = 1.69;
const massMarks = 92;
const heightMarks = 1.8;

const BMIJohn = massJohn / heightJohn ** 2;
const BMIMarks = massMarks / heightMarks ** 2;

if (BMIJohn > BMIMarks) {
  console.log(`John BMI is (${BMIJohn}) is higher than Marks's (${BMIMarks})`)
} else {
  console.log(`John BMI is (${BMIJohn}) is higher than Marks's (${BMIMarks})`)
}
*/


// 5 falsy values: 0, "", undefined, null, Nan
/*
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision) // true & true

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive) {
  console.log("Sarah is albe to drive")
} else {
  console.log("Someone else should drive....")
}
*/

/*

const minimum = 100
const Dolphins1 = 96;
const Dolphins2 = 108;
const Dolphins3 = 89;

const Koalas1 = 88;
const Koalas2 = 91;
const Koalas3 = 110;

const avgDolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3;
const avgKoalas = (Koalas1 + Koalas2 + Koalas3) / 3;

if(avgDolphins > avgKoalas){
  console.log(`winner: Dolphins, ${avgDolphins}`)
} else if(avgDolphins < avgKoalas){
  console.log(`winner: Koalas, ${avgKoalas}`)
} else if(avgDolphins === avgKoalas){
  console.log("OK")
}

// BONUS1:
const bo1Dolphins = (97 + 112 + 101) / 3;
const bo1Koalas = (109 + 95 + 123) / 3;
console.log(bo1Dolphins, bo1Koalas);

if (bo1Dolphins > bo1Koalas && bo1Dolphins >= 100) {
  console.log("Winner: Dolphonis");
} else if (bo1Koalas > bo1Dolphins && bo1Koalas >= 100) {
  console.log("Winner: Koalas");
} 

// BONUS2:
const bo2Dolphins = (97 + 112 + 101) / 3;
const bo2Koalas = (109 + 95 + 106) / 3;
console.log(bo2Dolphins, bo1Koalas);

if (bo2Dolphins > bo2Koalas && bo2Dolphins >= 100) {
  console.log("Winner: Dolphonis");
} else if (bo2Koalas > bo2Dolphins && bo2Koalas >= 100) {
  console.log("Winner: Koalas");
} else if (bo2Dolphins === bo2Koalas && bo2Dolphins >= 100) {
  console.log("Safe")
} else (
  console.log("Bye")
)
*/
/*
const day = 'wednesday';

switch(day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record  videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weedkend :D');
    break;
}
*/
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷'):
console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

let drink2;
if(age >= 18) {
  drink2 == 'wine';
} else {
  drink2 == 'water';
}
console.log(drink2)
*/

////////////////////////////////////////////
// Coding Challenge #4

const bill = 275;
let tip
bill >= 50 && bill <= 300 ? tip = bill * 0.15: tip = bill * 0.2;
console.log(`The bill was ${bill}. the tip was ${tip}. and the total value ${bill + tip}`);