//display email input
const ls = localStorage.getItem('eml');
const eml = document.getElementById('emlSpan');
//place holder
var placeHold = document.querySelector('input');
//email input
document.addEventListener("DOMContentLoaded", function() {
    eml.value = ls;
});