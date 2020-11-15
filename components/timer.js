var timer;

function timer()
{
    timer = setTimeout(function(){alert("Out of time")}, 3000); //Alerts "Out of time" after 3000 milliseconds
}
function resetTime()
{
    clearTimeout(timer);
     timer(); //this is not right, i thought it would override the first function but it just adds another timer as well which is not what I want
}
function stopTime()
{
     //What could go here to stop the first function from fully executing before it hits 3000 milliseconds and displays the alert message?
}