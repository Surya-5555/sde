const btn=document.getElementsByClassName('btn')[0];
const navbar=ducument.getElementByClassName('navbar-links')[0];

btn.addEventListener('click',()=>{
   navbar.classList.toggle('active');
});
