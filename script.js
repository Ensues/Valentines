const messages = [
    "HOW DARE YOU CLICK THIS BUTTON 👹👹👹",
    "Do you even love me?",
    "Are you sure?",
    "Are you REALLY sure??",
    "Are you positively sure???",
    "Baby please... 😭😭😭",
    "HAIYAAAAA!",
    "If you say no, I will be a depressi sphagetti...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Haiya I should have jumped off a building already",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! 🙏😭❤️"
];

let messageIndex = 0;
let messageCounter = 0;
const originalYesSize = window.getComputedStyle(document.querySelector('.yes-button')).fontSize; 

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (messageCounter >= 13) {
        noButton.style.display = 'none';
        window.alert("Error 404: 'No' button not found. You broke it. 👹");
        yesButton.style.fontSize = originalYesSize;
    } else {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.4}px`;

        messageCounter += 1;
    }

}

function handleYesClick() {
    window.location.href = "yes.html";
}