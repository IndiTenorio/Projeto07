import {Modal} from './modal.js'

const form = document.querySelector('form')
const peso = document.querySelector('#weight')
const altura = document.querySelector('#height')


form.onsubmit = function (event) {
  event.preventDefault()

  const weight = Number(peso.value)
  const height = Number(altura.value)

  const result = IMC(weight, height)

  const mensagem = `Seu IMC é de ${result}`
  Modal.message.innerText = mensagem
  Modal.open()
}

function IMC(peso, altura) {
  return ((peso) / (altura * altura)).toFixed(2)
}
