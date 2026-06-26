// =========================================
// CERTIFICATES DATA
// =========================================

const certificates = [

    {
        title: "SAP Certified - SAP Generative AI Developer",
        image: "assets/certificates/SAP_Certified_Generative_AI_Developer.png",

        link: "https://www.credly.com/badges/35c088f6-37c2-425e-90c4-809f6d3f23c1/public_url",
        view: "../assets/docs/SAP_Certified_Generative_AI_Developer.pdf"
    },

    {
        title: "Microsoft Data Modeling in Power BI",
        image: "assets/certificates/Microsoft_Data_Modeling_in_Power_BI_Certificate.png",

        link: "https://www.coursera.org/account/accomplishments/verify/G3SQMQU2EQFK",
        view: "https://www.coursera.org/account/accomplishments/certificate/G3SQMQU2EQFK"
    },

    {
        title: "Microsoft Extract Transform and Load Data in Power BI",
        image: "assets/certificates/Microsoft_Extract_Transform_and_Load_Data_in_Power_BI.png",

        link: "https://www.coursera.org/account/accomplishments/verify/PWZZ2MQ8D5KH",
        view: "https://www.coursera.org/account/accomplishments/certificate/PWZZ2MQ8D5KH"
    },

    {
        title: "Microsoft Harnessing the Power of Data with Power BI",
        image: "assets/certificates/Microsoft_Harnessing_the_Power_of_Data_with_Power_BI.png",

        link: "https://www.coursera.org/account/accomplishments/verify/0BNUYLEVXG1Q",
        view: "https://www.coursera.org/account/accomplishments/certificate/0BNUYLEVXG1Q"
    },

    {
        title: "Microsoft Preparing Data for Analysis with Microsoft Excel",
        image: "assets/certificates/Microsoft_Preparing_Data_for_Analysis_with_Microsoft_Excel_Certificate.jpeg",

        link: "https://www.coursera.org/account/accomplishments/verify/4YE8ZZB16H49",
        view: "https://www.coursera.org/account/accomplishments/certificate/4YE8ZZB16H49"
    },

    {
        title: "IBM Tools For Data Science",
        image: "assets/certificates/IBM_Tools_For_Data_Science.jpeg",

        // Add Certificate URL
        link: "https://www.coursera.org/account/accomplishments/verify/9CJBPXYEHQLN",

        // Add View URL
        view: "https://www.coursera.org/account/accomplishments/certificate/9CJBPXYEHQLN"
    },

    {
        title: "IBM What is Data Science",
        image: "assets/certificates/IBM_What_is_Data_Science.jpeg",

        link: "https://www.coursera.org/account/accomplishments/verify/B9PRDWPYCKY6",
        view: "https://www.coursera.org/account/accomplishments/certificate/B9PRDWPYCKY6"
    }


];

// =========================================
// CREATE CARD
// =========================================

function createCertificateCard(certificate) {

    return `

        <div class="certificate-card">

            <img
                src="assets/img/cert-notepad.png"
                class="certificate-window"
                alt=""
            >

            <div class="certificate-content">

                <img
                    src="${certificate.image}"
                    class="certificate-preview"
                    alt=""
                >

                <h3 class="certificate-title">

                    ${certificate.title}

                </h3>

                <div class="certificate-links">

                    <a href="${certificate.link}" target="_blank" class="certificate-link">

                        <img
                            src="assets/icons/newpage-icon.png"
                            alt=""
                        >

                        <span>Certificate Link</span>

                    </a>

                    <a href="${certificate.view}" target="_blank">

                        <img
                            src="assets/icons/pdf-icon.png"
                            alt=""
                        >

                        <span>View Certificate</span>

                    </a>

                </div>

            </div>

        </div>

    `;

}

// =========================================
// INITIALIZE
// =========================================

function initializeCertificates() {

    const track = document.querySelector(".certificates-track");

    if (!track) return;

    // Original cards
    certificates.forEach(certificate => {

        track.innerHTML += createCertificateCard(certificate);

    });

    // Duplicate cards for infinite scrolling
    certificates.forEach(certificate => {

        track.innerHTML += createCertificateCard(certificate);

    });

    startSlider();

}

// =========================================
// SLIDER VARIABLES
// =========================================

let animationId = null;
let position = 0;

// =========================================
// START SLIDER
// =========================================

function startSlider() {

    const track = document.querySelector(".certificates-track");

    if (!track) return;

    const card = document.querySelector(".certificate-card");

    if (!card) return;

    const gap = 30;

    const cardWidth = card.offsetWidth + gap;

    const totalWidth = cardWidth * certificates.length;

    cancelAnimationFrame(animationId);

    function animate() {

        position += 1;

        if (position >= totalWidth) {

            position = 0;

        }

        track.style.transform = `translateX(-${position}px)`;

        animationId = requestAnimationFrame(animate);

    }

    animate();

}

// =========================================
// RESTART SLIDER
// =========================================

function restartCertificatesSlider() {

    position = 0;

    const track = document.querySelector(".certificates-track");

    if (track) {

        track.style.transform = "translateX(0px)";

    }

    startSlider();

}

// Make available globally
window.restartCertificatesSlider = restartCertificatesSlider;

