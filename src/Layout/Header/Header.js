
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core';
import { FontDownloadTwoTone } from '@material-ui/icons';
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: '4px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'inline-flex',
    flexDirection: 'row',
    backgroundColor: '#5d6d7c'
  },
  logo: {
    paddingLeft: '32px',
    height: '64px'
  },
  toolbar: {
    flexWrap: 'wrap',
    marginLeft: 'auto'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
    fontFamily: 'comfortaa',
    fontSize: 'large'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.header}>
      <img src="/logo.png" alt="" className={classes.logo}/>
      <Toolbar className={classes.toolbar}>
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
        {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button> */}
      </Toolbar>
    </AppBar>
  )
}