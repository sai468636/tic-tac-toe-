let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn =true;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText ="X";
            turn =true;
        }
        box.disabled = true;
        checkwinner();
        isdraw();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}

const showwinner = (winner) => {
   msg.innerText = `Congragulations, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disableboxes();
}

const isdraw = () => {
    let x=0;
    for(let box of boxes){
        if(box.innerText == ""){
            x=1;
        }
    }
    if(x==0){
        
    }
}

const checkwinner =() =>{
    for(let pattern of winpatterns){
        console.log(pattern);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
};

const resetGame = () => {
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);