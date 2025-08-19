// Ubicamos elementos dentro del DOM
const btn = document.querySelector('#btn')
const cajaTexto = document.querySelector('#cajaTexto')
/*
    Al pulsar el botón vamos a generar un número aleatorio 
    Este número debería ser un entero entre 1~10 (incluídos)
    Mostrar este número en el span
*/
function generarNumero()
{
    // Math: Es un objeto con atributos y métodos de funciones aritméticas
        // random() Devuelve un número semialeatorio 
       //              entre 0(incluído) y 1 (excluído) [con decimales]

    let aleatorio = Math.random()
    let numeroX10 = (aleatorio * 10) + 1
    let numero = Math.floor(numeroX10)
    return numero
}
btn.onclick = function()
                {
                    let numero = generarNumero()
                    cajaTexto.textContent = numero
                }

                                