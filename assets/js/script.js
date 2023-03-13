let currentHour = moment().hour();
console.log(`The current hour is ${currentHour}`);

// Adding current time to jumbotron
let currentDate = moment();
$(document).ready(function () {
    $('#currentDay').text(currentDate.format('Do MMMM YYYY, H:mm'));
});

// Adding colour to row based on current hour
colourRow = () => {
    let listElements = document.querySelectorAll('.list-group-item')
    for (let i = 0; i < listElements.length; i++) {
        if (currentHour > parseInt(listElements[i].id)) {
            listElements[i].classList.add('past');
        } else if (currentHour === parseInt(listElements[i].id)) {
            listElements[i].classList.add('present');
        } else {
            listElements[i].classList.add('future');
        }
    }
}
colourRow()

// Saving to local storage
let saveButtonEl = document.querySelectorAll('.saveBtn')
let textAreaEl = document.querySelectorAll('.textArea')

for (let i = 0; i < saveButtonEl.length; i++) {
    saveButtonEl[i].addEventListener('click', function () {
        let userInput = this.previousSibling.children[0].value;
        localStorage.setItem(this.previousSibling.id, userInput);
    })
}

function renderUserTextInput() {
    for (let i = 9; i < 18; i++) {
        let userInput = localStorage.getItem([i]);
        document.getElementById([i]).children[0].value = userInput;
    }
}

renderUserTextInput()