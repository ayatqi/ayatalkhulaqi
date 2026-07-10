// ========================================
// PROJECT DATA
// ========================================

const projects = [

    {
        name: "Predictive Maintenance",

        description:
            "<b>Predictive Maintenance for Hydraulic Systems</b> <br><br> This project applies machine learning and deep learning techniques to predict maintenance needs in hydraulic systems. By analyzing sensor data, it identifies failure patterns and correlations between condition variables. Models like Random Forest, CatBoost, and LSTM are evaluated using metrics such as Precision, Recall, F1-score, and Accuracy. The project also includes a Power BI dashboard for visualizing system health and component performance.",

        image: "assets/projects/fyp_poster.png",

        github: "https://github.com/ayatqi/bachelor-final-year-project-predictive-equipment-maintenance-for-hydraulic-system",

        skills: [
            "python",
            "powerbi"

        ]
    },

    {
        name: "Sales Analysis",

        description:
            "<b>Walmart Sales Analysis Power BI</b> <br><br> This project features an interactive Power BI dashboard analyzing Walmart’s weekly sales performance across multiple stores in the United States. The dashboard examines how holidays and economic factors such as temperature, fuel prices, CPI, and unemployment influence sales trends over time.",

        image: "assets/projects/walmart_sales.png",

        github: "https://github.com/ayatqi/Walmart-Sales-Analysis-Power-BI-",

        skills: [
            "powerbi"
        ]
    },

    {
        name: "Image Classification",

        description:
            "<b>Image Classification of 100 sports</b> <br><br> Hundred sports image classification using convolutional neural networks and transfer learning. Training and testing the models with Adam and RMSprop optimizers, a number of 64 and 128 batches and for transfer learning three different architecture models were used. The three architecture models are MobileNetV2, VGG19 and ResNet101V2.",
        image: "assets/projects/img_cls_sport.png",

        github: "https://github.com/ayatqi/Image-Classification-of-100-sports",

        skills: [
            "python",
        ]
    },

    {
        name: "CO2 Emission Analysis",

        description:
            "<b>CO2 Emission Tableau</b> <br><br> Comprehensive analysis of global CO2 and other greenhouse gasses (GHG) emissions reveals critical insights into the historical trends, sector-specific contributions, and the effectiveness of policies aimed at mitigating climate change. This report synthesizes data spanning multiple decades and sectors to provide a nuanced understanding of the drivers and implications of GHG emissions.",
        image: "assets/projects/co2_analysis.png",

        github: "https://github.com/ayatqi/Co2-Emission-Tableau",

        skills: [
            "tableau"
        ]
    },

    {
        name: "Sales Analysis",

        description:
            "<b>BlinkIT Analysis Power BI</b> <br><br> An interactive Power BI dashboard designed to analyze sales performance, customer satisfaction, and inventory distribution for the Blinkit app. The dashboard helps identify key business insights and optimization opportunities using multiple KPIs and dynamic visualizations.",

        image: "assets/projects/blinkit_sales.png",

        github: "https://github.com/ayatqi/BlinkIT-Analysis-Power-BI-",

        skills: [
            "powerbi"
        ]
    }
    
];

// ========================================
// SKILL ICONS
// ========================================

const skillIcons = {

    tableau: "assets/icons/tableau-icon.png",
    excel: "assets/icons/excel-icon.png",
    powerbi: "assets/icons/power-bi-icon.png",
    python: "assets/icons/python-icon.png"

};

// ========================================
// CREATE SKILL ICONS
// ========================================

function createSkills(skills){

    if(skills.length === 0) return "";

    return skills.map(skill => `

        <img
            src="${skillIcons[skill]}"
            alt="${skill}"
            title="${skill}"
        >

    `).join("");

}

// ========================================
// CREATE PROJECT
// ========================================

function createProject(project){

    return `

        <div class="project-folder">

            <img
                src="../assets/img/folder.png"
                class="project-folder__image"
                alt=""
            >

            <div class="project-content">

                <div class="project-name">

                    ${project.name}

                </div>

                <div class="project-grid">

                    <div class="project-description">

                        ${project.description}

                    </div>

                    <div class="project-preview">

                        ${
                            project.image
                            ?
                            `<img src="${project.image}" alt="">`
                            :
                            ""
                        }

                    </div>

                    <div class="project-skills">

                        ${createSkills(project.skills)}

                    </div>

                    <a
                        href="${project.github}"
                        target="_blank"
                        class="project-github"
                    >

                        <img
                            src="assets/icons/github-icon.png"
                            alt=""
                        >

                        <span>

                            Project Link

                        </span>

                    </a>

                </div>

            </div>

        </div>

    `;

}

// ========================================
// INITIALIZE
// ========================================

function initializeProjects(){

    const track =
        document.querySelector(".projects-slider");

    if(!track) return;

    track.innerHTML = "";

    projects.forEach(project=>{

        track.innerHTML += createProject(project);

    });

    startProjectAnimation();

}

// ========================================
// ANIMATION
// ========================================

let currentIndex = 0;
let animationInterval = null;

function updateFolders() {

    const folders = document.querySelectorAll(".project-folder");

    const total = folders.length;

    // Hide every folder
    folders.forEach(folder => {

        folder.className = "project-folder";
        folder.style.display = "none";

    });

    const center = currentIndex;

    const top =
        (currentIndex - 1 + total) % total;

    const bottom =
        (currentIndex + 1) % total;

    // Show only these three folders
    folders[top].style.display = "block";
    folders[center].style.display = "block";
    folders[bottom].style.display = "block";

    folders[top].classList.add("top");
    folders[center].classList.add("center");
    folders[bottom].classList.add("bottom");

}

function startProjectAnimation(){

    updateFolders();

    if(animationInterval){

        clearInterval(animationInterval);

    }

   animationInterval = setInterval(() => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = projects.length - 1;

    }

    updateFolders();

    }, 5000);

}

// ========================================
// PUBLIC
// ========================================

window.initializeProjects = initializeProjects;