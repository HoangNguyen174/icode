import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MediaCard from '../../../Components/MediaCard/MediaCard';

import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, withRouter } from "react-router-dom";
import ProgramDetails from  './ProgramDetails';

const styles = (theme) => ({
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
});

class Programs extends React.Component {
  render() {
    const {
      classes,
    } = this.props;
    
    const {
      path,
    } = this.props.match;

    return (
      <Switch>
        <Route exact path={path}>
          <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.content}>
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                Explore our schools to find your perfect programs
              </Typography>
            </Container>
            <Container maxWidth="md" component="main">
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={4}>
                  <MediaCard title="JavaScript" 
                            description="Build a strong web development fundamental by mastering basic JavaScript"
                            img="/pic1.jpg"
                            className="javascript">
                  </MediaCard>
                </Grid>
                <Grid item xs={4}>
                  <MediaCard title="Full-Stack Developer" 
                            description="Get the skills to work with both back-end and front-end technologies as a full-stack developer"
                            img="/pic2.jpg"
                            className="fullstack">
                  </MediaCard>
                </Grid>
                <Grid item xs={4}>
                  <MediaCard title="HTML5/CSS3" 
                            description="Learn how to design and build responsive website with basic HTML5/CSS3"
                            img="/pic3.jpg"
                            className="htmlcss">
                  </MediaCard>
                </Grid>
              </Grid>
            </Container>
          </React.Fragment>
        </Route>
        <Route path={`${path}/:className`} component={ProgramDetails}/>
      </Switch>
    )
  }
}

export default withStyles(styles, { withTheme: true})(withRouter(Programs));