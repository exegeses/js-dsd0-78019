// Ubicar un elemento dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

/* 
    Hacer una pregunta al usuario. 
        - El usuario va a responder. 
        - Mostrar la respuesta dentro del article
*/

let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?')
// document.write(respuesta)
// Escribimos dentro del artículo
// cajaTexto.textContent = respuesta

/*
    Vamos a comparar la respuesta enviada por el usuario
    - Si el usuario responde "Argentina" 
            entonces mostramos la palabra "correcto"
    - Si el usuario responde algo diferente de "Argentina" 
            entonces mostramos la palabra "inorrecto"
*/
if ( respuesta.toUpperCase() == 'ARGENTINA' ){
    // Bloque a ejecutar si la condición es true
    cajaTexto.textContent = 'correcto'
}
else{
    // Bloque a ejecutar si la condición es false
    cajaTexto.textContent = 'incorrecto'
}