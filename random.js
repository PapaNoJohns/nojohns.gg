// Get reference to the button and output elements
const button = document.getElementById('main-button');
const output = document.getElementById('output');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Generate a random number between 1 and 7
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    
    // Update the content of the output section with the random number
    output.textContent = randomNumber;
});