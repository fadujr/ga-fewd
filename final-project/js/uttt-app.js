/* To play Tic-Tac-Toe, the goal of the game is to be the first
	to achieve three symbols in a row, either horizontally,
	diagonally, or vertically. Two players alternate placing their
	symbol in one of the 9 boxes. If all boxes fill without 3 in a row
	achieved, the game ends in a draw. 
*/

	var isFilled = false;
	var turn = 0;
	var turnCounter = 0;
	var XMoves = [];
	var OMoves = [];
	var victoryCombos = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], 
						[2, 4, 6], [2, 5, 8],[3, 4, 5], [6, 7, 8]];

	var isX = function(){
		if (turn/2 === 0)
			 return true;
		else
			return false;
	};

	/* To check for victory, traverse each symbol's array of moves
	and see if a set of 3 moves matches a victory combo. If one does,
	end the game with a victory. If not and less than 10 moves occurred, continue.
	*/

	var victoryCheck = function(){
			if (turnCounter < 10)
			{
				/*var numForWinCombo = 0;
				$.each(victoryCombos, function(vcIndex, winCombo){
   				 	$.each(winCombo, function(index, value){
   				 		
		    			if($.inArray(value, XMoves) !== -1) 
		    			{
		        			console.log(value);
		        			numForWinCombo = numForWinCombo + 1;
		   				}
		   				if (numForWinCombo === 3)
		   				{
		   					alert("Game Over! Player One wins!");
		   				}
	   				});	
   				});
				*/

				var XWinCombo = _.find(XMoves, _.intersection(XMoves, victoryCombos) !== null);

				if (XWinCombo !== undefined)
					alert("Game Over! Player One wins!");

				/*
   				$.each(victoryCombos, function(vcIndex, winCombo){
   				 	$.each(winCombo, function(index, value){
   				 		
		    			if($.inArray(value, OMoves) !== -1) 
		    			{
		        			console.log(value);
		        			numForWinCombo = numForWinCombo + 1;
		   				}
		   				if (numForWinCombo === 3)
		   				{
		   					alert("Game Over! Player Two wins!");
		   				}
	   				});	
				});*/

				var OWinCombo = _.find(OMoves, _.intersection(OMoves, victoryCombos) !== null);

				if (OWinCombo !== undefined)
					alert("Game Over! Player Two wins!");
			}
	};

	var staleMate = function(){
		if (turnCounter === 10)
			alert("Game Over! It's a draw!");
	};

	var fillBox = function(){
		$(".main-topleft").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(0);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(0);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-topmid").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(1);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(1);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-topright").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(2);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(2);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-midleft").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(3);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(3);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-midmid").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(4);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(4);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-midright").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(5);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(5);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-botleft").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(6);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(6);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-botmid").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(7);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(7);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});

		$(".main-botright").on("click", function(){
			if (isFilled === false)
			{
				isFilled = true;

				if (isX() === true) 
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					XMoves.push(8);
					victoryCheck();
					staleMate();
					 $(".sub-botright").text("X");
				}
				else
				{
					turn = turn + 1;
					turnCounter = turnCounter + 1;
					console.log(turnCounter);
					OMoves.push(8);
					victoryCheck();
					staleMate();
					 $(".sub-botmid").text("O");
				}
			}
		});
	};

$(".play").on("click", function(){
	window.onload = fillBox();
});

$(".home").on("click", function(){
	window.location.href = "file:///Users/swingy33/Desktop/ga-fewd/final-project/homepage/home-page.html";
	 return false;
});

$(".restart").on("click", function(){
	$(".board h1").text("");
	XMoves = [];
	OMoves = [];
	turn = 0; 
	turnCounter = 0;
});
