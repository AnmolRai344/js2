function customFlat(arr, depth = 1) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            result.push(...customFlat(item, depth - 1));
        } else {
            result.push(item);
        }
    }

    return result;
}

const numbers = [1, [2, [3, [4, 5]]]];

console.log(customFlat(numbers, 1));
console.log(customFlat(numbers, 2));
console.log(customFlat(numbers, Infinity));