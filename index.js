setInterval(() => {
    d  = new Date();
    hours = d.getHours();
    mins = d.getMinutes();
    secs = d.getSeconds();
    hrotation = hours*30 +  mins/2;
    minrotation = 6*mins;
    secrotation = 6*secs;
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${minrotation}deg)`;
    sec.style.transform = `rotate(${secrotation}deg)`;
}, 1000);