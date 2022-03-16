//Array con los dias de la semana
let semana= new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado')
let txt=document.querySelector("#txt")

//mostrar el nombre del dia de la semana
let fecha= new Date()
//Ver el numero del dia de la semana
let nSemana=fecha.getDay()

txt.innerText=semana[nSemana]