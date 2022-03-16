//let contenedor=document.querySelector('#contenedor')
//contenedor.innerText='Contenido donde yo quiera'
let fotos = [
    'anto', 'bruno', 'dani', 'gery',
    'killq', 'lu', 'maiten', 'maqui',
    'marce', 'marco', 'marco2', 'solsteiz'
];
//ubicar el elemento dentro de dom
let contenedor= document.querySelector('#contenedor')
let cantidad=fotos.length
contenido=""
for (let index = 0; index < cantidad; index++) {
    contenido=contenido+'<article><img src="fotos/'+fotos[index]+'.png"></article>'
}
contenedor.innerHTML=contenido