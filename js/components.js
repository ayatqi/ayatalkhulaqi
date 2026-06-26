async function loadComponent(
    containerId,
    filePath
) {

    const response =
        await fetch(filePath);

    if (!response.ok) return;

    const html =
        await response.text();

    document
        .getElementById(containerId)
        .innerHTML = html;

    initializeSystemMessages();

    if (
        containerId === "about-container" &&
        typeof initializeAbout === "function"
    ) {
        initializeAbout();
    }

    if (
        containerId === "cretifications-container" &&
        typeof initializeCertificates === "function"
    ) {
        initializeCertificates();
    }

}

loadComponent(
    "header-container",
    "components/Header.html"
).then(() => {

    const certificatesBtn =
        document.getElementById("certificates-nav");

    if (certificatesBtn) {

        certificatesBtn.addEventListener("click", () => {

            setTimeout(() => {

                if (window.restartCertificatesSlider) {
                    window.restartCertificatesSlider();
                }

            }, 100);

        });

    }

});

loadComponent(
    "about-container",
    "components/About.html"
);

loadComponent(
    "experience-container",
    "components/Experience.html"
);

loadComponent(
    "cretifications-container",
    "components/Certifications.html"
);