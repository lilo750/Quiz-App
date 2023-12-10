import "./style.scss";

const checkbox: HTMLInputElement = document.getElementById("toggle")!;
const html: HTMLElement = document.querySelector("html")!;

const toggleDarkMode = (): void => {
    // Check if localStorage is available
    if (typeof localStorage !== "undefined") {
        // Check if localStorage.theme is defined
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Whenever the user explicitly chooses dark mode
        if (checkbox.checked) {
            html.classList.add("dark");
            localStorage.theme = "dark";
            // Whenever the user explicitly chooses light mode
        } else {
            html.classList.remove("dark");
            localStorage.theme = "light";
        }

        // Whenever the user explicitly chooses to respect the OS preference
        localStorage.removeItem("theme");
    } else {
        console.error("localStorage is not available.");
    }
};

checkbox.addEventListener("change", toggleDarkMode);
