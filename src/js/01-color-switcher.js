const DELAY = 1000;
let intervalId = null;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);
refs.stopBtn.disabled = true;
// refs.stopBtn.setAttribute('disabled', true);

function startChangeColor() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  // refs.startBtn.setAttribute('disabled', true);
  // refs.stopBtn.removeAttribute('disabled');

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function stopChangeColor() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  // refs.btnStart.removeAttribute('disabled');
  // refs.btnStop.setAttribute('disabled', true);
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
