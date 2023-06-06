const form = document.querySelector('form')
const peso = document.querySelector('#weight')
const altura = document.querySelector('#height')

const modal = document.querySelector('.modal-wrapper')
const btnClose = document.querySelector('.close')
const span = document.querySelector('span')

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = Number(peso.value)
  const height = Number(altura.value)

  const result = IMC(weight, height)
  modal.classList.add('open')
  const mensagem = `Seu IMC é de ${result}`
  span.innerText = mensagem
}

btnClose.addEventListener('click', function () {
  modal.classList.remove('open')
})

function IMC(peso, altura) {
  return ((peso) / (altura * altura)).toFixed(2)
}
