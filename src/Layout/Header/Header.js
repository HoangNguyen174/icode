
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core';
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          ICode Academy
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="/" className={classes.link}>
            Home
          </Link>
          <Link variant="button" color="textPrimary" href="/programs" className={classes.link}>
            Programs
          </Link>
          <Link variant="button" color="textPrimary" href="/careers" className={classes.link}>
            Careers
          </Link>
          <Link variant="button" color="textPrimary" href="/about" className={classes.link}>
            About Us
          </Link>
          <Link variant="button" color="textPrimary" href="/support" className={classes.link}>
            Support
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}