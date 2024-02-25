let gameSeq = [];
let userSeq = [];

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
    btn.classList.add()    
}

function btnFlash(btn) {
    btn.classList.add("flash"); 
    setTimeout(function() {
        btn.classList.remove("flash")
     }, 250);
}

function levelUp() {
    level ++ ;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);  
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    btnFlash(randbtn);

}

function btnPress() {
    let btn = this;
    btnFlash(btn);
}






/**
 * ---------------------------Date : 18 - 02 - 24 (11:31 AM)---------------------------
 * 
 * 
 * let gameSeq = [];
let userSeq = [];

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

function btnFlash(btn) {
    btn.classList.add("flash"); 
    setTimeout(function() {
        btn.classList.remove("flash")
     }, 250);
};

function levelUp() {
    level ++ ;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);  
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);
    btnFlash(randbtn);

}


 * ------------------------------------------------------------------------------------
 */


/**
 * ------------------------------Date : 25 - 02 - 24 (08:54 AM)----------------------------------
 * 
 * 
 * // by now first start with previous lecture on button event listener
 * // adding btn press funtion
 * // adding user flash function to track the user activity
 * 
 *  
 * 
 * 
 * // today manipulating arrays gameseq[] and userseq[]
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * ----------------------------------------------------------------------------------------------
 */