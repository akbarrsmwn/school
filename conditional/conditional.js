// const sudahMakan = 'belum'

// if (sudahMakan === 'sudah') {
//     console.log('perut sudah kenyang')
// } else if (sudahMakan === 'bentarlagi') {
//     console.log('nanti habis sekarang saja')
// } else {
//     console.log('perut masih kosong')
//}



// function ganjilGenap(platNomor) { // nomor 29
//     if (platNomor % 2)
//         console.log("Genap")
//     else {
//         console.log("Ganjil")
//     }
//     return ganjilGenap(); // Tulis kode kalian di dalam fungsi ini
// }

// const hari = 'senin'
// switch (hari) {
//     case 'senin':
//         console.log('baju merah putih')
//         break;
//     case 'selasa':
//         console.log('baju putih biru')
//         break;
//     case 'rabu':
//         console.log('baju batik')
//     case 'kamis':
//         console.log('Olahraga')
//         break;
//     default:
//         console.log('baju bebas')
// }

const browser = "firefox";

switch (browser) {
    case "edge":
        console.log("Browser Anda tidak mendukung aplikasi ini");
        break;
    case "chrome":
    case "firefox":
    case "safari":
        console.log("Browser Anda mendukung aplikasi ini");
        break;
    default:
        console.log("Semoga tampilan aplikasi ini cukup baik");
}