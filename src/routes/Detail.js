import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import styled, { keyframes } from "styled-components";

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

const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
`;
const Detail = styled.div`
  display: flex;
  width: 100%;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 1),
    10px 10px 15px rgba(0, 0, 0, 0.1),
    inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
`;
const Description = styled.div`
  margin-left: 15px;
  display: flex;
  flex-flow: column wrap;
`;
const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;
const Rating = styled.span`
  font-size: 1.5em;
`;
const Star = styled.span`
  color: yellow;
  font-size: 1.5em;
  text-shadow: 1px 1px 2px gray, 0 0 1em gray, 0 0 0.2em gray;
  margin: 10px 0;
`;
const Genres = styled.span`
  margin: 10px 0;
`;
const Summary = styled.span`
  font-size: 18px;
`;

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      rating
      genres
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      {loading ? (
        <Loading>
          <LoadingBefore></LoadingBefore>
          <Load></Load>
          <Load></Load>
          <Load></Load>
          <Load></Load>
        </Loading>
      ) : (
        <Detail>
          <img alt={data.movie.title} src={data.movie.medium_cover_image} />
          <Description>
            <Title>{data.movie.title}</Title>
            <Rating>
              <Star>⭑</Star>
              {data.movie.rating}
            </Rating>
            <Genres>{data.movie.genres}</Genres>
            <Summary>{data.movie.description_intro}</Summary>
          </Description>
        </Detail>
      )}
    </Container>
  );
};

// if (loading) {
//   return (
//     <Loading>
//       <LoadingBefore></LoadingBefore>
//       <Load></Load>
//       <Load></Load>
//       <Load></Load>
//       <Load></Load>
//     </Loading>
//   );
// }
// if (data && data.movie) {
//   return (
//     <>
//       <p>{data.movie.title}</p>
//       <img alt={data.movie.title} src={data.movie.medium_cover_image} />
//     </>
//   );
// }
