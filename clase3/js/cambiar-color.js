// Ubicar elementos dentro del documento (DOM)
const caja = document.querySelector('#caja')

/*-- Sin interactividad --*/
/*
    caja.textContent = 'soy una caja'
    caja.style.backgroundColor = 'turquoise'
    caja.style.rotate = '-20deg'
*/    
// declaracioness
function cajaVerde()
{
    caja.textContent = 'Verde'
    caja.style.backgroundColor = 'hsl(120, 60%, 50%)'
    caja.style.rotate = '20deg'
}
function cajaCeleste()
{
    caja.textContent = 'Celeste'
    caja.style.backgroundColor = 'hsl(180, 60%, 50%)'
    caja.style.rotate = '-30deg'
}
function cajaVioleta()
{
    caja.textContent = 'Violeta'
    caja.style.backgroundColor = 'hsl(250, 80%, 60%)'
    caja.style.rotate = '30deg'
}
