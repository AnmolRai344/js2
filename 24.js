function once(callback) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            result = callback.apply(this, args);
            called = true;
        }

        return result;
    };
}

const initialize = once(() => {
    console.log("Application initialized");
    return "Initialized";
});

console.log(initialize());
console.log(initialize());
console.log(initialize());