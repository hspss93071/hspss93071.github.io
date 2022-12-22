const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

const hourText = document.getElementById("hourText")
const minText = document.getElementById("minText")
const secText = document.getElementById("secText")

const startBtn = document.getElementById("start")
const setBtn = document.getElementById("set")
const resetBtn = document.getElementById("reset")


class Timer{
    constructor(hour, min, sec){
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.total = hour*3600 + min*60 + sec
    }

    set(h, m, s){
        this.end();
        console.log("Setting")
        this.hour = h;
        this.min = m;
        this.sec = s;
        this.total = h*3600 + m*60 + s
        display(this.hour, this.min, this.sec);
    }

    count(){
        if(this.total)
            this.total -= 1;
        else
            this.end();
    
        this.hour = Math.floor(this.total/3600);
        this.min =  Math.floor((this.total - 3600*this.hour)/60);
        this.sec = Math.floor(this.total - 3600*this.hour - 60*this.min);
        console.log(`${this.hour}:${this.min}:${this.sec}`) 
        display(this.hour, this.min, this.sec)
            
    }

    start(){
        if(this.timerFunction)
            this.end();
        else{
            this.timerFunction = setInterval(this.count.bind(this), 1000);
            console.log("Start: "+ this.timerFunction)
        }
    }

    end(){
        clearInterval(this.timerFunction);
        this.timerFunction = 0;
        console.log("End")
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.total = 0;
        display(this.hour, this.min, this.sec);
    }
}


const timer = new Timer(0,0,0);
startBtn.onclick = () => timer.start();
setBtn.onclick = set;
resetBtn.onclick = () => timer.end();



function display(h,m,s){
    hour.textContent = (h>9)?(h):("0"+h)
    min.textContent = (m>9)?(m):("0"+m)
    sec.textContent = (s>9)?(s):("0"+s)
        
}


function set(){
    let h = Number(hourText.value)
    let m = Number(minText.value)
    let s = Number(secText.value)
    hourText.value = "";
    minText.value = "";
    secText.value = "";

    if(!isNaN(h) && !isNaN(m) && !isNaN(s)){
        if(h>99){
            alert("Hour is limited to 99...")
        }else if(m>59){
            alert("Minute is limited to 59...")
           
        }else if(s>59){
            alert("Second is limited to 59...")
        }else{
            timer.set(h,m,s);
        }

    }else{
        alert("Please input correct time...");
    }
}




