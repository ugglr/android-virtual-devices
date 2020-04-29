import React from "react";
import styled from "styled-components";

const RowContainer = styled.div``;
const BrandText = styled.text``;

/* ############ PROPS ##############
    brand: eg. "Samsung" || "Huawei" || "Google" etc.,
    model: eg. "J2" || "Pixel 2" || "Mate 20 Pro" etc.,
    diagonalLength: eg. 4.7,
    pixelDensity: eg. "hdpi",
    screenRatio: eg. "long",
    xDimension: eg. 960,
    yDimension: eg. 540,
    screenRatio: eg. "long",
    filePath: "",
*/

function Row(props) {
  const {
    brand,
    model,
    diagonalLength,
    pixelDensity,
    xDimension,
    yDimension,
    screenRatio,
    filePath,
  } = props;

  return (
    <RowContainer>
      <BrandText>{brand}</BrandText>
    </RowContainer>
  );
}

export default Row;
