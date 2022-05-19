// function kerjakanTugas(mataPelajaran, kelas){
//     console.log(`Kerjakan Tugas ${mataPelajaran}...`);
//     kelas();
// }

// function kelas() {
//     alert(' XRPL Selesaikan Tugas !!');
// }


// kerjakanTugas('JavaScript', kelas);

// for ( let i = 0;i<10;i++){
//     console.log(i)
// }

// function ulangi(n){
//     for (let i = 0 ; i< n; i++){
//         console.log(i)
//     }
// }

// ulangi (10) ; 

// function ulangi(n, aksi) {
//     for (let i = 0;i<=n;i++){
//      aksi(i)
//     }
// }

// ulangi (10, console.log);
// ulangi (3, alert)

const angka = [1,2,3,4,5,6,7,8,9,10]

// mencari angka genap misal

// looping for 
// const angkaGenap = []
// for ( let i = 0; i<angka.length;i++){
//     if ( angka[i]%2==0){
//         angkaGenap.push(angka[i]);
//     }
// }
// console.log(angkaGenap);


// FILTER
// const newAngka = angka.filter(function(a){ //menggunakan function dan di callback
//  return a % 2==0 ;
// });
// console.log(newAngka)

const newAngka = angka.filter(a =>a % 2==0 );//menggunakan arrow notation
console.log(newAngka)

// map
// kali semua angka dengan 2

const newKaliDua = angka.map( a => a*2)
console.log(newKaliDua)

console.log(angka)

//reduce 
//contoh menjumlah seluruh element pada array

const jmlhElement = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 10)// nilai awal 0
// reduce berbeda memiliki 2 argumen akumulasi proses nya misal penjumlahan, current value nilai elementnya
console.log(jmlhElement)

// method chaining
// misal cari angka genap
// lalu kalikan 2
// terakhir jumlahkan

const hasil = angka.filter(a=>a%2==0) // 2,4,6,8,10
    .map(a=>a*2) // 4,8,12,16,20
    .reduce((acc,cur)=>acc+cur);    
    console.log(hasil);
    


