/* selecionar elementos dentro del DOM */

// Seleccionar un elemento por su ID
const articulo = document.getElementById('articulo')
articulo.innerText = 'texto generado'

// Seleccionar un elemento por el nombre de una clase
const item = document.getElementsByClassName('item')
item[0].innerText = 'texto generado'
item[1].innerText = 'texto generado'
item[2].innerText = 'texto generado'
/* En este caso tenemos que especificar c
ada uno de los elementos de la clase */

// Seleccionar un elemento por su nombre de elemento
const b = document.getElementsByTagName('b')
b[0].innerText = 'texto generado'
b[1].innerText = 'texto generado'

// Seleccionar un elemento por su atributo "name"
const nombre = document.getElementsByName('nombre')
nombre[0].value = 'texto generado'
