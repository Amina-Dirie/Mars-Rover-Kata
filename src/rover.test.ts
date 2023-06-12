import {nextMove} from './index';
describe("The rover", ()=>{

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

});

