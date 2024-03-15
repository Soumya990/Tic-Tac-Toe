const boxes = document.querySelectorAll(".box");

const winningPatterns = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

let displayWinner = document.querySelector(".w-button");

let newGame = document.querySelector(".new-game");

let ifDraw = document.querySelector("p");

let turnO = true;

let clickCounter = 0;

const disableButtons = () => {
    for(box of boxes)
    {
        box.disabled = true;
    }
}

const enableButtons = () => {
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
    turnO = true;
    displayWinner.innerText = "";
    clickCounter = 0;

    ifDraw.innerText = "WINNER!!!";
    displayWinner.classList.remove("hide");
}

const checkWinners = (()=>{
    for(pattern of winningPatterns)
    {
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2]];

        if(pos1.innerText!="" && pos2.innerText!="" && pos3.innerText!="")
        {
            if(pos1.innerText===pos2.innerText && pos2.innerText===pos3.innerText)
            {
                disableButtons();
                if(pos1.innerText==="O"){
                    displayWinner.classList.add("classO");
                    displayWinner.classList.remove("classX");
                }else{
                    displayWinner.classList.add("classX");
                    displayWinner.classList.remove("classO");
                }
                displayWinner.innerText = pos1.innerText;
            }
        }
    }
    if(clickCounter===9 && displayWinner.innerText==="")
    {
        ifDraw.innerText = "DRAW!!!";
        displayWinner.classList.add("hide");
    }
});

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.classList.remove("classX");
            box.classList.add("classO");
            box.innerText = "O";
            turnO = false;
        }else{
            box.classList.remove("classO");
            box.classList.add("classX");
            box.innerText = "X";
            turnO = true;
        }
        clickCounter++;
        box.disabled = "true";
        checkWinners();
        console.log(clickCounter);
    });
});

newGame.addEventListener("click", enableButtons);  