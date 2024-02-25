// adding user flash function to track the user activity
 // also updating btn flash function as game flash function
 // those function helps in track the clicking events of the user.
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

// today manipulating arrays gameseq[] and userseq[]

function btnPress() {
    let btn = this;
    console.log(this)
    userFlash(btn);

    userColor = btn.getAttribute("id") ;
    console.log(userColor);
}

// making a check ans function to check sequence is correct or not

function checkAns(idx) {
   
    if(userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            levelUp();
        }

    } else {
        h2.innerText = "Game Over ! Press any key to Start.";
    }

}

function btnPress() {
    let btn = this;
    console.log(this)
    userFlash(btn);

    userColor = btn.getAttribute("id") ;
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

