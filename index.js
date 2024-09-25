const submit = document.getElementById("submit-btn")
const menu = document.querySelector(".navbar-menu")
const link = document.querySelectorAll("li")

submit.addEventListener("click",function(e){
    e.preventDefault()

    if(menu.classList.contains("hidden"))
        { menu.classList.remove("hidden")}
    else{
        menu.classList.add("hidden")
    }    
})

link.forEach( li => li.addEventListener("click", function(){
    
        menu.classList.add("hidden")
    
}))