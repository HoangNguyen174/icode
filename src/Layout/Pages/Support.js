
import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Support.css";

export default function Support() {
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        Support
        <Container 
        maxWidth="sm" 
        style={{ backgroundColor: '#51d1e1', height: '75vh' }}>
            <h1 className="title">iCode Support Form</h1>
            <h2 className="title">Thank you for taking time!</h2>
          <TextField 
            label="Name"
            fullWidth 
            variant="outlined"
            placeholder="Enter your name"
            style={{ margin: 8 }}
            required id="standard-required"
          />
          <TextField 
            label="Age"
            variant="outlined"
            placeholder="Your age"
            style={{margin: 8}}
          />
          <TextField 
            label="Email"
            variant="outlined"
            placeholder="Your email"
            style={{ margin: 8 }}
            required id="standard-required"
          />
          <TextField 
            label="Job"
            variant="outlined"
            placeholder="Your job"
            style={{ margin: 8 }}
          />
          <TextField 
            label="Phone number"
            variant="outlined"
            placeholder="Your phone number"
            style={{ margin: 8 }}
          />
          <TextField 
            label="Message"
            variant="outlined"
            placeholder="Your message"
            style={{ margin: 8 }}
            fullWidth
            multiline="true"
          />
          <FormLabel component="legend" style={{ margin: 8}} className="title">
            Would you like to receive our news via email?
          </FormLabel>
          <FormControlLabel
            value="Yes"
            control={<Checkbox color="primary" />}
            label="Yes"
            labelPlacement="Yes"
            margin={{ margin: 8 }}
          />
          <FormControlLabel
            value="No"
            control={<Checkbox color="secondary" />}
            label="No"
            labelPlacement="No"
            margin={{ margin: 8 }}
          />
           <Button 
            variant="contained" color="primary"
            fullWidth>Submit
          </Button>
        </Container>
      </Container>
    </React.Fragment>
  )
}