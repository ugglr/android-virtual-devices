import React from "react";
import styled from "styled-components";
import Row from "./Row";

import { devices } from "./devices";

const TableContainer = styled.div`
  width: 80%;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

function DeviceTable() {
  return (
    <>
      <TableContainer>
        {devices.map((device) => (
          <Row />
        ))}
      </TableContainer>
    </>
  );
}

export default DeviceTable;
