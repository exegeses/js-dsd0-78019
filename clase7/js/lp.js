const banner = document.querySelector('#ampliada')
const minis = document.querySelector('#minis')

const miniUno = minis.children[0]
const miniDos = minis.children[1]
const miniTres = minis.children[2]
const miniCuatro = minis.children[3]
const miniCinco = minis.children[4]
const miniSeis = minis.children[5]

function cambiarImg (nuevaImagen) {
    banner.src = nuevaImagen
}

miniUno.addEventListener("mouseover", function(){
        cambiarImg('imgs/mike-shinoda.jpg')
}) 
miniUno.addEventListener("mouseout", function(){
        cambiarImg("imgs/linkn-park.jpg")
}) 

miniDos.addEventListener("mouseover", function(){
        cambiarImg('imgs/joe-han.jpg')
}) 
miniDos.addEventListener("mouseout", function(){
        cambiarImg("imgs/linkn-park.jpg")
}) 


miniTres.addEventListener("mouseover", function(){
        cambiarImg('imgs/chester-benington.jpg')
}) 
miniTres.addEventListener("mouseout", function(){
        cambiarImg("imgs/linkn-park.jpg")
}) 

miniCuatro.addEventListener("mouseover", function(){
        cambiarImg('imgs/rob-bourdon.jpg')
}) 
miniCuatro.addEventListener("mouseout", function(){
        cambiarImg("imgs/linkn-park.jpg")
}) 

miniCinco.addEventListener("mouseover", function(){
        cambiarImg('imgs/brad-delson.jpg')
}) 
miniCinco.addEventListener("mouseout", function(){
        cambiarImg("imgs/linkn-park.jpg")
}) 

miniSeis.addEventListener("mouseover", function(){
        cambiarImg('imgs/dave-phoenix-farrell.jpg')
}) 
miniSeis.addEventListener("mouseout", function(){
        cambiarImg("imgs/linkn-park.jpg")
}) 

