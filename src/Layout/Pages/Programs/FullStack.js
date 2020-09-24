import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';

import './FullStack.scss';

const styles = theme => ({
  content: {
    padding: theme.spacing(0, 0, 6),
  },
  phaseName: {
    'font-weight': 'bold',
    'color': 'rgb(14,74,157)',
    'font-size': '20px',
    'margin-right': '24px',
  },
  time: {
    'font-size': '20px', 
  },
  columnHeader: {
    'font-weight': 'bold',
    'font-size': '18px',
    'margin-bottom': '12px'
  },
  columnText: {
    'font-size': '16px'
  },
  ul: {
    'list-style-type': 'disc',
    'padding-left': '8px',
  },
  scheduleHeading: {
    'font-weight': 'bold',
    'font-size': '18px',
    'padding': '24px 16px 24px'
  }
});

const fullStackCurriculum = [
  {
    name: 'Phase 1: Foundation',
    time: 'Weeks 1 - 8',
    descriptions: 'The first phase, Foundation, equips you with the fundamental concepts of web development, covering HTML, CSS, and JavaScript, as well as command line fundamentals and API consumption.',
    whatYouLearn: [
      'HTML, CSS, and JavaScript',
      'Creating a web page from scratch',
      'Mastering terminal commands',
      'DOM manipulation',
      'jQuery',
      'Consuming RESTful APIs',
      'Parsing JSON to extract meaningful data',
      'Using AJAX to update data on a website',
    ]
  },
  {
    name: 'Phase 2: Technical',
    time: 'Weeks 9 - 16',
    descriptions: 'In the second phase, Technical, you learn the skills necessary to engineer a full-stack web application, working with servers, databases, and other back end technologies, and connecting them to the front end.',
    whatYouLearn: [
      'Writing Node.js server code to serve static web pages',
      'Querying large amounts of data and answering questions from a MySQL database',
      'Understanding and using Joins, Wheres, and Counts strategically',
    ]
  },
  {
    name: 'Phase 3: Performance',
    time: 'Weeks 17 - 24',
    descriptions: 'The last phase, Performance, has a dual meaning in that you acquire skills to optimize your web applications for speed and efficiency as well as prepare yourself for the transition to a career in web development.',
    whatYouLearn: [
      'Utilizing NoSQL databases, such as MongoDB, as an alternative to MySQL',
      'Improving the performance of applications',
      'Converting traditional applications into progressive web applications (PWAs)',
      'Creating single-page applications with React',
      'Computer Science applied to JavaScript (data structures, algorithms)'
    ]
  },
];

class FullStack extends React.Component {
  schedule() {
    const {
      classes,
    } = this.props;

    return (
      <div class="schedule">
        <div class="schedule__enroll-header">
          Enrolling Now
        </div>
        <div class="schedule__class-header">
          Full-Stack
        </div>
        <ul class="schedule__date">
          <li>
            01/01/2021: 24 weeks
          </li>
        </ul>
        <div class="schedule__class-header">
          JavaScript
        </div>
        <ul class="schedule__date">
          <li>
            01/01/2021: 6 weeks
          </li>
        </ul>
        <div class="schedule__class-header">
          HTML5/CSS3
        </div>
        <ul class="schedule__date">
          <li>
            01/01/2021: 6 weeks
          </li>
        </ul>
        <Divider />
        <div class="schedule__enroll-header">
          Contact Admissions
        </div>
        <div class="schedule__admissions-phone-number">
          (+84) 901234567
        </div>
      </div>
    )
  }

  phaseList() {
    const {
      classes,
    } = this.props;

    return fullStackCurriculum.map((phase) => (
      <Accordion key={phase.name} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.phaseName}> { phase.name} </Typography>
          <Typography className={classes.time}> { phase.time} </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div class={classes.columnHeader}>
                Description:
              </div>
              <div class={classes.columnText}>
                { phase.descriptions }
              </div>
            </Grid>
            <Grid item xs={6}>
              <div class={classes.columnHeader}> 
                What Will You Learn:
              </div>
              <div class={classes.columnText}> 
                <ul class={classes.ul}>
                  {
                    phase.whatYouLearn.map((item) =>
                      <li>
                        { item }
                      </li>)
                  } 
                </ul>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    ));
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <React.Fragment>
        <Container maxWidth="md" component="main" className={classes.content}>
          <h1 class="class-name">
            Full Stack Curriculum
          </h1>
          <div class="top-image">
            <img src="class.jpg" />
          </div>
          <div class="introduction">
            <Typography variant="body1" align="left" color="textPrimary" gutterBottom>
              At iCocde Academy, we not only want to cover the most in-demand skills for full-stack web development—we want to equip you for continued success even after the program ends.
            </Typography>
            <Typography variant="body1" align="left" color="textPrimary" gutterBottom>
              That’s why our curriculum starts with computer science fundamentals, dives into the front-end and back-end, and most importantly, teaches you how to learn so you can keep growing your skills in the years to come.
            </Typography>
            <Typography variant="body1" align="left" color="textPrimary" gutterBottom>
              And we know that prospective employers care about what you can do, not just what you say you can do, so hands-on virtual training is at the center of our program. In 24 weeks, you’ll gain a wide set of technical skills, put them into action, and graduate with an impressive portfolio of projects.
            </Typography>
          </div>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper elevation={3}>
                { this.schedule() }
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3}>
                { this.phaseList() }
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(FullStack);
