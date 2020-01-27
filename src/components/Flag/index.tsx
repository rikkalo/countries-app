import { CardMedia } from "@material-ui/core";
import React from "react";

import styles from "./style.module.css";

interface Props {
  value: string;
}
export const Flag: React.FC<Props> = props => {
  const { value } = props;

  return (
    <CardMedia
      component="img"
      className={styles.card}
      image={value || undefined}
      title="Flag"
    />
  );
};
