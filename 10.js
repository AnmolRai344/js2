function binaryToDecimal(binary) {
    if (!/^[01]+$/.test(binary)) {
        throw new Error("Invalid binary number");
    }

    return parseInt(binary, 2);
}

console.log(binaryToDecimal("1010"));
console.log(binaryToDecimal("11001"));
console.log(binaryToDecimal("111111"));