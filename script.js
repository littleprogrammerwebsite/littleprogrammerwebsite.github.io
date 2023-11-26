const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to toggle between light and dark mode
function toggleTheme() {
    body.classList.toggle('dark-mode');

    // Save the theme preference to local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
}

// Check for the saved theme in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// Toggle between light and dark mode on button click
themeToggleBtn.addEventListener('click', toggleTheme);