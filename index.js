function clockWork(){
    const clock  = document.getElementById("clock");

    let hours =  String(new Date().getHours());
    let minutes =  String(new Date().getMinutes());
    let seconds = String(new Date().getSeconds());

    hours = hours.length === 1 ? "0"+hours: hours;
    minutes = minutes.length === 1 ? "0"+ minutes: minutes;
    seconds = seconds.length === 1 ? "0"+seconds: seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;
    console.log(hours, minutes, seconds)
}

clockWork();
setInterval(clockWork, 1000);