/* =====================================
   YOFREZ.CREW MAIN JAVASCRIPT
   PART 5
===================================== */



document.addEventListener("DOMContentLoaded",()=>{



/* =====================================
   LOADER
===================================== */


const loader = document.querySelector(".loader");


window.addEventListener("load",()=>{


    setTimeout(()=>{


        if(loader){

            loader.style.display="none";

        }


    },2200);



});








/* =====================================
   MOBILE MENU
===================================== */


const menuBtn =
document.querySelector(".menu-btn");


const nav =
document.querySelector("nav");



if(menuBtn){



menuBtn.addEventListener("click",()=>{


    menuBtn.classList.toggle("active");


    nav.classList.toggle("show");



});



}








/* CLOSE MENU WHEN CLICK LINK */


document.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        menuBtn?.classList.remove("active");


        nav?.classList.remove("show");


    });



});









/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header?.classList.add("scrolled");


    }

    else{


        header?.classList.remove("scrolled");


    }


});









/* =====================================
   ACTIVE MENU
===================================== */


const currentPage =
window.location.pathname;



document.querySelectorAll("nav a")
.forEach(link=>{


    if(link.href.includes(currentPage)){


        link.classList.add("active");


    }



});









/* =====================================
   SMOOTH SCROLL
===================================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});



});








/* =====================================
   SCROLL REVEAL
===================================== */


const revealElements =
document.querySelectorAll(
".about, .featured-card, .crew-preview-grid div, .coming-items div, .contact"
);



function reveal(){


revealElements.forEach(el=>{


const position =
el.getBoundingClientRect()
.top;



if(position <
window.innerHeight - 100){


el.classList.add("reveal");


setTimeout(()=>{


el.classList.add("active");


},100);



}



});


}




window.addEventListener(
"scroll",
reveal
);


reveal();









/* =====================================
   HERO PARALLAX
===================================== */


const heroBg =
document.querySelector(".hero-bg");



window.addEventListener("scroll",()=>{


if(heroBg){


let offset =
window.scrollY * 0.25;



heroBg.style.transform =
`translateY(${offset}px) scale(1.1)`;


}



});









/* =====================================
   CUSTOM CURSOR
===================================== */


// const cursor =
// document.createElement("div");


// cursor.className="cursor";


// document.body.appendChild(cursor);



// document.addEventListener(
// "mousemove",
// (e)=>{


// cursor.style.left =
// e.clientX+"px";


// cursor.style.top =
// e.clientY+"px";



// });





// document.querySelectorAll(
// "a,button,.featured-card"
// )
// .forEach(item=>{


// item.addEventListener(
// "mouseenter",
// ()=>{


// cursor.classList.add("active");


// });


// item.addEventListener(
// "mouseleave",
// ()=>{


// cursor.classList.remove("active");


// });


// });









/* =====================================
   IMAGE FADE LOAD
===================================== */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


img.addEventListener(
"load",
()=>{


img.classList.add("loaded");


});


});









/* =====================================
   BUTTON RIPPLE EFFECT
===================================== */


document.querySelectorAll(
".btn-primary,.btn-outline,.nav-btn"
)
.forEach(button=>{


button.addEventListener(
"click",
function(e){



let ripple =
document.createElement("span");


ripple.className="ripple";


this.appendChild(ripple);



setTimeout(()=>{


ripple.remove();


},600);



});



});









/* =====================================
   PAGE TRANSITION
===================================== */


const pageLinks =
document.querySelectorAll(
"a:not([target='_blank'])"
);



pageLinks.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


const href =
link.getAttribute("href");



if(
href &&
!href.startsWith("#")
){

e.preventDefault();


document.body.style.opacity="0";


setTimeout(()=>{


window.location.href=href;


},300);



}



});


});









/* =====================================
   DISABLE CONTEXT MENU
   (OPTIONAL BRAND MODE)
===================================== */


document.addEventListener(
"contextmenu",
(e)=>{


// Uncomment jika ingin proteksi gambar
// e.preventDefault();


});







});