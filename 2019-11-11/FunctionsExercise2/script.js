/* 
    John McCarthy
    Functions Exercise 2
*/

"use strict" 
{
    // Declaring variables
    let isFacingForward = true;
    let location = 0;

    // Main program
    moveForward(5);
    turnRight();
    moveForward(2);
    printLocation();
    turnLeft();
    turnLeft();
    moveForward(7);
    turnRight();
    moveBackward(3);
    printLocation();


    /**
     * Moves the user the given amount in the current facing direction
     * 
     * @param {Number} num Distance (in integer) to move in the current facing direction
     */
    function moveForward(num) {
        if (isFacingForward) {
            location += num;
        } else {
            location -= num;
        }
    }

    /**
     * Moves the user the given amount opposite of the current facing direction
     * 
     * @param {Number} num Distance (in integer) to move opposite of the current facing direction
     */
    function moveBackward(num) {
        if (isFacingForward) {
            location -= num;
        } else {
            location += num;
        }
    }

    /**
     * Reverses the direction the user is currently facing
     */
    function turnAround() {
        isFacingForward = !isFacingForward;
    }

    
    function turnLeft() {

    }

    function turnRight() {

    }

    /**
     * Logs the user's current location to the console
     */
    function printLocation() {
        console.log(`Current location: ${location}`);
    }
}