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


let t1 =  gsap.timeline();
t1.from("p",{opacity:0, duration:1, y:40})

t1.from(".benName span",1,{opacity:0,x:-30, y:-20, scale: 2,
  opacity: 0, duration:2,  ease: "back.out(2)",
stagger: {
  amount: 0.7
} })

let images =  gsap.utils.toArray(".bg"),
t2 = gsap.timeline({repeat:-1}),
fadeDuration = 1.5,
stayDuration = 3;

gsap.set(images[0], {autoAlpha:1})

t2.to(images[1], {delay:stayDuration, autoAlpha:1,
  duration: fadeDuration,stagger: fadeDuration + stayDuration})

  .to(images[0], {autoAlpha: 0, duration:0.01, stagger: stayDuration + fadeDuration}, stayDuration + fadeDuration)
  .set(images[0], {autoAlpha: 1})

  .to(images[1], {autoAlpha: 0, duration: fadeDuration}, "+=" + stayDuration);







