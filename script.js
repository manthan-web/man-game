function manMovingLeft () {
    const man = document.querySelector('.js-man')
    man.classList.add('left-moved')
    man.classList.remove('center-moved','right-moved')
    
}

function manMovingRight () {
    const man = document.querySelector('.js-man')
    man.classList.add('right-moved')
    man.classList.remove('left-moved','center-moved')
   
}

function manMovingCenter () {
    const man = document.querySelector('.js-man')
    man.classList.add('center-moved')
    man.classList.remove('left-moved','right-moved')
    
}