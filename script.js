var timer = 6;
var score = 0;
var hitrn = 0;

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function scoreAdd(){
 score += 10;
 document.querySelector("#scoreval").innerHTML = score;

}

function makeBubble(){ 
    
    let clutter='';

    for(let i=1; i<=208; i++){
     var rn =Math.floor(Math.random()*10);
     clutter += `<div class="bubble">${rn}</div>`;
     
    }
    document.querySelector(".btm").innerHTML = clutter;
}

function runTimer(){
  var timerr = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timval").textContent = timer;
    }
    else{
        clearInterval(timerr);
        // document.querySelector(".btm").textContent = '';
        document.querySelector(".btm").innerHTML = `<h1>Game Over</h1>`;
    }
   },1000);
}

document.querySelector(".btm").addEventListener("click", function(dets){
 var clickedNum = Number(dets.target.textContent);
 if(clickedNum === hitrn){
    scoreAdd();
    makeBubble();
    getNewHit();
 }
})



runTimer();
makeBubble();
getNewHit();