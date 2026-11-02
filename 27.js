function pipe(...functions) {
    return function (value) {
        return functions.reduce(
            (result, fn) => fn(result),
            value
        );
    };
}

const double = num => num * 2;
const addTen = num => num + 10;
const square = num => num * num;

const calculate = pipe(double, addTen, square);

console.log(calculate(5));