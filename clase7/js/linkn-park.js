// ubicamos elementos dentro del DOM
  // ampliada
const ampliada = document.querySelector('#ampliada')
  // miniaturas
const minis = document.querySelector('#minis')
  const miniUno = minis.children[0]
  const miniDos = minis.children[1]
  const miniTres = minis.children[2]
  const miniCuatro = minis.children[3]
  const miniCinco = minis.children[4]
  const miniSeis = minis.children[5]

function cambiarImagen( imagen )
{
    ampliada.src = `imgs/${imagen}.jpg`
}

// controles
miniUno.onclick = function()
    {
       //ampliada.src = 'imgs/mike-shinoda.jpg'
       cambiarImagen('mike-shinoda')
    }
miniDos.onclick = function()
    {
       //ampliada.src = 'imgs/joe-han.jpg'
       cambiarImagen('joe-han')
    }
miniTres.onclick = function()
    {
       //ampliada.src = 'imgs/chester-benington.jpg'
       cambiarImagen('chester-benington')
    }
miniCuatro.onclick = function()
    {
       //ampliada.src = 'imgs/brad-delson.jpg'
       cambiarImagen('brad-delson')
    }
miniCinco.onclick = function()
    {
       //ampliada.src = 'imgs/rob-bourdon.jpg'
       cambiarImagen('rob-bourdon')
    }
miniSeis.onclick = function()
    {
       //ampliada.src = 'imgs/dave-phoenix-farrell.jpg'
       cambiarImagen('dave-phoenix-farrell')
    }

