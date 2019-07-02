import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Table, Alert } from 'reactstrap';

export class KeywordItems extends Component {

  componentDidMount () {
    this.props.onFetchKeywords('');
  }

  render () {
    const error = this.props.keywords.length === 0 ? <Alert color="danger">No data to display</Alert> : null;

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
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchKeywords: (token) => dispatch(actions.fetchKeywords(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeywordItems);