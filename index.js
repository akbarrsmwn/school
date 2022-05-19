// if (true) {
//     var varVariabel = 'this is true' // var bisa global scope
// }
// console.log(varVariabel)

// if (true) {
//     let letVariabel = 'this is true' // let itu local scope (didalam fungsi)
//     console.log(letVariabel) //<-- panggil didalam local

// }
// console.log(letVariabel)

// const penjumlahan = 10 + 5;
// console.log(penjumlahan);

// const modulus = penjumlahan % 4; // modulus habis dibagi
// console.log(modulus);

// const pangkat = modulus ** 3;
// console.log(pangkat);


// let a = 10;
// let b = 3;
// c = a * b;
// //d = a + c
// console.log("hasil perkailan a dan b adalah " + c)
//console.log("hasil penjumlahan a + c adalah " + d)

/* function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7)); */

/* var namadepan = "akbar" // string & number
var namabelakang = 7
console.log(namadepan + namabelakang) */

//console.log(1 <= 1) // perbandingan == === != !== <= >=

var makan = true //operator logika && || !
var minum = false
console.log(makan || minum)

// let namaSaya = "akbar"; // 1. variable  string
// const umurSaya = 25; // variable number


/* console.log("Javascript Hoisting");
console.log("--------------------");
masukrumah()

function masukrumah() {
    let manusia = {
        nama: "akbar", 
        habis: "main ?"
    }
    console.log(`Hai ${manusia.nama}, kamu dari pergi ${manusia.habis}`)
} */

//global scope

/* let manusia = {
    nama: "akbar",
    habis: "main ?"
}
const masukrumah = function() {
    console.log(`Hai ${manusia.nama}, apa kamu dari pergi ${manusia.habis}`)
}
masukrumah()
console.log(manusia) */

//local scope

/* const masukrumah = function() {
    let manusia = {
        nama: "akbar",
        habis: "main ?"
    }

    console.log(`Hai ${manusia.nama}, apa kamu dari pergi ${manusia.habis}`)
}
masukrumah() */

/* const namasaya = function() { //skilvul.11

    let namapanggil = {
        nama: "hai nama saya",
        nama1: "akbar"
    }
    console.log(`Hai ${namapanggil.nama}, ${namapanggil.nama1}`)
}
namasaya() */

// let carName = 'Kijang';

// function displayCarName() {
//     let carName = 'Honda';

//     return 'Mobil ini bermerk ' + carName;
// }

//console.log(displayCarName()) 

// let manusia = { // 18. menambah objek nilai false
//   kepala: true,
//   badan: true,
//   tangan: true
// };
// manusia.ekor = (false)
// console.log(manusia)

// function luasPersegi (s) // mengembalikan luas [persegi dg parameter s]
// {
//   return s = 5*5
// }

// console.log(luasPersegi) 

// Fungsi yang berdiri sendiri
// function sapa() {
//     return "Selamat Pagi!";
//   }

//   console.log(sapa()); // Output: Selamat Pagi!

//   // Fungsi disimpan di dalam variabel

//   let berkenalan = function() {
//     return "Hallo, nama saya Sarah.";
//   };

//   console.log(berkenalan()); // Output: Hallo, nama saya Sarah.

// let foo = { unique_prop: 1 },
//     bar = { unique_prop: 2 },
//     object = {};
// object[foo] = 'value'
// console.log(object[bar])
// Tulis kode kalian di bawah ini