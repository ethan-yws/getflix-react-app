import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  InfoContainer,
  Poster,
  Wrapper,
  Image,
  Title,
  Year,
  TypeTag,
} from './SearchResItem.styles';
import PosterNotFound from '../../assets/imageNotFound.png';
import { Link } from 'react-router-dom';

interface ISearchResItem {
  title: string;
  poster: string;
  year: string;
  type: string;
  imdbId: string;
}

export const SearchResItem: React.FC<ISearchResItem> = ({
  title,
  poster,
  year,
  type,
  imdbId,
}) => {
  return (
    <Wrapper>
      <Link to={`/movie/${imdbId}`}>
        <Poster>
          <Image src={poster === 'N/A' ? PosterNotFound : poster} alt={title} />
        </Poster>
      </Link>
      <InfoContainer>
        <Link
          to={`/movie/${imdbId}`}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <Title>{title}</Title>
        </Link>
        <Year>{year}</Year>
        <TypeTag>{type}</TypeTag>
      </InfoContainer>
    </Wrapper>
  );
};
