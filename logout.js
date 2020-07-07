
var logOut=document.getElementById("logOut");



logOut.addEventListener('click',function(e){
    e.preventDefault()
        localStorage.clear(); //but clear>>remove all item. 
        sessionStorage.clear();

    location.href="index.html";
}); 


