/*
    Un parámetro completa el sentido de una función
    Cuándo enviamos un parámetro a una función, 
    este dato puede ser procesado para personalizar 
    levemente lo que hace nuestra función
*/

// declaración
function saludar( nombrePersona )
{
    console.log('hola', nombrePersona)
}

// invocación
saludar('Rick')
saludar('Morty')
saludar('Summer')

/* -------- */
function duplicarNumero( numero )
{
    let resultado = 0
    if( !isNaN(numero) ){
        resultado = numero * 2
    }
    else{
        resultado = 'debe ser un número'
    }
    console.log( resultado )
}

duplicarNumero( 5 )
duplicarNumero( 'manzana' )

/* --------- */
function sumarDosNumeros( numero1, numero2 )
{
    let resultado = numero1 + numero2
    console.log(resultado)
}

sumarDosNumeros( 4, 3 )
sumarDosNumeros( 10, 3 )