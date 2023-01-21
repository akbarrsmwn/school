// let binatangMamalia = ['sapi', , 'kambing', 'unta', 'paus']

// console.log(binatangMamalia)
// binatangMamalia.push("hiu")
// console.log(binatangMamalia)

// const bilanganBulat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(bilanganBulat.length);
const binatangMamalia = ["sapi", "kuda", "kambing", "unta", "paus"];
// console.log(binatangMamalia.length)
// const santriKelasRPL = ["naufal", "hilmi", "reza", "bayu", "iqbal"];
// console.log(santriKelasRPL.length)
const array = [1, true, "harimau", "domba", 2, false];
// console.log(array.length);
const binatang = binatangMamalia.concat(array);
console.log(binatang);
//array 2 dimensi
// const array2d = [
//   ["sapi", 1],
//   ["element 2", 2],
// ];
// console.log(array2d[0][0]);
// console.log(array2d[0][1]);
// console.log(array2d[1][0]);
// console.log(array2d[1][1]);

// const contohArray2d = [
//   ["sedang", "belajar", "javascript"],
//   ["Selamat", "Pagi", "Dunia"],
//   [1, 2, 3, 4, 5],
// ];

// var hewan = ['ayam', 'bebek', 'angsa'];
// var hewanBuas = ['Singa']
// console.log(hewan.concat(hewanBuas)) // concat menggabung 2 array yg terpisah

const nama = ["fajri", "nadzmi", "aziz"];
console.log(nama.join()); // method join

nama.pop(); // menghapus index dr blkg
nama.unshift("awal"); // tambah index diawal
nama.shift(); // hapus element di awal

