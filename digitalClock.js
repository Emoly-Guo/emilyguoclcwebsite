const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";
    
    h = h % 12;
    h = h ? h : 12; // if 0, set to 12

    h = h<10 ? "0" + h : h; /*whenever this condition is true [?], simply write 0  + h. [:] if the condition isn't met simply use the h value as it is*/
    m = m<10 ? "0" + m : m; 
    s = s<10 ? "0" + s : s; 

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000);
}

updateClock()