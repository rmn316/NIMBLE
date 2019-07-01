import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import { Container } from 'reactstrap';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import KeywordItems from './containers/KeywordItems/KeywordItems';
import Login from './containers/Login/Login';

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignUp();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/auth" component={Login} />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" component={KeywordItems}/>
        </Switch>
      );
    }

    return (
      <Container fluid={true}>
        <Toolbar isAuthenticated={true}/>
        {routes}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
