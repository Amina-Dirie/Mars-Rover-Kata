type position = {
    "X": number;
    "Y":number;
    "direction": string; 
} 


export function nextMove(currentPosition:position, commands:string[]): position{
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
    return newPosition;
}


function turnLeft(direction:string) : string{
    if (direction === "N") {
        return "W";
    }
    else if (direction === "W") {
        return "S";
    }
    else if (direction === "S") {
        return "E";
    }
    else {
        return "N";
    }
}

function turnRight(direction:string) : string{
    if (direction === "N") {
        return "E";
    }
    else if (direction === "E") {
        return "S";
    }
    else if (direction === "S") {
        return "W";
    }
    else {
        return "N";
    }
}


function moveForward(currentPosition:position) :position{

    if (currentPosition.direction === "N") {
        return {
            X: currentPosition.X,
            Y: currentPosition.Y+1,
            direction: "N"
        } 
    }
    else if (currentPosition.direction === "E") {
        return {
            X: currentPosition.X+1,
            Y: currentPosition.Y,
            direction: "E"
        } 
    }
    else if (currentPosition.direction === "S") {
        return {
            X: currentPosition.X,
            Y: currentPosition.Y-1,
            direction: "S"
        } 
    }
    else  {
        return {
            X: currentPosition.X-1,
            Y: currentPosition.Y,
            direction: "W"
        } 
    }

}