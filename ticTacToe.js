// wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", function() {
  // all code goes here

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var count = 0;


box1.addEventListener("click", function(event) {

	if ( (box1.style.backgroundColor === "red") || (box1.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box1.style.backgroundColor = "red";
	box1.innerText = "X";
	}
	else {
	box1.style.backgroundColor = "blue";
	box1.innerText = "O";
	
	}
	count++;
	}
	

	});

box2.addEventListener("click", function(event) {

	if ( (box2.style.backgroundColor === "red") || (box2.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box2.style.backgroundColor = "red";
	box2.innerText = "X";
	}
	else {
	box2.style.backgroundColor = "blue";
	box2.innerText = "O";
	
	}
	count++;
	}
	

	});
box3.addEventListener("click", function(event) {

	if ( (box3.style.backgroundColor === "red") || (box3.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box3.style.backgroundColor = "red";
	box3.innerText = "X";
	}
	else {
	box3.style.backgroundColor = "blue";
	box3.innerText = "O";
	
	}
	count++;
	}
	

	});
box4.addEventListener("click", function(event) {

	if ( (box4.style.backgroundColor === "red") || (box4.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box4.style.backgroundColor = "red";
	box4.innerText = "X";
	}
	else {
	box4.style.backgroundColor = "blue";
	box4.innerText = "O";
	
	}
	count++;
	}
	

	});
box5.addEventListener("click", function(event) {

	if ( (box5.style.backgroundColor === "red") || (box5.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box5.style.backgroundColor = "red";
	box5.innerText = "X";
	}
	else {
	box5.style.backgroundColor = "blue";
	box5.innerText = "O";
	
	}
	count++;
	}
	

	});
box6.addEventListener("click", function(event) {

	if ( (box6.style.backgroundColor === "red") || (box6.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box6.style.backgroundColor = "red";
	box6.innerText = "X";
	}
	else {
	box6.style.backgroundColor = "blue";
	box6.innerText = "O";
	
	}
	count++;
	}
	

	});
box7.addEventListener("click", function(event) {

	if ( (box7.style.backgroundColor === "red") || (box7.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box7.style.backgroundColor = "red";
	box7.innerText = "X";
	}
	else {
	box7.style.backgroundColor = "blue";
	box7.innerText = "O";
	
	}
	count++;
	}
	

	});

box8.addEventListener("click", function(event) {

	if ( (box8.style.backgroundColor === "red") || (box8.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box8.style.backgroundColor = "red";
	box8.innerText = "X";
	}
	else {
	box8.style.backgroundColor = "blue";
	box8.innerText = "O";
	
	}
	count++;
	}
	

	});

box9.addEventListener("click", function(event) {

	if ( (box9.style.backgroundColor === "red") || (box9.style.backgroundColor === "blue") ){
			alert("square already played");
	}
	else{
	if (count % 2 === 0 ){	
	box9.style.backgroundColor = "red";
	box9.innerText = "X";
	}
	else {
	box9.style.backgroundColor = "blue";
	box9.innerText = "O";
	
	}
	count++;
	}
	

	});

var newgame = document.querySelector("#newgame");

newgame.addEventListener("click", function(event) {
	box1.style.backgroundColor = "white";
	box2.style.backgroundColor = "white";
	box3.style.backgroundColor = "white";
	box4.style.backgroundColor = "white";
	box5.style.backgroundColor = "white";
	box6.style.backgroundColor = "white";
	box7.style.backgroundColor = "white";
	box8.style.backgroundColor = "white";
	box9.style.backgroundColor = "white";

	box1.innerText = "";
	box2.innerText = "";
	box3.innerText = "";
	box4.innerText = "";
	box5.innerText = "";
	box6.innerText = "";
	box7.innerText = "";
	box8.innerText = "";
	box9.innerText = "";
});



});