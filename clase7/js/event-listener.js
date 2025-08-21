const cajaTexto = document.querySelector('#cajaTexto')
const botones = document.querySelectorAll('#botones a')
console.log(botones)
const btnUno = botones[0]
const btnDos = botones[1]
const btnTres = botones[2]
const btnCuatro = botones[3]

btnUno.onclick = function(){
                    cajaTexto.textContent = 'botón uno'
                }
btnDos.addEventListener( 
                    'click', 
                    function()
                    {
                        cajaTexto.textContent = 'botón dos'
                    } 
                )

/* La mayor diferencia está en la sobre escritura */
btnUno.onclick = function()
                {
                    alert('hiciste click en boton uno')
                }
btnDos.addEventListener( 
                    'click', 
                    function()
                    {
                        alert('hiciste click en boton dos')
                    } 
                )

