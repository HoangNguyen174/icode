import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import { withRouter } from "react-router-dom";

import './ProgramDetails.scss';

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

const javaScriptCurriculum = [
  {
    name: 'Phase 1: JavaScript Fundamentals',
    time: 'Weeks 1 - 2',
    descriptions: 'Learn the most basics of JavaScript Programming',
    whatYouLearn: [
      'IDE and debugging JavaScript code',
      'What is ES6',
      'JavaScript Variables and Operators',
      'Conditional Statements',
      'JavaScript Loops',
      'String and String manipulation',
      'Array and Object',
      'And so on'
    ]
  },
  {
    name: 'Phase 2: Advanced Working with Functions',
    time: 'Weeks 3 - 4',
    descriptions: 'Function is one of the most important concepts of JavaScript. Mastering JS function will help you archive so many things with JS.',
    whatYouLearn: [
      'Function Object',
      'Callbacks',
      'Closure',
      'Recursion',
      'Cascade',
      'And so on'
    ]
  },
  {
    name: 'Phase 3: Advanced JavaScript',
    time: 'Weeks 5 - 6',
    descriptions: 'Apply all of you have learnt to dynamically altering your website to create beautiful effects.',
    whatYouLearn: [
      'Object Oriented JavaScript',
      'Class Inheritance vs Prototypal Inheritance',
      'How to handle JavaScript errors',
      'Functional Programming with JavaScript',
      'Modify HTML&CSS with website dynamically',
      'Listening & handling events'
    ]
  },
];

const htmlcssCurriculum = [
  {
    name: 'Phase 1: Basics of HTML5',
    time: 'Weeks 1 - 2',
    descriptions: 'In this phase, we will guide you about the new changes, new features and updates in HTML5. That how HTML5 can help you to make your website more professional and better.',
    whatYouLearn: [
      'Introductions and Basics of HTML5',
      'New Updates about Multimedia',
      'Tags in HTML5',
      'HTML5 New Forms Elements',
      'Canvas Tag',
      'HTML5 Website Structure'
    ]
  },
  {
    name: 'Phase 2: The Power of CSS3',
    time: 'Weeks 2 - 4',
    descriptions: 'In second phase, we will cover all the fundamentals of CSS, from the concept of CSS box model to css selectors, ways of formatting fonts and text, styling various UI elements and so on. You will also explore advanced features such as transition and animation effect, flex layouts, media queries and more.',
    whatYouLearn: [
      'Introductions and Basics of CSS & CSS3',
      'How to Add CSS',
      'Box Model',
      'Targeting Elements in CSS',
      'Transition Effects',
      'Animation Effects',
      'And more'
    ]
  },
  {
    name: 'Phase 3: Website Project HTML5/CSS3',
    time: 'Weeks 4 - 6',
    descriptions: 'Finally, you will have opportunity to build your own website idea from scratch using HTML5/CSS3 techniques you have learnt in the last four weeks. We will also teach you how to write clean code, which is readable and easy to edit and maintain.',
    whatYouLearn: [
      'Building your own website',
      'Creating custom wireframes before building a website',
      'Create custom beautiful dropdown menus with in-depth linking',
      'Customize and style your website with CSS and make site responsive',
      'Create advanced HTML5 forms for collecting user information',
      'And so much more'
    ]
  },
]

const classesList = {
  fullstack:  {
    name: 'Full-Stack',
    intro: [
      'At iCocde Academy, we not only want to cover the most in-demand skills for full-stack web development—we want to equip you for continued success even after the program ends.',
      'That’s why our curriculum starts with computer science fundamentals, dives into the front-end and back-end, and most importantly, teaches you how to learn so you can keep growing your skills in the years to come.',
      'And we know that prospective employers care about what you can do, not just what you say you can do, so hands-on virtual training is at the center of our program. In 24 weeks, you’ll gain a wide set of technical skills, put them into action, and graduate with an impressive portfolio of projects.'
    ]
  },
  javascript: {
    name: 'JavaScript',
    intro: [
      'JavaScript is an important language because it is the language of the web browser.',
      'Its association with the browser makes it one of the most popular programming languages in the world. At the same time, it is one of the most despised programming languages in the world.',
      'Here we will help you to learn JavaScript, starting from scratch and go on to advanced concepts like OOP or Functional Programming'
    ]
  }, 
  htmlcss: {
    name: 'HTML5/CSS3',
    intro: [
      'HTML and CSS are the two most fundamental programming languages used in web development. Without them, we would not have websites.',
      'Knowing how to code in HTML and CSS will give you a clear insight into how the internet works and will help you better understand how the websites you use every day are built.',
      'HTML and CSS are, as we have discussed, web development technologies. So, if you learn how to code in HTML and CSS, you’ll be capable of building your own websites that you can share with other people.'
    ]
  }
}

class ProgramDetails extends React.Component {
  schedule() {
    return (
      <div className="schedule">
        <div className="schedule__enroll-header">
          Enrolling Now
        </div>
        <div className="schedule__class-header">
          Full-Stack
        </div>
        <ul className="schedule__date">
          <li>
            01/01/2021: 24 weeks
          </li>
        </ul>
        <div className="schedule__class-header">
          JavaScript
        </div>
        <ul className="schedule__date">
          <li>
            01/01/2021: 6 weeks
          </li>
        </ul>
        <div className="schedule__class-header">
          HTML5/CSS3
        </div>
        <ul className="schedule__date">
          <li>
            01/01/2021: 6 weeks
          </li>
        </ul>
        <Divider />
        <div className="schedule__enroll-header">
          Contact Admissions
        </div>
        <div className="schedule__admissions-phone-number">
          (+84) 901234567
        </div>
      </div>
    )
  }

  phaseList(className) {
    const {
      classes,
    } = this.props;

    let curriculum = null;

    switch(className) {
      case 'javascript': 
        curriculum = javaScriptCurriculum;
        break;
      case 'fullstack':
        curriculum = fullStackCurriculum;
        break
      case 'htmlcss':
        curriculum = htmlcssCurriculum;
        break;
      default:
        curriculum = javaScriptCurriculum;
    }

    return curriculum.map((phase) => (
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
              <div className={classes.columnHeader}>
                Description:
              </div>
              <div className={classes.columnText}>
                { phase.descriptions }
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.columnHeader}> 
                What Will You Learn:
              </div>
              <div className={classes.columnText}> 
                <ul className={classes.ul}>
                  {
                    phase.whatYouLearn.map((item) =>
                      <li key={item}>
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

  renderIntro(className) {
    return classesList[className].intro.map((p) => (
      <Typography variant="body1" align="left" color="textPrimary" gutterBottom>
        { p }
      </Typography>
    ));
  }

  render() {
    const {
      classes,
    } = this.props;

    const {
      className
    } = this.props.match.params;

    const convertedClassName = classesList[className].name;

    return (
      <React.Fragment>
        <Container maxWidth="md" component="main" className={classes.content}>
          <h1 className="class-name">
            { convertedClassName } Curriculum
          </h1>
          <div className="top-image">
            <img src="/class.jpg" alt=""/>
          </div>
          <div className="introduction">
            { this.renderIntro(className) }
          </div>
          <Grid container spacing={3} className="class-contents">
            <Grid item xs={3}>
              <Paper elevation={3}>
                { this.schedule() }
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3}>
                { this.phaseList(className) }
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(ProgramDetails));
