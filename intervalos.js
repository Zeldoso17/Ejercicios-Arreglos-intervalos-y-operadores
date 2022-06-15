
let contador = 0;

let intervalo = setInterval(function(){
    contador++;
    console.log(contador);
    if(contador == 10){
        console.log("---------------------");
        contador = 0;
    }
}, 5000);