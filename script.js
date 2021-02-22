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
    reloadPage();
});


/***********click the save button*************/
$(".saveBtn").on("click", function () {
    inputText = $(this).siblings(".form-control").val().trim();
    hourSpan = $(this).siblings(".input-group-text").text().trim();
    localStorage.setItem(hourSpan, JSON.stringify(inputText));
})

/***********All saved event persist when I refresh the page***************/
function reloadPage(){
    var nineAm = $("#9am");
    var reload9 = JSON.parse(localStorage.getItem("09:00am"));
    nineAm.val(reload9);

    var tenAm = $("#10am");
    var reload10 = JSON.parse(localStorage.getItem("10:00am"));
    tenAm.val(reload10);

    var elevenAm = $("#11am");
    var reload11 = JSON.parse(localStorage.getItem("11:00am"));
    elevenAm.val(reload11);

    var twelvePm = $("#12pm");
    var reload12 = JSON.parse(localStorage.getItem("12:00pm"));
    twelvePm.val(reload12);

    var onePm = $("#13pm");
    var reload13 = JSON.parse(localStorage.getItem("01:00pm"));
    onePm.val(reload13);

    var twoPm = $("#14pm");
    var reload14 = JSON.parse(localStorage.getItem("02:00pm"));
    twoPm.val(reload14);

    var threePm = $("#15pm");
    var reload15 = JSON.parse(localStorage.getItem("03:00pm"));
    threePm.val(reload15);

    var fourPm = $("#16pm");
    var reload16 = JSON.parse(localStorage.getItem("04:00pm"));
    fourPm.val(reload16);

    var fivePm = $("#17pm");
    var reload17 = JSON.parse(localStorage.getItem("05:00pm"));
    fivePm.val(reload17);
}




