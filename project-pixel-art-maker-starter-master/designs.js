// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid(rows, cols) {
	let grid=[]; 
	for (let i=0; i<rows; i++) {
		let gridCols=[];
		for (let f=0; f<cols; f++){
			gridCols.push("#fffff");
		}
		grid.push(gridCols);
	}

	return grid;
}


function drawGrid(grid, table) {
	table.innerHTML = '';
	for(let i=0; i < grid.length; i++) {
		let tr = document.createElement('tr');
		for (let f=0; f<grid[i].length; f++) {
			let td = document.createElement('td');
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}


// get the inputs
let heightInput = document.getElementById('inputHeight');
let widthInput = document.getElementById('inputWidth');
let form = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');
let clear = document.getElementById('clear');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	let height = heightInput.value;
	let width = widthInput.value;
	drawGrid(makeGrid(height, width), document.getElementById('pixelCanvas'));
})


let table = document.getElementById('pixelCanvas');
let mouseDown = false


table.addEventListener('mousedown', () => mouseDown = true)
table.addEventListener('mouseup', () => mouseDown = false)
table.addEventListener('mouseover', function(event) {
	if (!mouseDown) { return }
	let td = event.target;
	td.style.backgroundColor = color.value;
})
table.addEventListener('click', function(event) {
	if (mouseDown) {return}
  	let td = event.target;
  td.style.backgroundColor = color.value;
})

clear.addEventListener('click', () => {
	table.querySelectorAll('td').forEach((td) => {
		td.style.backgroundColor = '#fff';
	});
})