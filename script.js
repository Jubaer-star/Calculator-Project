let inputDisplay = document.getElementById("inputDisplay");
let resultDisplay = document.getElementById("resultDisplay");

let expression = "";

function appendCalc(value){
    expression += value;
    inputDisplay.innerText = expression;
}

function clearCalc(){
    expression = "";
    inputDisplay.innerText = "";
    resultDisplay.innerText = "0";
}

function deleteCalc(){
    expression = expression.slice(0,-1);
    inputDisplay.innerText = expression;
}

function calculate(){
    try{
        resultDisplay.innerText = eval(expression);
    }catch{
        resultDisplay.innerText = "Error";
    }
}

let timer = null;
let seconds = 0;

let timeDisplay = document.getElementById("time");

function formatTime(){
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    return (
        String(hrs).padStart(2,'0') + ":" +
        String(mins).padStart(2,'0') + ":" +
        String(secs).padStart(2,'0')
    );
}

function updateTime(){
    timeDisplay.innerText = formatTime();
}

function startTimer(){
    if(timer) return;

    timer = setInterval(()=>{
        seconds++;
        updateTime();
    },1000);
}

function pauseTimer(){
    clearInterval(timer);
    timer = null;
}

function resetTimer(){
    pauseTimer();
    seconds = 0;
    updateTime();
}


