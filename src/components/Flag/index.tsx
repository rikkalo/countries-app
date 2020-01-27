import { CardMedia } from "@material-ui/core";
import React from "react";

interface Props {
  value: string;
}
export const Flag: React.FC<Props> = props => {
  const { value } = props;

  return (
    <CardMedia
      component="img"
      height="500"
      image={value || undefined}
      title="Flag"
    />
  );
};
