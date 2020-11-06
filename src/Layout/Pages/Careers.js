
import React from 'react';
import Container from '@material-ui/core/Container';
import ReactMarkdown from 'react-markdown';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  content: {
    fontFamily: 'Arial, Roboto'
  },
});
class Careers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    fetch('/Careers.txt')
      .then(response => response.text())
      .then((data) => {
        this.setState({
          content: data,
        });
      })
  }

  
  render() {
    const {
      classes,
    } = this.props;

    const htmlRenderers = {
      image({ alt, src, title }) {
        return (<img alt={alt} src={src} title={title} style={{maxWidth: 700}} />);
      }
    };

    return (
      <React.Fragment>
        <Container className={classes.content} maxWidth="md" component="main">
          <ReactMarkdown source={this.state.content} 
                        renderers={htmlRenderers}/>
        </Container>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Careers);