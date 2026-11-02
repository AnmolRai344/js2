function compose(...functions) {
    return function (value) {
        return functions.reduceRight(
            (result, fn) => fn(result),
            value
        );
    };
}

const double = num => num * 2;
const addFive = num => num + 5;
const square = num => num * num;

const calculate = compose(square, addFive, double);

console.log(calculate(5));