function longestConsecutive(arr) {
    const numbers = new Set(arr);
    let longest = 0;

    for (const num of numbers) {
        if (!numbers.has(num - 1)) {
            let current = num;
            let length = 1;

            while (numbers.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([10, 11, 12, 20, 21]));