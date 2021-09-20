let sliders = document.querySelectorAll('.swiper');
if(sliders){
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')){
            let slider_items = slider.children;
            if(slider_items){
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');                 
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if(slider.classList.contains('swiper_scroll')){
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if(slider.classList.contains('gallery')){
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) {}

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if(sliderScollItems.length > 0){
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar:{
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) {}

// let sliderTemplate = new Swiper('.slider', {
//     effect: 'fade',
//     autoplay:{
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     observer: true,
//     observeParents: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//     touchRatio: 0,
//     simulateTouch: false,
//     loop: true,
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//         el: '.slider-pagging',
//         clickable: true,
//     },
//     navigation:{
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },

//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1268: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//     },
//     on: {
//         lazyImageReady: function () {
//             ibg();
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     }
// })

if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        effect: 'fade',
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        navigation:{
            nextEl: '.slider-main-controls__arrows .slider-arrow__next',
            prevEl: '.slider-main-controls__arrows .slider-arrow__prev',
        },
    })
}

if (document.querySelector('.slider-news__body')) {
    new Swiper('.slider-news__body', {
        pagination: {
            el: '.slider-news-controls__dots',
            clickable: true,
        },
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
    })
}

if (document.querySelector('.slider-partners__body')) {
    new Swiper('.slider-partners__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight: true,
        speed: 800,
        centerSlides: true,
        navigation:{
            nextEl: '.slider-partners-controls__arrows .slider-arrow__next',
            prevEl: '.slider-partners-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
    })
};
if (document.querySelector('.header')) {
    const languageToggler = document.querySelector('.language')
    const languageDropdown = document.querySelector('.language-dropdown')
    const navLink = document.querySelectorAll('.with-subnav')
    const subnavToggler = document.querySelector('.subnav')


    navLink.forEach(el => {
        el.addEventListener('click', () => {
            subnavToggler.classList.toggle('open')
        });
    })

    languageToggler.addEventListener('click', () => {
        languageToggler.classList.toggle('open')
    })
}


if (document.querySelector('.questions-list__item')) {
    const accordionItems = document.querySelectorAll('.questions-list__item');

    for (let i = 0; i < accordionItems.length; i++) {
        accordionItems[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("open");
        
            // If there's no active class
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" open", "");
            }
        
            // Add the active class to the current/clicked button
            this.className += " open";
            // this.querySelector('.questions-content').style.maxHeight = `${this.querySelector('.questions-content p').offsetHeight}px`
           
          });
    }
}
