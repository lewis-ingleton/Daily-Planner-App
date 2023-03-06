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

for (let i = 0; i < saveButtonEl.length; i++) {
    // console.log(saveButton[i])
    saveButtonEl[i].addEventListener('click', function() {
        localStorage.getItem('User input')
        console.log('test', this.previousSibling.children[0].value)
        localStorage.setItem('User input', this.previousSibling.children[0].value)
        
    }
    )
}

// local storage set item and get item 
// how to add classes to elements with Jquery 
// Save entered text in local storage 'on.click' - saveBtn