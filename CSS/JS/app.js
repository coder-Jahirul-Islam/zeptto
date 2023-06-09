// Faq section
const faqs = document.querySelectorAll('.faq_wrapper')

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faqs.forEach((faq) => {
            faq.classList.add('faq_active')
        })
        faq.classList.toggle('faq_active')
    })
})



// Toggle Mobile Menu
const menuBtn = document.querySelector('.mobile_menu_icon')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav_active')

    if(menuBtn.classList.contains('icofont-navigation-menu')) {
        menuBtn.classList.remove('icofont-navigation-menu')
        menuBtn.classList.add('icofont-close')
    }else{
        menuBtn.classList.add('icofont-navigation-menu')
        menuBtn.classList.remove('icofont-close')
    }
}) 