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
