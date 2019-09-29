export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  // Creates an array of length STAGE_HEIGHT where each element is an array of arrays
  Array.from(
    // Creates an array of length STAGE_HEIGHT
    Array(STAGE_HEIGHT),
    // A function that creates an array of length STAGE_WIDTH and fills each element with [0, 'clear!']
    // i.e., (for STAGE_WIDTH = 2) [ [ 0, 'clear' ], [ 0, 'clear' ] ]
    () => new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // 1. Check that we're on an actual tetromino ccell
      if (player.tetromino[y][x] !== 0) {
        // 2. Check that tetromino is within the stage height(y)
        // Should not exceed the bottom of the stage
        // 3. Check that tetromino is within the stage width(x)
        // 4. Check that the cell we're moving to is not set to 'clear'
      }
    }
  }
};
