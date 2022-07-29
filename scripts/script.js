let here = document.querySelector('.button-modal');
let modal = document.querySelector('.modal-container');
let modalClose = document.querySelector('.modal-close-button');
let buttonAdd = document.querySelectorAll('.modal-amount-add');
let buttonRemove = document.querySelectorAll('.modal-amount-remove');
let modalInput = document.querySelectorAll('.modal-input-people');

here.onclick = function() {
    modal.classList.remove('modal-container-close');
  };

modalClose.onclick = function () {
  modal.classList.add('modal-container-close');
}

buttonAdd[0].onclick = function () {
  modalInput[0].value++;
}

buttonAdd[1].onclick = function () {
  modalInput[1].value++;
}

buttonRemove[0].onclick = function () {
  modalInput[0].value--;
}

buttonRemove[1].onclick = function () {
  modalInput[1].value--;
}
