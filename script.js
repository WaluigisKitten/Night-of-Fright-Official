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

// script.js
document.getElementById('animated-button').addEventListener('click', function(event) {
    event.preventDefault(10000); // Prevent the default link behavior
    
    // Add an animation class to trigger the animation
    this.classList.add('animate');
    
    // After a delay, open the link
    setTimeout(() => {
        window.location.href = this.getAttribute('href');
    }, 5000); // Adjust the delay (in milliseconds) as needed
});