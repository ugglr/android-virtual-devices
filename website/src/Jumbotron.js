import React from "react";
import styled from "styled-components";
import { FaAndroid } from "react-icons/fa";

import { GREEN } from "./theme/colors";

const JumboContainer = styled.div`
  height: 25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AndroidIcon = styled(FaAndroid)`
  font-size: 10rem;
  color: ${GREEN};
`;
const Title = styled.h1`
  font-weight: 600;
`;
const Subtitle = styled.h3`
  color: #524d4d;
`;

function Jumbotron() {
  return (
    <JumboContainer>
      <AndroidIcon />
      <Title>Android Virtual Devices</Title>
      <Subtitle>Powered by open-source.</Subtitle>
    </JumboContainer>
  );
}

export default Jumbotron;
