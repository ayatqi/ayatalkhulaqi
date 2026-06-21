function initializeAbout() {
    const systemMessage = document.getElementById("systemMessage");
    const closeMessageBtn = document.getElementById("closeMessageBtn");
    const sound = document.getElementById("windows95Sound");

    if (!systemMessage || !closeMessageBtn || !sound) return;

    closeMessageBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        // Play sound immediately
        sound.currentTime = 0;
        sound.play().catch((error) => {
            console.log("Audio playback failed:", error);
        });

        // Hide message
        systemMessage.classList.add("hidden");

        // Show message again after 2 seconds
        setTimeout(() => {
            systemMessage.classList.remove("hidden");
        }, 200);
    });
}