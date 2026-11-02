function validateJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (error) {
        return false;
    }
}

console.log(validateJSON('{"name":"Rahul","age":22}'));
console.log(validateJSON('{"name":Rahul}'));
console.log(validateJSON('[1,2,3]'));