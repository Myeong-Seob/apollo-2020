import React from "react";
import { useQuery, gql } from "@apollo/client";
import Movie from "../components/Movie";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
const Loading = styled.div`
  position: relative;
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border: 4px solid #f1f1f1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 1),
    10px 10px 15px rgba(0, 0, 0, 0.1),
    inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(0, 0, 0, 0.1);
`;
const LoadingBefore = styled.span`
  position: absolute;
  top: 25px;
  bottom: 25px;
  right: 25px;
  left: 25px;
  background: #f1f1f1;
  border-radius: 50%;
  border: 4px solid #f1f1f1;
  box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(0, 0, 0, 0.1);
`;
const Circle = keyframes`
   from {
     transform: rotate(0deg);
   }
   to{
     transform: rotate(360deg);
   }
 `;
const Load = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  z-index: -1;
  filter: blur(20px);
  animation: ${Circle} 0.5s linear infinite;
`;
const Movies = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  position: relative;
  top: 50px;
  margin: auto;
`;

const MovieContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;

const GET_MOVIES = gql`
  query {
    movies(limit: 30) {
      id
      title
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>I Love GraphQL</Subtitle>
      </Header>
      {loading ? (
        <Loading>
          <LoadingBefore></LoadingBefore>
          <Load></Load>
          <Load></Load>
          <Load></Load>
          <Load></Load>
        </Loading>
      ) : (
        <MovieContainer>
          <Movies>
            {data.movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                bg={movie.medium_cover_image}
              />
            ))}
          </Movies>
        </MovieContainer>
      )}
    </Container>
  );
};
