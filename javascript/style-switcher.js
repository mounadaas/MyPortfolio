/* start style switcher */

let styleSwitcherToggle = document.querySelector(".style-swicher-toggler")
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-swicher").classList.toggle("open")
})
// hide style switcher if i scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-swicher").classList.contains("open"))
    {
        document.querySelector(".style-swicher").classList.remove("open")
    }
})

//change theme color
let alternatStyle = document.querySelectorAll(".alternate-style")
function setActiveStyle(color){

        alternatStyle.forEach((s)=>{
            if(color === s.getAttribute("title"))
            {
                s.removeAttribute("disabled")
            }
            else{
                s.setAttribute("disabled", "true")
            }
        }
)
}

//change light and dark mode
let dayNight = document.querySelector(".day-nghit-icon");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")


})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})
