function tampilkanClick () {
    document.querySelector('p').innerHTML='judul di klik';
}
function tampilkanDblClick () {
    document.querySelector('p').innerHTML='judul di double klik';
}
function tampilkanClickh3 () {
    document.querySelector('h3').innerHTML='judul di klik kanan';
}

var h1node = document.getElementById('judul') ;
h1node.addEventListener("click", tampilkanClick);
h1node.addEventListener("dblclick", tampilkanDblClick);
h1node.addEventListener("contextmenu", tampilkanClickh3);