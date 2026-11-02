function productOfDigits(num) {
    return Math.abs(num)
        .toString()
        .split("")
        .reduce((product, digit) => product * Number(digit), 1);
}

console.log(productOfDigits(1234));
console.log(productOfDigits(234));