const trigger=document.querySelector('#trigger');
const trigger1=document.querySelector('#trigger1');
const trigger2=document.querySelector('#trigger2');
const container=document.querySelector('#model');
const closeBtn=document.querySelector('#close');
trigger.addEventListener("click",function(){
    container.classList.add("active");
});
trigger1.addEventListener("click",function(){
    container.classList.add("active");
});
trigger2.addEventListener("click",function(){
    container.classList.add("active");
});
closeBtn.addEventListener("click",function(){
    container.classList.remove("active");
});
