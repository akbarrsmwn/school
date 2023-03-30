class Siswa {
  nama = "adi";
  kelas = 10;
  constructor(jurusan) {
    this.jurusan = jurusan;
  }
  hobi;
  set newHobi(hobi) {
    this.hobi = hobi;
  }
}
const muridAdi = new Siswa("rpl");
console.table(muridAdi);
console.log(muridAdi.nama);

muridAdi.newHobi = "futsal";
console.table(muridAdi);

class Hewan {
  constructor(karnivora, jumlahKaki) {
    this.kaki = jumlahKaki;
    this.hewannya = karnivora;
  }
  darat() {
    return " Hewan Pemakan daging  " + this.hewannya;
  }
}

var hewanKarnivora = new Hewan("Macan", 4);
console.log(hewanKarnivora);

// function Siswa(nama, jurusan, umur) {
//   this.nama = nama;
//   this.jurusan = jurusan;
//   this.umur = umur;
// }
// Siswa.prototype.sekolah = "SMK MQ";
// Siswa.prototype.pergi = function (tempat) {
//   return "Pergi ke " + tempat + " Si " + this.nama;
// };
// var siswaRehan = new Siswa("Rehan ", "X-RPL", 16);
// console.log(siswaRehan.pergi("Jonggol"));
