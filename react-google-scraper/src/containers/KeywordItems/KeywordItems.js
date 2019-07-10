import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Table, Alert } from 'reactstrap';
import Uploader from '../../components/Keywords/Uploader/Uploader';
import axios from '../../axios';

export class KeywordItems extends Component {

  state = {
    uploader: {
      file: {},
      message: false,
      error: false,
    }
  };

  componentDidMount () {
    this.props.onFetchKeywords(this.props.token);
  }

  fileUploadSubmitHandler = (event) => {

    event.preventDefault();

    const formData = new FormData();
    formData.append('file', this.state.uploader.file, this.state.uploader.file.name);

    axios.post('/keywords/upload',
      formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': this.props.token,
      }
    }).then((response) => {
      this.setState({uploader: {file: {}, error: false, message: response.message}});
    }).catch((error) => {
      this.setState({uploader:{file: {}, error: true, message: error.message}});
    })
  }

  fileUploadChangedHandler = (event) => {

    const file = event.target.files[0];

    if (file === undefined) {
      this.setState({uploader: {file: null}});
    } else if(file.type !== 'text/csv') {
      this.setState({uploader: {error: true, message: 'Invalid File'}});
    } else {
      this.setState({uploader: {file: file}});
    }
  }

  render () {
    const error = this.props.keywords.length === 0 ? <Alert color="danger">No data to display</Alert> : null;

    return (
      <div>
        { !this.props.isAuthenticated ? <Redirect to="/login" /> : null }
        <Uploader
          changed={(event) => this.fileUploadChangedHandler(event)}
          submit={(event) => this.fileUploadSubmitHandler(event)}
          displayMessage={this.state.uploader.message}
          error={this.state.uploader.error}
        />
        { error }
        <Table striped>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Ad words</th>
              <th>Links</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.keywords.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.keyword}</td>
                  <td>{item.ad_words}</td>
                  <td>{item.links}</td>
                  <td>{item.results}</td>
                </tr>
              );
            })
          }
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keywords: state.keyword.keywords,
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchKeywords: (token) => dispatch(actions.fetchKeywords(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeywordItems);