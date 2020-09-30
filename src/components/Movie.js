import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px 15px;
  height: 350px;
  width: 270px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
`;

const Poster = styled.div`
  position: relative;
  background-image: url(${(prop) => prop.bg});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  &:hover {
  }
`;

const Title = styled.div`
  display: inline-block;
  width: 100%;
  position: absolute;
  font-size: 1.5em;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  color: black;
  transition: all 500ms ease;
  opacity: 0;
  visibility: hidden;
  ${Poster}:hover & {
    transform: translate(-50%, 52px);
    opacity: 1;
    visibility: visible;
  }
`;

export default ({ id, title, bg }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg}>
          <Title>{title}</Title>
        </Poster>
      </Link>
    </Container>
  );
};
