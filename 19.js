function rotateMatrix(matrix) {
    if (matrix.length === 0) return [];

    const rows = matrix.length;
    const columns = matrix[0].length;

    return Array.from({ length: columns }, (_, col) =>
        Array.from({ length: rows }, (_, row) =>
            matrix[rows - 1 - row][col]
        )
    );
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotateMatrix(matrix));