document.querySelector('.fa-bars').addEventListener('click', barIcon)

document.querySelector('#service-nav').addEventListener('click', serviceIcon)

document.querySelector('#main-nav').addEventListener('click', serviceIcon)

document.querySelector('#project-nav').addEventListener('click', serviceIcon)

document.querySelector('#team-nav').addEventListener('click', serviceIcon)

document.querySelector('#contact-nav').addEventListener('click', serviceIcon)

document.querySelector('.fa-xmark').addEventListener('click', cancelIcon)


// declaration of the hamburger, cancel icon and the complete nav bar
const unorderedNav = document.querySelector('.unorderedNav')
const hamburgerIcon = document.querySelector('.fa-bars')
const cancel = document.querySelector('.fa-xmark')


// function for clicking the hamburger icon
function barIcon(){
        unorderedNav.style.left = 0
        unorderedNav.style.opacity = 1 
        hamburgerIcon.style.opacity = 0
        cancel.style.opacity = 1
        cancel.style.right = '30px'
}

// function for clicking the closing icon
function cancelIcon(){
    unorderedNav.style.left = '-500px'
    hamburgerIcon.style.opacity = 1
    cancel.style.opacity = 0
    cancel.style.right = '60px'


}

// function for clicking any of the menu
function serviceIcon(){
        unorderedNav.style.opacity = 0 
        unorderedNav.style.left = '-500px'
        hamburgerIcon.style.opacity = 1
        cancel.style.opacity = 0
        cancel.style.right = '60px'  
}


