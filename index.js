// const benjiPage =  document.getElementById("BenjiSection");
// const okoriePage = document.getElementById("OkorieSection");

// function changingPages(){
// if(okoriePage.style.display === "none"){
//     benjiPage.style.display === "block"
// }else if( benjiPage.style.display === "none"){
//     okoriePage.style.display === "block"
// }
// }

// changingPages();


// function swapImage(){
//     $("#BenjiSection").show(10000);
//     $("#BenjiSection").fadeOut(6000);
//     $("#OkorieSection").fadeIn(6000);
//     $("#OkorieSection").show(10000);
//     $("#BenjiSection").fadeOut(6000);
//     setTimeout( function(){
//         {
//             $("#OkorieSection").show(10000);
//             $("#OkorieSection").fadeOut(6000);
//             $("#BenjiSection").fadeIn(6000);
//         }
//     }, 6000);
//     setTimeout(function(){
//         swapImage();
//     }, 8000)
// }
// $(document).ready(function() {
//     swapImage();
// });

function textAnimation(){

  let t1 =  gsap.timeline();
  t1.from("p",{opacity:0, duration:1, y:40})
  
  t1.from(".benName span",1,{opacity:0,x:-30, y:-20, scale: 2,
    opacity: 0, duration:2,  ease: "back.out(2)",
  stagger: {
    amount: 0.7
  } })
}
textAnimation();

function switchAnimation(){
  let images =  gsap.utils.toArray(".bg"),
  t2 = gsap.timeline({repeat:-1}),
  fadeDuration = 2,
  stayDuration = 8;
  
  gsap.set(images[0], {autoAlpha: 1});
  
  t2.from(images[0], {delay:stayDuration, autoAlpha:0,
    duration: fadeDuration,stagger: 2}),
   
    t2.to(images[1], {delay:stayDuration, autoAlpha:1,
      duration: fadeDuration,stagger: 2})
    
    .to(images[1], {autoAlpha: 0, duration:fadeDuration, stagger: stayDuration + fadeDuration}, stayDuration + fadeDuration)
    .set(images[0], {autoAlpha: 1, duration: fadeDuration})
  
  
    .to(images[images.length+1], {autoAlpha: 1, duration: fadeDuration}, "+=" + stayDuration);
}

switchAnimation();

//On hover the nav image will display the text

const navLink = document.querySelectorAll(".Nav_text");

navLink.forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    let linkTl = gsap.timeline();

   linkTl.to(`.Nav_text__${index+1} .Nav_text span`, 0.8, {
    opacity: 1,
    y: -30,
    x: -20,
    ease: "back.out(2)",
    stagger: {
      amount: 0.7
    }
  }, "-=1.5")
})

})
