import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from './Layout/Home/Home';
import Programs from './Layout/Pages/Programs/Programs';
import Careers from './Layout/Pages/Careers';
import Support from './Layout/Pages/Support';
import About from './Layout/Pages/About';

import { comfortaa, comfortaaBold, comfortaaLight} from './Font';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'comfortaa',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          comfortaa, 
          comfortaaBold, 
          comfortaaLight,
        ],
      },
    },
  },
});

export default function Pricing() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}