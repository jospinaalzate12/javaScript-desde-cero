let dado = document.querySelector('#dado');

function tirarDado()
{
    let numeroAleatorio = Math.random();// 0 1
    console.log( numeroAleatorio );

    //genear un número entre 1 y 6
    let numeroMultiplicado = (numeroAleatorio * 5) + 1;
    console.log( numeroMultiplicado );

    //quitar decimales
    let numero = Math.round( numeroMultiplicado );
    console.log( numero );

    //mostrar la imagen dentro del div
    dado.innerHTML = '<img src="dados/dado'+ numero +'.png">';
}

tirarDado();