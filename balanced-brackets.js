/*

Write a function that takes in a string made up of brackets ()[]{} ) and other optional characters.
The function should return a boolean representing whether the string is balanced with regards to brackets.

string =  = "([])(){}(())()()" : true

O(n) time | O(n) space - where n is the length of the input array
*/

function balancedBrackets(string) {
    if (string.length) {
        const bracketsStack = [];
        for (let i = 0; i < string.length; i++) {
            const char = string.charAt(i);
            switch (char) {
                case '(':
                case '[':
                case '{':
                    bracketsStack.push(char);
                    break;
                case '}': {
                    const poppedBracket = bracketsStack.pop();
                    if (poppedBracket !== '{') {
                        return false;
                    }
                    break;
                }
                case ']': {
                    const poppedBracket = bracketsStack.pop();
                    if (poppedBracket !== '[') {
                        return false;
                    }
                    break;
                }
                case ')': {
                    const poppedBracket = bracketsStack.pop();
                    if (poppedBracket !== '(') {
                        return false;
                    }
                    break;
                }
                default:
                    break;
            }
        }
        return !bracketsStack.length;
    }
}


console.log(balancedBrackets('([])(){}(())()()')); // true
console.log(balancedBrackets('([)()((()()]]')); // false