/* =====================================
 CREW JAVASCRIPT
===================================== */



document.addEventListener(
"DOMContentLoaded",
()=>{



const members =
document.querySelectorAll(
".member-card"
);



members.forEach(
(member,index)=>{


member.style.opacity="0";


member.style.transform=
"translateY(50px)";



setTimeout(()=>{


member.style.transition=
"0.8s ease";


member.style.opacity="1";


member.style.transform=
"translateY(0)";


},index*200);



});



});