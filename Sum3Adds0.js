var input= require('../Neha/utility/utility');
        
var access=require('readline-sync')


var arr=[];
var count=0;
arr=access.question("Enter the numbers : ");

console.log("Entered Array is : "+arr);
var n=arr.length;
console.log(n);
console.log(arr[1]);
for(var i=0;i<n-2;i++)
{
    for(var j=i+1;j<n-1;j++)
    {
        for(var k=j+1;k<n;k++)
        {
            if((arr[i]+arr[j]+arr[k])===0)
            {
                count++;
               console.log("Triplet is ("+arr[i]+","+arr[j]+","+arr[k]+")");
            }
        }	
    }
}
console.log("Total no of triplets is : "+count);
