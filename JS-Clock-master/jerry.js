const hourD = document.querySelector(".hour-hand")
const minuteD = document.querySelector(".min-hand")
const secondD = document.querySelector(".second-hand")

function setDate(){
    const now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    hourD.style.transform = `rotate(${hour/12*360+90}deg)`
    minuteD.style.transform = `rotate(${minute/60*360+90}deg)`
    secondD.style.transform = `rotate(${second/60*360+90}deg)`

}

setInterval(setDate, 1000)