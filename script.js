const introText = document.getElementById('intro-abt');

const dialog = document.getElementById('dialog');
const jsbutton = document.getElementById('jsbutton');
const modal = document.getElementById('modal');

const dialogTwo = document.getElementById('dialog-two');
const jsbuttonTwo = document.getElementById('jsbutton-two');
const modalTwo = document.getElementById('modal-two');

introText.textContent += 'is an interdisciplinary artist + educator based in New York.';


modal.addEventListener('click', (event) => {
    dialog.showModal();
  });

  jsbutton.addEventListener('click', (event) => {
    dialog.close();
    text.innerHTML += '"JS close" closed the dialog.<br/>';
  });

  modalTwo.addEventListener('click', (event) => {
    dialogTwo.showModal();
  });

  jsbuttonTwo.addEventListener('click', (event) => {
    dialogTwo.close();
    text.innerHTML += '"JS close" closed the dialog.<br/>';
  });