var pickedNumber='0';

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

var buttonClick = function(click_id)
{
	if(pickedNumber=='clear')
	{
		document.getElementById(click_id).innerText='';
		grid[parseInt(click_id[1])][parseInt(click_id[2])]=0;
	}
	else if(pickedNumber!='0')
	{
		document.getElementById(click_id).innerText=pickedNumber;
		grid[parseInt(click_id[1])][parseInt(click_id[2])]=parseInt(pickedNumber);
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

var submit = function()
{
	console.log("submit");
}