export type position = {
    "X": number;
    "Y":number;
    "direction": string; 
} 



export function turnLeft(direction: string): string {
    switch (direction) {
      case "N":
        return "W";
      case "W":
        return "S";
      case "S":
        return "E";
      default:
        return "N";
    }
  }
  export function turnRight(direction: string): string {
    switch (direction) {
      case "N":
        return "E";
      case "E":
        return "S";
      case "S":
        return "W";
      default:
        return "N";
        
    }
  }


export function moveForward(currentPosition:position) :position{

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