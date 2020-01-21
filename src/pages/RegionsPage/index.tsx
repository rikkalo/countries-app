import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { Typography, Container, Paper, Card, Link } from '@material-ui/core';

import styles from './style.module.css';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionsPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h2">Regions</Typography>
      <Paper>
        {regions.map(region => (
          <Card key={region} className={styles.card}>
            <Link component={RouterLink} to={`/сountries?region=${region}`}>
              <Typography variant="h5" component="h2">
                {region}
              </Typography>
            </Link>
          </Card>
        ))}
      </Paper>
    </Container>
  );
}
export default RegionsPage;
