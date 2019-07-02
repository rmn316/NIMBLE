import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Form, FormGroup, Label, Input, Button, Alert, Spinner } from 'reactstrap';
import styles from './Login.module.scss';

export class Login extends Component {

  state = {
    userForm: {
      email: '',
      password: '',
    },
    isTouched: false,
    canSubmit: false,
  };

  /**
   * Handle input by users.
   * @param event
   */
  userInputChangedHandler = (event) => {
    const updatedUserForm = {...this.state.userForm};

    updatedUserForm[event.target.id] = event.target.value;

    this.setState({
      userForm: updatedUserForm,
      isTouched: true,
      canSubmit: updatedUserForm.email.length > 0 && updatedUserForm.password.length > 0

    });

  }

  /**
   * Submit the form
   * @param event
   */
  submitHandler = event => {
    event.preventDefault();

    this.props.onAuth(this.state.userForm.email, this.state.userForm.password);
  };

  render () {

    let form = (
      <Form onSubmit={this.submitHandler}>
        <Alert color="danger" isOpen={this.props.error}>{this.props.error}</Alert>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="yourname@email.com"
            type="email"
            value={this.state.userForm.email}
            onChange={this.userInputChangedHandler}
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Your secure password"
            value={this.state.userForm.password}
            onChange={this.userInputChangedHandler}
            autoComplete="off"
          />
        </FormGroup>
        <Button block disabled={!this.state.canSubmit} type="submit">Login</Button>
      </Form>
    );

    if (this.props.loading) {
      form = <Spinner />
    }

    return (
      <div className={styles.Login}>
        { form }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);