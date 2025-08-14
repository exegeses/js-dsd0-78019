// ubicamos elementos dentro del DOM
const btnVerde = document.querySelector('#btnVerde')
const btnCeleste = document.querySelector('#btnCeleste')
const btnVioleta = document.querySelector('#btnVioleta')
const caja = document.querySelector('#caja')

function cambiarColor( color, nombre )
{
    caja.style.backgroundColor = color
    caja.textContent = nombre
}


btnVerde.onclick = function()
                    {
                        cambiarColor( 'hsl(120, 60%, 50%)', 'Verde' )
                    }

btnCeleste.onclick = function()
                    {
                        cambiarColor( 'hsl(180, 60%, 50%)', 'Celeste' )
                    }
btnVioleta.onclick = function()
                    {
                        cambiarColor( 'hsl(250, 80%, 60%)', 'Violeta' )
                    }