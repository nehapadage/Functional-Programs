var access=require('readline-sync')
module.exports={
   


    LeapYear(year)
    {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    },

    
    PowerOf2(n,power,a)
    {
		for(var i=0;i<n;i++)
		{
            power=power*a;
        }
		console.log(n+"th power of 2 is "+power );
    },


  

coin(nflip)
        {
        var tcount=0,hcount=0;
        for(var i=0;i<nflip;i++)
        {
		var val=Math.random();
			if(val<0.5)
			{
				tcount=tcount+1;
			}
			else
			{
				hcount=hcount+1;
            }
        }
		
		var tper=(tcount*100)/nflip;
		var hper=(hcount*100)/nflip;
		
		console.log("Percentage of Heads : "+hper);
        console.log("Percentage of Tails : "+tper);
    },

    username(name)
{
    var str="Hello <<username>>, How are you?";
    var result=str.replace("<<username>>",name);
    console.log(result);
},


harmonic(n)
{
    var result=0;
for(var i=1;i<=n;i++)
{
    
    result=result+(1/i);

}
console.log(n+"th harmonic value is "+result);
},

Euclidean()
{
    var x=process.argv[2];
var y=process.argv[3];
var distance=Math.sqrt(x*x+y*y);

console.log("Euclidean distance is :"+distance);
},

gambler(stake,goal,n)
    {
        var wcount=0,lcount=0,n_bets=0,broke=0;
		
	var cash=stake;
		
			for(var i=0;i<n;i++)
			{
                while(cash<goal && cash>broke) 
                {
                
            	    n_bets++;
                    var random_val=Math.random();
                    console.log(random_val);
				    if(random_val<0.5)
				    {
					    cash++;
					}
				    else
				    {
					    cash--;
				    }
                }
                
            }    
                if (cash === goal)
                {
                    wcount++; 
                } 
              
		console.log("No of times the Gambler wins is : "+wcount+" out of "+n);
        console.log("No of times the Gambler loose is : "+lcount+" out of "+n);

        console.log("Percentage of wins"+(wcount/n)*100);
        console.log("Percentage of loose"+(lcount/n)*100);
    },


    Sum3To0(n,arr,count)
{
    for(var i=0;i<n-2;i++)
{
    for(var j=i+1;j<n-1;j++)
    {
        for(var k=j+1;k<n;k++)
        { 
            if(arr[i]+arr[j]+arr[k]==0)
            {
                count++;
               console.log("Triplet is "+arr[i]+","+arr[j]+","+arr[k]);
            }
        }	
    }
}
console.log("Total no of triplets is : "+count);
},

        Quadratic(a,b,c)
         {
            var rootx1 = 0;
            var rootx2 = 0;
            console.log("The entered expression is : " + a + "x*x+" + b + "x+" + c);
            var delta = b * b - 4 * a * c;

            if (delta > 0)
            {
                rootx1 = (-b + Math.sqrt(delta)) / (2 * a);
                rootx2 = (-b - Math.sqrt(delta)) / (2 * a);
            }
            console.log("Two roots of x are : " + rootx1 + " & " + rootx2);

     
         },



         TwoDArray(width, height)
         {
              board = [];
              row = [];
              for (var i = 0; i < width; i++) 
              {
                  for (var j = 0; j < height; j++)
                  {
                      var val=access.questionInt("Enter Integer value");
                      row.push(val);
                  }
                  board.push(row);
                  row =[];
              }
              return (board);
          },     
         
       // StopWatch program  
           start() 
          {
             var time=new Date();
            return time.getSeconds();
          },

        end() 
        {
            var time=new Date();
           return time.getSeconds();
        },
      
        elapsedTime(a,b)  
        {
            console.log("Elapsed time is :"+(b-a));
	    },
 



} 
    
       