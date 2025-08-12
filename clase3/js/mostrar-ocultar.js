// Ubicamos elementos dentro del documento (DOM)
const caja = document.querySelector('#caja')

// Declaramos funciones de control
function ocultar()
{
    //caja.style.display = 'none'
    caja.style.opacity = 0
}
function mostrar()
{
    //caja.style.display = 'block'
    caja.style.opacity = 1
}
function mostrartexto()
{
    //caja.style.display = 'block'
    if ( caja.style.opacity==1 || caja.style.opacity=="") {
        // Bloque a ejecutar si la condición es true
        caja.style.opacity = 0
    }
    else{
        // Bloque a ejecutar si la condición es false
        caja.style.opacity = 1
    }
}