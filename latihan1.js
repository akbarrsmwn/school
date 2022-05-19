
const lipatanTiga = []
for ( let i = 0; i<50;i++){
    if ( i%3==0){
        lipatanTiga.push(i);
    }
}
console.log(lipatanTiga);



 function luas(p, l) {
    return p * l;
}
console.log(luas(5, 7)); 

function kell(s) {
    return s+s+s+s;
}
console.log(kell(5)); 

var s = ''
for (var i = 0; i<2; i++){
    for (var j = 0; j<5;j++){
    s += '*'
    }
s += '\n';
}
console.log(s)

class Hewan {
    constructor( karnivora, jumlahKaki){
        this.kaki = jumlahKaki;
        this.hewannya = karnivora;
    }
    darat (){
        return " Hewan Pemakan daging  " + this.hewannya ;
    }
   
}   

var hewanKarnivora = new Hewan ('Macan',4);
console.log(hewanKarnivora)