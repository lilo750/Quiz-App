// Import your styles
import './style.scss';

// Get the checkbox element
const checkbox: HTMLInputElement | null = document.getElementById(
    'toggle'
) as HTMLInputElement;

// Get the HTML element
const html: HTMLElement = document.querySelector('html')!;

const sunIcon = document.getElementById('sun') as HTMLImageElement;
const moonIcon = document.getElementById('moon') as HTMLImageElement;

// Function to update the theme
const updateTheme = (isDarkMode: boolean): void => {
    if (isDarkMode) {
        html.classList.add('dark');
        sunIcon.src = '../public/icon-sun-light.svg';
        moonIcon.src = '../public/icon-moon-light.svg';
    } else {
        html.classList.remove('dark');
        sunIcon.src = '../public/icon-sun-dark.svg';
        moonIcon.src = '../public/icon-moon-dark.svg';
    }
};

// Function to toggle dark mode
const toggleDarkMode = (): void => {
    if (checkbox) {
        const isDarkMode =
            localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);

        checkbox.checked = isDarkMode;
        updateTheme(isDarkMode);
    }
};

// Event listener for checkbox change
checkbox?.addEventListener('change', () => {
    if (checkbox) {
        const isDarkMode = checkbox.checked;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateTheme(isDarkMode);
    }
});

// Initial setup
toggleDarkMode();
