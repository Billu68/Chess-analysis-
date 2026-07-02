class ControlManager {
    constructor(uiManager) {
        this.ui = uiManager;
        this.initializeTheme();
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
    }

    setTheme(theme) {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggle.classList.add('dark-mode');
        } else {
            body.classList.remove('light-mode');
            themeToggle.classList.remove('dark-mode');
        }
        
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Initialize theme toggle
document.getElementById('themeToggle').addEventListener('click', function() {
    const controls = window.controlManager;
    if (controls) controls.toggleTheme();
});