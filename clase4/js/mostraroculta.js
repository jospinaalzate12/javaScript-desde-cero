// ubicar elementos dentro del dom
let caja=document.getElementById('caja')
function ocultar(){
    caja.style.display='none'
    //caja.style.visibility='hidden'
}
//Hacer una funcion mostrar oculta
function mostrar(){
    caja.style.display='block'
}
function mostrarOcultar()
{
    if(caja.style.display == 'block')
    {
        ocultar();
    }
    else
    {
        mostrar();
    }
}

