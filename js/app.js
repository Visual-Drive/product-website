// navigation mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav1 = document.querySelector('.main-links');
    const nav2 = document.querySelector('.footer-links');
    const mobileContainer = document.querySelector('.mobile-menu-container');
    const bodyTag = document.getElementsByTagName('body');
    const htmlTag = document.getElementsByTagName('html');

    burger.addEventListener('click',() =>{
        console.log('1');
        nav1.classList.toggle('nav-active');
        nav2.classList.toggle('nav-active');
        mobileContainer.classList.toggle('show-nav');
        bodyTag[0].style.overflow = 'hidden';
        bodyTag[0].style.WebkitOverflowScrolling = 'touch';
        htmlTag[0].style.overflow = 'hidden';
        htmlTag[0].style.WebkitOverflowScrolling = 'touch';
    });
};

navSlide();
// ---------------------

