
//button 
document.getElementById("mySubmit").onclick = function () {
   let nama = document.getElementById('myText').value;
    document.getElementById("myH1").textContent = `Hallo Boss ${nama}`
}



const btn = document.getElementById('btn')

btn.onclick = function () {
    document.body.style.backgroundColor = 'lightblue'; // contoh 1 
    //document.body.setAttribute('class', 'biru-muda') // menambah atribut
}

//membuat button
const random = document.createElement('button')
const teks = document.createTextNode('Random Colour');

random.appendChild(teks)
random.setAttribute('type', 'button');
btn.after(random) // button random masuk

random.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1) ;
    const g = Math.round(Math.random() * 255 + 1) ;
    const b = Math.round(Math.random() * 255 + 1) ;
    // console.log(r); // angka tidak lebih dari 255 random dibawah 1 
    document.body.style.background = 'rgb('+ r +','+ g +','+ b +')'
})

