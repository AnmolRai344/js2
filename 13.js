function findPairs(arr, target) {
    const seen = new Set();
    const pairs = [];

    for (const num of arr) {
        const difference = target - num;

        if (seen.has(difference)) {
            pairs.push([difference, num]);
        }

        seen.add(num);
    }

    return pairs;
}

console.log(findPairs([2, 4, 3, 5, 7, 8], 10));