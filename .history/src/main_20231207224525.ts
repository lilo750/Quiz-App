// Import your styles
import "./style.scss";

// Get the checkbox element
const checkbox: HTMLInputElement | null = document.getElementById(
    "toggle"
) as HTMLInputElement;

// Get the HTML element
const html: HTMLElement | null = document.querySelector("html");

// Function to toggle dark mode
const toggleDarkMode = (): void => {
    if (html && checkbox) {
        const isDarkMode =
            localStorage.getItem("theme") === "dark" ||
            (!localStorage.getItem("theme") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDarkMode) {
            html.classList.add("dark");
            checkbox.checked = true;
        } else {
            html.classList.remove("dark");
            checkbox.checked = false;
        }
    }
};

// Event listener for checkbox change
checkbox.addEventListener("change", () => {
    if (html && checkbox) {
        if (checkbox.checked) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }
});

// Initial setup
toggleDarkMode();
