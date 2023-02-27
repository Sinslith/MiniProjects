
// prompt enter somethiing ( new list delete quit only valid)
// new add . new prompt to say what to enter . show confirm
// list show list
// delete remove specific item asks index
// quit 


const table=[];
let entry=prompt("What you want to do");

while(entry.toLowerCase()!=="quit")
{
    if(entry.toLowerCase()==="new")
    {
        let entry=prompt("What you want to add");
        table.push(entry);
        console.log("added "+entry);
    }
    else if(entry.toLowerCase()==="list")
    {
        for (let i=0;i<table.length;i++)
        {
            console.log(`${i}: ${table[i]}`);
        }
    }
    else if(entry.toLowerCase()==="delete")
    {
        entry=prompt("what you want to delete");
        if(parseInt(entry)<table.length && parseInt(entry)>=0)
        {
            table.splice(parseInt(entry),1);
            console.log("deleted "+entry);
        }
        else
        {
            console.log("doesnt exist");
        }
        
    }
    else
    {
        console.log("not valid option");
    }
    entry=prompt("What you want to do");

}