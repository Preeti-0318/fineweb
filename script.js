addEventListener("DOMContentLoaded", (event) => { 
    console.log("DOM successfully loaded")

    runAnimationSequence(); // Run it first time immediately
    setInterval(runAnimationSequence, 8500); // Repeat every 7200ms
  
    // last animation
    
  // whatWeOfferAnimationSequence();
  // setInterval(whatWeOfferAnimationSequence, 4000);
    
   
    

    
    // last animation ends here


// pRODUCT PAGE CLICK aNIMATION 
const slides = document.querySelectorAll(".image-slide");
const section = document.querySelector(".scroll-section");
const totalSlides = slides.length;

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  console.log("scrolly",scrollY)
  console.log("sectionTop",sectionTop)
  console.log("sectionHeight",sectionHeight)


  // Check if user is in the section
  if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
    const scrollPos = scrollY - sectionTop;
    const percentScrolled = scrollPos / sectionHeight;
    const index = Math.min(
      totalSlides - 1,
      Math.floor(percentScrolled * totalSlides)
    );

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }
});


// what we offer page animation
 const groups = [
                document.getElementById('imgGroup1'),
                document.getElementById('imgGroup2'),
                document.getElementById('imgGroup3'),
                document.getElementById('imgGroup4')
            ];
            
            const indicators = document.querySelectorAll('.indicator');
            
            
            let currentGroup = 0;
            let isScrolling = false;
            
            // Initialize first group
            updateActiveGroup();
            
            // Scroll event listener
            window.addEventListener('wheel', function(e) {
                if (isScrolling) return;
                
                isScrolling = true;
                
                // Scroll down
                if (e.deltaY > 0) {
                    if (currentGroup < groups.length - 1) {
                        currentGroup++;
                        animateTransition('down');
                    }
                } 
                // Scroll up
                else {
                    if (currentGroup > 0) {
                        currentGroup--;
                        animateTransition('up');
                    }
                }
                
                // Reset scroll lock after delay
                setTimeout(() => {
                    isScrolling = false;
                }, 800);
            });
            
            
            
            // Indicator event listeners
            indicators.forEach(indicator => {
                indicator.addEventListener('click', function() {
                    const targetIndex = parseInt(this.getAttribute('data-index'));
                    
                    if (targetIndex !== currentGroup) {
                        const direction = targetIndex > currentGroup ? 'down' : 'up';
                        currentGroup = targetIndex;
                        animateTransition(direction);
                    }
                });
            });
            
            // Animate transition between groups
            function animateTransition(direction) {
                // Remove active classes
                groups.forEach(group => group.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                // Add animation class based on direction
                if (direction === 'down') {
                    groups[currentGroup].classList.add('zoom-in');
                } else {
                    groups[currentGroup].classList.add('zoom-out');
                }
                
                // Add active class after delay
                setTimeout(() => {
                    groups[currentGroup].classList.add('active');
                    indicators[currentGroup].classList.add('active');
                    
                    // Remove animation classes
                    groups[currentGroup].classList.remove('zoom-in', 'zoom-out');
                }, 50);
            }
            
            // Update active group
            function updateActiveGroup() {
                groups.forEach((group, index) => {
                    group.classList.toggle('active', index === currentGroup);
                });
                
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentGroup);
                });
            }

    
})

function runAnimationSequence() {
    loadAnimation(1000, "animationFrameOne", "animationFrameeight");
    loadAnimation(2000, "animationFrameTwo", "animationFrameOne");
    loadAnimation(3000, "animationFrameThree", "animationFrameTwo");
    loadAnimation(4000, "animationFramefour", "animationFrameThree");
    loadAnimation(5000, "animationFramefive", "animationFramefour");
    loadAnimation(6000, "animationFramesix", "animationFramefive");
    loadAnimation(7000, "animationFrameseven", "animationFramesix");
    loadAnimation(8000, "animationFrameeight", "animationFrameseven");
}

function loadAnimation(time, showingElement, hidingElement){
    setTimeout(()=>{

         const showEl = document.getElementById(showingElement);
        const hideEl = document.getElementById(hidingElement);
        
        if (showEl) showEl.style.display = "flex";
        if (hideEl) {
            hideEl.style.display = "none";
        }
    }, time)
}


// function whatWeOfferAnimationSequence(){
const slides = document.querySelectorAll(".mobile-slide");
const section = document.querySelector(".mobileview");
const totalSlides = slides.length;

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  console.log({
    sectionTop,
    sectionHeight,
    scrollY,
    windowHeight,
    totalSlides
  });

  if (scrollY >= sectionTop - windowHeight && scrollY <= sectionTop + sectionHeight) {
    // Try different calculation methods
    const scrollPos = scrollY - sectionTop;
    const viewportMidpoint = scrollY + (windowHeight / 2);
    const relativeToViewportMid = viewportMidpoint - sectionTop;
    
    // Method 1: Based on section top
    const index1 = Math.min(
      totalSlides - 1,
      Math.max(0, Math.floor(scrollPos / (sectionHeight / totalSlides)))
    );
    
    // Method 2: Based on viewport center
    const index2 = Math.min(
      totalSlides - 1,
      Math.max(0, Math.floor(relativeToViewportMid / (sectionHeight / totalSlides)))
    );

    console.log({
      scrollPos,
      relativeToViewportMid,
      index1,
      index2,
      percentScrolled: (scrollPos / sectionHeight) * 100
    });

    // Use index2 for viewport-center based switching
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index2);
    });
  }
});




//   WhatWeOfferAnimation(1000, "imgGroup1", "imgGroup4");
//     WhatWeOfferAnimation(2000, "imgGroup2", "imgGroup1");
//     WhatWeOfferAnimation(3000, "imgGroup3", "imgGroup2");
//     WhatWeOfferAnimation(4000, "imgGroup4", "imgGroup3");
// }

// function WhatWeOfferAnimation(time, showingElement, hidingElement){
//   setTimeout(()=>{

//          const showEl = document.getElementById(showingElement);
//         const hideEl = document.getElementById(hidingElement);
        
//         if (showEl) showEl.style.opacity = 1;
//         if (hideEl) {
//             hideEl.style.opacity = 0;
//         }
//     }, time)
// }

