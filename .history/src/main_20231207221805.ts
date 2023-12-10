import "./style.scss";

const checkbox: HTMLInputElement = document.getElementById("toggle")!;
const html: HTMLElement = document.querySelector("html")!;

const toggleDarkMode = (): void => {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    if (checkbox.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
    }

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
};

checkbox.addEventListener("change", toggleDarkMode);
