class Clock {

  constructor() {
    this.clock = document.querySelector('.clock');
    this.pauseButton = document.querySelector('#pause');
    this.resumeButton = document.querySelector('#resume');
    this.pauseButton.addEventListener('click', (e) => { this.pauseClock(e); });
    this.resumeButton.addEventListener('click', (e) => { this.resumeClock(e); });

    this.runClock = setInterval(() => this.setTime(), 1000);
  }

  zeroPadTime(num) {
    if (num <10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  setTime() {
    const date = new Date();
    const twelveFormatHour = date.getHours() > 12 ? date.getHours()%12 : date.getHours();
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    const hour = this.zeroPadTime(twelveFormatHour);
    const min = this.zeroPadTime(date.getMinutes());
    const sec = this.zeroPadTime(date.getSeconds());

    const time = `${hour}:${min}:${sec} ${amPm}`;
    this.clock.innerHTML = time;
  }

  pauseClock(e) {
    window.clearInterval(this.runClock);
  }

  resumeClock(e) {
    this.runClock = setInterval(() => this.setTime(), 1000);
  }
}

let clock = new Clock();