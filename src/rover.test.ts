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

        expect(nextMove(currentPosition,commands)).toEqual(expectedPosition)
    })

});