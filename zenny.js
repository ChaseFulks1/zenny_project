
document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You get what you give.",
    ];

    function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('randomQuote').textContent = quotes[randomIndex];
    }

    window.addEventListener('load', getRandomQuote);

    document.querySelector(".dropdown-icon").addEventListener("click", toggleMenu);

    function toggleMenu() {
    const tabs = document.getElementById("tabs");
    const icon = document.querySelector(".dropdown-icon");
    tabs.classList.toggle("show-tabs");
    icon.classList.toggle("open");
    }
});