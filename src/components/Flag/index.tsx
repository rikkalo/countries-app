import { CardMedia } from "@material-ui/core";
import React from "react";

import styles from "./style.module.css";

interface Props {
  value: string;
  name: string;
}
export const Flag: React.FC<Props> = props => {
  const { value, name } = props;

  return (
    <CardMedia
      className={styles.flag}
      component="img"
      alt={name}
      height="140"
      image={value}
      title={name}
    />
  );
};
