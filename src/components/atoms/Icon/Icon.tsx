import icons from "@kita/assets";
import React, { useEffect } from "react";

interface IconProps {
  name: keyof typeof icons;
  size?: string;
  colour?: string;
  dataTestId?: string;
  onClick?: () => void;
}

const Icon = ({
  name,
  size = "20",
  colour = "currentColor",
  dataTestId = name,
  onClick,
}: IconProps) => {
  const IconComponent = icons[name];

  useEffect(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return <IconComponent size={size} colour={colour} dataTestId={dataTestId} />;
};

export default Icon;
