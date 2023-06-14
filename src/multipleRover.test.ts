import { nextMove } from './multipleRovers';

describe("The rovers", () => {
  test('should move to the next coordinate', () => {
    const rovers = [
      {
        position: {
          X: 0,
          Y: 0,
          direction: 'N',
        },
        commands: ['L', 'M', 'R', 'M', 'M', 'R'],
      },
      {
        position: {
          X: 2,
          Y: 3,
          direction: 'E',
        },
        commands: ['M', 'R', 'M', 'M', 'L', 'M', 'R'],
      },
    ];

    const expectedPositions = [
      {
        X: -1,
        Y: 2,
        direction: 'E',
      },
      {
        X: 4,
        Y: 1,
        direction: 'S',
      },
    ];

    expect(nextMove([5, 5], rovers)).toEqual(expectedPositions);
  });


});