// Import your styles
import './style.scss';

// Get the checkbox element
const checkbox: HTMLElement | null = document.getElementById('toggle');

// Get the HTML element
const html: HTMLElement = document.querySelector('html')!;

const sunIcon = document.getElementById('sun') as HTMLImageElement;
const moonIcon = document.getElementById('moon') as HTMLImageElement;

// Function to toggle dark mode
const toggleDarkMode = (): void => {
    if (checkbox) {
        const isDarkMode =
            localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDarkMode) {
            html.classList.add('dark');
            checkbox.checked = true;
            sunIcon.src = '../public/icon-sun-light.svg';
            moonIcon.src = '../public/icon-moon-light.svg';
        } else {
            html.classList.remove('dark');
            checkbox.checked = false;
            sunIcon.src = '../public/icon-sun-dark.svg';
            moonIcon.src = '../public/icon-moon-dark.svg';
        }
    }
};

// Event listener for checkbox change
checkbox.addEventListener('change', () => {
    if (checkbox) {
        if (checkbox.checked) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.src = '../public/icon-sun-light.svg';
            moonIcon.src = '../public/icon-moon-light.svg';
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            sunIcon.src = '../public/icon-sun-dark.svg';
            moonIcon.src = '../public/icon-moon-dark.svg';
        }
    }
});

// Initial setup
toggleDarkMode();
