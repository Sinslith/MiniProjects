// prompt enter number 
// too low if number low 
// too high if number high
// counts guesses
// q quits the game

let input=prompt("enter a number");
let number =30;
let count=0;
while (input!=="q")
{
    count+=1;
 if (input<number)
 {
    input=prompt("too low");
    
 }
 else if(input>number)
 {
    input=prompt("too high")
    
 }
 else if(input==number)
 {
    console.log(`you won it just took you ${count} tries`);  
    
    break;
 }
 else
 {
    input=prompt("not a number");
    
 }

}

if (input==="q")
{
    console.log("quiter after "+count+ " tries");
}