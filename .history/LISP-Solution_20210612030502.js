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


    // This is not looking at parenthesis for some reason
    // const parenthesisChecker = (str) => {
    //     let left = []
    //     let right = []
    // loop through the string at length
        // for(let i = 0; i < str.length; i++) {
    // look for '(' if there is one add it to the count
    //         if(str[i] === '(' ) {
    //             left.push(str[i])
    //         }
    //         if(str[i] === ')') {
    //             right.push(str[i])
    //         }
    //         if(left.length === right.length) {
    //             return true
    //         }
    //     }
    // }
    // look for ')' if there is one add it to another count 
    // at the end of the loop compare the two counts// if they are strictly equal
    // return true
    // else return false
    parenthesisChecker = (str) => {
    let stack = [];

    let right = {
        '(': ')'
    };

    let left = {
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (right[char]) {
            stack.push(char)
        } else if (left[char]) {
            if (right[stack.pop()] !== char) return false
        }
    }
    return stack.length === 0
}
console.log(parenthesisChecker('(hannah)))'))
console.log(parenthesisChecker('(hannah)'))
