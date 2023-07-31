const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countown = document.getElementById("countown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

let currYear = new Date().getFullYear();

let nextYear = currYear+1;

year.innerHTML=nextYear;

let nextYearTime = new Date(`january 01 ${nextYear} 00:00:00`);

console.log(nextYear);

function updateCountown(){
    let currYearTime = new Date();
    let diff = nextYearTime-currYearTime;
    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor(diff/1000/60/60)%24;
    let m = Math.floor(diff/1000/60)%60;
    let s = Math.floor(diff/1000)%60;
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
}

setInterval(updateCountown,1000);
updateCountown();

setTimeout(()=>{
    loading.remove();
    countown.style.display="flex";
},1000)
