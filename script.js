let hour = document.getElementById("hour");

let minute = document.getElementById("min");

let second = document.getElementById("sec");

let setclock = setInterval(() => {
    let date_now = new Date();

    let hr = date_now.getHours();
    console.log(hr);
    let min = date_now.getMinutes();
    console.log(min);
    let sec  = date_now.getSeconds();
    console.log(sec);

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = (sec * 6);

    hour.style.transform = `rotate(${calc_hr}deg)`
    minute.style.transform = `rotate(${calc_min}deg)`
    second.style.transform = `rotate(${calc_sec}deg)`
    console.log(hr,min,sec);
}, 1000);