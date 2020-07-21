// Timer
const states = {
    startTime: 0,
    timerRuns: 1,
    timerStopped: 2
}
var defaultTime = "00:00:00";
var startTime;
var currentState = states.startTime;

function changeTime(time) {
    document.getElementById("timer").innerHTML=time;
}

changeTime(defaultTime);

document.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        timer();
    }
});

function timer(){
    if(currentState == states.startTime){
        currentState = states.timerRuns;
        startTime = new Date();
        timerRuns();
    } else if (currentState == states.timerRuns) {
        currentState = states.timerStopped;
    } else {
        currentState = states.startTime;
        changeTime(defaultTime);
    }
    console.log(currentState);
}
function timerRuns(){
    if(currentState == states.timerRuns){

        let timerTime = new Date(new Date() - startTime);

        let timerHours = updateTime(timerTime.getUTCHours());
        let timerMinutes = updateTime(timerTime.getUTCMinutes());
        let timerSeconds = updateTime(timerTime.getUTCSeconds());
    
        changeTime(timerHours + ":" + timerMinutes + ":" + timerSeconds);
    
        setTimeout(function(){ timerRuns() }, 1);
    }
}

function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
 
    else {
      return k;
    }
}




