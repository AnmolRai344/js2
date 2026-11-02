function getPrimes(start, end) {
    const primes = [];

    for (let num = start; num <= end; num++) {
        if (num < 2) continue;

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) primes.push(num);
    }

    return primes;
}

console.log(getPrimes(1, 50));