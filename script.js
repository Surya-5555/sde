// const btn=document.getElementsByClassName('btn');
// const navbar=ducument.getElementByClassName('navbar-links');

// btn.addEventListener('click',()=>{
//    navbar.classList.toggle('active');
// });




    //   Done nav bar

    document.addEventListener('DOMContentLoaded', () => {
        const sidenav = document.querySelector('.side-nav');
        const btnNav = document.querySelector('.header-btn'); // Ensure this matches the button class
        const overlayScreen = document.querySelector('.nav-overlay'); // Fixed missing dot (.)
    
        btnNav.addEventListener('click', () => {
            sidenav.classList.add('open'); // Removed wrong .Nav
        });
    
        overlayScreen.addEventListener('click', () => {
            sidenav.classList.remove('open'); // Removed wrong .Nav
        });
    });
    