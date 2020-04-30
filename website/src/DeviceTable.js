import React from "react";
import styled from "styled-components";
import Row from "./Row";

import { devices } from "./devices";

const TableContainer = styled.table`
  width: 100%;
  display: table;
  padding: 8px 16px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const columnTitles = [
  "brand",
  "model",
  "diagonalLength",
  "pixelDensity",
  "xDimension",
  "yDimension",
  "screenRatio",
  "Download",
];

function DeviceTable() {
  return (
    <TableContainer>
      <tr>
        {columnTitles.map((title) => (
          <th style={{ textAlign: "left" }}>{title}</th>
        ))}
      </tr>

      {devices.map((device, i) => (
        <Row key={i} {...device} />
      ))}
    </TableContainer>
  );
}

export default DeviceTable;
