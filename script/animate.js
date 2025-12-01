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
    
    // Flag to track if audio has been played
    let audioPlayed = false;
    
    // Function to play audio
    function playAudio() {
        if (!audioPlayed) {
            const audio = document.getElementById('congratAudio');
            if (audio) {
                audio.play().catch(function(error) {
                    console.log('Audio play failed:', error);
                });
                audioPlayed = true;
            }
        }
    }
    
    // Play audio after 1.5s delay on first user interaction
    // Listen for click
    document.addEventListener('click', function() {
        playAudio();
    }, { once: true });
    
    // Listen for keyboard
    document.addEventListener('keydown', function() {
        playAudio();
    }, { once: true });
    
    // Also try to play after 1.5s in case user interacts before that
    setTimeout(function() {
        playAudio();
    }, 1500);
});

// Stop audio before video plays
setTimeout(function() {
    const audio = document.getElementById('backgroundAudio');
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}, 11000);

// Reset animation after 20 seconds
setTimeout(function() {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = '<div class="first-msg fade-in-msg" style="text-align: center; color: white; padding: 50px; font-size: 1.5em;">You are Awesome! Enjoy Your Success! 🚀</div>';
    }
}, 9000);
setTimeout(function () {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = '<div class="first-msg grow-text" style="text-align: center; color: white; padding: 50px; font-size: 1.5em;">There\'s more</div>';
    }
}, 13000);

setTimeout(function () {
    document.body.style.overflow = 'hidden';
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = '<div style="text-align: center; width: 100%; height: 100vh;"><video id="myVideo" width="100%" height="100%" controls style="object-fit: contain;"><source src="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4" type="video/mp4">Your browser does not support the video tag.</video></div>';
    }
    
    // Force play the video
    setTimeout(function() {
        var video = document.getElementById('myVideo');
        if (video) {
            video.play().catch(function(error) {
                console.log('Autoplay failed:', error);
            });
        }
    }, 100);
}, 16000);