var input= require('../Neha/utility/utility');
        
var access=require('readline-sync')

var n=access.question("Enter no. of array elements");
var arr= new Array(n);
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(access.question("enter value:"));
}

var count=0;

console.log("Entered Array is : "+arr);

input.Sum3To0(n,arr,count);