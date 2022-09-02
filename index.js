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


function swapImage(){
    $("#BenjiSection").show(10000);
    $("#BenjiSection").fadeOut(6000);
    $("#OkorieSection").fadeIn(6000);
    $("#OkorieSection").show(10000);
    $("#BenjiSection").fadeOut(6000);
    setTimeout( function(){
        {
            $("#OkorieSection").show(10000);
            $("#OkorieSection").fadeOut(6000);
            $("#BenjiSection").fadeIn(6000);
        }
    }, 6000);
    setTimeout(function(){
        swapImage();
    }, 8000)
}
$(document).ready(function() {
    swapImage();
});