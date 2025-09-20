const messages = [
    "Are you sure?",
    "But you're my favorite person!",
    "Don't make me sad...",
    "Pleeease?",
    "You know it's true!",
    "My bestie!",
    "Just say yes already!",
    "I'll ask again!",
    "You're breaking my heart!",
    "Okay, one last time... yes?"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
