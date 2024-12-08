import React from "react";
import { IconBaseProps } from "./types";

const Plus = ({ size, colour, dataTestId, ...rest }: IconBaseProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={colour}
    data-testid={dataTestId}
    {...rest}
  >
    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
  </svg>
);

export default Plus;
