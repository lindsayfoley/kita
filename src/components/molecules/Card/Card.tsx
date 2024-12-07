import React from "react";
import styles from "./Card.module.css";

type ValueOf<T> = T[keyof T];

const Theme = {
  dark: "dark",
  highlight: "highlight",
} as const;

const BorderRadiusSize = {
  small: "small",
  large: "large",
} as const;

export interface CardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  theme?: ValueOf<typeof Theme>;
  borderRadiusSize?: ValueOf<typeof BorderRadiusSize>;
}

const Card = ({ body, header, theme, borderRadiusSize }: CardProps) => {
  return (
    <article
      className={`${styles.container} ${theme && styles[`theme-${theme}`]} ${
        borderRadiusSize && styles[`border-radius-${borderRadiusSize}`]
      }`}
    >
      <div className={styles.header}>{header}</div>
      <hr className={styles.divider} />
      <div className={styles.body}>{body}</div>
    </article>
  );
};

Card.Theme = Theme;
Card.BorderRadiusSize = BorderRadiusSize;

export default Card;
