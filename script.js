// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const spookyButton = document.getElementById("spooky-button");
    const pumpkinImage = document.querySelector(".pumpkin");

    // Function to trigger a spooky surprise
    function triggerSpookySurprise() {
        pumpkinImage.classList.add("rotate");
        setTimeout(() => {
            pumpkinImage.classList.remove("rotate");
        }, 2000);
    }

    // Add an event listener to the button
    spookyButton.addEventListener("click", triggerSpookySurprise);
});

