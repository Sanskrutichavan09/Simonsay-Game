let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let Level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is startrd");
        started = true;

        levelup();
    }
});


function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 150);

}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 150);

}
function levelup() {
    userSeq =[];
    Level++;
    h2.innerText = `Level ${Level};`

    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randbtn);

}
function checkans(idx) {
// let idx = Level-1;

if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
       setTimeout(levelup,1000);
    }
}else {
    h2.innerHTML = `Game Over! your score was  <b> ${Level}</b> <br>
    press any key to start.`;
   
     document.querySelector("body").style.backgroundColor = "red";
     document.querySelector("body").style.Color = "red";

     setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.Color = "black";
        
    }, 250);
    reset();
}

}

function btnpress() {

    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (button of allbtns) {
    button.addEventListener("click", btnpress);
}



function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    Level = 0;
    
}
