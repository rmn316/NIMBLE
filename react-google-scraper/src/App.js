import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {
  render () {
    return (
      <Container fluid={true}>
        <Toolbar isAuthenticated={true}/>
      </Container>
    )
  }
}

export default App;
