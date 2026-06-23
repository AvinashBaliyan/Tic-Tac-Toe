let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newbtn=document.querySelector(".newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

// for turn of the player
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];

    const resetGame=()=>{
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
        newbtn.classList.add("hide");
        for(let box of boxes){
            box.innerText="";
        }
    };
  
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     console.log("clicked");
     if(turnO){
        box.innerText="O";
        turnO=false;
     }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWin();
    });
});


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}



const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWin=(winner)=>{
    msg.innerText=`Congratulation❤️ ${winner} You won the Game`;
    msgContainer.classList.remove("hide");
    newbtn.classList.remove("hide");
    disableBoxes();
}

const showDraw=()=>{
    msg.innerText=`It's a Draw! 🤝`;
    msgContainer.classList.remove("hide");
    newbtn.classList.remove("hide");
    disableBoxes();
}

const checkWin=()=>{
    for(let pattern of winPatterns){
        let pasval1=boxes[pattern[0]].innerText;
        let pasval2=boxes[pattern[1]].innerText;
        let pasval3=boxes[pattern[2]].innerText;
        if(pasval1!=""&&pasval2!=""&&pasval3!=""&&pasval1===pasval2&&pasval2===pasval3){
        console.log("Winner 🥇",pasval1);
        showWin(pasval1);
        return;
        }
    }
    // Check for draw
    let isBoardFull = Array.from(boxes).every(box => box.innerText !== "");
    if(isBoardFull){
        showDraw();
    }
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);