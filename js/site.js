// Event listener for button click
document.getElementById("btnSubmit").addEventListener("click", getValues)

// Get the string from user input
// Controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Reverse the string
// logic function
function reverseString(userString){

    let revString = [];

    // name= Bobby
    // last position in an array is name.length - 1 
    // reverse a string using a for loop
    // index greater than or equal to zero because we are counting down
    // this is a decrementing for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        // cant declare let here because it will loop over itself 
        // simply mean revstring is going to add to itself until we get to the first character or the [0] character
        revString += userString[index];
    }
    return revString;

}

// Display the reversed string to the user
// View Function
function displayString(revString){

    // write the message to the page
    // Template literals doesnt write well with Prism.js
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}