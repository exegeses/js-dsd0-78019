// Ubicar elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

// declaramoss funciones de control
function reloj()
{
    //creamoss objeto de fecha
    const fecha = new Date()

    // obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
    if (horas<10){
        horas = '0'+horas
    }

    console.log('horas:', horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    if (minutos<10){
        minutos = '0'+minutos
    }
    console.log('minutos:', minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    if (segundos<10){
        segundos = '0'+segundos
    }

    console.log('segundos:', segundos)

    // Escribimos dentro del span
    cajaTexto.textContent = horas + ':' + minutos + ':' + segundos
}

// Llamado ejecución
reloj()

// Actualizamos el llamado a la función reloj()
setInterval( reloj, 1000 )
