document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect for the heading
    var heading = document.getElementById("regiment-Rajput");
    heading.classList.add("fade-in");

    // Menu toggle functionality
    var menuToggle = document.getElementById("menu-toggle");
    var navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});



