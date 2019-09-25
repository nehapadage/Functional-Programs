
var input= require('../Neha/utility/utility');
        
var access=require('readline-sync')


               var m=access.question("Enter the no of rows: ");
                var n=access.question("Enter the no of cols : ");
              
               
              
              
        function displayArray(board)
            {
            for (var i = 0; i < board.length; i++) {
                console.log(board[i]);
            }
        }
        
      var  gameBoard = input.TwoDArray(m,n);
        displayArray(gameBoard);


            