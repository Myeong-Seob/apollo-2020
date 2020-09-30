import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Poster = styled.div`
  margin: 0 15px;
  width: 170px;
  height: 250px;
  background-image: url(${(prop) => prop.bg});
  background-size: cover;
  background-position: center center;
`;
const Title = styled.div`
  width: 170px;
  text-align: center;
  margin: 10px 0;
  color: black;
  font-size: 18px;
`;

export default ({ id, title, bg }) => {
  return (
    <>
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <Poster bg={bg}></Poster>
        <Title>{title}</Title>
      </Link>
    </>
  );
};
