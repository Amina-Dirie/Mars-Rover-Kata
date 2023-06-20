import { position, turnLeft, turnRight, moveForward } from "./SpinningControl";

type Rover = {
  position: position;
  commands: string[];
};

export function nextMove(grid: [number, number], rovers: Rover[]): (position | string)[] {
  const finalPositions: (position | string)[] = [];

  for (const rover of rovers) {
    let newPosistion = { ...rover.position };
    let isInvalid = false;

    for (const command of rover.commands) {
      switch (command) {
        case "L":
          newPosistion.direction = turnLeft(newPosistion.direction);
          break;
        case "R":
          newPosistion.direction = turnRight(newPosistion.direction);
          break;
        case "M":
          newPosistion = moveForward(newPosistion);
          break;
        default:
          isInvalid = true;
          break;
      }
    }

    if ( newPosistion.X > grid[0] || newPosistion.Y > grid[1]) {
      finalPositions.push("not enough space");
    } else if (isInvalid) {
      finalPositions.push("invalid command");
    } else {
      finalPositions.push(newPosistion);
    }
  }

  return finalPositions;
}