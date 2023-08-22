// Header Scroll
let nav = document.querySelector(".navbar");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};


// Hide navigation collapse on link click
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});

// Smooth scrolling for anchor links
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("nav-link")) {
        let targetId = event.target.getAttribute("href");
        let targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            event.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
            navCollapse.classList.remove("show");
        }
    }
});
// script.js
const animation = document.getElementById('animation');
const playButton = document.createElement('button');
playButton.innerText = 'Play/Pause';

animation.parentElement.appendChild(playButton);

playButton.addEventListener('click', () => {
    if (animation.paused) {
        animation.play();
        playButton.innerText = 'Pause';
    } else {
        animation.pause();
        playButton.innerText = 'Play';
    }
});
