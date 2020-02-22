const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav1 = document.querySelector('.main-links');
    const nav2= document.querySelector('.footer-links');

    burger.addEventListener('click',() =>{
        console.log('1');
        nav1.classList.toggle('nav-active');
        nav2.classList.toggle('nav-active');
    });
};

navSlide();