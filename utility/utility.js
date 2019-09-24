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
    }

} 
    
       