import { position, turnLeft,turnRight,moveForward } from "./rover";

export function nextMove(grid:number[], currentPosition:position, commands:string[]): position | string{
    let newPosition = currentPosition;
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
    });
    if (grid[0] < newPosition.X || grid[1] < newPosition.Y ) {
        return "not enough space"
    }
    else{
         return newPosition;
    }
      
   

}


