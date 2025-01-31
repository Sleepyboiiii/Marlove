 // Function to trigger confetti, hearts, and flowers animation
function playCelebration() {
    const confettiContainer = document.getElementById("confetti-container");
    const heartsContainer = document.getElementById("falling-hearts");
    const flowersContainer = document.getElementById("falling-flowers");

    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti");
        confettiPiece.style.left = Math.random() * 100 + "vw";
        confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Random fall duration
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confettiPiece);

        // Remove confetti after animation ends
        confettiPiece.addEventListener("animationend", () => {
            confettiPiece.remove();
        });
    }

    // Create hearts falling
    for (let i = 0; i < 30; i++) { // Number of hearts
        let heart = document.createElement("span");
        heart.classList.add("heart");
        heart.innerHTML = "💗"; // Heart emoji
        heart.style.left = Math.random() * 100 + "vw"; // Random position
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s"; // Random fall speed
        heartsContainer.appendChild(heart);

        // Remove heart after animation ends
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }

    // Create flowers falling
    for (let i = 0; i < 20; i++) { // Number of flowers
        let flower = document.createElement("span");
        flower.classList.add("flower");
        flower.innerHTML = "🌸"; // Flower emoji
        flower.style.left = Math.random() * 100 + "vw"; // Random position
        flower.style.animationDuration = (Math.random() * 3 + 3) + "s"; // Random fall speed
        flowersContainer.appendChild(flower);

        // Remove flower after animation ends
        flower.addEventListener("animationend", () => {
            flower.remove();
        });
    }
}

// Random color for confetti
function getRandomColor() {
    const colors = ["#ff4081", "#ab47bc", "#ffeb3b", "#03a9f4", "#8bc34a"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Play celebration animation on page load
window.onload = function () {
    playCelebration();
};