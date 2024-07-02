const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   console.log(seconds);
   
   const minutesDegrees = ((minutes / 60) * 360) + 90;
   minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
   console.log(minutes);
   
   const hoursDegrees = ((hours / 12) * 360) + 90;
   hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
   console.log(hours);
   
}
setInterval(setDate, 1000);