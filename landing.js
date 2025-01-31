// JavaScript for Falling Hearts Animation
const fallingHeartsContainer = document.getElementById('fallingHearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Randomize the position and animation duration
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';

    // Randomize heart color (white or pink)
    heart.innerHTML = Math.random() > 0.5 ? '💖' : '🤍';

    fallingHeartsContainer.appendChild(heart);

    // Remove the heart when it goes out of view
    heart.addEventListener('animationend', () => {
        heart.remove(); // Remove the heart when the animation ends
        createHeart(); // Create a new heart to replace it
    });
}

// Generate initial hearts
for (let i = 0; i < 20; i++) {
    createHeart();
}