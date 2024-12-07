import React, { ReactElement } from "react";
import styles from "./IconListItem.module.css";
import { Icon } from "../Icon";

export interface IconListItemProps {
  primaryIcon: ReactElement<typeof Icon>;
  text: string;
  secondaryIcon?: ReactElement<typeof Icon>;
}

const IconListItem = ({
  primaryIcon,
  text,
  secondaryIcon,
}: IconListItemProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.primary}>
        {primaryIcon} {text}
      </span>
      {secondaryIcon}
    </div>
  );
};

export default IconListItem;
