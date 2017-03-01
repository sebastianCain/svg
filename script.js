var curX = 0;
var curY = 0;
var svg;

var setup = function() {
    svg = document.getElementById("svgg");
    svg.addEventListener("click", svgclicked);
};

var svgclicked = function(e) {
    console.log("clicked!");
    if (curX != 0 && curY != 0) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", curX);
	line.setAttribute("y1", curY);
	line.setAttribute("x2", e.offsetX);
	line.setAttribute("y2", e.offsetY);
	line.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2")
	svg.appendChild(line)
    }

    curX = e.offsetX;
    curY = e.offsetY;
    
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx", e.offsetX);
    circ.setAttribute("cy", e.offsetY);
    circ.setAttribute("fill", "red");
    circ.setAttribute("r", 20);
    svg.appendChild(circ);
};

var clear = function(e) {
    svg.innerHTML = "";
    curX = 0;
    curY = 0;
};

var clr = document.getElementById("clr");
clr.addEventListener("click", clear);

window.onload = setup;