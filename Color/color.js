const butn=document.querySelector("#butnz");
// const bodyz=document.querySelector("body");
const title=document.querySelector(".content")

butn.addEventListener("click",()=>{
    
    const paint=makecolor();
    document.body.style.backgroundColor=paint;
    title.innerText=paint;

})


const makecolor=function(){
    const red=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    if (red+blue+green<170)
    {
        title.style.color="white";
    }
    else
    {
        title.style.color="black";
    }
    return `rgb(${red},${blue},${green})`;
}

class pet{
    constructor(xronia)
    {
        this.xronia=xronia;
    }
}

class cat extends pet{
    constructor(name,age,xronia)
    {
        super(xronia);
        this.name=name;
        this.age=age;
    }
    meow()
    {
        const {age,name,xronia}=this;
        return `${name} is eating ${xronia}`;
    }
}