// let angka = [1, 46, 75, 12, 89, 54, 101]; //  nomor 34
// let genap = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] % 2 == 0) {
//         genap.push(angka[i])
//     }
//     console.log(genap)
// }

// nested if

var beli = 10;

if (beli >= 20) {
  if (beli >= 50) {
    if (beli >= 100) {
      console.log("Free Ongkir");
    } else {
      console.log("Diskon 50%");
    }
  } else {
    console.log("Diskon 20%");
  }
} else {
  console.log("Terimakasih sudah beli :)");
}

var jumlahBarang = 501;
var total;

if (jumlahBarang > 500) {
  total = jumlahBarang * 100;
} else {
  total = jumlahBarang * 150;
}
console.log(total);
// total = jumlahBarang > 500 ? jumlahBarang * 100 : jumlahBarang * 150;

// for (var i = 1; i <= 5; i += 1) {
//   console.log("variable i yg ke " + i);
// }

//latihan soal
for (var i = 100; i >= 0; i -= 5) {
  console.log("i ke " + i + " * 5 = " + i * 5);
}
