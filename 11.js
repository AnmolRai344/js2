function maxDifference(arr) {
    if (arr.length < 2) return null;

    let minValue = arr[0];
    let maxDiff = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        maxDiff = Math.max(maxDiff, arr[i] - minValue);
        minValue = Math.min(minValue, arr[i]);
    }

    return maxDiff;
}

console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]));