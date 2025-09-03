const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

// Handle theme toggle
toggleBtn.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Change button icon
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
