const marcas = [
    'Hermès','Zara','Boss',
    'Aeropostale','Kingin','Tomy',
    'Gola', 'Abercrombie', 'JCrew',
    'H&M', 'Hollister', 'Luis Vuiton',
    'Gucci', 'Adidas', 'Fuarck',
    'Lacoste'
]
// ubicar elementos dentro del DOM
const rotador = document.querySelector('#rotador')
  const anterior = rotador.children[0]
  const span = rotador.children[1]
  const siguiente = rotador.children[2]

// estado inicial : ver una marca en el span
let indice = 7
span.textContent = marcas[indice]

// controles
anterior.onclick = function()
                    {
                        indice --
                        if( indice < 0 ){
                            indice = marcas.length - 1
                        }
                        span.textContent = marcas[indice]
                    }
siguiente.onclick = function()
                    {
                        indice ++
                        if( indice > marcas.length-1 ){
                            indice = 0
                        }
                        span.textContent = marcas[indice]
                    }                    