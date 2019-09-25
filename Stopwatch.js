var input= require('../Neha/utility/utility');
        
var access=require('readline-sync')


/*

        function start1() 
         {
            var sw = new Stopwatch();
            sw.start1();
	    }

	    
       function stop1() 
        {
            var sw = new Stopwatch();
            sw.Stop();
	    }

	    
        function elapsedTime()  
        {
            var sw = new Stopwatch();
            console.log("ElapsedTime is : " + sw.ElapsedMilliseconds);
	    }
	        
            
	*/        	
	        	
	        	
	    /*    	do
	        	{
	        	console.log("1.Start\n2.Stop");
	        	var ch=access.question("Enter your choice")

	            switch(ch)
	        	{
	        	case  1:
	        		start();
	        		break;
	        	case 2:
	        		end();
	        		break;
	        	default:
                    
	        		break;
	            }
	        	
	        	}while(ch>=1 && ch<=2);
	        	
            */


           /*     var startTime, endTime;

function start() 
{
  startTime = new Date();

};

function end() 
{
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

start();



end();
*/

var a=new Date();
console.log(a.getTime());