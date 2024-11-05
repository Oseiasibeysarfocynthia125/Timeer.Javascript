let hours =0;
let minutes = 0;
let seconds = 0;

 function startTimer(){
    timerInterval = setInterval(function(){
        seconds++
        if(seconds==60){
            seconds=0;
            minutes++
        }
        if(minutes==60){
            minutes=0;
            hours++
        }
        let formattedTime = hours+':'+minutes+':'+seconds+'';
        document.getElementById('timeUpdate').innerHTML=formattedTime;
    },1000);

 }
 function stopTimer(){
    clearInterval(timerInterval);
 }

 function resetTimer(){
    hours=0;
    minutes=0;
    seconds=0;
    document.getElementById('timeUpdate').innerHTML='00:00:00';
 }

 function formattedTime(time){
    if(time<10){
        return '0'+time;
    }
    return time;
 }
 document.getElementById('btnStart').onclick = startTimer;
 document.getElementById('btnStop').onclick = stopTimer;
 document.getElementById('btnReset').onclick = resetTimer;


