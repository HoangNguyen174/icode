
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" className={classes.content}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Explore our schools to find your perfect programs
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Our Part-Time Online Bootcamp is a flexible alternative that provides online access to our in-depth curriculum—complete with real-time support from instructors, our industry-tested learning platform, hands-on assignments and much more.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  )
}