/* 
    John McCarthy
    Functions Exercise 2
*/

"use strict"; {
    // Declaring variables
    const DIRECTIONS = ['N', 'E', 'S', 'W'];
    let facingDirection = DIRECTIONS[0];
    let location = [0, 0];

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
        switch (facingDirection) {
            case DIRECTIONS[0]:
                location[0] += num;
                break;
            case DIRECTIONS[1]:
                location[1] += num;
                break;
            case DIRECTIONS[2]:
                location[0] -= num;
                break;
            case DIRECTIONS[3]:
                location[1] -= num;
                break;
        }
    }

    /**
     * Moves the user the given amount opposite of the current facing direction
     * 
     * @param {Number} num Distance (in integer) to move opposite of the current facing direction
     */
    function moveBackward(num) {
        switch (facingDirection) {
            case DIRECTIONS[0]:
                location[0] -= num;
                break;
            case DIRECTIONS[1]:
                location[1] -= num;
                break;
            case DIRECTIONS[2]:
                location[0] += num;
                break;
            case DIRECTIONS[3]:
                location[1] += num;
                break;
        }
    }

    /**
     * Reverses the direction the user is currently facing
     */
    function turnAround() {
        switch (facingDirection) {
            case DIRECTIONS[0]:
                facingDirection = DIRECTIONS[2];
                break;
            case DIRECTIONS[1]:
                facingDirection = DIRECTIONS[3];
                break;
            case DIRECTIONS[2]:
                facingDirection = DIRECTIONS[0];
                break;
            case DIRECTIONS[3]:
                facingDirection = DIRECTIONS[1];
                break;
        }
    }

    /**
     * Changes facing direction 90 degrees counter-clockwise
     */
    function turnLeft() {
        let dirIndex = DIRECTIONS.indexOf(facingDirection);
        if (dirIndex > 0) {
            facingDirection = DIRECTIONS[DIRECTIONS.indexOf(facingDirection) - 1];
        } else {
            facingDirection = DIRECTIONS[3];
        }
    }

    /**
     * Changes facing direction 90 degrees clockwise
     */
    function turnRight() {
        let dirIndex = DIRECTIONS.indexOf(facingDirection);
        if (dirIndex < 3) {
            facingDirection = DIRECTIONS[DIRECTIONS.indexOf(facingDirection) + 1];
        } else {
            facingDirection = DIRECTIONS[0];
        }
    }

    /**
     * Logs the user's current location to the console
     */
    function printLocation() {
        let xDir = "";
        let yDir = "";

        location[0] >= 0 ? xDir = 'N' : xDir = 'S';
        location[1] >= 0 ? yDir = 'E' : yDir = 'W';
        console.log(`Current location: ${Math.abs(location[0])} ${xDir}, ${Math.abs(location[1])} ${yDir}`);
    }
}