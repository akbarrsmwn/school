console.log(document.title);

const judul = (document.title = "akbar");
console.log(judul);
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

const newText = document.createElement("h1");
newText.textContent = "Muncul !! ";
newText.style.color = "aqua";

const newText1 = document.createElement("h1");
newText1.textContent = "Mouse In";

const newText2 = document.createElement("h1");
newText2.textContent = "Mouse Out";

btn1.style.border = "none";
btn1.style.padding = "10px";
btn1.style.fontSize = "40px";
btn1.style.background = "tomato";

btn2.style.fontSize = "25px";

function klik1() {
  body.append(newText);
  btn1.style.background = "aqua";
}
function klickdbl() {
  alert("diklick double");
}
function mouseIn() {
  body.append(newText1);
  newText1.textContent = 'mouse in'
  newText1.style.color='blue'
}
function mouseOut() {
  // body.append(newText2)
  newText1.textContent = 'mouse out'
  newText1.style.color='red'
}
