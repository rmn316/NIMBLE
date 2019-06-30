import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

import axios from '../../axios';
import styles from './Login.module.scss';

export class Login extends Component {

  state = {
    userForm: {
      email: '',
      password: '',
    },
    isTouched: false,
    canSubmit: false,
    showErrorMessage: false,
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

    this.setState({showErrorMessage: false});

    axios.post('users/login', {
      ...this.state.userForm
    }).then(response => {
      console.log(response.message);
    }).catch(() => {
      this.setState({showErrorMessage: true});
    });

  };

  render () {
    return (
      <div className={styles.Login}>
        <Form onSubmit={this.submitHandler}>
          <Alert color="danger" isOpen={this.state.showErrorMessage}>Invalid credentials provided</Alert>
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
      </div>
    );
  }
}

export default Login;