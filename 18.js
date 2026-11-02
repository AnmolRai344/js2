function multiplyMatrices(a, b) {
    if (
        a.length === 0 ||
        b.length === 0 ||
        a[0].length !== b.length
    ) {
        throw new Error("Invalid matrix dimensions");
    }

    const result = Array.from(
        { length: a.length },
        () => Array(b[0].length).fill(0)
    );

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < b.length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

console.log(multiplyMatrices(
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
));