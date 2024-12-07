import icons from "@kita/assets";
import React from "react";

interface IconProps {
  name: keyof typeof icons;
  size?: string;
  colour?: string;
  dataTestId?: string;
}

const Icon = ({
  name,
  size = "18",
  colour = "currentColor",
  dataTestId = name,
}: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent size={size} colour={colour} dataTestId={dataTestId} />;
};

export default Icon;
