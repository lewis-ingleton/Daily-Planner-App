# Daily-Planner-App
https://lewis-ingleton.github.io/Daily-Planner-App/ 

## What is this?
A simple calendar application that allows a user to save events for each hour of the day. This task will include DOM manipulation, advanced JavaScript and integration of third-party APIs.

## Functionality / user story
As a user, I want a scheduler where I can note down my to-dos. I will write these to-dos in a row that corresponds to the time of day that I plan to do that particular task.

The scheduler has a colour code. For any row that is 
- Grey, it means the time of that row has passed
- Red, it means that is the current time so you should be working on the task in that row
- Green, it means these are times in the future, so these are your upcoming tasks 

For each row, when a user writes their to-do it will save to local storage so that the user's input is persistent i.e. even if they close the browser window and revisit the page, their input will still display on-screen.

At the end of each day (midnight) the local storage and existing text will clear so that the user as a fresh scheduler each day. 

## Applications used
I have used the moment.js API to display the current date and time to the user. This API is the main component of the functionality of this webpage, which I have described in the previous section. 

## Final screenshot

![Lewis Ingleton's work day scheduler](https://github.com/lewis-ingleton/Daily-Planner-App/blob/main/assets/screenshot/daily-planner-screenshot.png?raw=true)



