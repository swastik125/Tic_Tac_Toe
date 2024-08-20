let boxes= document.querySelectorAll(".box");
let restartButton = document.querySelector('#restartButton');
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn0=true;

const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = ()=> {
    turn0 = true ;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText= "X";
            turn0=true;
        }
        box.disabled=true;
        checkWin();
    });

});
const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }

}
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }

}
const showWinner = (winner)=>{
    msg.innerText= `Congratulation ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


const checkWin= () =>{
    for(pattern of WINNING_COMBINATIONS ){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "" ) {
            if (pos1val== pos2val && pos2val== pos3val){
                console.log("Winner", pos1val);
                showWinner(pos1val);
                disableBoxes();
            }

        }
    }
}
restartButton.addEventListener("click",resetGame)