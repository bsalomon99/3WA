// code principal /////////////////

const btn = document.querySelector('#toggle')
const rectangle = document.querySelector('.rectangle')

btn.addEventListener('click', function () {
    rectangle.classList.toggle('hide')
    })
    
    rectangle.addEventListener('mouseenter', onMouseOver)
    
    rectangle.addEventListener("mouseleave", onMouseLeave)
    
    rectangle.addEventListener("dblclick", onDbClick)

// fonctions ////////////////

function onClickBtn() {
    rectangle.classList.toggle('hide');
}
function onMouseOver() {
    rectangle.classList.add('important')
}

function onDbClick() {
    rectangle.classList.remove('important')
    rectangle.classList.add('good')
}
function onMouseLeave() {
    rectangle.classList.remove('important', 'good')
}

