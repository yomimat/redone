//savin email input
document.addEventListener("DOMContentLoaded", function() {
    const btnNext = document.getElementById('btnNext');
    btnNext.addEventListener("click", advancePage, false);
});

function advancePage() {
    const emailInput = document.getElementById('emlInput');
    localStorage.setItem('eml', emailInput.value);
    window.location.href = "t2.html";
}