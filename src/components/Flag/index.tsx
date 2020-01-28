import React from "react";

import styles from "./style.module.css";

interface Props {
  value: string;
}
export const Flag: React.FC<Props> = props => {
  const { value } = props;

  return <img className={styles.card} src={value} alt="Flag" />;
};
