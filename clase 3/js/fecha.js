//ubicar elemento dentro del dom
let txt=document.getElementById('txt')

txt.style.color='red'
//crear un objeto de fecha y guardarlo en una variable
let fecha=new Date()
//si quiero escribir algo en la pagina lo hacemos con innertext
//obtenemos el dia del mes
let diames= fecha.getDate()

//obtener el numero del mes actual
let mesactual= fecha.getMonth()+1
if(mesactual < 10){
    mesactual='0'+mesactual
}
//obtener el año
let año= fecha.getFullYear()

txt.innerText=diames+'/'+mesactual+'/'+año
