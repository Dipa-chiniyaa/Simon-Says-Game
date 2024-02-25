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
        h2.innerText = "Game Over ! Press any key to Start.";
    }

}
