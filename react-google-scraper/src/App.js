import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import { Container } from 'reactstrap';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import KeywordItems from './containers/KeywordItems/KeywordItems';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout/Logout'

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignUp();

    console.log(this.props.isAuthenticated);
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={KeywordItems} />
        </Switch>
      );
    }

    return (
      <Container fluid={true}>
        <Toolbar isAuthenticated={this.props.isAuthenticated}/>
        {routes}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
