
let containerEl = $('.container');
let saveButton = $('<button class="saveBtn"></button>');
let timeArray = [
    nineAM = 9,
    tenAM = 10,
    elevenAM = 11,
    twelvePM = 12,
    onePM = 13,
    twoPM = 14,
    threePM = 15,
    fourPM = 16,
    fivePM = 17,
]

console.log(timeArray[2])


let currentDate = moment();
$(document).ready(function () {
    $('#currentDay').text(currentDate.format('Do MMMM YYYY, H:mm'));
});

// adding colour to rows 
colourRow = () => {
    for (let i = 0; i < timeArray.length; i++) {
        if (moment().hour() > timeArray[0]) {
            $('.row').addClass('past');
        } else if (moment().hour() === timeArray[0]) {
            $('.row').addClass('present');
        } else {
            $('.row').addClass('future');
        }
    }
}
colourRow()


console.log(`The current hour is ${moment().hour()}`);
// to get current hour (returns in military time e.g. 13:00)

// local storage set item and get item 
// toggle
// current hour 
// differentiate rows / timeblocks with IDs
// how to add classes to elements with Jquery 
// Save entered text in local storage 'on.click' - saveBtn
// background colour 



// if time in row = moment().hour() time. then add class .present to row ID
// else if time > moment().hour() time then add class .future to row ID
// else add class .past to row