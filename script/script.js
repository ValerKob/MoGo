// Scroll



//    const anchors = document.querySelectorAll('a[href*="#"]');

//    for (anchor of anchors) {
//        if (anchor) {
//         anchor.addEventListener('click', function(event) {
//             event.preventDefault();

//             anchorId = this.qetAttribute('href');
//             console.log(anchorId);

//             document.querySelector(anchorId).scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             })
//         })
//     }
//    }




// Burger

burger();

function burger() {

    let burger = document.querySelector('#burger__item');
    let nav = document.querySelector('#header__nav');

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active__item');
    });

}


// Header

header__container();

function header__container() {

    const intro = document.querySelector('.intro').clientHeight;
    const head = document.querySelector('#header');
        

    window.onscroll = function showHeader() {

        const scrolled = window.scrollY;
      
        if (scrolled > intro) {    
            head.classList.add('header__fixed');
        } else {
            head.classList.remove('header__fixed');
        }

    }

}


// Accordion

accordion();

function accordion() {

const accordion__btn = document.querySelector('[data-accordion-btn]');
const accordion = document.querySelector('[data-accordion-text]');

accordion__btn.addEventListener('click', function() {

        const btnId = this.dataset.accordionBtn;

        const btn = document.querySelector('#' + btnId);

        btn.classList.toggle('active');
        
        accordion.classList.toggle('hidden');
    });

}

accordion2();

function accordion2() {

const accordion__btn = document.querySelector('[data-accordion-btn2]');
const accordion = document.querySelector('[data-accordion-text2]');

accordion__btn.addEventListener('click', function() {

        const btnId = this.dataset.accordionBtn2;

        const btn = document.querySelector('#' + btnId);

        btn.classList.toggle('active');
        
        accordion.classList.toggle('hidden');
    });

}

accordion3();

function accordion3() {

const accordion__btn = document.querySelector('[data-accordion-btn3]');
const accordion = document.querySelector('[data-accordion-text3]');

accordion__btn.addEventListener('click', function() {

        const btnId = this.dataset.accordionBtn3;

        const btn = document.querySelector('#' + btnId);

        btn.classList.toggle('active');
        
        accordion.classList.toggle('hidden');
    });

}

// btn__num__2

btn__num__2();

function btn__num__2() {

let position = 0;
const sliderToShow = 1;
const sliderToScroll = 1;
const container = document.querySelector('.container__slider__num__2');
const track = document.querySelector('.track__slider__num__2');
const items = document.querySelectorAll('.slider__item__num__2');
const btnNext = document.querySelector('.btn__next__num__2');
const btnPrev = document.querySelector('.btn__prev__num__2');
const itemsCount = items.length;
const itemWidth = container.clientWidth / sliderToShow;
const movePostition = itemWidth * sliderToScroll;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= sliderToScroll ? movePostition : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= sliderToScroll ? movePostition : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkButtons = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - sliderToShow) * itemWidth;
}

checkButtons();

}

// btn__num__1

btn__num__1();

function btn__num__1() {

let position = 0;
const sliderToShow = 1;
const sliderToScroll = 1;
const container = document.querySelector('.container__slider');
const track = document.querySelector('.track__slider');
const items = document.querySelectorAll('.slider__item__num');
const btnNext = document.querySelector('.btn__next');
const btnPrev = document.querySelector('.btn__prev');
const itemsCount = items.length;
const itemWidth = container.clientWidth / sliderToShow;
const movePostition = itemWidth * sliderToScroll;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= sliderToScroll ? movePostition : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= sliderToScroll ? movePostition : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkButtons = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - sliderToShow) * itemWidth;
}

checkButtons();

}





