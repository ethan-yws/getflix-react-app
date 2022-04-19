import { PopularBoard } from '../../components/PopularBoard';
import { SearchScene } from '../../components/SearchScene';
import React from 'react';
import { Wrapper } from './Canvas.styles';

export const Canvas = () => {
  return (
    <Wrapper>
      <SearchScene />
      <PopularBoard />
    </Wrapper>
  );
};
