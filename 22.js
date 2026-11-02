function flattenObject(obj, prefix = "", result = {}) {
    for (const key in obj) {
        if (!Object.hasOwn(obj, key)) continue;

        const newKey = prefix ? `${prefix}.${key}` : key;
        const value = obj[key];

        if (
            value !== null &&
            typeof value === "object" &&
            !Array.isArray(value)
        ) {
            flattenObject(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }

    return result;
}

const user = {
    name: "Rahul",
    address: {
        city: "Gurgaon",
        country: "India"
    }
};

console.log(flattenObject(user));