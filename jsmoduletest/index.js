buttons=document.querySelectorAll(".buttons > .image");


window.onload = function() {
   let cscore=localStorage.getItem("cscore") || 0;
   let yscore=localStorage.getItem("yscore") || 0;

   document.getElementById("cscore").textContent = cscore;
   document.getElementById("yscore").textContent = yscore;

}
buttons.forEach(button => {
    button.addEventListener("click",function(e) {
        
        const randomIndex = Math.floor(Math.random()*buttons.length);
        console.log(e.target.id)
        let cchoice=buttons[randomIndex];
        console.log(cchoice)
        let computerselement=document.querySelector(".computerselement")
        let yourselement=document.querySelector(".yourselement")

        document.querySelectorAll(".image").forEach(element => {
            element.style.display="none"
           });
           document.querySelectorAll(".lines").forEach(element => {
            element.style.display="none"
           });
    
        
        yourselement.src=e.target.src
        yourselement.style.width="100px"
        yourselement.style.height="100px"
        yourselement.style.border="10px solid" 
        yourselement.style.borderRadius="50%"
        yourselement.style.boxShadow=" 20px 20px 20px 20px #279b27";
        yourselement.style.backgroundColor="white"
        document.getElementById("yourselementtitle").textContent = "You selected"

        document.getElementById("computerselementtitle").textContent = "Computer selected"
        computerselement.src=cchoice.src
        computerselement.style.width="100px"
        computerselement.style.height="100px"
        computerselement.style.border="10px solid" 
        computerselement.style.borderRadius="50%"
        computerselement.style.outline="10px solid #2E9A2563"
        computerselement.style.backgroundColor="white"
        
        if(cchoice.id =="rayi"){
            computerselement.style.borderColor="#0074B6"
        }
        if (cchoice.id=='kattera'){
            computerselement.style.borderColor="#BD00FF"
        }
        if (cchoice.id=='paper'){
            computerselement.style.borderColor="#FFA943"
        }

        if(e.target.id =="rayi"){
            yourselement.style.borderColor="#0074B6"
        }
        if (e.target.id=='kattera'){
            yourselement.style.borderColor="#BD00FF"
        }
        if (e.target.id=='paper'){
            yourselement.style.borderColor="#FFA943"
        }



        refresh=document.createElement('button')
        refresh.textContent = 'play again'
        
        refresh.addEventListener('click',function(){
            location.reload()
        })
        
        refresh.style.backgroundColor = 'transparent'

        refresh.style.borderColor = 'white'
        refresh.style.color="white"

        refresh.onmouseenter = function(){
            refresh.style.backgroundColor = 'blue';
            
        }

        refresh.onmouseleave = function(){
            refresh.style.backgroundColor = 'transparent';
        
        }

        document.getElementById('refreshButton').appendChild(refresh)
        
        document.getElementById('refreshButton').style.display = 'flex'

        document.getElementById('refreshButton').style.justifyContent = 'center'

        document.getElementById('refreshButton').style.alignItems= 'center'


        

      
       
     
       
        

        if (
            (cchoice.id =="rayi" && e.target.id=="kattera") ||
            (cchoice.id =="kattera" && e.target.id=="paper") || 
            (cchoice.id =="paper" && e.target.id=="rock")){

            console.log("c win");
            compueterscore=document.getElementById("cscore")
            cscorei=Number(document.getElementById("cscore").textContent)
            cscorei++;
            localStorage.setItem("cscore",cscorei);
            compueterscore.innerHTML = cscorei
           
        }
        else if (cchoice.id===e.target.id){
            console.log("draw")
           
        }        
        else{

            console.log("y win")
            yourscore=document.getElementById("yscore")
            yscorei=Number(document.getElementById("yscore").textContent)
            yscorei++
            localStorage.setItem("yscore",yscorei)
            yourscore.innerHTML = yscorei
        }

})});

















