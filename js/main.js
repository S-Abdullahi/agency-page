document.querySelector('.fa-bars').addEventListener('click', barIcon)

document.querySelector('#service-nav').addEventListener('click', serviceIcon)

document.querySelector('#main-nav').addEventListener('click', serviceIcon)

document.querySelector('#project-nav').addEventListener('click', serviceIcon)

document.querySelector('#team-nav').addEventListener('click', serviceIcon)

document.querySelector('#contact-nav').addEventListener('click', serviceIcon)


function barIcon(){
    document.querySelector('.unorderedNav').classList.remove('transparent')
    document.querySelector('nav').classList.toggle('hidden')
}

function removeNav(){
    document.querySelector('.unorderedNav').classList.toggle('transparent')
}

function serviceIcon(){
    removeNav()
  
}



