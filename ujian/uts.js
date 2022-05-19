//1. buatlah tampilan array untuk mengurutkan jenis hewan 
//'sapi, kuda, kerbau, ...,ayam,unta'
// lalu tampilkan kerbau dan ayam

const hewan = ['sapi','kuda', 'kerbau','...','ayam','unta']
console.log(hewan);
console.log(hewan[4])

//2. buatlah sebuah pengkondisian jika cuaca baik, maka masuk sekolah, 
//jika cuaca hujan maka libur sekolah, 
//dan jika cuaca mendung tetap berangkat sekolah.
const cuaca = 'baik';

if (cuaca==='baik'){
    console.log('Masuk Sekolah')
} else if (cuaca==='hujan'){
    console.log('Libur Sekolah')
} else if (cuaca==='mendung') { 
    console.log('tetap sekolah')
} else {
    console.log('bukan anak sekolah');
}



//3. buatlah Perulangan untuk menamplkan angka genap pada range angka 1-10

let angka= [1,2,3,4,5,6,7,8,9,10]

let genap =[];

for (let i=0; i<angka.length; i++) {
    if (angka[i] % 2 == 0){
        genap.push(angka[i])
    }
    console.log('Angka genap ' + genap);
}

//4. buatlah sebuah objek literal yg memiliki minimal 2 parameter,
// dan method function dengan tema bebas 

let objekData={
    nama : 'muhammad ',
    umur : 20,
    namaBelakang : function (lastname){
        this.nama += lastname ;
        console.log(' halo ' + this.nama +" apa kabar ?");
    }
}


//5. buatlah sebuah function declaration dengan tema 
//jika siswa makan energi energi bertambah running di web browser
function Siswa(nama, energi) {
        let siswa = {};
        siswa.nama = nama;
        siswa.energi = energi;
  
        siswa.makan = function(porsi) {
            this.energi += porsi;
            return console.log(` halo  ${this.nama}, selamat makan!`);
            
        }
        return siswa;
    }
      let nabil = Siswa('nabil', 30)
      let sugih = Siswa(' Sugih', 25)
  

//6. buat constructor function menggunakan keyword new 
// yg memiliki minimal 2 parameter argumen. running di web browser

// function Siswa(nama, energi) {
    
//         this.nama = nama;
//         this.energi = energi;
    
//         this.makan = function(porsi) {
//             this.energi += porsi;
//             console.log(` halo  ${this.nama}, selamat makan!`);
//         }

// }

// let nabil = new Siswa('nabil', 30)
// let sugih =new Siswa(' Sugih', 25)

//7. buat sebuah class hewan yg memiliki 2 parameter argumen dan properti
// lalu tambahkan method dan akses masing2 properti di web browser

class Hewan {
    constructor( karnivora, jumlahKaki){
        this.kaki = jumlahKaki;
        this.karni = karnivora;
    }
    darat (){
        return " Hewan Pemakan daging  " + this.karni ;
    }
   
}   

var hewanKarnivora = new Hewan ('Macan',4);
