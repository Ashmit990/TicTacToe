
let boxes=document.querySelectorAll(".box");
let result=document.querySelector(".result");
let reset=document.querySelector(".reset");
let Btn=document.querySelector(".btn");
let para=document.querySelector(".h2");
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];
let turnO=true;

function resetGame() {
    document.querySelector(".container").classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = false;  
        box.innerHTML = "";   
    });
    para.classList.add("hide");  
    Btn.classList.add("hide");
    gameOver = false;            
    turnO = true;
}

       
    document.querySelector(".ai").addEventListener("click",

      
        
        function withAI(){
       
            
          
        document.querySelector(".hidee").classList.remove("hidee");
        document.querySelector("h3").innerHTML=`AI Mode`

    let gameOver=false;
    
    boxes.forEach((box) => {
        box.addEventListener("click", showSymbol = () => {
            if (turnO&&!gameOver) {
                box.innerHTML = "O";
                turnO = false;
                box.disabled = true;
                showWinner();
    
                
                if (!turnO&&!gameOver) {
                    setTimeout(() => {
                        aiMove();
                    }, 1000);
                    
                }
            }
        });
    });
    
    
    showWinner=()=>{
        let boxIndex=Array.from(boxes);
        for(let i=0; i<winningPattern.length; i++){
    
            let [a,b,c]=winningPattern[i];
            let symbol1=boxIndex[a].innerHTML;
            let symbol2=boxIndex[b].innerHTML;
            let symbol3=boxIndex[c].innerHTML;
    
            if(symbol1&&symbol1===symbol2&&symbol2===symbol3){
                para.classList.remove("hide");
                para.innerHTML=`Winner is ${symbol1}!`
                gameOver=true;
               
                resetFunction();
                return;
               
                    }
                }
                tieResult(); 
            }
       
         resetFunction = () => {
        Btn.classList.remove("hide");
        Btn.addEventListener("click", () => {
            boxes.forEach((box) => {
                box.disabled = false;  
                box.innerHTML = "";   
            });
            para.classList.add("hide");  
            Btn.classList.add("hide");   
            gameOver = false;            
            turnO = true;                
        }, { once: true });  
    };
                tieResult = () => {
                let allFilled = Array.from(boxes).every(box => box.innerHTML != "");
                if (allFilled) {
                    para.classList.remove("hide");
                    para.innerHTML = `It's a Tie!`;
                    gameOver=true;
                    resetFunction();
                }
            }
            function aiMove() {
                let boxIndex = Array.from(boxes);
            
                
                function findBestMove(symbol) {
                    for (let i = 0; i < winningPattern.length; i++) {
                        let [a, b, c] = winningPattern[i];
                        let values = [boxIndex[a].innerHTML, boxIndex[b].innerHTML, boxIndex[c].innerHTML];
            
                       
                        if (values.filter(value => value === symbol).length === 2 && values.includes("")) {
                            return [a, b, c].find(index => boxIndex[index].innerHTML === "");
                        }
                    }
                    return null;
                }
            
              
                let move = findBestMove("X");
                if (move !== null) {
                    boxIndex[move].innerHTML = "X";
                    turnO = true;  
                    boxIndex[move].disabled = true;
                    showWinner();  
                    return;
                }
            
                
                move = findBestMove("O");
                if (move !== null) {
                    boxIndex[move].innerHTML = "X";
                    turnO = true;
                    boxIndex[move].disabled = true;
                    showWinner(); 
                    return;
                }
            
                
                let availableBoxes = boxIndex.filter(box => box.innerHTML === "");
                if (availableBoxes.length > 0) {
                    let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
                    randomBox.innerHTML = "X";
                    turnO = true;  
                    randomBox.disabled = true;
                    showWinner();  
                }
            }
           
    })







 document.querySelector(".person").addEventListener("click", function twoPlayer(){

   
   

      document.querySelector(".hidee").classList.remove("hidee");
        document.querySelector("h3").innerHTML=`Two-Player Mode`
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
            }
            box.style.pointerEvents = "none"; 
            winner(); 
            
        });
       
    });
    
    function winner() {
        let isWinner = false;
        for (let i = 0; i < winningPattern.length; i++) {
            let [a, b, c] = winningPattern[i];
            let symbol1 = boxes[a].innerHTML;
            let symbol2 = boxes[b].innerHTML;
            let symbol3 = boxes[c].innerHTML;
    
            if (symbol1 && symbol1 === symbol2 && symbol2 === symbol3) {
                result.innerHTML = `<h2>Winner is ${symbol1}</h2>`;
                disable();
                resets();
                isWinner = true;
                break;
               
              
            }
        }
        if (!isWinner) {
            let allFilled = Array.from(boxes).every(box => box.innerHTML !== "");
            if (allFilled) {
                result.innerHTML = `<h2>It's a Tie!</h2>`;
                disable();
                resets();
            }
        }
        
    }
    
    disable=()=>{
        boxes.forEach((box)=>{
            box.style.pointerEvents = "none"; 
        })
    }
    enable=()=>{
        boxes.forEach((box)=>{
            box.style.pointerEvents = "auto"; 
            box.innerHTML="";
           
        })
        reset.innerHTML="";
        result.innerHTML="";
    }
    resets=()=>{
        let btn=document.createElement("button");
        btn.innerText="Reset"
        btn.addEventListener("click",()=>{
           enable();
        })
        reset.append(btn);
     
    
    
    
    }

        
    }

  



)