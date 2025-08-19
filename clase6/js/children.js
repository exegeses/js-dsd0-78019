//ubicamos elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')
// botones
const botones = document.querySelector('#botones')
console.log(botones)
    // children
const btnUno = botones.children[0]
const btnDos = botones.children[1]
const btnTres = botones.children[2]


// control de elementos
cajaTexto.textContent = 'ningún botón pulsado'
btnUno.onclick = function () 
                    {
                        cajaTexto.textContent = 'botón uno pulsado'
                    }
btnDos.onclick = function () 
                    {
                        cajaTexto.textContent = 'botón dos pulsado'
                    }
btnTres.onclick = function () 
                    {
                        cajaTexto.textContent = 'botón tres pulsado'
                    }

