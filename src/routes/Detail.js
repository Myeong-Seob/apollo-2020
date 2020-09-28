import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      rating
      summary
      genres
      medium_cover_image
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  if (loading) {
    return "Loading...";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};
