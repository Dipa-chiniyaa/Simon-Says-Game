let gameSeq = [];
let userSeq = [];
let highScore = 0 ;

let btns = ['yellow','purple', 'red', 'green']; // manipulating the buttons by their classes

let started = false ;
let level = 0 ;

let h2 = document.querySelector("h2");

document.addEventListener('keypress', function () {
    if(started == false) {
        console.log("game has started.");
        started = true ;

        levelUp();

    }
});

function userFlash(btn) {
    btn.classList.add("userFlash"); 
    setTimeout(function() {
        btn.classList.remove("userFlash")
     }, 250);
}

function gameFlash(btn) {
    btn.classList.add("flash"); 
    setTimeout(function() {
        btn.classList.remove("flash")
     }, 250);
}

function levelUp() {
    userSeq = [];
    level ++ ;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);  
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randbtn);

}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    } else {
        if(level > highScore) {
            highScore = level;
        }
        h2.innerHTML = `Game Over !Your score was <b>${level}</b><br>High Score : ${highScore} <br> Press any key to Start.`;
        document.querySelector('body').style.backgroundColor = "Red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }

}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;

}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id") ;
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}


let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}

