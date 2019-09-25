var input= require('../Neha/utility/utility');
        
var access=require('readline-sync')

    
    var stake;
	var goal;
	var broke;
	
		var stake=access.question("Enter the initial money the Gambler have : ");
		
		var goal=access.question("Enter the Goal stake, Gambler want to achieve : ");
		
		
		var n=access.question("Enter the value of n : ");
	
    input.gambler(stake,goal,n);

    
		
            