let card=[]
let sum=0;
let isAlive = false
let Blackjack=true;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-cards")
let cardsEl=document.querySelector('#cards-el');
let btn=document.getElementById('new-btn');
let newp=document.querySelector('.new-para');
let winner=document.querySelector('#win');



//working with objects
// // let player=function(name){
// //     PlayerName:name,
// //     Chips:"$150"
// // }
// let Name=prompt("Enter your name: ");
// let player={
//     chips:"$150",
//     myfunc:function(){
//         winner.textContent("WINNER"+" "+Name+" "+chips)
//     }
// }


function randomCard(){
    let a=Math.floor(Math.random()*13)+1;   
    if(a===1){
        return 11;
    }
    else if(a>10){
        return 10;
    }
    else{
        return a;
    }
}
btn.addEventListener('click',()=>{
    let newCardValue=randomCard();
    arr.push(newCardValue);
    

    //it waits for some seconds and execute the function
    setTimeout(function(){
        if(isAlive==true && Blackjack==false){
            newp.textContent="New Card Value is "+newCardValue;
            sum+=newCardValue;
            sumEl.textContent="Sum: "+sum;  
            renderGame();
        }
        return;
    },2000) 
      
})

//this will start 
const startGame=()=>{
    let firstCard =randomCard();
    let secondCard = randomCard();
    arr=[firstCard,secondCard];
    sum = firstCard + secondCard
    isAlive=true;
    renderGame();
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent="Cards: ";
    const card=document.querySelector('#cards-el');
    for(let x of arr){
        card.textContent+=x+" ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        Blackjack=false;
        isAlive=true;
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        Blackjack=false 
    }
    messageEl.textContent = message


}

