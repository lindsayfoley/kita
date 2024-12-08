import icons from "@kita/assets";
import { IconBaseProps } from "@kita/assets/types";
import React from "react";

interface IconProps extends IconBaseProps {
  name: keyof typeof icons;
}

const Icon = ({
  name,
  size = "20",
  colour = "currentColor",
  dataTestId = name,
  onClick,
}: IconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      size={size}
      colour={colour}
      dataTestId={dataTestId}
      onClick={onClick}
      aria-hidden="true"
    />
  );
};

export default Icon;
