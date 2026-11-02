function lcm(a, b) {
    if (a === 0 || b === 0) return 0;

    function gcd(x, y) {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }

        return x;
    }

    return Math.abs((a / gcd(a, b)) * b);
}

console.log(lcm(12, 18));
console.log(lcm(5, 10));