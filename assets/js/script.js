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
let textArea = localStorage.getItem('textArea')
let saveButton = document.querySelectorAll('.saveBtn')

for (let i = 0; i < saveButton.length; i++) {
    // console.log(saveButton[i])
    saveButton[i].addEventListener('click', function() {
        console.log(this.previousSibling.children[0].value)
        // save this.previousSibling.children[0].value to local storage
    }
    
    )
}

// local storage set item and get item 
// how to add classes to elements with Jquery 
// Save entered text in local storage 'on.click' - saveBtn