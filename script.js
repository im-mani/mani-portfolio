document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text");

    if (!typingText) {
        console.log("Typing element not found");
        return;
    }

    const words = [
        "Frontend Developer",
        "BCA Student",
        "Web Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingText.textContent = currentWord.substring(0, charIndex);

        let speed = deleting ? 60 : 100;

        if (!deleting && charIndex === currentWord.length) {
            deleting = true;
            speed = 1200;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 300;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});