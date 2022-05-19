// document.getElementById
// const judul = document.getElementById('judul')//mengembalikan element (menyeleksi element) memanggil id judul   
// judul.style.color='red'; // mengganti style
//  judul.style.backgroundColor='lightblue'; // cammelCase
// judul.innerHTML = '<em>Akbar Rismawan</em>' // merubah judul
// // const sectionA = document.querySelector('section#a') // section#a ditampung ke variable
// // sectionA.innerHTML = ' Hello world !'

// // const judul = document.querySelector('#judul')
// // judul.style.color='brown';
// // judul.style.backgroundColor='salmon';

// // document.getElementsByTagName
// // HTML collections

// // const p = document.getElementsByTagName('p'); 
// // p[2].style.backgroundColor = 'green'; // seperti array. edit style untuk element[2] bukan collectiion p
// // p[0].style.backgroundColor = 'green'; 
// // p[1].style.backgroundColor = 'green'; 
// // p[3].style.backgroundColor = 'green'; 

// // for(let i = 0; i<p.length;i++){
// //     p[i].style.backgroundColor = 'green'
// // }

// const h1 = document.getElementsByTagName('h1')[0]//h1 cuma 1 jadi HTML collection ganti jd element
// h1.style.fontSize = '100px'; 


// // document.getElementsByClassName
// // mengembalikan Html Collcetion

// const p1 = document.getElementsByClassName('p1')[0];
// p1.style.color = 'lightblue'
// p1.innerHTML = 'dirubah dr javascript';

// // document.querySelector () //selector yg dimaksud disini css
// const p4 = document.querySelector('#b p')
// p4.style.color = 'yellow'
// p4.style.fontSize= '40px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'orange'

// // document.querySelectorAll()

// const p =document.querySelectorAll('p'); 
// // p[2].style.backgroundColor='lightblue'
//     for ( let i = 0 ; i <p.length; i++){
//         p[i].style.backgroundColor='blue'

//     }


// const sectionB = document.getElementById('b'); // id section#b
// const p4 = sectionB.querySelector('p') // memilih element p di section#b
// p4.style.backgroundColor = ' orange'


// const sectionB = document.querySelector('section#b'); // id section#b
// const p4 = sectionB.getElementsByTagName('p')[0] // memilih element p di section#b
// p4.style.backgroundColor = ' orange' 

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = ' hello world'

    
// membuat elemen baru
const pBaru = document.createElement('p')
const teksBaru = document.createTextNode('Paragraf Baru')

//menyimpan tulisan kedalam paragraf
pBaru.appendChild(teksBaru);

//simpan pBaru diakhir section a
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru);

// //contoh insert before
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

//memasukan teks kedalam li
liBaru.appendChild(teksLiBaru)
// seleksi ul yg memiliki komponen li
const ul = document.querySelector('section#b ul');
// masukan li2
// const li2 = document.querySelector('section#b ul li:nth-child(2)')
const li2 = document.querySelector('li:nth-child(2)') // sama cara 2 seleksi
ul.insertBefore(liBaru, li2); // masukan liBaru sebelum li2 simpan dalam ul

// //remove child 
const link = document.getElementsByTagName('a')[0]; // link insta
sectionA.removeChild(link)

const sectionB = document.getElementById('b') // membatasi scoop b
const p4 = sectionB.querySelector('p'); // seleksi p4 nanti diganti

// //mengganti element p menjadi heading baru h2
const h2Baru = document.createElement('h2')
const texth2Baru = document.createTextNode('Judul Baru')

h2Baru.appendChild(texth2Baru);
sectionB.replaceChild(h2Baru, p4) // ganti p4 dg h2 'judul baru'

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';
































