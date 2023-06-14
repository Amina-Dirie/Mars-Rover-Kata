import { position, turnLeft, turnRight, moveForward } from "./SpinningControl";

type Rover = {
  position: position;
  commands: string[];
};

export function nextMove(grid: [number, number], rovers: Rover[]): (position | string)[] {
  const finalPositions: (position | string)[] = [];

  rovers.forEach((rover) => {
    let newPosition = rover.position;

    rover.commands.forEach((command) => {
      if (command === "L") {
        newPosition.direction = turnLeft(newPosition.direction);
      } else if (command === "R") {
        newPosition.direction = turnRight(newPosition.direction);
      } else if (command === "M") {
        newPosition = moveForward(newPosition);
      } 
    });

    finalPositions.push(newPosition);
  });

  return finalPositions;
}