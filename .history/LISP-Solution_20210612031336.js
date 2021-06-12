   parenthesisChecker = (str) => {
    let newArray = [];

    let open = {
        '(': ')'
    };

    let closed = {
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            newArray.push(char)
        } else if (closed[char]) {
            if (open[newArray.pop()] !== char) return false
        }
    }
    return newArray.length === 0
}
console.log(parenthesisChecker('(((hannah)))'))
console.log(parenthesisChecker('(han(hannah)nah)'))
console.log(parenthesisChecker('(((kadfhk)))'))
console.log(parenthesisChecker('(()(()()'))

