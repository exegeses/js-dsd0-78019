/*
    - Generar un número mágico entre 1 y 10
    - Pedirle al usuario que adivine ese número
        El usuario va a inscribir su número
    --
    - Si el usuario acierta el número: mostrar un mensaje informando que lo adivino
    - Si el usuario no acierta: que siga intentando
*/
function getNumero()
{
    return Math.round( Math.random()*9 +1 )
}
const numeroMagico = getNumero()
console.log(numeroMagico)

let check = true
while( check ){
    let numeroUsuario = prompt('ingrese un número entre 1 y 10')
    if( numeroUsuario == numeroMagico ){
        alert('adivinaste el número mágico, '+ numeroUsuario)
        check = false
    }
}