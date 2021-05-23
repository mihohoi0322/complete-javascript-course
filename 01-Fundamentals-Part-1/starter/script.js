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

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + " , a " + (year - birthYear) + " years old" + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName} , a ${year - birthYear} year old ${job} !`
console.log(jonasNew)



