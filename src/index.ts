import { position, turnLeft,turnRight,moveForward } from "./SpinningControl";
import * as readline from 'readline';
// adding a user input
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

ask.question('What are the commands? ', (commands: string) => {
    let theCurrentPosition = {
        "X": 0,
        "Y":0,
        "direction": 'N' 
    }
    let splited = commands.split('');

    let result = nextMove([5,5],theCurrentPosition,splited);
    console.log(result);
  
  ask.close();
});


export function nextMove(grid:number[], currentPosition:position, commands:string[]): position | string{
    let newPosition = currentPosition;
    let isInvalid= false;
    commands.forEach(command => {
        if (command === "L") {
            newPosition.direction = turnLeft(newPosition.direction);
        }
        else if (command === "R") {
            newPosition.direction = turnRight(newPosition.direction);
        }
        else if (command === "M") {
            newPosition = moveForward(newPosition);
        }
        else{
            isInvalid = true;
        }
    });
    
    if (!isInvalid) {
        if (grid[0] < newPosition.X || grid[1] < newPosition.Y ) {
            return "not enough space"
        }
        else{
             return newPosition;
        }
        
    }
    else{
        return "invalid command"

    }

  
   

}


