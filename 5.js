function isArmstrong(num) {
    if (!Number.isInteger(num) || num < 0) return false;

    const digits = String(num).split("").map(Number);
    const power = digits.length;

    const sum = digits.reduce(
        (total, digit) => total + digit ** power,
        0
    );

    return sum === num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(370));
console.log(isArmstrong(123));