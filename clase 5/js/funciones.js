
let campo1=document.querySelector("input[name='n1']")//sirve para encontrar un elemento dentro del html y se escribe el selector 
let campo2=document.querySelector("input[name='n2']")
let txt=document.querySelector('#txt')
//Declaramos funciones de copntrol
function sumar(valor1,valor2){
 let resultado=valor1+valor2
return resultado
}

function restar(valor1,valor2){
 let resultado=valor1-valor2
return resultado
}

function calcular(operacion){
    let resultado=0//valor inicial
    let n1=parseInt( campo1.value)
    let n2=parseInt(campo2.value)
    if(operacion=='sumar'){
         resultado=sumar(n1,n2)
       
    }if(operacion=='restar'){
         resultado=restar(n1,n2)
        
    }
  txt.innerText=resultado
}