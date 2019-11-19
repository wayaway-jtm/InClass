function addNumbers(...numbers) {
    console.log(numbers);
    return numbers.reduce((prev, next) => prev + next);
}

console.log(addNumbers(1));
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4, 5));