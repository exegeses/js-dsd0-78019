/*
    Mostrar la fecha actual
    formato:   dd de mmmmmm de yyyy  12 de agosto de 2025
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
let mesActual = fecha.getMonth()
/*if( mesActual < 10 ){
    mesActual = '0'+ mesActual
}*/
//-- nombre de mes
switch(mesActual){
    case 0:
        nombreMes = 'enero';
        break;
    case 1:
        nombreMes = 'febrero';
        break;
    case 2:
        nombreMes = 'marzo';
        break;
    case 3:
        nombreMes = 'abril';
        break;
    case 4:
        nombreMes = 'mayo';
        break;
    case 5:
        nombreMes = 'junio';
        break;
    case 6:
        nombreMes = 'julio';
        break;
    case 7:
        nombreMes = 'agosto';
        break;
    case 8:
        nombreMes = 'septiembre';
        break;
    case 9:
        nombreMes = 'octubre';
        break;
    case 10:
        nombreMes = 'noviembre';
        break;
    case 11:
        nombreMes = 'diciembre';
        break;
    default:
        nombreMes = 'mes inválido';
        break;
}

console.log('mesActual:', mesActual)
console.log('nombreMes:', nombreMes)

// Obtenemos el número de año actual
let anio = fecha.getFullYear()
console.log('anio:', anio)

// Escribimos la fecha en el span
// concatenación
// cajaTexto.textContent = diaMes +' de '+ nombreMes +' de '+ anio
// interpolación  ${nvar}
cajaTexto.textContent = `${diaMes} de ${nombreMes} de ${anio}`
