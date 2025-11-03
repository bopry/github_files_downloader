const buttons = document.querySelectorAll('#top-area div');

const alert = document.querySelector(".aside-settings");

const closeBtn = document.querySelector(".aside-settings svg");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('animate');
    alert.classList.toggle('show');
    setTimeout( () => {
        button.classList.toggle('animate');
    }, 300)
  });
});

closeBtn.addEventListener('click', () => {
  alert.classList.toggle('show');
});

/*
const style = document.createElement('style');
style.textContent = '* { backdrop-filter: none !important; }';
document.head.appendChild(style);*/