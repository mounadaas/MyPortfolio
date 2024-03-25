
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





    //===================Contact form =================
    
    const contactForm = document.querySelector(".contact-form")
const fullNameInput = document.querySelector("#fullName")
const emailAddressInput = document.querySelector("#emailAddress")
const subjectInput = document.querySelector("#subject")
const messageInput = document.querySelector("#message")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailMessage = getEmailMessage({
        fullName: fullNameInput.value,
        emailAddress: emailAddressInput.value,
        message: messageInput.value,
        subject: subjectInput.value,
    })

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "mounadaas19@gmail.com", // replace it with your email address (the email you want to receive messages at)
            subject: "Message From Contact Form",
            message: emailMessage,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fullNameInput.value = ""
            emailAddressInput.value = ""
            subjectInput.value= ""
            messageInput.value = ""
        })
        console.log("data submitted")
       

    })
    
    const getEmailMessage = ({ fullName, emailAddress, message, subject } = {}) => {
        return `
        <p>You have received a new message from your contact form website:</p>
        <div style="background-color:  #7950f2; color: #fbfbfb; padding: 12px">
        <p style="margin: 0;">fullName: ${fullName}</p>
        <p style="margin: 12px 0;">emailAddress: ${emailAddress}</p>
        <p style="margin: 12px 0;">subject: ${subject}</p>
        <p style="margin: 0;">message: ${message}</p>
        </div>
        `
}
    

