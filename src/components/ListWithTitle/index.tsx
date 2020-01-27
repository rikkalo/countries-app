import { List, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ListWithTitle: React.FC<Props> = props => {
  const { title, children } = props;

  return (
    <>
      <Typography variant="h5" component="h5">
        {title}:
      </Typography>
      <List>{children}</List>
    </>
  );
};
