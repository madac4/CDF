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

if (document.querySelector('.violence-content__acordion')) {
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