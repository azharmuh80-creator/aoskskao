/* =====================================
 CAPS JAVASCRIPT
===================================== */



const buttons =
document.querySelectorAll(".filter-btn");


const cards =
document.querySelectorAll(".cap-card");



buttons.forEach(btn=>{


btn.addEventListener("click",()=>{


buttons.forEach(b=>
b.classList.remove("active")
);


btn.classList.add("active");



let filter =
btn.dataset.filter;



cards.forEach(card=>{


if(
filter==="all" ||
card.classList.contains(filter)

){

card.style.display="block";


}else{


card.style.display="none";


}



});



});



});







function openCaps(name,price){


document
.getElementById("capModal")
.style.display="flex";



document
.getElementById("capName")
.innerText=name;



document
.getElementById("capPrice")
.innerText=
"Rp "+
price.toLocaleString("id-ID");



document
.getElementById("capOrder")
.href=

"https://wa.me/628980349895?text="+

encodeURIComponent(

"Saya ingin order "+

name+

" harga Rp "+

price.toLocaleString("id-ID")

);



}




document
.querySelector(".close-cap")
.onclick=()=>{


document
.getElementById("capModal")
.style.display="none";


};




window.onclick=(e)=>{


if(
e.target==
document.getElementById("capModal")
){


document
.getElementById("capModal")
.style.display="none";


}


};