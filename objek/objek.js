// var orang = {
//     nama: "fajar",
//     umur: "25",
//     pekerjaan: "programmer",
//     alamat: "jonggol"

// }
// delete orang.pekerjaan
// orang.sekolah = 'SMK MQ'
// console.log(orang)

// let orang = new Object(); // function object

// orang.nama = 'sarah';
// orang.umur = 24;
// orang.pekerjaan = 'programmer';

//buat method perkenalanDiri yang mengembalikan kalimat perkenalan.(19)
// const user = {
//     nama: "Stefan",
//     umur: 21,
//     makananFavorit: "Pizza",
//     perkenalanDiri: function() {
//         return `Nama saya ${user.nama}. Saya berumur ${user.umur}. Saya suka ${user.makananFavorit}`;
//     }
// };
// console.log(user.perkenalanDiri())

// let angka = [1, 46, 75, 12, 89, 54, 101];

// let ganjil = [];

// for (let x of angka) {

//     if (angka[x] % 2 == 1) {

//         ganjil.push(angka[x])
//     }

// }

// console.log(ganjil)

//dea afrizal sesi 10 smtr 1 cuy university

const siswa = [
  {
    nama: "azis",
    umur: 15,
    hoby: "bola",
    nilaiJs: 88.8,
  },
  {
    nama: "ahmad",
    umur: 12,
    hoby: "voli",
    nilaiJs: 90,
  },
  {
    nama: "adi",
    umur: 13,
    hoby: "futsal",
    nilaiJs: 100,
  },
];

function getDetailData() {
  // panggil di console this function
  siswa.map(function (result) {
    console.table(result);
  });

  //   siswa.forEach(result => {
  //     console.log(result)
  //    })
}
