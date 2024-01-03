/* navbar section start */
const navMenu = document.querySelector("nav .nav-menu ul");
const hamburgerMenu = document.querySelector("nav .hamburger-menu");

hamburgerMenu.addEventListener("click", function(){    
    navMenu.classList.toggle('nav-dropdown')
    hamburgerMenu.classList.toggle('hamburger-active')
})

window.onscroll = function(){
    const nav = document.querySelector('#nav');
    const home = document.querySelector('nav .nav-menu .nav-home');
    const about = document.querySelector('nav .nav-menu .nav-about-us');
    const projects = document.querySelector('nav .nav-menu .nav-projects');
    const testi = document.querySelector('nav .nav-menu .nav-testimony');
    const fixedNav = nav.offsetTop;
    const ourService = document.querySelector('#our-service');
    const fixedOurService = ourService.offsetTop;
    const aboutUs = document.querySelector('#our-last-project');
    const fixedAboutUs = aboutUs.offsetTop;
    const testimony = document.querySelector('#testimony');
    const fixedTestimony = testimony.offsetTop;

    if(window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-fixed')
    } else {
        nav.classList.remove('navbar-fixed')
    }

    let windowPosition = window.pageYOffset + 100;

    if(windowPosition >= fixedNav && windowPosition < fixedOurService) {
        home.classList.add('nav-active')
        about.classList.remove('nav-active')
    } else if (windowPosition > fixedOurService && windowPosition < fixedAboutUs){
        home.classList.remove('nav-active')
        about.classList.add('nav-active')
        projects.classList.remove('nav-active')
    } else if (windowPosition > fixedAboutUs && windowPosition < fixedTestimony){
        about.classList.remove('nav-active')
        projects.classList.add('nav-active')
        testi.classList.remove('nav-active')
    } else if (windowPosition > fixedTestimony){
        projects.classList.remove('nav-active')
        testi.classList.add('nav-active')
    }
}
/* navbar section emd */



/* hero swiper section start */
new Swiper("#swiper-1", {
    effect: "coverflow",
    grabCursor: "true",
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true
    },
    navigation:{
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    }
});

document.addEventListener('DOMContentLoaded', init);

function init(){
    let queryMd = window.matchMedia("(min-width: 768px)");
    let queryXl = window.matchMedia("(min-width: 1280px)");
    
    if (queryXl.matches){
        new Swiper('#swiper-2', {
            slidesPerView: "3.8",
            spaceBetween: 30,
            centeredSlides: false,
            grabCursor: "true"
        })

        new Swiper('#swiper-4', {
            slidesPerView: "2.7",
            spaceBetween: 50,
            centeredSlides: false,
            grabCursor: "true"
        })

    } else if (queryMd.matches){
        new Swiper('#swiper-2', {
            slidesPerView: "2.5",
            spaceBetween: 30,
            centeredSlides: false,
            grabCursor: "true"
        })

        new Swiper('#swiper-4', {
            slidesPerView: "2.5",
            spaceBetween: 50,
            centeredSlides: false,
            grabCursor: "true"
        })
    } else {
        new Swiper('#swiper-2', {
            slidesPerView: "1.2",
            spaceBetween: 30,
            centeredSlides: false,
            grabCursor: "true"
        })

        new Swiper('#swiper-4', {
            slidesPerView: "1.2",
            spaceBetween: 30,
            centeredSlides: false,
            grabCursor: "true"
        })
    }
}

new Swiper('#swiper-3', {
    effect: "cards",
    grabCursor: "true",
    slidesPerView: "1.2",
    centeredSlides: true
})

/* hero swiper section end */