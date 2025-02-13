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

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (messageCounter >= 13) {
        noButton.style.display = 'none'; // Hide the button on the 14th click
        window.alert("I reject your rejection eheh");
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