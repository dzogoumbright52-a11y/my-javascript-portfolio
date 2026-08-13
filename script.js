// 1. DYNAMIC PROJECTS GENERATION
const projects = [
    { title: "E-Commerce App", description: "Built with HTML, CSS, and JS.", link: "#" },
    { title: "Weather Dashboard", description: "Fetches live weather data from an API.", link: "#" },
    { title: "Task Manager", description: "Local storage productivity web app.", link: "#" }
];

const container = document.getElementById("projects-container");

// Loap through arrays and inject cards directly into the DOM
projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
});

// 2. DARK MODE TOGGLE
const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeButton.textContent = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
});

// 3. AUTO-TYPING EFFECT
const words = ["Developer", "Designer", "Creator"];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    let currentWord = words[wordIndex];
    if (charIndex < currentWord.length) {
        typingElement.textContent += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150); // Speed of typing
    } else {
        setTimeout(typeEffect, 1500); // Pause before erasing
        }
    }


function eraseEffect() {
    let currentWord = words[wordIndex];
    if (charIndex > 0) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 100); // Speed of erasing
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500); // Pause before typing next word
    }
}

// Start the typing animation on window load
document.addEventListener("DOMContentLoaded", typeEffect);
