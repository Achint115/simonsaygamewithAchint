let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let st = document.querySelector(".startgame")
st.addEventListener("click", function() {
    if (!started) {
        console.log("Game has started");
        started = true;
        levelUp();
    }
});

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 500);
}

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);
}

function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
}
function check(idx){
    

    if (userseq[idx]===gameseq[idx]){
        if (userseq.length==gameseq.length) {
        setTimeout(levelUp,1000);
    }
    }else{
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br>please Enter start key</br>`;
        reset();
    }
}


function btnpress(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    check(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    userseq = [];
    gameseq = [];
    started = false;
    level = 0;
}


