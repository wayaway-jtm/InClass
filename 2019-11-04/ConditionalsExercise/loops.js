// Heating/Cooling exercise:
// Define two variables: actualTemp and a desiredTemp.
// Write conditionals to tell the heating & cooling system what to do.
// Log one of these three things: Run A/C, Run heat, or Standby.
let actualTemp = 72;
const desiredTemp = 75;

if (actualTemp !== desiredTemp) {
    if (actualTemp > desiredTemp) {
        console.log("Run A/C");
    } else (actualTemp < desiredTemp) {
        console.log("Run heat");
    }
} else {
    console.log("Standby");
}

// Extended Challenges second exercise:
// Start with two variables:
// tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”).
// Write a switch statement that checks the targetUnit and
// logs the temperature converted to that unit.
// Notes: K stands for Kelvin. C requires no conversion, print out the original temp.

let tempCelsius = 14;
let targetUnit = "K";

switch (targetUnit) {
    case 'K':
        // Convert to Kelvin
        break;
    case 'F':
        // Convert to Fahrenheit
        break;
    case 'C':
        // Do nothing
        break;
}

// Write a while loop that will
// adjust the temperature by one
// until it reaches the desired temperature




// Write a while loop that will
// (1) Increase by 2
// (2) Decrease by 1
// until it reaches the desired temperature