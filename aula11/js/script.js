const showHide = document.getElementById("show-hide")
const pass = document.getElementById("pass")

showHide.addEventListener("click", function(){
    if(pass.type == "password"){
        pass.type = "text"
        showHide.innerHTML = "esconder"
    }
    else {
         pass.type = "password"
    showHide.innerHTML = "mostrar"
    }

})