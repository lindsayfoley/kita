import React from "react";
import styles from "./Card.module.css";
import { ValueOf } from "@kita/types/utils";

const Theme = {
  dark: "dark",
  highlight: "highlight",
} as const;

const BorderRadiusSize = {
  small: "small",
  large: "large",
} as const;

export interface CardProps {
  header?: React.ReactNode;
  body: React.ReactNode;
  theme?: ValueOf<typeof Theme>;
  borderRadiusSize?: ValueOf<typeof BorderRadiusSize>;
  classname?: string;
}

const Card = ({
  body,
  header,
  theme = Theme.dark,
  borderRadiusSize = BorderRadiusSize.large,
  classname,
}: CardProps) => {
  return (
    <article
      className={`${styles.container} ${classname && classname} ${
        theme && styles[`theme-${theme}`]
      } ${borderRadiusSize && styles[`border-radius-${borderRadiusSize}`]}`}
    >
      {header && (
        <>
          <div className={styles.header}>{header}</div>
          <hr className={styles.divider} aria-hidden="true" />
        </>
      )}
      <div className={styles.body}>{body}</div>
    </article>
  );
};

Card.Theme = Theme;
Card.BorderRadiusSize = BorderRadiusSize;

export default Card;
