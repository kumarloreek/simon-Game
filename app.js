
let userSequnce=[];
let gameSequence=[];
let started = false;
let btnsCls = ["red","green","blue","yellow"];
let level = 0;
let scor = 0;
let heighScor = 0;
let clickedBtns = document.querySelectorAll(".boxMainInner");

let startBtn = document.querySelector(".startBtn");



startBtn.addEventListener("click",()=>{



    
   
    
    if(started == false){
        level=0;
        scor=0;

        // let span = document.createElement("span");
        // span.classList.add("noOfColore");

        // let noOfColoreP = document.querySelector(".noOfColoreP");
        // noOfColoreP.appendChild(span);





        let levelClass = document.querySelector(".level");
        levelClass.innerText = level;
        let scr = document.querySelector(".score");
        scr.innerText = scor;

        let heighSc = document.querySelector(".heighScoreS");
        heighSc.innerText = heighScor;
        for(btn of clickedBtns){

            let span = document.querySelectorAll(".noOfColore");
             for(el of span){
            el.classList.add("noOfColoreFilled");
             }

            btn.addEventListener("click",pressBtn);
            // let spana = document.createElement("span");
            // spana.classList.add("noOfColore");
    
            // let noOfColoreP = document.querySelector(".noOfColoreP");
            // noOfColoreP.appendChild(spana);
    
        }

        let gameOver = document.querySelector(".gameOver");
        gameOver.innerText="";

        let startedClass = document.querySelector(".startBtn");
        startedClass.classList.add("started"); 
       
        flashBtn();
        started = true;
        // console.log("Game Started");

       
    }

  
});

function levelUp(){
    level++;
    userSequnce=[];
    setTimeout(()=>{
        flashBtn();
    },500);
   
}

function flashBtn(){

    let random = Math.floor(Math.random()*3);
    let randomColor = btnsCls[random];
    let randombtn = document.querySelector(`#${randomColor}`);
    
    randombtn.classList.add(randomColor);
    // console.log(randomColor);
    gameSequence.push(randomColor);
    setTimeout(()=>{
        randombtn.classList.remove(randomColor);
    },500);
}



function flashPressBtn(btn){
    //  console.log(btn.classList[1]);

     if(btn.classList[1] == "one"){
        btn.classList.add("red");
     } else if(btn.classList[1] == "two"){
        btn.classList.add("green");
     } else if(btn.classList[1] == "three"){
        btn.classList.add("blue");
     } else{
        btn.classList.add("yellow");
     }

     setTimeout(()=>{

        btn.classList.remove()
        if(btn.classList[1] == "one"){
            btn.classList.remove("red");
         } else if(btn.classList[1] == "two"){
            btn.classList.remove("green");
         } else if(btn.classList[1] == "three"){
            btn.classList.remove("blue");
         } else{
            btn.classList.remove("yellow");
         }
     },200);

}

function ansCheck(ind){
   

    if(gameSequence[ind] === userSequnce[ind]){
       if(gameSequence.length == userSequnce.length){
        
        levelUp();
        let score  = document.querySelector(".score");
        // score.innerHTML = <b></b>
        let levelClass = document.querySelector(".level");
        levelClass.innerText = level;
        scor +=10;
        let scr = document.querySelector(".score");
        scr.innerText = scor;

       
        // console.log(gameSequence);
        // console.log(userSequnce);
        // // console.log(level);
        // flashBtn();
        // userSequnce=[];
       } 

       
       
    } else{
        // flashBtn();
        // console.log(gameSequence);
        // console.log(userSequnce);
        // console.log("not equal");
        let gameOver = document.querySelector(".gameOver");
        gameOver.innerText="Game Over";
        started = false;
        userSequnce = [];
        gameSequence = [];
        //  console.log(userSequnce);
        //  console.log(gameSequence);
        let startedClass = document.querySelector(".started");
        startedClass.classList.remove("started");
       
        // console.log("Game Over");

        let heighSc = document.querySelector(".heighScoreS");
        if(scor>heighScor){
        heighScor=scor;
        }
        heighSc.innerText = heighScor;
    }
    }

   
function pressBtn(){
    let btn = this;
    
    

    flashPressBtn(btn);
    let color = btn.getAttribute("id");
    userSequnce.push(color);
    // console.log(gameSequence);
    // console.log(userSequnce);

    ansCheck(userSequnce.length-1);
    // console.log(gameSequence)
    // console.log(userSequnce);

}

