function sumOfDigits(num) {
    return Math.abs(num)
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(12345));
console.log(sumOfDigits(9876));