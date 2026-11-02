function sortedIntersection(a, b) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            i++;
        } else if (a[i] > b[j]) {
            j++;
        } else {
            if (result[result.length - 1] !== a[i]) {
                result.push(a[i]);
            }

            i++;
            j++;
        }
    }

    return result;
}

console.log(sortedIntersection(
    [1, 2, 3, 4, 5],
    [2, 3, 5, 7]
));