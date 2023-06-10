export const Modal = {
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

Modal.buttonClose.addEventListener('click', function () {
  Modal.close()
})

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}