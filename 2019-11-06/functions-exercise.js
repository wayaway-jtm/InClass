let getAreaOfCircle = radius => {
    return Math.PI * Math.pow(radius, 2);
}

let getCircumferenceOfCircle = radius => {
    return 2 * Math.PI * radius;
}

let getAreaOfSquare = side => {
    return Math.pow(side, 2);
}

let getAreaOfTriangle = (base, height) => {
    return ((base * height) / 2);
}

console.log(getAreaOfCircle(5));
console.log(getCircumferenceOfCircle(12));
console.log(getAreaOfSquare(6));
console.log(getAreaOfTriangle(4, 7));