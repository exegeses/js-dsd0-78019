// Ubicar elementos dentro del DOM
const btn = document.querySelector('#btn')
const cajaTexto = document.querySelector('#cajaTexto')

// Asignar acciones cuando hagamos clik
    // Usar una función anónima
btn.onclick = function()
                {
                    cajaTexto.textContent = 'hiciste click!'
                }

btn.onmouseover = function()
                {
                    cajaTexto.textContent = 'mouse sobre'
                } 

btn.onmouseout = function()
                {
                    cajaTexto.textContent = 'reposo'
                } 
