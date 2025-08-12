/*
    Mostrar la fecha actual
    formato:   dd/mm/yyyy  12/08/2025
*/
// ubicar elementos dentro del DOM
//const cajaTexto = document.getElementById('cajaTexto')
const cajaTexto = document.querySelector('#cajaTexto')

// creamos objeto ded fecha
const fecha = new Date()

// Obtenemos el número del día de mes actual
let diaMes = fecha.getDate()
console.log('diaMes:', diaMes)

// Obtenemos el número de mes actual
let mesActual = fecha.getMonth()+1
if( mesActual < 10 ){
    mesActual = '0'+ mesActual
}

console.log('mesActual:', mesActual)

// Obtenemos el número de año actual
let anio = fecha.getFullYear()
console.log('anio:', anio)

// Escribimos la fecha en el span
// concatenación
// cajaTexto.textContent = diaMes +'/'+ mesActual +'/'+ anio
// interpolación  ${nvar}
cajaTexto.textContent = `${diaMes}/${mesActual}/${anio}`
