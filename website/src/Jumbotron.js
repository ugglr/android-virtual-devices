import React from "react";
import styled from "styled-components";
import { FaAndroid } from "react-icons/fa";

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
`;

function Jumbotron() {
  return (
    <JumboContainer>
      <AndroidIcon />
      <h1>Android Virtual Devices</h1>
      <h3>Powered by open-source.</h3>
    </JumboContainer>
  );
}

export default Jumbotron;
