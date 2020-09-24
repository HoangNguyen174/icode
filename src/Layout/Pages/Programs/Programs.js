import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MediaCard from '../../../Components/MediaCard/MediaCard';

import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
}));

const tiers = [
  {
    title: 'CSS/HTML5',
    price: '30',
    description: [
      'HTML5',
      'CSS3',
      'Responsive Design'
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Basic to Advance JavaScript',
    price: '30',
    description: [
      'Learn basic JavaScript',
      'Function',
      'OOP'
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Front-End Web Developer',
    price: '30',
    description: [
      'Angular',
      'React',
      'Vue'
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Back-End Web Developer',
    price: '30',
    description: [
      'Node.js',
      'Express',
      'NoSQL',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Video Game Programming with JS',
    price: '30',
    description: [
      'Phaser3',
      'Three.js',
      'WebGL'
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Data Structures and Algorithms',
    price: '30',
    description: [
      'Algorithm Design',
      'BigO Notation',
      'Data structure Design'
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
];

export default function Programs() {
  const classes = useStyles();

  return (
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
                      img="pic1.jpg">
            </MediaCard>
          </Grid>
          <Grid item xs={4}>
            <MediaCard title="Full-Stack Developer" 
                      description="Get the skills to work with both back-end and front-end technologies as a full-stack developer"
                      img="pic2.jpg">
            </MediaCard>
          </Grid>
          <Grid item xs={4}>
            <MediaCard title="HTML5/CSS3" 
                      description="Learn how to design and build responsive website with basic HTML5/CSS3"
                      img="pic3.jpg">
            </MediaCard>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}