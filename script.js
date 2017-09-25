class Clock {

  constructor() {
    this.clock = document.querySelector('.clock');
    this.pauseButton = document.querySelector('#pause');
    this.resumeButton = document.querySelector('#resume');

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
}

let clock = new Clock();