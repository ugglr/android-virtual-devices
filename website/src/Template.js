import React from "react";
import styled from "styled-components";
import Jumbotron from "./Jumbotron";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Template(props) {
  return (
    <div>
      <Jumbotron />
      <Container>{props.children}</Container>
    </div>
  );
}

export default Template;
