const  container=document.querySelector(".container");
const heading=document.querySelector(".heading");
const inputContainer=document.querySelector(".input-container");
const ul=document.querySelector(".ul");
const inputBox=document.querySelector("#input-box");
const ul2=document.querySelector("#after1");

 function addTask(){
    if(inputBox.value===""){
        alert("Enter Something...");
    }else{
        li=document.createElement("li");
        li.innerText=inputBox.value;
        ul.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML.img="cross3.webp";
        li.appendChild(span);
    }
    inputBox.value="";
 };

ul.addEventListener("click",function(evt){
  if(evt.target.tagName==="LI"){
    evt.target.classList.toggle("checked");
 }else if(evt.target.tagName==="SPAN"){
    evt.target.parentElement.remove();
 }   
},false);

 

