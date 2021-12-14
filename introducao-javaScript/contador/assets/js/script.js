var valor = 0;

function increment(){
    if (valor < 7){
        document.getElementById("numero").innerHTML = valor += 1;
    }else{
        document.getElementById("numero").innerHTML = 'parooou!!!';
    }
}