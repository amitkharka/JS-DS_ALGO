/*
@source: https://leetcode.com/problems/two-sum/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

function addTwoNumbers(list1, list2) {
    const newList = {};

    function addNumbers(l1, l2, l3, carry) {
        if ('val' in l1 && 'val' in l2) {
            const sum = l1.val + l2.val + carry;
            const remainder = sum % 10;
            const quotient = parseInt(sum / 10);
            l3.val = remainder;
            if (l1 && l2 && l1.next && l2.next) {
                l3.next = {};
                return addNumbers(l1.next, l2.next, l3.next, quotient);
            }
        }
                if(carry){
                    l3.val = carry;
                }
        return newList;
    }
    return addNumbers(list1, list2, newList, 0);
};

const list1 = {
    val: 5,
    next: {
    }
};

const list2 = {
    val: 5,
    next: {
    }
};

console.log(addTwoNumbers(list1, list2));