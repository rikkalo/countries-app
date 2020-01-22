import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { Typography, Container, List, ListItem, Link } from '@material-ui/core';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionsPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h2">Regions</Typography>
      <List>
        {regions.map(region => (
          <ListItem key={region}>
            <Link component={RouterLink} to={`/сountries?region=${region}`}>
              <Typography variant="h5" component="h2">
                {region}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
export default RegionsPage;
