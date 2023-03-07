//cara menyeleksi element
// const judul = document.getElementsByTagName("h1")[0]; // h1 hanya punya 1 attribute id
// const a = document.querySelector("section#a a");
// a.removeAttribute("section#a a");
// judul.setAttribute("name", "akbar"); // atribute bertambah

document.getElementById("btn-set").addEventListener("click", function () {
  document.getElementById("b").setAttribute("class", "red");
});

document.getElementById("btn-remove").addEventListener("click", function () {
  document.getElementById("b").removeAttribute("class");
});

document.getElementById("btn-get").addEventListener("click", function () {
  var value = document.getElementById("b").getAttribute("class");
  document.getElementById("class").innerHTML = value;
});

// const p2 = document.querySelector('.p2')
