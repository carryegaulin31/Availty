// write a checker that validates the parentheses of a LISP code.
// Write a function that validates to a Boolean
// Take in a string as a parameter
// Loop through the string and detect opening parentesis
// When an opening parenthesis is detected continue looping until a closing parenthesis is detected
// If loop goes through the string to length that way
// return true
// else if it comes to another opening parenthesis first
// return false

// Loop through the string for all parenthesis and put them into a new string
// *Are there nested lists or are they one ends and another one starts?
// *If that is the case would it have to run a loop from the front and the back at the same time?
// Similar to a Palindrome checker??

function PalindromeChecker(value) {
    for (var i = 0; i < (value.length / 2); i++) {
    if (value[i] !== value[(value.length - 1) - i]) {
    return false
    }
    }
    
    return true
}
    console.log(PalindromeChecker('()'))
    console.log(PalindromeChecker('hannah'))

    // This is not looking at parenthesis for some reason

    // loop through the string at length
    // look for '(' if there is one add it to the count
    // look for ')'

