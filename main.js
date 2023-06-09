const form = document.querySelector('form')
const peso = document.querySelector('#weight')
const altura = document.querySelector('#height')

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('span'),
  buttonClose: document.querySelector('.close'),

  open: function () {
    this.wrapper.classList.add('open')
  },
  close: function () {
    this.wrapper.classList.remove('open')
  }
}

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = Number(peso.value)
  const height = Number(altura.value)

  const result = IMC(weight, height)

  const mensagem = `Seu IMC é de ${result}`
  Modal.message.innerText = mensagem
  Modal.open()
}

Modal.buttonClose.addEventListener('click', function () {
  Modal.close()
})

function IMC(peso, altura) {
  return ((peso) / (altura * altura)).toFixed(2)
}
