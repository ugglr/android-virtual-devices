import React from "react";
import styled from "styled-components";
import Row from "./Row";

import { devices } from "./devices";

const TableContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

function DeviceTable() {
  return (
    <TableContainer>
      {devices.map((device, i) => (
        <Row index={i} {...device} />
      ))}
    </TableContainer>
  );
}

export default DeviceTable;
