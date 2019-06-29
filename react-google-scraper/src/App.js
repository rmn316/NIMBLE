import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import KeywordItems from './containers/KeywordItems/KeywordItems';
import Login from './containers/Login/Login';

class App extends Component {
  render () {
    return (
      <Container fluid={true}>
        <Login />
        <Toolbar isAuthenticated={true}/>
        <KeywordItems />
      </Container>
    )
  }
}

export default App;
