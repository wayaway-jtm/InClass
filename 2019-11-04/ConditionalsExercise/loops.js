// Heating/Cooling exercise:
// Define two variables: actualTemp and a desiredTemp.
// Write conditionals to tell the heating & cooling system what to do.
// Log one of these three things: Run A/C, Run heat, or Standby.
let actualTemp = 72;
const desiredTemp = 75;

// if (actualTemp !== desiredTemp) {
//     if (actualTemp > desiredTemp) {
//         console.log("Run A/C");
//     } else {
//         console.log("Run heat");
//     }
// } else {
//     console.log("Standby");
// }

// Extended Challenges second exercise:
// Start with two variables:
// tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”).
// Write a switch statement that checks the targetUnit and
// logs the temperature converted to that unit.
// Notes: K stands for Kelvin. C requires no conversion, print out the original temp.

let tempCelsius = 14;
let targetUnit = "K";

let newTemp = tempCelsius;

switch (targetUnit) {
    case 'K':
        // Convert to Kelvin
        newTemp += 273;
        break;
    case 'F':
        // Convert to Fahrenheit
        newTemp = (newTemp * (9/5)) + 32;
        break;
}

// Write a while loop that will
// adjust the temperature by one
// until it reaches the desired temperature
actualTemp = 15000000;
desiredTemp = 75;

console.log(`Starting temp: ${actualTemp}   Desired temp: ${desiredTemp}`);
while (actualTemp !== desiredTemp) {
    if (actualTemp < desiredTemp) {
        actualTemp++;
    } else {
        actualTemp--;
    }
    console.log(actualTemp);
}



// Write a while loop that will
// (1) Increase by 2
// (2) Decrease by 1
// until it reaches the desired temperature

actualTemp = 72;
desiredTemp = 75;

console.log(`Starting temp: ${actualTemp}   Desired temp: ${desiredTemp}`);
while (actualTemp !== desiredTemp) {
    if (actualTemp < desiredTemp) {
        actualTemp += 2;
    } else {
        actualTemp--;
    }
    console.log(actualTemp);
}