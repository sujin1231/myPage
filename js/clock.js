const clock = document.querySelector(".clock");

function getClock() {
    const date = new Date();
    let day = date.getDay();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    switch (day) {
        case 0:
            day = "Sun"
            break;
        case 1:
            day = "Mon"
            break;
        case 2:
            day = "Tue"
            break;
        case 3:
            day = "Wed"
            break;
        case 4:
            day = "Thu"
            break;
        case 5:
            day = "Fri"
            break;
        case 6:
            day = "Sat"
            break;
    }

    clock.innerText = `${hours}h ${minutes}m ${seconds}s ${day}`;
}

getClock();
setInterval(getClock, 1000);