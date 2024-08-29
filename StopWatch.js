const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0; 
let intervalID;

//Function to start the Timer
const startTimer = () => {
    intervalID = setInterval(() => {
        countDownElement.innerText = startCount++;
    }, 1000); 
};

//Function to Stop the Timer
const stopTimer = () => {
    clearInterval(intervalID);
};

//Function to Reset the Timer
const resetTimer = () => {
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval(intervalID);
    clearTimeValue();
};

//Function to Get the Time Value
const showStopValue = () => {
    const newPara = document.createElement("p");
    newPara.innerText = `The stop time is ${startCount -1}`;
    resetValueElement.append(newPara);
};

//Function to Clear the Time 
const clearTimeValue = () => {
    resetValueElement.innerHTML = " ";
};


//Event Listeners
document
.querySelector(".start_btn")
.addEventListener("click", startTimer);

document
.querySelector(".reset_btn")
.addEventListener("click",resetTimer);

document
.querySelector(".stop_btn")
.addEventListener("click", stopTimer);

document
.querySelector(".time_btn")
.addEventListener("click",showStopValue);

document
.querySelector(".clear_btn")
.addEventListener("click",clearTimeValue);