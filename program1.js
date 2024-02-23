
function isValidParentheses(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of s) {
        if (pairs[char]) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            const top = stack.pop();
            if (pairs[top] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("()")); // Output: true
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
