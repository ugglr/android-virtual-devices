import React from "react";

/* ############ PROPS ##############
    brand: eg. "Samsung" || "Huawei" || "Google" etc.,
    model: eg. "J2" || "Pixel 2" || "Mate 20 Pro" etc.,
    diagonalLength: eg. 4.7,
    pixelDensity: eg. "hdpi",
    screenRatio: eg. "long",
    xDimension: eg. 960,
    yDimension: eg. 540,
    screenRatio: eg. "long",
    githubPath: "",
*/

function Row(props) {
  console.log("ROW PROPS", props);
  const values = Object.values(props);

  console.log("Row values", values);
  console.log("Values length", values.length);

  return (
    <tr>
      {values.map((value, i) => {
        console.log(i);
        if (i === values.length - 1) {
          console.log("Returning Link");
          return (
            <td>
              <a>Link</a>
            </td>
          );
        }
        return <td>{value}</td>;
      })}
    </tr>
  );
}

export default Row;
