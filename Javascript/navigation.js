console.log("Animation file online")

function loadingAnim() {
    gsap.from("#landHeader", {
        duration: 1,
        opacity: 0,
        y: 200,
    })
    gsap.from(".app__layout_navigation", {
        duration: 1,
        opacity: 0,
        y: -200,
    })
}
loadingAnim()

function transitions() {
// sections
const landingComp = document.getElementById("landingComp");
const workComp = document.getElementById("workComp");
const aboutComp = document.getElementById("aboutComp");
const contactComp = document.getElementById("contactComp");
const resumeComp = document.getElementById("resumeComp");

const scalableComponents = document.querySelectorAll(".scalableComponent")
//navigation 
const home = document.getElementById("nHome");
const work = document.getElementById("nWork");
const about = document.getElementById("nAbout");
const contact = document.getElementById("nContact");
const resume = document.getElementById("nResume")

const navItems = document.querySelectorAll(".app__nav_item"); 

window.addEventListener("resize", () => {
    if(window.innerWidth > 830) {
        navItems.forEach(item => item.style.marginTop = "0%");
        largeSection.style.width = "80%";
        smallSection.style.width = "20%";
        smallSection.style.display = "block";
    } else {
        navItems.forEach(item => item.style.marginTop = "50%"); 
        largeSection.style.width = "100%";
        smallSection.style.width = "0%";
        smallSection.style.display = "none";
    }
})

home.addEventListener("click", () => {
    gsap.from("#landHeader", {
        duration: 1,
        opacity: 0,
        x: 20,
    })
    if(window.innerWidth < 830) {
        console.log("Mobile device detected")
        scalableComponents.forEach(comp => comp.style.display = "none")
        scalableComponents.forEach(comp => comp.style.color = "#3a3a3a")

        navItems.forEach(item => item.style.display = "block")
        navItems.forEach(comp => comp.style.fontWeight = "900")
        navItems.forEach(comp => comp.style.letterSpacing = "0px")
        navItems.forEach(comp => comp.style.fontSize = "4vw")
        navItems.forEach(comp => comp.style.transform = "rotate(0deg)")
        navItems.forEach(comp => comp.style.marginTop = "50%")

        home.textContent = "HOME"; 
        landingComp.style.display = "block";
    } else {
        console.log("Desktop/Tablet detected")
        scalableComponents.forEach(comp => comp.style.display = "none")
        scalableComponents.forEach(comp => comp.style.color = "#3a3a3a")
        navItems.forEach(item => item.style.display = "block")

        navItems.forEach(comp => comp.style.fontWeight = "900")
        navItems.forEach(comp => comp.style.letterSpacing = "0px")
        navItems.forEach(comp => comp.style.fontSize = "4vw")
        navItems.forEach(comp => comp.style.transform = "rotate(0deg)")
        navItems.forEach(comp => comp.style.marginTop = "0")
        
        home.textContent = "HOME"; 
        landingComp.style.display = "block";
    }

})

work.addEventListener("click", () => {
    gsap.from("#wHeader", {
        duration: 1,
        opacity: 0,
        x: -20,
    })
    gsap.from("#wDescriptor1", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        x: -20,
    })
    gsap.from("#wDescriptor2", {
        delay: 1,
        duration: 1,
        opacity: 0,
        x: -20,
    })

    workComp.style.display = "block";
    landingComp.style.display = "none";
    home.textContent = "BACK";
    work.style.color = "#3a3a3a";
    about.style.display = "none";
    contact.style.display = "none";
    resume.style.display = "none";

    work.style.fontWeight = "400";
    work.style.letterSpacing = "5px";
    work.style.fontSize = "6vw";
    work.style.transform = "rotate(90deg)";
    work.style.marginTop = "50%";
})
about.addEventListener("click", () => {
    gsap.from("#aHeader", {
        duration: 1,
        opacity: 0,
        x: -10,
    })
    gsap.from("#dotOne", {
        delay: 0.4,
        duration: 0.1, 
        opacity: 0,
    })
    gsap.from("#dotTwo", {
        delay: 0.8,
        duration: 0.1, 
        opacity: 0,
    })
    gsap.from("#dotThree", {
        delay: 1.2,
        duration: 0.1, 
        opacity: 0,
    })
    gsap.from("#aDescriptor", {
        delay: 1.6,
        duration: 1,
        opacity: 0,
        x: -10,
    })

    aboutComp.style.display = "block";
    landingComp.style.display = "none";
    home.textContent = "BACK";
    about.style.color = "#3a3a3a";
    work.style.display = "none";
    contact.style.display = "none";
    resume.style.display = "none";

    about.style.fontWeight = "400";
    about.style.letterSpacing = "5px";
    about.style.fontSize = "6vw";
    about.style.transform = "rotate(90deg)";
    about.style.marginTop = "50%";
})
contact.addEventListener("click", () => {
    gsap.from("#cHeader", {
        duration: 1,
        opacity: 0,
        x: -10,
    })
    gsap.from("#cDescriptor", {
        duration: 1,
        opacity: 0,
        x: -10,
    })

    contactComp.style.display = "block";
    landingComp.style.display = "none";
    home.textContent = "BACK";
    about.style.display = "none";
    work.style.display = "none";
    contact.style.color = "#3a3a3a";
    resume.style.display = "none";

    contact.style.fontWeight = "400";
    contact.style.letterSpacing = "5px";
    contact.style.fontSize = "6vw";
    contact.style.transform = "rotate(90deg)";
    contact.style.marginTop = "50%";
})
resume.addEventListener("click", () => {
    gsap.from("#rHeader", {
        duration: 1,
        opacity: 0,
        x: -10,
    })
    gsap.from("#rDescriptor", {
        duration: 1,
        opacity: 0,
        x: -10,
    })

    resumeComp.style.display = "block";
    landingComp.style.display = "none";
    home.textContent = "BACK";
    about.style.display = "none";
    work.style.display = "none";
    contact.style.display = "none";
    resume.style.color = "#3a3a3a";

    resume.style.fontWeight = "400";
    resume.style.letterSpacing = "5px";
    resume.style.fontSize = "6vw";
    resume.style.transform = "rotate(90deg)";
    resume.style.marginTop = "50%";
})

const menuToggle = document.querySelector(".menu__toggle"); 
    const menuClose = document.querySelector(".menu__close");
    const largeSection = document.querySelector(".large__section");
    const smallSection = document.querySelector(".small__section");

    menuToggle.addEventListener("click", () => {
        menuToggle.style.display = "none";
        menuClose.style.display = "block";

        largeSection.style.width = "80%";
        smallSection.style.width = "20%";
        smallSection.style.display = "block";
    })
    menuClose.addEventListener("click", () => {
        menuToggle.style.display = "block";
        menuClose.style.display = "none";

        largeSection.style.width = "100%";
        smallSection.style.width = "0%";
        smallSection.style.display = "none";
    })
}
transitions()

    

