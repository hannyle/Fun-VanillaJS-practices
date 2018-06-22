let handSec = document.getElementsByClassName('hands')[2];
let handMin = document.getElementsByClassName('hands')[1];
let handHr = document.getElementsByClassName('hands')[0];

clockSetting = () => {
    const today = new Date();
    const hrs = today.getHours();
    const mins = today.getMinutes();
    const seconds = today.getSeconds();
   
    const angleSec = (seconds * 360) /60;
    handSec.style.transform = `rotate(${angleSec}deg)`;

    const angleMin = (mins * 360) / 60 + (seconds * 6) / 60;
    handMin.style.transform = `rotate(${angleMin}deg)`;
  
    const angleHr = (hrs * 360) /12 + (mins *30) / 60;
    handHr.style.transform = `rotate(${angleHr}deg)`;
}
clockSetting();

setInterval(clockSetting, 1000);


