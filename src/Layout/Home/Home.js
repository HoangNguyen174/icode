
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" className={classes.content}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Explore our school to find your perfect programs
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Our Part-Time Online Bootcamp is a flexible alternative that provides online access to our in-depth curriculum—complete with real-time support from instructors, our industry-tested learning platform, hands-on assignments and much more.
        </Typography>
      </Container>
    </React.Fragment>
  )
}