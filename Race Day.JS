let raceNumber = Math.floor(Math.random() * 1000);
let regEarly=false;
const age=19;
if(age>18 && regEarly)
raceNumber+=1000;
if(age>18 && regEarly)
  console.log(`Race starts at 9:30 am for racenumber ${raceNumber}`);
else if(age>18 && !regEarly)
   console.log(`Race starts at 11:00 am for racenumber ${raceNumber}`);
else if(age<18)
   console.log(`Race starts at 12:30 pm for racenumber ${raceNumber}`);
else
  console.log('see the registration desk');
