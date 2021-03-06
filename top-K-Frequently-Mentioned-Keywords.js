/*
@source: https://leetcode.com/discuss/interview-question/542597/

Input:
k = 2
keywords = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]
Output:
["betacellular", "anacell"]

Explanation:
"betacellular" is occuring in 3 different reviews.
"anacell" and "deltacellular" are occuring in 2 reviews, but "anacell" is lexicographically smaller.
*/

function getTopKKeyowds(reviews, keywords, k) {
    if (reviews.length && keywords.length && k) {
        const keywordsHasMap = {};

        reviews.forEach(review => {
            keywords.forEach(keyword => {
                const regExp = new RegExp(keyword, 'i');
                const keywordMatches = review.match(regExp);
                if (keywordMatches && keywordMatches.length) {
                    const count = keywordMatches.length;
                    if (keyword in keywordsHasMap) {
                        keywordsHasMap[keyword] = keywordsHasMap[keyword] + count;
                    } else {
                        keywordsHasMap[keyword] = count;
                    }
                }
            });
        });

        console.log(keywordsHasMap)

    }
    return [];
}


const keywords1 = ["anacell", "cetracular", "betacellular"]
const reviews1 = [
    "Anacell provides the best services in the city",
    "betacellular has awesome services",
    "Best services provided by anacell, everyone should use anacell",
];


const keywords2 = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
const reviews2 = [
    "I love anacell Best services; Best services provided by anacell",
    "betacellular has great services",
    "deltacellular provides much better services than betacellular",
    "cetracular is worse than anacell",
    "Betacellular is better than deltacellular.",
]
// console.log(getTopKKeyowds(reviews1, keywords1, 2)); // ["anacell", "betacellular"]
console.log(getTopKKeyowds(reviews2, keywords2, 2)); // ["betacellular", "anacell"]