function initializeSystemMessages() {

    const messages =
        document.querySelectorAll(".system-message");

    const sound =
        document.getElementById("windows95Sound");

    messages.forEach((message) => {

        const closeButton =
            message.querySelector(
                ".system-message__close"
            );

        if (!closeButton) return;

        closeButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                if (sound) {

                    sound.currentTime = 0;

                    sound.play().catch(() => {});
                }

                message.classList.add(
                    "hidden"
                );

                setTimeout(() => {

                    message.classList.remove(
                        "hidden"
                    );

                }, 500);
            }
        );
    });
}