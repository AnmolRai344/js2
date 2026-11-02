function transposeMatrix(matrix) {
    if (matrix.length === 0) return [];

    return matrix[0].map((_, column) =>
        matrix.map(row => row[column])
    );
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(transposeMatrix(matrix));