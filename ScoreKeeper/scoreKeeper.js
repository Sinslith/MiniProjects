const one=document.querySelector("#one");
const two=document.querySelector("#two");
const reset=document.querySelector("#reset");
const h1=document.querySelector("#score");
const round=document.querySelector("#rounds");
let count1=0;
let count2=0;
let rounds=4;
let gameover=false;
// const rounds=round.addEventListener("click",function(e){
//     const rounds=round.value;
//     // console.log(rounds);
//     return rounds;
// })
// console.log(rounds);
one.addEventListener("click",function(){
    count1++;
    if(!gameover)
    {
    if(count1<rounds){  
        h1.innerText=`${count1} to ${count2}`;
    }
    else
    {
        gameover=true;
        h1.innerText=`${count1} to ${count2} player 1 won`;
        one.disabled=true;
        two.disabled=true;
        
    }
}
});

two.addEventListener("click",function(){
    count2++;
    if(!gameover)
    {
    if(count2<rounds){  
        h1.innerText=`${count1} to ${count2}`;
    }
    else
    {
        gameover=true;
        h1.innerText=`${count1} to ${count2} player 2 won`;
        one.disabled=true;
        two.disabled=true;
    }
}
});

reset.addEventListener("click",function(){
   wipe();
});

function wipe(){
    count1=0;
    count2=0;
    gameover=false;
    one.disabled=false;
    two.disabled=false;
    h1.innerText=`${count1} to ${count2}`;
}

round.addEventListener("change",function()
{
    rounds=parseInt(this.value);
    console.log(rounds);
    wipe();
})