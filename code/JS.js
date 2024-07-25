
function revealToSpan(){
    document.querySelectorAll(".reveal").forEach((elem)=>{
        //CREATING TWO SPANS
        let parentSpan = document.createElement("span");
        let childSpan = document.createElement("span");
        //ADDING CLASSES TO THE RESPECTIVE SPANS
        parentSpan.classList.add("parentSpan");
        childSpan.classList.add("childSpan")
        //SPAN PARENT GETS CHILD AND CHILD GETS ELEM DETAILS 
          childSpan.innerHTML=elem.innerHTML
          parentSpan.appendChild(childSpan);  
      //ELEM REPLACES ITS VALUE WITH PARENT SPAN
          elem.innerHTML="";
          elem.appendChild(parentSpan);
          //EDITING FONT STYLE OF SPAN
          childSpan.style.fontFamily="Orbitron";
    })
}
revealToSpan();
let tl=gsap.timeline();
  tl.from(".childSpan div",{
    x:1000,
    stagger:0.3,
    opacity:0, 
    ease:Power3.easeInOut,
    
  })
    tl.to(".childSpan",{
        y:"-110%",
        duration:2.5,
        delay:0.3,
        ease:Circ.easeInOut,
    })
    tl.to("#loaderpage",{
        height:0,
        duration:1,
        ease:Circ.easeInOut,
    })
    // tl.to("#green",{
    //     height:"100%",
    //     top:0,
    //     duration:1,
    //     ease:Circ.easeInOut,
    //     delay:-0.5,
    // })
    // tl.to("#green",{
    //     height:"0%",
    //     duration:1,
    //     ease:Circ.easeInOut,
    //     delay:-0.3,
    // })
    
  
    tl.from(".lefthalf img",{
        x:-1000,
        opacity:0,
        duration:0.6,
        ease:Power3.easeIn,
      })
    tl.from(".webd,#fe,#be,#ani,#ws,#dsa",{
      x:2000,
      opacity:0,
      duration:2,
      ease: "expo.in",
      delay:-1.5,
      stagger:0.3,
    })
    tl.from("#name,#pw,.menu",{
      y:-100,
      opacity:0,
      delay:1,
      duration:0.5,
      stagger:0.3,
    })
    tl.from("pw",{
      y:-100,
      opacity:0,
      duration:1.5,
    })

   function menuPageIn(){
   let menuTimeline=gsap.timeline()
  menuTimeline.to(".menupage ",{
     x:"0",
     duration:1,
    ease:Power3.easeIn,
    delay:-0.5,
    stagger:0.3,
    })
    menuTimeline.to(".menupage .links",{
      x:"0",
      opacity:1,
      stagger:0.3,
      duration:1,
    })
    }

    function menuPageOut(){
      gsap.to(".menupage",{
        x:"100%",
        ease:Power3.easeIn,
      })
    }

    document.querySelector(".menu").addEventListener("click",menuPageIn)
    document.querySelector(".close").addEventListener("click",menuPageOut) 
    
    gsap.to(".webd,#fe,#be,#ani,#ws,#dsa,.lefthalf,.logo,.menu",{
      y:"-20%",
      duration:25,
      scrollTrigger:{
        scroller:"body",
        scrub:4,
        // markers:"true",
        start:"bottom 80%"
      },
      opacity:0,
      stagger:0.5,
    })
    gsap.from(".skilltitle",{
      opacity:0,
      scale:0,
      duration:0.4,
      scrollTrigger:{
        trigger:".skilltitle",
        scrub:3,

      },
    })
    gsap.from(".skill",{
      opacity:0,
      scale:0,
      duration:0.4,
      scrollTrigger:{
        trigger:".skill",
        scrub:3,
      },
    })
    


// Function to smoothly scroll to a section
function scrollToSection(event) {
  event.preventDefault(); // Prevent the default link behavior
  // When you click a link, it usually jumps directly to the section. This line stops that from happening immediately.

  const targetId = this.getAttribute('href'); // Get the href attribute value
  // 'this' refers to the link that was clicked. The 'href' attribute of this link is retrieved (e.g., "#about").

  const targetSection = document.querySelector(targetId); // Find the section with the matching id
  // 'targetId' contains the value like "#about". This line finds the HTML element with that id.

  if (targetSection) {
    // Check if the section exists on the page.
    targetSection.scrollIntoView({
      behavior: 'smooth' // Enable smooth scrolling
    });
    // If the section exists, scroll to that section with a smooth scrolling effect.
     // Ensure ScrollTrigger recalculates positions after the scroll
     targetSection.addEventListener('transitionend', () => {
      ScrollTrigger.refresh();
    }, { once: true });

    // Alternative for browsers not supporting 'transitionend'
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000); // Adjust timeout duration as necessary
  }
}

// Function to add click event listeners to all menu links
function addMenuLinksListeners() {
  const menuLinks = document.querySelectorAll('.link'); // Select all menu links
  
  menuLinks.forEach(link => {
    link.addEventListener('click', scrollToSection); // Add click event listener to each link
  });
}

// Add event listeners when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', addMenuLinksListeners);

gsap.from(".aboutuspage .aboutusdiv h1,.aboutuspage .aboutusdiv p",{
  opacity:0,
  y:"45%",
  duration:0.5,
  stagger:0.5,
  scrub:1,
  scrollTrigger:{
    trigger:"#roll",
    scroller:"body",
  }
})
gsap.to("#roll",{
  x:"-20%",
  duration:1,
  scrollTrigger:{
    trigger:"#roll",
    scroller:"body",
    scrub:2,
  }
})

gsap.from(".contacttitle,.contactform,.contactlinks",{
  scale:0,
  opacity:0,
  duration:1,
  scrollTigger:{
    scroller:"body",
    trigger:".contacttitle,.contactform,.contactlinks"
  }
})

gsap.from(".projectstitle,.project",{
  opacity:0,
  y:"45%",
  duration:1,
  stagger:0.5,
  scrub:1,
  scrollTrigger:{
    trigger:".projectstitle,.project",
    scroller:"body",
  }
})

  
