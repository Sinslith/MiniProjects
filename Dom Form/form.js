const form= document.querySelector("#doitbob");
const inputs=document.querySelector("#names");
const list=document.querySelector("#cats");
form.addEventListener("submit",function(e){
e.preventDefault();
const naming=inputs.value;
const newLi=document.createElement("li");
newLi.innerText=naming;
list.append(newLi);
inputs.value="";
// list.append("hello");
});


