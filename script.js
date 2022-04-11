const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

window.setInterval(() => {
  const now = new Date();
  const hour = now.getHours() * 30 + 90;
  const min = now.getMinutes() * 6 + 90;
  const second = now.getSeconds() * 6 + 90;

  secondHand.style.transform = `rotate(${second}deg)`;
  minHand.style.transform = `rotate(${min}deg)`;
  hourHand.style.transform = `rotate(${hour}deg)`;
}, 1000);
