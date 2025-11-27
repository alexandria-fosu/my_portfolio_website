// Theme toggle logic
const toggleButton = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  htmlElement.classList.add('dark-theme');
  toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
}

toggleButton.addEventListener('click', () => {
  htmlElement.classList.toggle('dark-theme');

  // Update icon and save preference
  if (htmlElement.classList.contains('dark-theme')) {
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
});