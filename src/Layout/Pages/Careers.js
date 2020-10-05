
import React from 'react';
import Container from '@material-ui/core/Container';
import ReactMarkdown from 'react-markdown';

export default class Careers extends React.Component {
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
    return (
      <React.Fragment>
        <Container maxWidth="md" component="main">
          <ReactMarkdown source={this.state.content} />
        </Container>
      </React.Fragment>
    )
  }
}