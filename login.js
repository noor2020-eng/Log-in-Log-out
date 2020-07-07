
var logIn=document.getElementById("logIn");
const input=[];
var object={};


logIn.addEventListener('click',function(e){

    e.preventDefault()

        object={

            email:document.getElementById("email").value,
            password:document.getElementById("password").value
           
        };
        
       
        location.href="home.html";
          
});



logIn.addEventListener('click',function(e){
    e.preventDefault()
            localStorage.setItem(object.email,JSON.stringify(object));
            sessionStorage.setItem(object.email,JSON.stringify(object));
        
    
});







   

  