const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('nameDisplay');

// Update name display as user types
if (nameInput) {
    nameInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            nameDisplay.textContent = '✨';
        } else {
            nameDisplay.textContent = `Happy Birthday ${this.value}! 🎂`;
        }
    });
}

// Celebrate function with confetti
function celebrate() {
    // document.getElementById("qubyGif").style.display = "block";
    createConfetti();
    createHearts();
    // Vibration feedback if available
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 200]);
    }
}

// function next(){
//     Nextimage(); 
//     // Vibration feedback if available
//     if (navigator.vibrate) {
//         navigator.vibrate([100, 50, 100, 50, 200]);
//     }
// }


// function previous(){
//     previousimage();
//     // Vibration feedback if available
//     if (navigator.vibrate) {
        // navigator.vibrate([100, 50, 100, 50, 200]);
//     }

// }

// Create confetti
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = ['#ff1493', '#ff69b4', '#ffd700', '#ff8c00', '#00bfff'][Math.floor(Math.random() * 5)];
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Create floating hearts
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'hearts';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        heart.style.animationDelay = (Math.random() * 0.5) + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }  
}

// Set initial focus when page loads
    window.addEventListener('load', function() {
        if (nameInput) {
            nameInput.focus();
        }
    });

    let currentImage = 1;
    const totalImages = 10; // change this to total number of pictures

    function showImage() {
        console.log("Showing image " + currentImage);
        const img = document.getElementById("memoryImage");
        img.src = "/static/image/image" + currentImage + ".JPEG" 
    }

    function next() {
        console.log("Next button clicked. Current image: " + currentImage);
        if (currentImage < totalImages) {
            currentImage++;
        } else {
            currentImage = 1; // loop back to first
        }
        showImage();
    }

    function previous() {
        if (currentImage > 1) {
            currentImage--;
        } else {
            currentImage = totalImages; // go to last image
        }
        showImage();
    }


function checkLuck() {

    const name = document.getElementById("luckInput").value.trim()
    const bf = document.getElementById("luckInput3").value.trim()

    const result = document.getElementById("luckResult")

    if(name === "" || bf === ""){
        result.innerHTML = "⚠️ Please enter names first!"
        return
    }
    createHearts()
    createHearts()

    document.getElementById("luckInput").disabled = true
    document.getElementById("luckinput2").disabled = true
    document.getElementById("luckInput3").disabled = true
    document.getElementById("luckinput4").disabled = true
    

    result.innerHTML = `
        💖 ${name}, You are the luckiest girl in the world! 💖 <br>
        Because you have the best boyfriend <b>${bf}</b> 😎
    `
    

}
function Future_you() {
    const img = document.getElementById("fun_image");
    const text = document.getElementById("fun_text");
    img.src = "/static/fun_image/image6" + ".jpg" 
    text.innerText = "I want to see you to achieve all your dream";
}

function we_are_like() {
    const img = document.getElementById("fun_image");
    const text = document.getElementById("fun_text");
    img.src = "/static/fun_image/image3" + ".jpg"
    text.innerText = "We are like Tom and Jerry…no matter how much we fight, we still choose each other.";
}

function we_are_fight() {
    const img = document.getElementById("fun_image");
    
    img.src = "/static/fun_image/image4" + ".jpg"
    const text = document.getElementById("fun_text");
    text.innerText = "We fight because you never get angry 😃";

}

function Future_we_are() {
    const img = document.getElementById("fun_image");
    img.src = "/static/fun_image/image5" + ".jpg"
    const text = document.getElementById("fun_text");
    text.innerText = "6 bacche to pakke hai🤣🤣";
}

function fight_look_like(){
    const img = document.getElementById("fun_image");
    img.src = "/static/fun_image/image2" + ".jpg"
    const text = document.getElementById("fun_text");
    text.innerText = "This is how we look when we fight";

}

