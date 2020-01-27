import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const GoToMain: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h3">
        <Link to="/">Go to the main page</Link>
      </Typography>
    </Container>
  );
};
