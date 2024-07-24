// Get reference to the button and output elements
const button = document.getElementById("main-button");
const output = document.getElementById("output");

const images = [
    "https://ssb.wiki.gallery/images/b/bf/Fox_SSBM.jpg",
    "https://www.ssbwiki.com/images/1/17/Falco_SSBM.jpg",
    "https://www.ssbwiki.com/images/d/dd/Marth_SSBM.jpg",
    "https://www.ssbwiki.com/images/e/eb/Jigglypuff_SSBM.jpg",
    "https://ssb.wiki.gallery/images/4/48/Sheik_SSBM.jpg",
    "https://ssb.wiki.gallery/images/d/db/Peach_SSBM.jpg",
    "https://ssb.wiki.gallery/images/7/77/Captain_Falcon_SSBM.jpg",
    "https://ssb.wiki.gallery/images/1/10/Ice_Climbers_SSBM.jpg"
];

let lastCharacterIndex = -1;
function getCharacterUrl() {
    if (lastCharacterIndex === -1) {
        // this is the first time we're generating something

        const index = Math.floor(Math.random() * images.length);

        lastCharacterIndex = index;
        return images[index];
    }

    const firstHalf = images.slice(0, lastCharacterIndex);
    const secondHalf = images.slice(lastCharacterIndex + 1);
    
    const availableCharacters = [...firstHalf, ...secondHalf];

    let index = Math.floor(Math.random() * availableCharacters.length);

    if (index >= firstHalf.length) {
        // if the character comes from the second half, we need to add one to the index
        // to account for the fact that we removed one in between the first and second halves
        lastCharacterIndex = index + 1;
    } else {
        lastCharacterIndex = index;
    }

    return availableCharacters[index];
}

// Add click event listener to the button
button.addEventListener("click", function() {
    // Update the content of the output section with the random number
    output.src = getCharacterUrl();
});