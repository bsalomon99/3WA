(function() {
    
    document.querySelector('button').addEventListener('click', toggleForm);

    completeTask();

    identifyDate();
})();

//DOMContentLoaded

function toggleForm() {
    document.querySelector('.js-selector').classList.toggle('is-active');
    document.querySelector('.form-container').classList.toggle('is-active');
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach.call(inputs, input => {
        input.classList.toggle('is-active');
    });
}

function completeTask() {
    const buttons = document.querySelectorAll('button[data-index]');

    buttons.forEach.call(buttons, button => {
        button.addEventListener('click', function() {
            // this.dataset.index
            // const index = this.getAttribute('data-index');

            this.parentElement.parentElement.classList.toggle('task-done');
            
            /*this.parentElement.parentElement.style.textDecoration = toggleStrike(
                this.parentElement.parentElement
            );*/
        });
    });
}

function toggleStrike(ele) {
    return ele.element.style.textDecoration === '' ? 'line-through' : '';
}

function identifyDate() {
    const strings = document.querySelectorAll('td p');

    strings.forEach.call(strings, string => {
        if (validateDate(string.innerHTML)) {
            checkDueDate(string);
        }
    });
}

function checkDueDate(date) {
    let dateString = date.innerHTML.split('-').join('/');
    let now = new Date();
    let dateToCompare = new Date(dateString);

    if (dateToCompare < now ) {
        date.classList.add('deadline-passed');
        const span = document.createElement('span');

        span.innerText = 'Cette tache est perimee';

        date.appendChild(span);
    }
}

//https://gist.github.com/m-coding/c96d99558a47d30aef4992c6dd60437a
function validateDate(date) {
    
    const regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    
    return regex.test(String(date).toLowerCase());
}
