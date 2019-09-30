var input= require('../Neha/utility/utility');
        
var access=require('readline-sync')

      
          var a;
          var b;	
	        	
	      	do
	        	{
	        	console.log("1.Start\n2.Stop");
	        	var ch=parseInt(access.question("Enter your choice"));
	            switch(ch)
	        	{
	        	case  1:
             a=	input.start();
            console.log(a);
	        		break;
	        	case 2:
             b= input.end();
              console.log(b);
	        		
	        	default:input.elapsedTime(a,b);
                    
	        		break;
	            }
	        	
	        	}while(ch>=1 && ch<=2);
	        	
            
   

          