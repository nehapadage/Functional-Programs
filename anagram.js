var input= require('../Neha/utility/utility');

var access=require('readline-sync')
let str1=access.question("Enter First String= ");
var s1=str1.split('');
let str2=access.question("Enter Second String= ");
var s2=str2.split('');
input.anagram(s1,s2);



anagram(s1,s2)
{
var n1=s1.length;
var n2=s2.length;
var flag=false;
    if(n1==n2)
    {
    s1.sort();
    s2.sort();
      for(var i=0;i<n1;i++)
      {
        if(s1[i]==s2[i]) 
        {
        flag=true;
        }
      }
    }
    else
    {
    flag=false;
    }

if(flag==true)
{
console.log("Strings are anagram.");
}
else
{
console.log("Strings are not anagram.");
}
}

