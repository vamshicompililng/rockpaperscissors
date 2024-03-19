let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const user_scorepara=document.querySelector("#user_score");
const computer_scorepara=document.querySelector("#computer_score");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       console.log("choice was clicked",userchoice);
       playgame(userchoice);
    });
});
const drawgame=()=>{
    // console.log("game is draw");
    msg.innerText="Game is Draw";
    msg.style.backgroundColor="black";
}
const playgame=(userchoice)=>{
   console.log("userchoice =" ,userchoice);
   const compchoice=gencomputer();
   console.log("comp choice = ",compchoice);
   // generate compute choice

   if(userchoice==compchoice){
    //draw condition;
    drawgame();
   }
   else{
    let userwin=true;
    if(userchoice==='rock'){
        //scissors,paper
      userwin= compchoice==='paper'?false:true;
    }
    else if(userchoice==='paper'){
        //rock,scissor
       userwin= compchoice==='scissors'? false:true;
    }
    else{
        //rock,paper
        userwin=compchoice==='rock'?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
   }
};
const gencomputer=()=>{
    //rock ,paper,scissors
    const options=['rock','paper','scissors'];
    
    const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];
}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        user_scorepara.innerText=userscore
        console.log("you win!!!");
        msg.innerText=`You Won!!!.  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        computer_scorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`You Lost. ${compchoice} beats Your  ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}