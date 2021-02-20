//Display current day at the top of the calendar
var displayTime = moment();
$("#currentDay").text(displayTime.format("dddd, MMM Do, YYYY"));
var hourSpan;
/******each timeblock colored to indicate whether it is in the past, present, or future*****/
function colorHours() {
    $(".form-control").each(function () {
        var testTime = parseInt($(this).attr("id"));
        //console.log(testTime);
        var date = new Date();
        var currentHour = date.getHours();
        //console.log(currentHour);
        if (testTime < currentHour) {
            $(this).addClass("past");
        }
        else if (testTime === currentHour) {
            $(this).addClass("present");
        }
        else if (testTime > currentHour) {
            $(this).addClass("future");
        }
    });
}

$(document).ready(function () {
    colorHours();
   
});


/***********click the save button*************/
$(".saveBtn").on("click", function () {
    inputText = $(this).siblings(".form-control").val().trim();
    hourSpan = $(this).siblings(".input-group-text").text().trim();
    localStorage.setItem(hourSpan, JSON.stringify(inputText));
})





