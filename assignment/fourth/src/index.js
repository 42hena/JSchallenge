const clockTitle = document.querySelector(".js-clock");

clockTitle.innerHTML = "00:00";

function timer(){
    const setDate = new Date("2021-12-25T00:00:00+0900");
    
    const today = new Date();
    let distance = setDate.getTime() - today.getTime();
    console.log(distance)
    let day = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    let seconds = Math.floor((distance % (1000*60))/1000);
    if (day <100)
        day = String(day).padStart(3,"0")
    if (hours < 10)
        hours = String(hours).padStart(2,"0")
    if (minutes < 10)
        minutes = String(minutes).padStart(2,"0")
    if (seconds < 10)
        seconds = String(seconds).padStart(2,"0")
    // console.log(typeof(hour))
    clockTitle.innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`;       
}
timer()
setInterval(timer, 1000);