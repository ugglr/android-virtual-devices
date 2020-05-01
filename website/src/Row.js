import React from "react";
import styled from "styled-components";
import { FaArrowCircleDown } from "react-icons/fa";

import { DARK_GREEN, GREEN } from "./theme/colors";

const TableRow = styled.tr``;
const IconContainer = styled.div`
  margin-top: 5px;
  margin-left: 1.5rem;
`;
const Icon = styled(FaArrowCircleDown)`
  font-size: 1.8rem;
  color: ${DARK_GREEN};

  :hover {
    color: ${GREEN};
  }
`;

function Row(props) {
  const {
    brand,
    model,
    size,
    xDimension,
    yDimension,
    screenRatio,
    githubPath,
  } = props;

  const Cell = ({ value, download, bold }) => {
    const TableData = styled.td`
      height: 60px;
      font-size: ${() => (bold ? "17px" : "16px")};
      font-weight: ${() => (bold ? 700 : 450)};
    `;

    if (download)
      return (
        <td>
          <a href={value} target='_blank' rel='noopener noreferrer'>
            <IconContainer>
              <Icon />
            </IconContainer>
          </a>
        </td>
      );
    return <TableData>{value}</TableData>;
  };

  return (
    <TableRow>
      <Cell bold value={brand} />
      <Cell value={model} />
      <Cell value={`${size}"`} />
      <Cell value={`${xDimension}x${yDimension}`} />
      <Cell value={screenRatio} />
      <Cell download value={githubPath} />
    </TableRow>
  );
}

export default Row;
