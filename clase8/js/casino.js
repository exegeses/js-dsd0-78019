const caja = document.querySelector('#caja')
//const elementoImagen = document.querySelector('#caja img')
const boton = document.querySelector('#boton')
const dado = caja.children[0]
//const dado = elementoImagen
console.log(dado)

// generamos funciones de control
function getNumero()
{
    let numero = Math.round( Math.random() * 5 + 1 )
    return numero
}
function playAudio()
{
    let sonido = new Audio('audio/dice.mp3')
    sonido.play()
}
boton.addEventListener(
        'click',
        () => {
            // repoducir sonido
            playAudio()
            //generar numero
            let numero = getNumero()
            //cambiar imagen del dado según número generado
            //dado.src = 'red/dice-'+ numero +'.png'
            /*switch( numero ){
                case 1:
                    dado.src = 'red/dice-1.png'
                    break
                case 2:
                    dado.src = 'red/dice-2.png'
                    break
                case 3:
                    dado.src = 'red/dice-3.png'
                    break
                case 4:
                    dado.src = 'red/dice-4.png'
                    break
                case 5:
                    dado.src = 'red/dice-5.png'
                    break
                default:
                    dado.src = 'red/dice-6.png'
            }*/
           dado.src = `red/dice-${numero}.png`
        }
)