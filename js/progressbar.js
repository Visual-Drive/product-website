// progress bars
const progressbar1 = document.querySelector('.planung');
const progressbar2 = document.querySelector('.durchfuehrung');
const progressbar3 = document.querySelector('.testing');
const progressbar1Mobile = document.querySelector('.planung-mobile');
const progressbar2Mobile = document.querySelector('.durchfuehrung-mobile');
const progressbar3Mobile = document.querySelector('.testing-mobile');

window.onload = pre_loader;

function pre_loader() {
    let p1 = progressbar1.style.width = '397px';
    let p2 = progressbar2.style.width = '300px';
    let p3 = progressbar3.style.width = '140px';
    let p1Mobile = progressbar1Mobile.style.width = '297px';
    let p2Mobile = progressbar2Mobile.style.width = '225px';
    let p3Mobile = progressbar3Mobile.style.width = '105px';
}
// ---------------------