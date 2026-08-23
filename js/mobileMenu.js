// ==========================================
// MOBILE MENU
// ==========================================

function initializeMobileMenu() {

    const menuButton =
        document.getElementById("mobile-menu-btn");

    const mobileMenu =
        document.getElementById("mobile-menu");

    if (!menuButton || !mobileMenu) {
        return;
    }


    // ======================================
    // OPEN / CLOSE MENU
    // ======================================

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        const isOpen =
            mobileMenu.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // ======================================
    // CLOSE WHEN LINK IS CLICKED
    // ======================================

    const menuLinks =
        mobileMenu.querySelectorAll("a");

    menuLinks.forEach(link => {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    // ======================================
    // CLOSE WHEN CLICKING OUTSIDE
    // ======================================

    document.addEventListener("click", function (event) {

        if (
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    // ======================================
    // CLOSE WITH ESCAPE
    // ======================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


// ==========================================
// INITIALIZE AFTER HEADER LOADS
// ==========================================

window.initializeMobileMenu =
    initializeMobileMenu;