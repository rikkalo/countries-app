import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  testId?: string;
}

export const GoToMain: React.FC<Props> = props => {
  const { testId } = props;

  return (
    <Container data-testId={testId} maxWidth="sm">
      <Typography variant="h3" component="h3">
        <Link to="/">Go to the main page</Link>
      </Typography>
    </Container>
  );
};
