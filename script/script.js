let time=document.querySelector('.time');
let start=document.querySelector('#start');
let lap=document.querySelector('#lap');
let stop=document.querySelector('#stop');
let clear=document.querySelector('#clear');


let second=0, minute=0, hours=0, t;

addTime=()=>{
    second++;
    if(second >= 60){
        second=0;
        minute++;
        if(minute >=60){
            minute=0;
            hours++;
        }
    }
    
    
time.innerHTML=
(hours ? (hours <=9 ? "0" +hours : hours) : "00")+":"+
(minute ? (minute <=9 ? "0" +minute : minute) : "00")+":"+
(second ? (second <=9 ? "0" +second : second) : "00")
calltimer();
}

calltimer=()=>{t=setTimeout(addTime,1000);}

laptimer=()=>{

if(second>0)
{
    let newlap=document.createElement("p");
    lap.appendChild(newlap);
    newlap.innerHTML=
    (hours ? (hours <=9 ? "0" +hours : hours) : "00")+":"+
    (minute ? (minute <=9 ? "0" +minute : minute) : "00")+":"+
    (second ? (second <=9 ? "0" +second : second) : "00")
}
}
stoptimer=()=>{
    clearTimeout(t);
    start.disabled=false;
}

cleartimer=()=>{
    time.textContent="00 : 00 : 00";
    lap.innerHTML="";
    second=0; minute=0; hours=0;
}