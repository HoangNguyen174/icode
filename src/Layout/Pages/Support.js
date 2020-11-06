
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { 
  EmailOutlined,
  MapOutlined
} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(8, 0, 6),
    color: 'black'
  },
  email: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '300px',
    textAlign: 'left'
  },
  icon: {
    marginRight: '8px'
  },
  input: {
    margin: '16px'
  },
  form: {
    padding: '16px',
  }
}));

export default function Support() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" className={classes.content}>
        <Grid container justify="left" spacing={3}>
          <Grid item xs={4}>
            <Typography variant="subtitle1">
              We would love to hear from you, whether you’re excited about what we are doing, want to know how you can get involved, or even if we did something wrong. Send us a message and let us make it right.
            </Typography>
            <br></br>
            <div className={classes.email}>
              <EmailOutlined className={classes.icon}></EmailOutlined> 
              <Typography variant="subtitle2">
                information@gmail.com
              </Typography>
            </div>
            <br></br>
            <br></br>
            <div className={classes.email}>
              <MapOutlined className={classes.icon}></MapOutlined> 
              <Typography variant="subtitle2">
                Headquater 
                999 Washington, DC, USA
              </Typography>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.form}>
              <form noValidate autoComplete="off" required>
                <TextField className={classes.input} label="First name" required/>
                <TextField className={classes.input} label="Last name" required/>
                <TextField className={classes.input} label="Email" style ={{width: '500px'}} required/>
                <TextField className={classes.input} label="Subject" required/>
                <TextField className={classes.input} label="Message" style ={{width: '500px'}} multiline />
              </form>
              <br></br>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}