//objek literal
// let siswa1 = {
//     nama: 'naufal',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

// let siswa2 = {
//     nama: 'abi',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

//Function Declaration
// function Siswa(nama, energi) {
//     let siswa = {};
//     siswa.nama = nama;
//     siswa.energi = energi;

//     siswa.makan = function(porsi) {
//         this.energi += porsi;
//         return console.log(` halo  ${this.nama}, selamat makan!`);

//     }
//     siswa.main = function(jam) {
//       this.energi -= jam* ;
//       return console.log(` halo  ${this.nama}, staminamu berkurang setelah bermain`);

//   }
//     return siswa;
// }

// let nabil = Siswa('nabil', 30)
// let sugih = Siswa(' Sugih', 25)

//Function Declaration

const methodSiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    return console.log(` halo  ${this.nama}, selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam * 2;
    return console.log(` halo  ${this.nama}, staminamu berkurang setelah bermain`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    return console.log(` halo  ${this.nama}, staminamu akan bertambah selamat tidur`);
  },
};

function Siswa(nama, energi) {
  let siswa = Object.create(methodSiswa);
  siswa.nama = nama;
  siswa.energi = energi;

  return siswa;
}

let nabil = Siswa("nabil", 30);
let sugih = Siswa(" Sugih", 25);

//Constructor Function
// Keyword new
//   function Siswa(nama, energi) {
// let siswa = {};
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(` halo  ${this.nama}, selamat makan!`);
//     }
// return siswa;
// }

// let nabil = new Siswa('nabil', 30)
// let sugih =new Siswa(' Sugih', 25)

// factory function

function SiswaMq(nama, energi) {
  return {
    nama,
    energi,
    makan(porsi) {
      this.energi += porsi;
      console.log("halo namaku " + this.nama + " Energi Total " + this.energi);
    },
  };
}
let mulya = SiswaMq("mulya", 15);
