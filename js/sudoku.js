var pickedNumber='0';
var checker=0;

var grid = [
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0]
];

var print = function()
{
	for(var i=0;i<9;i++)
	{
		s="";"<br>"
		for(var j=0;j<9;j++)
		{
			s = s + String(grid[i][j]) + " ";
		}
		console.log(s);
	}
}

var buttonClick = function(click_id)
{
	if(pickedNumber=='clear')
	{
		document.getElementById(click_id).innerText='';
		grid[parseInt(click_id[1])][parseInt(click_id[2])]=0;
		document.getElementById(click_id).className='button';
	}
	else if(pickedNumber!='0')
	{
		document.getElementById(click_id).innerText=pickedNumber;
		grid[parseInt(click_id[1])][parseInt(click_id[2])]=parseInt(pickedNumber);
		document.getElementById(click_id).className='button bold';
	}
}

var numberPick = function(click_id)
{
	pickedNumber=click_id;
	document.getElementById('1').className ='numberButton';
	document.getElementById('2').className ='numberButton';
	document.getElementById('3').className ='numberButton';
	document.getElementById('4').className ='numberButton';
	document.getElementById('5').className ='numberButton';
	document.getElementById('6').className ='numberButton';
	document.getElementById('7').className ='numberButton';
	document.getElementById('8').className ='numberButton';
	document.getElementById('9').className ='numberButton';
	document.getElementById('clear').className ='numberButton';

	document.getElementById(click_id).className ='numberButton picked';
}

var UsedInCol = function(col,num)
{
	/* Returns a boolean which indicates whether any assigned entry
   in the specified column matches the given number. */
   for (var row = 0; row < 9; row++)
        if (grid[row][col] == num)
            return true;
    return false;
}

var UsedInRow = function(row,num)
{
	/* Returns a boolean which indicates whether any assigned entry
   in the specified row matches the given number. */
   for (var col = 0; col < 9; col++)
        if (grid[row][col] == num)
            return true;
    return false;
}

var UsedInBox = function(boxStartRow,boxStartCol,num)
{
	/* Returns a boolean which indicates whether any assigned entry
   within the specified 3x3 box matches the given number. */

   for (var row = 0; row < 3; row++)
        for (var col = 0; col < 3; col++)
            if (grid[row+boxStartRow][col+boxStartCol] == num)
                return true;
    return false;	
}

var IsSafe = function(row,col,num)
{
	/* Check if 'num' is not already placed in current row,
       current column and current 3x3 box */
    return (!UsedInRow(row, num) &&
           !UsedInCol(col, num) &&
           !UsedInBox(row - row%3,col - col%3,num) );
}

var CheckGrid = function()
{
	checker=1;
	for(var i=0;i<9;i++)
	{
		for(var j=0;j<9;j++)
		{
			if(grid[i][j]!=0)
			{
				var number = grid[i][j];
				grid[i][j]=0;

				if(IsSafe(i,j,number))
				{
					grid[i][j]=number;
				}
				else
				{
					grid[i][j]=number;
					checker=0;
					document.getElementById('g'+String(i)+String(j)).className ='button red';
				}
			}
		}
	}
}

var SolveSudoku = function()
{
	/* Takes a partially filled-in grid and attempts to assign values to
  all unassigned locations in such a way to meet the requirements
  for Sudoku solution (non-duplication across rows, columns, and boxes) */

  	var row=0,col=0,unassFound=0;
	fors :
	{
	    for (row = 0; row < 9; row++)
	    {
	        for (col = 0; col < 9; col++)
	        {
	            if (grid[row][col] == 0)
		            {
		            	unassFound=1;
		            	break fors;
		            }
	        }
	    }
	}

	if(unassFound==0)
	{
		return true;
	}

    for (var num = 1; num <= 9; num++)
    {
        // if looks promising
        if (IsSafe(row, col, num))
        {
            // make tentative assignment
            grid[row][col] = num;

            // return, if success, yay!
            if (SolveSudoku())
                return true;

            // failure, unmake & try again
            grid[row][col] = 0;
        }
    }
    return false;
}

var PrintGrid = function()
{
	for(var i=0;i<9;i++)
	{
		for(var j=0;j<9;j++)
		{
			document.getElementById('g'+String(i)+String(j)).innerText=String(grid[i][j]);
		}
	}
}

var submit = function()
{
	document.getElementById("label").innerText='';
	CheckGrid();

	if(checker==1)
	{
		if(SolveSudoku())
		{
			PrintGrid();

			for(var i=0;i<9;i++)
			{
				for(var j=0;j<9;j++)
				{
					if(document.getElementById('g'+String(i)+String(j)).className=='button red')
					document.getElementById('g'+String(i)+String(j)).className ='button bold';
				}
			}
		}
		else
		{
			document.getElementById("label").innerText='NO SOLUTION';
		}
	}

	else
	{
		document.getElementById("label").innerText='INVALID SUDOKU';
	}
}

var clearAll = function()
{
	document.getElementById("label").innerText='';

	for(var i=0;i<9;i++)
	{
		for(var j=0;j<9;j++)
		{
			document.getElementById('g'+String(i)+String(j)).className ='button';
			document.getElementById('g'+String(i)+String(j)).innerText="";
			grid[i][j]=0;
		}
	}
	pickedNumber='0';
	document.getElementById('1').className ='numberButton';
	document.getElementById('2').className ='numberButton';
	document.getElementById('3').className ='numberButton';
	document.getElementById('4').className ='numberButton';
	document.getElementById('5').className ='numberButton';
	document.getElementById('6').className ='numberButton';
	document.getElementById('7').className ='numberButton';
	document.getElementById('8').className ='numberButton';
	document.getElementById('9').className ='numberButton';
	document.getElementById('clear').className ='numberButton';
}