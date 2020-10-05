import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from './Layout/Home/Home';
import Programs from './Layout/Pages/Programs/Programs';
import Careers from './Layout/Pages/Careers';
import Support from './Layout/Pages/Support';
import About from './Layout/Pages/About';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));


export default function Pricing() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/programs" component={Programs}/>
          <Route exact path="/careers" component={Careers}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/support" component={Support}/>
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    </BrowserRouter>
  );
}