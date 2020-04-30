import React from "react";
import styled from "styled-components";
import Row from "./Row";

import { devices } from "./devices";

const TableContainer = styled.table`
  width: 550px;
  display: table;
  padding: 12px 24px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const columnTitles = [
  "Brand",
  "Model",
  "Size",
  "Resolution",
  "Ratio",
  "Download",
];

function DeviceTable() {
  return (
    <TableContainer>
      <tr>
        {columnTitles.map((title) => (
          <th
            style={{
              textAlign: "left",
            }}
          >
            {title}
          </th>
        ))}
      </tr>

      {devices.map((device, i) => (
        <Row key={i} {...device} />
      ))}
    </TableContainer>
  );
}

export default DeviceTable;
