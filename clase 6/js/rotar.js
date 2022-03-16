let sol=document.getElementById("sol")
let grados=0

function rotar(){
    grados++
    sol.style.transform='rotate('+ grados+'5deg)'
}
rotar();
setInterval( rotar,  50)