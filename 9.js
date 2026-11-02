function decimalToBinary(num) {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("Enter a non-negative integer");
    }

    return num.toString(2);
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(25));
console.log(decimalToBinary(100));