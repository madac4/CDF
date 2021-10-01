@@include('slider.js');
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

const playBtn = document.querySelector('#play-button');
if (playBtn) {
    playBtn.addEventListener('click', () =>{
        const audio = document.getElementById("audio");
        audio.play();
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

if (document.querySelector('.violence-accordion ')) {
    const accordionItem = document.querySelectorAll('.accordion-list__item');
    
    for (let i = 0; i < accordionItem.length; i++) {
        accordionItem[i].addEventListener("click", function() {
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

if (document.querySelector('.raport-accordion')) {
    const accordionItem = document.querySelectorAll('.raport-accordion');
    
    for (let i = 0; i < accordionItem.length; i++) {
        accordionItem[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("open");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" open", "");
            }
            this.className += " open";
          });
    }
}

if (document.querySelector('.burger')) {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-nav');

    burger.addEventListener('click', () =>{
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}

const headerCall = document.querySelector('.header-contacts');

if (headerCall) {
    window.addEventListener('resize', () => {
        adaptive_function();
    });

    function adaptive_header(w, h) {
        var navMenu = document.querySelector('.header-nav');
        var headerContact = document.querySelector('.header-contact__block');

        var result = headerCall.classList.contains('done');
        if (w < 640) {
            if (!result) {
                headerCall.classList.add('done');
                navMenu.insertBefore(headerCall, navMenu.lastChild);
            }
        } else {
            if (result) {
                headerCall.classList.remove('done');
                headerContact.insertBefore(headerCall, headerContact.firstChild);
            }
        }
    }

    function adaptive_function() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        adaptive_header(w, h);
    }
    adaptive_function();
}
