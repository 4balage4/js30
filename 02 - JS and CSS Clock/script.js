console.log('hello')
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
  const time = new Date();
  // console.log(time);

  const hours = time.getHours();
  const hourDegrees = (360 / 12) * hours + 90;
  // console.log(hourDegrees)

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  const minutes = time.getMinutes();
  const minuteDegrees = (360 / 60) * minutes + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

  const seconds = time.getSeconds();
  const secondDegrees =  (360 / 60) * seconds + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`

}

setInterval(() => {
  setDate()
}, 1000);
