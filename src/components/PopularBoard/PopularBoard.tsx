import { popularMovies } from '../../common/constants/popularMovies.constant';
import React from 'react';
import { MoviesContainer, Title, Wrapper } from './PopularBoard.styles';
import { PopularMovie } from './PopularMoive';

export const PopularBoard = () => {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <Wrapper>
      <Title>What's Popular</Title>
      <MoviesContainer>
        {popularMovies.map((movie: string) => (
          <PopularMovie key={movie} title={movie} />
        ))}
      </MoviesContainer>
    </Wrapper>
  );
};
