// JavaScript for the Yes and No buttons
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

let growCount = 0; // Track how many times "No" is pressed

// Function to grow the Yes button a bit each time No is pressed
function growYesButton() {
    growCount++; // Increase counter
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`; // Increase size by 20% each press
}

// Function to redirect to the celebration page
function celebrateLove() {
    window.location.href = "celebration.html";
}

// Event listener for No button (triggers Yes button growth)
noButton.addEventListener('click', growYesButton);

// Event listener for Yes button (redirects to celebration)
yesButton.addEventListener('click', celebrateLove);

// JavaScript for Falling Hearts Animation
const fallingHeartsContainer = document.getElementById('fallingHearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');

    // Randomize the position and animation duration
    heart.style.left = Math.random() * 100 + 'vw';
    let fallSpeed = 3 + Math.random() * 2; // Fall duration (3s to 5s)
    heart.style.animationDuration = fallSpeed + 's';

    // Randomize heart color (white or pink)
    heart.innerHTML = Math.random() > 0.5 ? '💖' : '🤍';

    fallingHeartsContainer.appendChild(heart);

    // Remove heart after it fully leaves the screen
    setTimeout(() => {
        heart.remove();
    }, fallSpeed * 1000 + 2000); // Ensure it's fully out of view
}

// Generate hearts continuously
setInterval(createHeart, 500);
