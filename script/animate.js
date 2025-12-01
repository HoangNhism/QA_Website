// Create confetti pieces
// Inject CSS styles dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .fade-in-msg {
        animation: fadeIn 4s ease-out forwards;
    }
    @keyframes growText {
        from {
            transform: scale(1);
            opacity: 0;
        }
        to {
            transform: scale(1.5);
            opacity: 1;
        }
    }
    .grow-text {
        animation: growText 3s ease-out forwards;
    }
`;
document.head.appendChild(style);

function createConfetti() {
    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti confetti-piece-' + ((i % 3) + 1);
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#ff8c00'][Math.floor(Math.random() * 5)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
    }
}

// Create twinkling stars in background
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `fadeIn ${Math.random() * 2 + 1}s ease-in-out infinite`;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Initialize animations
window.addEventListener('load', function() {
    createConfetti();
    createStars();
});

// Reset animation after 20 seconds
setTimeout(function() {
    document.body.innerHTML = 
    '<div class="first-msg fade-in-msg" style="text-align: center; color: white; padding: 50px; font-size: 1.5em;">You are Awesome! Enjoy Your Success! 🚀</div>';
}, 7000);
setTimeout(function () {
  document.body.innerHTML =
    '<div class="first-msg grow-text" style="text-align: center; color: white; padding: 50px; font-size: 1.5em;">There\'s more</div>';
}, 9000);

setTimeout(function () {
  document.body.innerHTML =
    '<div style="text-align: center; width: 100%; height: 100vh;"><video width="100%" height="100%" controls autoplay style="object-fit: contain;"><source src="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4" type="video/mp4">Your browser does not support the video tag.</video></div>';
}, 12000);