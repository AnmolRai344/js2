function isPerfectNumber(num) {
    if (!Number.isInteger(num) || num <= 1) return false;

    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;

            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === num;
}

console.log(isPerfectNumber(28));
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(12));