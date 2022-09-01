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
    $("#BenjiSection").fadeOut();
    $("#OkorieSection").fadeIn();
    setTimeout( function(){
        {
            $("#OkorieSection").fadeOut();
            $("#BenjiSection").fadeIn();
        }
    }, 2000);
    setTimeout(function(){
        swapImage();
    }, 4000)
}
$(document).ready(function() {
    swapImage();
});