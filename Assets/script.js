// All of the variables used within the Javascript file
var scoresEl = document.querySelector('.view-scores');
var secondsEl = document.querySelector('.seconds');
var mainTextEl = document.querySelector('.main-text');
var startbtn = document.querySelector('.start-btn');
var timeUpEl = document.querySelector('.times-up');
var instructEl = document.querySelector('.instructions');
var divEl = document.querySelector('.choice');
var but1 = document.querySelector('.btn1');
var but2 = document.querySelector('.btn2');
var but3 = document.querySelector('.btn3');
var but4 = document.querySelector('.btn4');
var boolEl = document.querySelector('.bool');
var inputEl = document.querySelector('.input');
var ppEl = document.querySelector('.pp');
var subBtn = document.querySelector('.sub1');
var clear = document.querySelector('.clear-btn');
var back = document.querySelector('.back-btn');
var time;
var done = false;

// activates timer and counts down until game is over or timer reaches 0, after which changes 
// scenery to the end screen
function timer() {
    time = 60;
    setTime = setInterval(function () {
        secondsEl.textContent = time;
        time--;
        if (time >= 0) {
            if (done) {
                clearInterval(setTime);
                endScreen();
            }
        }
        if (time === 0 || time < 0) {
            clearInterval(setTime);
            timeUpEl.textContent = 'Time\'s up!';
            endScreen();
        }
    }, 1000);
}

// starts the code quiz and timer
function quizStart() {
    timer();
    instructEl.textContent = '';
    startbtn.style.visibility = 'hidden';
    mainTextEl.textContent = '';
    quiz();
}

// displays first quiz question along with the multiple choice answers
function quiz() {
    mainTextEl.textContent = "Commonly used data types DO NOT include:";
    divEl.style.visibility = 'visible';
    but1.textContent = '1.strings';
    but2.textContent = '2.booleans';
    but3.textContent = '3.alerts';
    but4.textContent = '4.numbers';

    but3.onclick = function () {
        boolEl.textContent = 'Correct!';
        quiz2();
    }
    but1.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz2();
    }
    but2.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz2();
    }
    but4.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz2();
    }
}

// displays second quiz question along with the multiple choice answers
function quiz2() {
    mainTextEl.textContent = "The condition in an if/else statement is enclosed within ____.";
    but1.textContent = '1.quotes';
    but2.textContent = '2.curly brackets';
    but3.textContent = '3.parentheses';
    but4.textContent = '4.square brackets';

    but3.onclick = function () {
        boolEl.textContent = 'Correct!';
        quiz3();
    }
    but1.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz3();
    }
    but2.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz3();
    }
    but4.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz3();
    }

}

// displays three quiz question along with the multiple choice answers
function quiz3() {
    mainTextEl.textContent = "Arrays in Javascript can be used to store ____.";
    but1.textContent = '1.numbers and strings';
    but2.textContent = '2.other arrays';
    but3.textContent = '3.booleans';
    but4.textContent = '4.all of the above';

    but4.onclick = function () {
        boolEl.textContent = 'Correct!';
        quiz4();
    }
    but1.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz4();
    }
    but2.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz4();
    }
    but3.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz4();
    }

}

// displays fourth quiz question along with the multiple choice answers
function quiz4() {
    mainTextEl.textContent = "String values must be enclosed within ____ \nwhen being assigned to variables.";
    but1.textContent = '1.commas';
    but2.textContent = '2.curly brackets';
    but3.textContent = '3.quotes';
    but4.textContent = '4.parentheses';

    but3.onclick = function () {
        boolEl.textContent = 'Correct!';
        quiz5();
    }
    but1.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz5();
    }
    but2.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz5();
    }
    but4.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        quiz5();
    }

}

// displays final quiz question along with the multiple choice answers
function quiz5() {
    mainTextEl.textContent = "A very useful tool used during development \nand debugging for printing content to the \ndebugger is:";
    but1.textContent = '1.Javascript';
    but2.textContent = '2.terminal/bash';
    but3.textContent = '3.for loops';
    but4.textContent = '4.console.log';

    but4.onclick = function () {
        boolEl.textContent = 'Correct!';
        done = true;
    }
    but1.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        done = true;
    }
    but2.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        done = true;
    }
    but3.onclick = function () {
        boolEl.textContent = 'Wrong!';
        time -= 10;
        done = true;
    }

}

// Displays final results of the code quiz and allows user to save their score with their initials
// to the local storage
function endScreen() {
    let finalscore = time;
    instructEl.textContent = 'Your final score is ' + finalscore + '.';
    secondsEl.textContent = finalscore;
    inputEl.style.visibility = 'visible';
    ppEl.style.visibility = 'visible';
    divEl.style.visibility = 'hidden';
    boolEl.style.visibility = 'hidden';
    mainTextEl.textContent = 'All Done!';

    subBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var score = inputEl.value + "-" + finalscore;
        localStorage.setItem("score", score);
        scorePage();
    })
}

// User is shown the highscore page where the highscores are stored
function scorePage() {
    divEl.style.visibility = "hidden";
    startbtn.style.visibility = 'hidden';
    mainTextEl.textContent = 'Highscores';
    inputEl.style.visibility = 'hidden';
    ppEl.style.visibility = 'hidden';
    var highscore = localStorage.getItem("score");
    instructEl.textContent = highscore;
    document.querySelector('.options').style.visibility = 'visible';
    clear.addEventListener('click', function () {
        localStorage.clear();
        instructEl.style.visibility = 'hidden';
    })
    back.addEventListener('click', function () {
        location.reload();
    })
}

// The start button that begins the quiz, chaining all the functions
startbtn.addEventListener("click", quizStart);