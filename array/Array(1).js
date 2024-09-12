// const murid1 = [1, 'akbar']
// const murid2 = [3]
// console.log(murid1)
// console.log(murid2)
// const murid = [...murid1, 2, ...murid2]
// console.log(murid)
// console.log(murid1.concat(murid2))







//array memiliki indek(dimulai dari 0) & length
// const buah = new Array('Mangga', 'Apel', 'Jeruk');
// const hargaBuah = new Array("20000", 30000, 15000); // Tipe data di array boleh berbeda
// console.log(buah)
// console.log(hargaBuah)

// let hewan = ['ayam', 'bebek', 'angsa'];
//console.log(hewan[hewan.length - 1])// panjang terakhir
//hewan[0] = 'telur'    //index dimulai dari 0
//hewan.pop()           // pop menghapus nilai element terakhir
// hewan.shift()        // shift menghapus nilai element pertama
// hewan.unshift('itik') // unshift menambah nilai element pertama( diposisi awal)
// hewan.push('kuda')      // menambah element array di posisi akhir

//console.log(hewan.toString())   // merubah tipe data
//console.log(hewan.join(" "))  // tipe string menambah spasi
// console.log(hewan)

// var hewan = ['ayam', 'bebek', 'angsa'];
// var hewanBuas = ['Singa']
// console.log(hewan.concat(hewanBuas)) // concat menggabung 2 array yg terpisah

// var hewan = ['ayam', 'bebek', 'angsa'];
// var hewanLain = ['Singa']

// let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];

// buah.splice(0, 2, "Lemon", "Kiwi"); // jika 2 angka angka pertama start index dan kedua menghapus brp index kedua
// buah.splice(2) // jika splice 1 angka maka akan langsung menghapus index

// console.log(buah);

var hewan = ['ayam', 'bebek', 'angsa'];
hewan.forEach(display);

function display (element){
    console.log(element);;
}


var angka = [1,2,3,10,12];
var filterNums = angka.filter(filterNumber)

function filterNumber (element){
    return element > 5;
}
console.log(filterNums);


var angkaLebihDari5 = angka.filter(function(angka) {
  return angka > 5;
});

console.log(angkaLebihDari5);


