function moveZeros(arr) {
    const nonZeros = arr.filter(num => num !== 0);
    const zeros = arr.filter(num => num === 0);

    return [...nonZeros, ...zeros];
}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0, 0, 5, 2, 0, 8]));