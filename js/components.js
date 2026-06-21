async function loadComponent(containerId, filePath) {
    const response = await fetch(filePath);

    if (!response.ok) return;

    const html = await response.text();

    document.getElementById(containerId).innerHTML = html;

    if (containerId === "about-container") {
        initializeAbout();
    }
}

loadComponent(
    "header-container",
    "./components/Header.html"
);

loadComponent(
    "about-container",
    "./components/About.html"
);