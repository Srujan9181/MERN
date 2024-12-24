let cscreen=document.getElementById("item")
values=document.getElementsByClassName("val");
[...values].forEach((item)=>{
    item.addEventListener("click", function(e){
        cscreen.innerHTML+=e.target.innerHTML;
    }
)
})

function answer(){
    cscreen.innerHTML=eval(cscreen.innerHTML)
}

function clearscr(){
    cscreen.innerHTML="";
}



