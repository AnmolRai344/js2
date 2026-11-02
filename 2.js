function fibonacci(count) {
    const sequence = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < count; i++) {
        sequence.push(a);

        [a, b] = [b, a + b];
    }

    return sequence;
}

console.log(fibonacci(10));