

const diver=document.querySelector("#container");


for(let i=1;i<=151;i++)
{
    const pokemon=document.createElement("div");
    const imgz=document.createElement("img");
    imgz.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    const spanner=document.createElement("span");
    spanner.innerText=`${i}`;
    diver.appendChild(pokemon);
    pokemon.appendChild(imgz);
    pokemon.appendChild(spanner);
    pokemon.style.display="inline-block";
    pokemon.style.textAlign="center";
    imgz.style.display="block";
}

const btn=document.querySelector("#lol");

function scream(){
    console.log("aaaaahhh");
}

btn.onclick=scream;

const btn2=document.querySelector("#lol2");
btn2.addEventListener("click",function(){

    alert("hello");
})