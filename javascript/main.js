
// typing animation 
let typed = new Typed(".typing",{
    strings:["","Frontend Developer"],
    typeSpeed: 20,
    BackSpeed:30,
    loop:true
})

/*َ==============navbar======================= */
let nav = document.querySelector(".nav-bar"),
navlist= nav.querySelectorAll("li"),
totalNavlist = navlist.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i< totalNavlist; i++)
{
    let a= navlist[i].querySelector("a")
    a.addEventListener("click",function()
    {
       removeBackSection();
        for(let j=0; j< totalNavlist; j++){
            if(navlist[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
                // allSection[j].classList.add("back-section");  
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200){
            navSectionTogleBtn();
        }
    })
}
function removeBackSection(){
    for(let i=0; i< totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
allSection[num].classList.add("back-section");  

}
/*  */
function showSection(elem) {
    for(let i=0; i< totalSection; i++){
        allSection[i].classList.remove("active");
    }
    let target = elem.getAttribute("href").split("#")[1];   
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(elem){
    for(let i=0; i<totalNavlist; i++){
        navlist[i].querySelector("a").classList.remove("active")
        let target = elem.getAttribute("href").split("#")[1];  
        if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navlist[i].querySelector("a").classList.add("active")
        }
    }
    
}
document.querySelector(".hire-me").addEventListener("click", function(){
    let sectionIndex = this.getAttribute("data-section-index")
    showSection(this)
    updateNav(this)
    removeBackSection();
    addBackSection(sectionIndex);
})

let navTogleBtn = document.querySelector(".menu");
navTogleBtn.addEventListener("click", ()=>{
    navSectionTogleBtn();
})
function navSectionTogleBtn(){
    nav.classList.toggle("open");
    navTogleBtn.classList.toggle("open");
    for( let i=0; i< totalSection;i++){
        allSection[i].classList.toggle("open")
    }
}