/*
string = "abcdcba" : true
*/

function isPalindrome(string) {
    let frontPointer = 0;
    let stringLength = string.length;
    while (--stringLength && stringLength !== frontPointer) {
        if (string.charAt(frontPointer) !== string.charAt(stringLength)) {
            return false;
        }
        frontPointer++;
    }
    return true;
}

console.log(isPalindrome('aba')); // true