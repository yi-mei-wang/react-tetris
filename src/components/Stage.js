import React from 'react';
// Components
import Cell from './Cell';
// Styled-components
import { StyledStage } from './styles/StyledStage';

const Stage = ({ stage }) => (
  // stage is an array of arrays
  // width -> the number of columns, height -> the number of rows
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
)

export default Stage;