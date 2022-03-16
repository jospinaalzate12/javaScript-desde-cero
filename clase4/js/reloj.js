let txt=document.getElementById('txt')
//declaramos funciones de control
function reloj(){
    //creamos un objet de fecha
    let fecha=new Date()
    //obtenemos las horas 
    let hora=fecha.getHours()
    //obtenemos los minutos
    let minutos=fecha.getMinutes()
    //obtenemos los segundos
    let segundos=fecha.getSeconds()
    if (segundos<10){
        segundos='0'+segundos
    }
    //imprimimos texto del reloj dentro del spam
    txt.innerText=hora+':'+minutos+':'+segundos
}
//llamamos a la funcion
reloj()
//Actualizamos el llamado a la funcion
setInterval(reloj,1000)
