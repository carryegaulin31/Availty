// write a checker that validates the parentheses of a LISP code.
// Write a function that validates to a Boolean
// Take in a string as a parameter
// Loop through the string and detect opening parentesis
// When an opening parenthesis is detected continue looping until a closing parenthesis is detected
// If loop goes through the string to length that way
// return true
// else if it comes to another opening parenthesis first
// return false

// Loop through the string for all parenthesis and put them into a new array
// *Are there nested lists or are they one ends and another one starts?
// *If that is the case run a loop from the front and the back at the same time?


    
    parenthesisChecker = (str) => {
    let newArray = [];

    let right = {
        '(': ')'
    };

    let left = {
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (right[char]) {
            newrray.push(char)
        } else if (left[char]) {
            if (right[newArray.pop()] !== char) return false
        }
    }
    return stack.length === 0
}
console.log(parenthesisChecker('(((hannah)))'))
console.log(parenthesisChecker('(han(hannah)nah)'))
console.log(parenthesisChecker('(((kadfhk)))'))
console.log(parenthesisChecker('(()(()()'))

