// Select element by class
var timeEl = document.querySelector(".time");
// Select element by id
var mainEl = document.getElementById("main")
var secondsLeft = 6;

function setTime(){
    // set interval in variable
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + "seconds left till colorsplosion.";  
        
        if(secondsLeft === 0){
            // Stope execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();

        }
    }, 1000);
}

// Function Calls to create and append colorsplosion image
function sendMessage() {
    timeEl.textContent = "  ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/");
    mainEl.appendChild(imgEl);
}

setTime();
