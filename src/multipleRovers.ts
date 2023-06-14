import { position, turnLeft, turnRight, moveForward } from "./SpinningControl";

type Rover = {
  position: position;
  commands: string[];
};

export function nextMove(grid: [number, number], rovers: Rover[]): (position | string)[] {
  const finalPositions: (position | string)[] = [];

  rovers.forEach((rover) => {
    let newPosition = rover.position;
    let isInvalid = false;

    rover.commands.forEach((command) => {
      if (command === "L") {
        newPosition.direction = turnLeft(newPosition.direction);
      } else if (command === "R") {
        newPosition.direction = turnRight(newPosition.direction);
      } else if (command === "M") {
        newPosition = moveForward(newPosition);
      } else {
        isInvalid = true;
      }
    });

    if (!isInvalid) {
      if (grid[0] < newPosition.X || grid[1] < newPosition.Y) {
        finalPositions.push("not enough space");
      } else {
        finalPositions.push(newPosition);
      }
    } else {
      finalPositions.push("invalid command");
    }
  });

  return finalPositions;
}