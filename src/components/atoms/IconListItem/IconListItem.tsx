import React, { ReactElement } from "react";
import styles from "./IconListItem.module.css";
import { Icon } from "../Icon";
import { ValueOf } from "@kita/types/utils";

const Theme = {
  complete: "complete",
  warning: "warning",
  focus: "focus",
  highlight: "highlight",
} as const;

export interface IconListItemProps {
  primaryIcon: ReactElement<typeof Icon>;
  text: string;
  secondaryIcon?: ReactElement<typeof Icon>;
  theme?: ValueOf<typeof Theme>;
}

const IconListItem = ({
  primaryIcon,
  text,
  secondaryIcon,
  theme,
}: IconListItemProps) => {
  return (
    <div
      className={`${styles.container} ${theme && styles[`theme-${theme}`]}`}
      data-testid="IconListItem"
    >
      <span className={styles.primary}>
        {primaryIcon} {text}
      </span>
      {secondaryIcon}
    </div>
  );
};

IconListItem.Theme = Theme;

export default IconListItem;
