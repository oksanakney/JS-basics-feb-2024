function printText(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {  // If the character is not a space
            console.log(input[i]); // Print the character
        } else {
            console.log('');  // Print a blank line if the character is a space
        }
    }
}

// Correct function calls with strings, not arrays
printText("softuni");
console.log('');  // Add a blank line between the two calls
printText("ice cream");