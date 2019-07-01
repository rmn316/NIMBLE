import React, { Component } from 'react';
import { Table, Alert } from 'reactstrap';

import axios from 'axios';

class KeywordItems extends Component {

  state = {
    keywords: [],
    error: false,
  };

  componentDidMount () {
    axios.get('http://localhost:8000/keywords')
      .then((response) => {
        this.setState(
          { keywords: response.data }
        )
      })
      .catch (() => {
        this.setState({ error: true });
      })
  }

  render () {

    const error = this.state.error ? <Alert color="danger">No data to display</Alert> : null;

    return (
      <div>
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
            this.state.keywords.map(item => {
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

export default KeywordItems;