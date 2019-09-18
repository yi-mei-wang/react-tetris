import React from 'react';
// Helpers
import { createStage } from '../gameHelpers'
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
// Styled components
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'



const Tetris = () => {
  console.log(createStage())


  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </aside>
        <StartButton />
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;
