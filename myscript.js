function show_topic() {
var x = document.getElementById("demo");
var my_name = prompt("Enter your name");
x.style.fontSize = "25px";
x.style.color = "red";
document.getElementById("demo").innerHTML = "My name is " + my_name;
}
