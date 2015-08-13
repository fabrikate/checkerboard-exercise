// Your JS goes here

// create a board that is 9 wide and 7 tall
// Each tile should be a div
// Each tile's width is 11.1%
//set each tile's float property to left
//Each tile's padding Bottom is 11.1%


// create black square with a function
function createBlackSquare(div) {
	div.style.backgroundColor = 'black';
	div.style.width = '11.1%';
	div.style.float = 'left';
	div.style.paddingBottom = '11.1%';
}

// create red square
function createRedSquare(div) {
	div.style.backgroundColor = 'red';
	div.style.width = '11.1%';
	div.style.float = 'left';
	div.style.paddingBottom = '11.1%';
}

//get the body and append a square on it
var bodyEl = document.querySelectorAll('body');
bodyEl[0].setAttribute('id', 'startPoint');

var newDiv = document.createElement('div');
bodyEl[0].appendChild(newDiv);
newDiv.setAttribute('id', 'firstDiv');

// a table of 9 columns and 6 rows is 54 squares
//odd is black, red is even
function createDiv() {
	for(var i = 1; i < 55; i ++) {
		var divEl = document.createElement('div');
		newDiv.appendChild(divEl);

		if (i % 2 === 0) {
			createRedSquare(divEl);
		}
		if (i % 2 !== 0) {
			createBlackSquare(divEl);
		}
	}
}

createDiv();
