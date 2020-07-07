var totalFruit = function (tree) {
    let max = 0;
    let sum = 0;
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < tree.length; i++) {
        if (tree[p1] !== tree[p2] && p1 === p2) {
            p2 = i;
            sum += 1;
        } else if (tree[i] !== tree[p1] || tree[i] !== tree[p2]) {
            p1 = i - 1;
            p2 = i;
            if (sum > max) {
                max = sum;
            }
            sum = 0;
        } else {
            sum += 1;
        }
    }
    return max;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));