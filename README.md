# Amina-Dirie-Mars-Rover-Kata

## Introduction

Mars Rover Project
This is a simple project that simulates the movement of a Mars rover on a grid/plateau.

The project consists of four files use src/filename to access: rover.ts,index.ts multiplerover.ts and multiplerover.test.ts.
This test files provides the tests that ensure the Mars rover's working order.
The function nextMove has three arguments:

1-grid: an array of two numbers representing the maximum values of the grid's X and Y coordinates.
```TypeScript
grid[5,5]
```
2-currentPosition: an object with three characteristics that reflect the rover's current location: X coordinate, Y 
ex:
```TypeScript
 let currentPosition = {
            "X": 0,
            "Y":0,
            "direction": 'N' 
        } 
        
 ```
3-coordinate(commands), and current direction (N, E, S, or W).
```TypeScript
let commands = ["M", "M", "M", "M", "M", "M","R","M", "M", "M", "M", "M", "M","R"]
```
<!-- user interface -->
In the index.ts i created a UI This file includes the code that allows the user to enter commands for the rover to execute. The ask the built in function  readline module which is used for UI and it allows the user to enter data into the terminal. With the input data and the rover's current position, the nextMove function is performed, and the result is logged to the console.
```TypeScript
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 console.log(nextMove([5,5],theCurrentPosition,splited));
```
## moving the rover [L,R,F]

(SpinningControl.ts):
This file contains the functions that control the rovers' movements. 
-The moveForward function accepts a position object and produces a new one with updated coordinates based on the rover's current direction. 
-The turnLeft and turnRight functions accept a direction string and return a new direction string based on the rover's current position.

## having mulitple rovers:

The function nextMove  in the src/muiltiple.rover.ts takes two arguments:

1-grid: an array of two numbers representing the maximum values of the grid's X and Y coordinates.
```TypeScript
grid[5,5]
```
2-rovers: an array of Rover objects, each containing a position object reflecting the rover's current position and a commands array representing the commands to be executed by the rover.
```TypeScript
  const rovers = [
      {
        position: {
          X: 0,
          Y: 0,
          direction: 'N',
        },
        commands: ['L', 'M', 'R', 'M', 'M', 'R'],
      },
      {
        position: {
          X: 2,
          Y: 3,
          direction: 'E',
        },
        commands: ['M', 'R', 'M', 'M', 'L', 'M', 'R'],
      },
    ];
        
 ```
## Testing

-Simply execute the npm test command to test the project. This will run the tests in the rover.ts, muiltiple-rovers.ts files and print the results to the console.
-To run the UI execute npm Start to run it in the terminal.


## Refactoring/Expanding
- Adding more user inputs.
- completing the front-end.
