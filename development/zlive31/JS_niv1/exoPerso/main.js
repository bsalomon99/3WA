let listItems = document.querySelectorAll('#ourList li');
let headline = document.querySelector('#ourTitle');
let btn = document.querySelector('#ourBtn');
let ourList = document.querySelector('#ourList');
let newItemCounter = 1;

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', activateItem);
}
//js has a keyword named this, and js automatically populates
//the this keyword with a reference that points towards the specific
//element that got clicked on.

function activateItem () {
    headline.innerHTML = this.innerHTML;
    
    for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('active');
}
    this.classList.add('active');
   
}
btn.addEventListener('click', createNewItem);

function createNewItem () {
    ourList.innerHTML += '<li>new item ' + newItemCounter + '</li>';
    newItemCounter++;
}