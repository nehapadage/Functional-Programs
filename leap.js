var input= require('../Neha/utility/utility');

var access=require('readline-sync')
let leap=access.question("Enter Year = ");

var r=input.LeapYear(leap);
if(r==true)
{
    console.log(leap+" is Leap Year");
}
else{
    console.log(leap+" is not Leap Year");
}


