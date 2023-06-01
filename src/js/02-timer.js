import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

document.body.style.backgroundColor = '#E9967A';

let selectedDate = null;
let intervalId = null;
const DELAY = 1000;

const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  startTimerBtn: document.querySelector('button[data-start]'),
  daysRemain: document.querySelector('[data-days]'),
  hoursRemain: document.querySelector('[data-hours]'),
  minutesRemain: document.querySelector('[data-minutes]'),
  secondsRemain: document.querySelector('[data-seconds]'),
};

refs.startTimerBtn.disabled = true;
refs.startTimerBtn.addEventListener('click', timerStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onDateCheck(selectedDates);
  },
};

flatpickr(refs.dateInput, options);

function onDateCheck(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  const currentDate = new Date().getTime();

  if (selectedDate > currentDate) {
    refs.startTimerBtn.disabled = false;
    return;
  }

  window.alert('Please, choose a date in the future');
}

function timerStart() {
  timer.start();
  refs.startTimerBtn.disabled = true;
  refs.dateInput.disabled = true;
}

const timer = {
  timerSelector: document.querySelector('.timer'),

  start() {
    intervalId = setInterval(() => {
      const currentDate = Date.now();
      const delta = selectedDate - currentDate;

      if (delta <= 0) {
        this.stop();
        return;
      }

      const { days, hours, minutes, seconds } = this.convertMs(delta);
      refs.daysRemain.textContent = this.addLeadingZero(days);
      refs.hoursRemain.textContent = this.addLeadingZero(hours);
      refs.minutesRemain.textContent = this.addLeadingZero(minutes);
      refs.secondsRemain.textContent = this.addLeadingZero(seconds);
    }, DELAY);
  },

  stop() {
    clearInterval(intervalId);
    intervalId = null;
    refs.startTimerBtn.disabled = false;
    refs.dateInput.disabled = false;
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
};
