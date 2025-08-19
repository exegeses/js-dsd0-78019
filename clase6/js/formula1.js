// Ubicamos elementos dentro del DOM
// botones
const menu = document.querySelector('#menu')
 const btnMclaren  = menu.children[0]
 const btnRedbull  = menu.children[1]
 const btnFerrari  = menu.children[2]
 const btnMercedes = menu.children[3]
 const btnAmartin  = menu.children[4]
// escuderías
const mclaren = document.querySelector('#mclaren')
const redbull = document.querySelector('#redbull')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')

/*
    estado inicial
    Tenemos que hacer que sólo se vea la información de una escudería
    Vamos a ocultar todas las demás
*/
redbull.style.display  = 'none'
ferrari.style.display  = 'none'
mercedes.style.display = 'none'
amartin.style.display  = 'none'


btnMclaren.onclick = function()
                     {
                        mclaren.style.display  = 'flex'
                        redbull.style.display  = 'none'
                        ferrari.style.display  = 'none'
                        mercedes.style.display = 'none'
                        amartin.style.display  = 'none'
                     }
btnRedbull.onclick = function()
                     {
                        mclaren.style.display  = 'none'
                        redbull.style.display  = 'flex'
                        ferrari.style.display  = 'none'
                        mercedes.style.display = 'none'
                        amartin.style.display  = 'none'
                     }
btnFerrari.onclick = function()
                     {
                        mclaren.style.display  = 'none'
                        redbull.style.display  = 'none'
                        ferrari.style.display  = 'flex'
                        mercedes.style.display = 'none'
                        amartin.style.display  = 'none'
                     }
btnMercedes.onclick = function()
                     {
                        mclaren.style.display  = 'none'
                        redbull.style.display  = 'none'
                        ferrari.style.display  = 'none'
                        mercedes.style.display = 'flex'
                        amartin.style.display  = 'none'
                     }
// obj.addEventListener( 'evento', acción )
btnAmartin.addEventListener( 
                        'click', 
                        function(){
                            mclaren.style.display  = 'none'
                            redbull.style.display  = 'none'
                            ferrari.style.display  = 'none'
                            mercedes.style.display = 'none'
                            amartin.style.display  = 'flex'
                        } 
                    )                     
