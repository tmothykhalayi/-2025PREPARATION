// Get references to the elements
const counterLabel = document.querySelector('label');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

// Initialize the counter value
let counter = 0;

// Update the label text with the current counter value
function updateCounter() {
    counterLabel.textContent = counter;
}

// Event listeners for the buttons
decreaseButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

increaseButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// Initial counter update
updateCounter();
