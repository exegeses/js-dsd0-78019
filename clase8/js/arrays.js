/* 
    Un arreglo es un tipo de dato (objeto)
        Dentro contiene una colección de elementos
*/
let n = 3.68755416541
let n2 = 3
console.log( typeof(n) )
console.log( 'es entero:', Number.isInteger(n) )
console.log( typeof(n2) )
console.log( 'es entero:', Number.isInteger(n2) )
let s = 'manzana' 
console.log( typeof(s) )
let b = true
console.log( typeof(b) )
let fecha = new Date()
console.log( typeof(fecha) )
let fn = function foo(){  }
console.log( typeof(fn) )
console.log( typeof(indefinido) )
let nulo = null
console.log( typeof(nulo) ) // objeto
/* tipo de datos: 
    number
    string
    boolean
    object
    function
    undefined
*/
let miArray = []
console.log( typeof(miArray) ) // objeto
const marcas = [
                    'Hermès','Zara','Boss',
                    'Aeropostale','Kingin','Tomy',
                    'Gola', 'Abercrombie', 'JCrew',
                    'H&M', 'Hollister', 'Luis Vuiton',
                    'Gucci', 'Adidas', 'Fuarck',
                    'Lacoste'
                ]
console.log( typeof(marcas) ) // objeto                
console.log( marcas )

//mostramos el array dfentro de cajaTexto
const cajaTexto = document.querySelector('#cajaTexto')
console.log( typeof(cajaTexto) ) // objeto                
//cajaTexto.textContent = marcas
// mostramos uno de los elementos del array
cajaTexto.textContent = marcas[2]