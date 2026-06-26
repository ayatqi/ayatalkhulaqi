// =========================================
// CERTIFICATES DATA
// =========================================

const certificates = [

    {
        title: "IBM Tools For Data Science",
        image: "assets/certificates/IBM_Tools_For_Data_Science.jpeg",

        // Add Certificate URL
        link: "#",

        // Add View URL
        view: "#"
    },

    {
        title: "IBM What is Data Science",
        image: "assets/certificates/IBM_What_is_Data_Science.jpeg",

        link: "#",
        view: "#"
    },

    {
        title: "Microsoft Preparing Data for Analysis with Microsoft Excel",
        image: "assets/certificates/Microsoft_Preparing_Data_for_Analysis_with_Microsoft_Excel_Certificate.jpeg",

        link: "#",
        view: "#"
    },

    {
        title: "Microsoft Extract Transform and Load Data in Power BI",
        image: "assets/certificates/Microsoft_Extract_Transform_and_Load_Data_in_Power_BI.png",

        link: "#",
        view: "#"
    },

    {
        title: "Microsoft Data Modeling in Power BI",
        image: "assets/certificates/Microsoft_Data_Modeling_in_Power_BI_Certificate.png",

        link: "#",
        view: "#"
    },

    {
        title: "Microsoft Harnessing the Power of Data with Power BI",
        image: "assets/certificates/Microsoft_Harnessing_the_Power_of_Data_with_Power_BI.png",

        link: "#",
        view: "#"
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

                    <a href="${certificate.link}" target="_blank">

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
// AUTO SLIDER
// =========================================

function startSlider() {

    const track = document.querySelector(".certificates-track");

    let position = 0;

    const card = document.querySelector(".certificate-card");

    if (!card) return;

    const gap = 30;

    const cardWidth = card.offsetWidth + gap;

    const totalWidth = cardWidth * certificates.length;

    function animate() {

        position += 1;

        if (position >= totalWidth) {

            position = 0;

        }

        track.style.transform = `translateX(-${position}px)`;

        requestAnimationFrame(animate);

    }

    animate();

}

// =========================================
// START
// =========================================

initializeCertificates();