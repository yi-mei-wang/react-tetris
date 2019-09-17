export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;


export const createStage = () =>
  // Creates an array of length STAGE_HEIGHT where each element is an array of arrays
  Array.from(
    // Creates an array of length STAGE_HEIGHT
    Array(STAGE_HEIGHT),
    // A function that creates an array of length STAGE_WIDTH and fills each element with [0, 'clear!']
    // i.e., (for STAGE_WIDTH = 2) [ [ 0, 'clear!' ], [ 0, 'clear!' ] ]
    () => new Array(STAGE_WIDTH).fill([0, 'clear!'])
  )