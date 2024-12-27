let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgdiv = document.querySelector(".msg");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");

var count = 0;

let turn1 = true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkwin = () => {
    for(let pattern of winpattern){
        let val1 = boxes[pattern[0]].innerText; 
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "" ){
            if(val1 == val2 && val2 == val3){
                console.log("winner");
                showWinner(val1);
            }
        }

    }
}

const showWinner = (winner) => {
    msg.innerText = `The Winner is ${winner}`;
    msgdiv.classList.remove("hide");
    disableAllBox();
}

const drawMsg = () => {
    msg.innerText = " The match ends in a DRAW";
    msgdiv.classList.remove("hide");
    disableAllBox();
}

const disableAllBox = () => {
    boxes.forEach((box) =>{
        box.disabled = true;
    });
}

const enableAllBox = () => {
    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;    
    });
    
}
 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn1){
            box.innerText = "X";
            turn1 = false;
        }
        else{
            box.innerText = "O"
            turn1 = true;
        }
        count += 1; 
        // console.log(count);
        if(count == 9){
            drawMsg();
        }
        box.disabled = true;
        checkwin();
    });
});

const reset = () => {
    enableAllBox();
    turn1 = true;
    count = 0;
    msgdiv.classList.add("hide");
}



resetbtn.addEventListener("click" , reset);
newgame.addEventListener("click" , reset);



