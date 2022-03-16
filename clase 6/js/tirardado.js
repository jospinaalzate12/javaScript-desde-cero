let dado=document.querySelector('#dado')
function tirarDado(){
    let numeroAleatorio=Math.random()
    
    let numeroMultiplicado=(numeroAleatorio*5)+1
    
    //quitar decimales
    let numero=Math.round(numeroMultiplicado)//round quita las decimales
    
    dado.innerHTML= '<img src="dados/dado'+ numero + '.png">'
}
tirarDado()