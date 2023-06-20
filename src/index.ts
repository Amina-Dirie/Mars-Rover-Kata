import { position, turnLeft,turnRight,moveForward } from "./SpinningControl";



export function nextMove(grid: [number, number], currentPosition: position, commands: string[]): position | string {
    let newPosistion = { ...currentPosition };
    let isInvalid = false;

    for (const command of commands) {
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

    if (isInvalid) {
        return "invalid command";
    }

    if ( newPosistion.X > grid[0] || newPosistion.Y > grid[1]) {
        return "not enough space";
    }

    return newPosistion;
}


