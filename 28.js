function deepFreeze(obj) {
    if (
        obj === null ||
        typeof obj !== "object" ||
        Object.isFrozen(obj)
    ) {
        return obj;
    }

    Object.freeze(obj);

    for (const key of Reflect.ownKeys(obj)) {
        deepFreeze(obj[key]);
    }

    return obj;
}

const user = {
    name: "Rahul",
    address: {
        city: "Gurgaon"
    }
};

deepFreeze(user);

console.log(Object.isFrozen(user));
console.log(Object.isFrozen(user.address));