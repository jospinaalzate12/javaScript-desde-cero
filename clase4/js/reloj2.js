// mostrar un reloj digital
// con formato 21:11:46

//ubicamos elemento/s dentro del DOM
let txtHoras = document.getElementById('txtHoras');
let txtMinutos = document.getElementById('txtMinutos');
let txtSegundos = document.getElementById('txtSegundos');
let separador = document.querySelectorAll('.separador');

//declaramos función/es de control
function clock()
{
    //creamos un objeto de fecha
    let fecha = new Date();

    //obtenemos las horas
    let horas = fecha.getHours();

    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    minutos = dosDigitos( minutos );

    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    segundos = dosDigitos( segundos );

    //imprimimos texto dentro del span
    //txt.innerText = horas +':'+ minutos +':'+ segundos;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
    separador[0].innerText=blinker(segundos)
    separador[1].innerText=blinker(segundos)


}

function dosDigitos( numero )
{
    if ( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}
function blinker(numero){
if(numero %2==0){
    return ':'
}else{
    return ""
}
}

//llamamos a la función reloj
clock();
//actualizamos llamado a la función
setInterval( clock, 1000 );