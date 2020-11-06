import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(8, 0, 6),
    color: 'black'
  },
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#d3e6fd',
    position: 'relative',
    paddingTop: '8px',
  },
  upper: {
    backgroundColor: '#9caa58',
    width: '100%',
    height: '100px'
  },
  upper2: {
    backgroundColor: '#8f4405',
    width: '100%',
    height: '100px'
  },
  upper3: {
    backgroundColor: '#4c281a',
    width: '100%',
    height: '100px'
  },
  upper4: {
    backgroundColor: '#485123',
    width: '100%',
    height: '100px'
  },
  lower: {
    backgroundColor: '#d3e6fd',
    width: '100%',
    height: '300px',
    paddingTop: '100px',
  },
  avatar: {
    width: '160px',
    height: '160px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '20px',
    left: 'calc(50% - 80px)',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" className={classes.content}>
        <div className={classes.root}>
          <Typography variant="h4">
            MEET THE TEAM
          </Typography>
          <br></br>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className={classes.upper}>
                </div>
                <div className={classes.lower}>
                <Typography variant="h6">
                  CEO/Founder 
                </Typography>
                <Typography variant="h6">
                  Jon Nguyen
                </Typography>
                <Typography variant="body">
                  Senior Software Engineer
                </Typography>
                </div>
                <div className={classes.avatar}>
                  <img className={classes.img} src="./hoang1.jpg"></img>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>  
              <Paper className={classes.paper}>
                <div className={classes.upper2}>
                </div>
                <div className={classes.lower}>
                  <Typography variant="h6">
                    COO 
                  </Typography>
                  <Typography variant="h6">
                    Huy Dao
                  </Typography>
                  <Typography variant="body">
                    Senior Manager
                  </Typography>
                </div>
                <div className={classes.avatar}>
                  <img className={classes.img} src="./huy.jpg"></img>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className={classes.upper3}>
                </div>
                <div className={classes.lower}>
                <Typography variant="h6">
                  Advisor 
                </Typography>
                <Typography variant="h6">
                  Leah Chung
                </Typography>
                <Typography variant="body">
                  Senior Manager
                </Typography>
                </div>
                <div className={classes.avatar}>
                  <img className={classes.img} src="./hoang1.jpg"></img>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className={classes.upper4}>
                </div>
                <div className={classes.lower}>
                <Typography variant="h6">
                  Advisor 
                </Typography>
                <Typography variant="h6">
                  Leah Chung
                </Typography>
                <Typography variant="body">
                  Senior Manager
                </Typography>
                </div>
                <div className={classes.avatar}>
                  <img className={classes.img} src="./hoang1.jpg"></img>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}