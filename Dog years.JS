// creating a var myage and assigning its value
const myAge=10;
// creating a var earlyYears and assigning its value
let earlyYears=2;
earlyYears*=10.5;
let laterYears=myAge-2;
// setting the value of myAge to laterYears
//let laterYears=myAge;
// to calc no of dog years by laterYears
laterYears*=4;
console.log(earlyYears, laterYears);
// to check my age in dog years
let myAgeInDogYears=earlyYears+laterYears;
// to make a string and use lowercase method and save it in a var myname
let myName='Sneha'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
