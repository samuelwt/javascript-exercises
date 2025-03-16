const reverseString = function(inputString) {
    const charArray = inputString.split(""); // splits string to characters in an array
    charArray.reverse(); // reverses elements of the array
    return charArray.join(""); // joins and converts to string
};

// Do not edit below this line
module.exports = reverseString;
