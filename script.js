const hoursIndex= document.getElementById('hours');
const minutesIndex= document.getElementById('minutes');
const secondsIndex= document.getElementById('seconds');

let getCurrentTime= function(){
    let date = new Date();
    hoursIndex.innerHTML= String(date.getHours()).padStart(2, '0');
    minutesIndex.innerHTML= String(date.getMinutes()).padStart(2, '0');
    secondsIndex.innerHTML= String(date.getSeconds()).padStart(2, '0');
}

setInterval(getCurrentTime,1000)