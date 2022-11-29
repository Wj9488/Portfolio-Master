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
//navigation 
const home = document.getElementById("nHome");
const work = document.getElementById("nWork");
const about = document.getElementById("nAbout");
const contact = document.getElementById("nContact");
const resume = document.getElementById("nResume")

window.addEventListener("resize", () => {
    if(window.innerWidth > 1000) {
        work.style.marginTop = "0%";
        about.style.marginTop = "0%";
        contact.style.marginTop = "0%";
        resume.style.marginTop = "0%";
    } else {
        work.style.marginTop = "50%";
        about.style.marginTop = "50%";
        contact.style.marginTop = "50%";
        resume.style.marginTop = "50%";
    }
})

home.addEventListener("click", () => {
    gsap.from("#landHeader", {
        duration: 1,
        opacity: 0,
        x: 20,
    })
    if(window.innerWidth < 1000) {
        console.log("Mobile device detected")
        workComp.style.display = "none";
        aboutComp.style.display = "none";
        contactComp.style.display = "none";
        resumeComp.style.display = "none";
        work.style.color = "#3a3a3a";
        about.style.color = "#3a3a3a";
        contact.style.color = "#3a3a3a";
        resume.style.color = "#3a3a3a";
        about.style.display = "block";
        work.style.display = "block";
        contact.style.display = "block";
        resume.style.display = "block";
        
        home.textContent = "HOME"; 
        landingComp.style.display = "block";
    
        work.style.fontWeight = "900";
        work.style.letterSpacing = "0px";
        work.style.fontSize = "4vw";
        work.style.transform = "rotate(0deg)";
        work.style.marginTop = "50%";
    
        about.style.fontWeight = "900";
        about.style.letterSpacing = "0px";
        about.style.fontSize = "4vw";
        about.style.transform = "rotate(0deg)";
        about.style.marginTop = "50%";
    
        contact.style.fontWeight = "900";
        contact.style.letterSpacing = "0px";
        contact.style.fontSize = "4vw";
        contact.style.transform = "rotate(0deg)";
        contact.style.marginTop = "50%";
    
        resume.style.fontWeight = "900";
        resume.style.letterSpacing = "0px";
        resume.style.fontSize = "4vw";
        resume.style.transform = "rotate(0deg)";
        resume.style.marginTop = "50%";
    } else {
        console.log("Desktop/Tablet detected")
        workComp.style.display = "none";
        aboutComp.style.display = "none";
        contactComp.style.display = "none";
        resumeComp.style.display = "none";
        work.style.color = "#3a3a3a";
        about.style.color = "#3a3a3a";
        contact.style.color = "#3a3a3a";
        resume.style.color = "#3a3a3a";
        about.style.display = "block";
        work.style.display = "block";
        contact.style.display = "block";
        resume.style.display = "block";
        
        home.textContent = "HOME"; 
        landingComp.style.display = "block";
    
        work.style.fontWeight = "900";
        work.style.letterSpacing = "0px";
        work.style.fontSize = "4vw";
        work.style.transform = "rotate(0deg)";
        work.style.marginTop = "0";
    
        about.style.fontWeight = "900";
        about.style.letterSpacing = "0px";
        about.style.fontSize = "4vw";
        about.style.transform = "rotate(0deg)";
        about.style.marginTop = "0";
    
        contact.style.fontWeight = "900";
        contact.style.letterSpacing = "0px";
        contact.style.fontSize = "4vw";
        contact.style.transform = "rotate(0deg)";
        contact.style.marginTop = "0";
    
        resume.style.fontWeight = "900";
        resume.style.letterSpacing = "0px";
        resume.style.fontSize = "4vw";
        resume.style.transform = "rotate(0deg)";
        resume.style.marginTop = "0";
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
}
transitions()

