tl = gsap.timeline();
tl.from(".nav_link",1,{
  opacity:0,
  
})

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



//On hover the nav image will display the text


const navImages = document.querySelectorAll(".nav_link");

navImages.forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    let linkTl = gsap.timeline();

   linkTl.to(`.navPic_${index+1} .Navtext span`,1.2,  {
    opacity: 1,
    y: 30,
    x: 20,
    scale: 2,
    ease: "back.out(2)",
    stagger: {
      amount: 0.7
    }
  })
  
})
link.addEventListener('mouseleave', () => {
  let linkLeaveTL = gsap.timeline();

  linkLeaveTL.to(`.navPic_${index+1} .Navtext span`, 0.8, {
    opacity: 0,
    y: 0,
    x: 0,
    ease: "back.out(2)",
    stagger: {
      amount: 0.6
    }
  })
})
})


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
