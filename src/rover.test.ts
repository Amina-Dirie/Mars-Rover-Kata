import {nextMove} from './index';
describe("The rover", ()=>{
    test('should turn the rover to the left ', () => {
        let currentPosition = {
            "X": 0,
            "Y":0,
            "direction": 'N' 
        } 
        let commands=["L"];
        let expectedPosition = {
            "X": 0,
            "Y": 0,
            "direction": 'W'
          };

        expect(nextMove([5,5],currentPosition,commands)).toEqual(expectedPosition)
    })
    test('should turn the rover to the right ', () => {
        let currentPosition = {
            "X": 0,
            "Y":0,
            "direction": 'E' 
        } 
        let commands=["R"];
        let expectedPosition = {
            "X": 0,
            "Y": 0,
            "direction": 'S'
          };

        expect(nextMove([5,5],currentPosition,commands)).toEqual(expectedPosition)
    })
    test('should move the rover forword ', () => {
        let currentPosition = {
            "X": 0,
            "Y":0,
            "direction": 'N' 
        } 
        let commands=["M"];
        let expectedPosition = {
            "X": 0,
            "Y": 1,
            "direction": 'N'
          };

        expect(nextMove([5,5],currentPosition,commands)).toEqual(expectedPosition)
    })

    test('should move to the next cordinate', () => {
        let currentPosition = {
            "X": 0,
            "Y":0,
            "direction": 'N' 
        } 
        let commands=["L","M","R","M","M","R"];
        let expectedPosition = {
            "X": -1,
            "Y": 2,
            "direction": 'E'
          };

        expect(nextMove([5,5],currentPosition,commands)).toEqual(expectedPosition)
    })
    
    test('returns "not enough space" when the new coordination is bigger than the grid provided', () => {
        let currentPosition = {
            "X": 0,
            "Y":0,
            "direction": 'N' 
        } 
        // lands in 6,6 S which is outside the grid
        let commands = ["M", "M", "M", "M", "M", "M","R","M", "M", "M", "M", "M", "M","R"]
        expect(nextMove([5,5],currentPosition,commands)).toEqual("not enough space")
    })

    test('returns invalid command when an invalid command has been passed', () => {
        let currentPosition = {
            "X": 0,
            "Y":0,
            "direction": 'N' 
        } 
       
        let commands = ["K", "M", "M", "M", "K", "M","R","M", "M"]
        expect(nextMove([5,5],currentPosition,commands)).toEqual(`invalid command`)
    })

});

