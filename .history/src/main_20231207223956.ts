import "./style.scss";

const checkbox: HTMLInputElement = document.getElementById(
    "toggle"
) as HTMLInputElement;
const html: HTMLElement = document.querySelector("html")!;

const toggleDarkMode = (): void => {
    const savedTheme = localStorage.getItem("theme");

    if (
        savedTheme === "dark" ||
        (!savedTheme &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses dark mode
    if (checkbox.checked) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        // Whenever the user explicitly chooses light mode
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
};

checkbox.addEventListener("change", toggleDarkMode);
