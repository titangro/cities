import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
//import { showCities } from './actions/companies';
//import { createError, deleteError } from './actions/error';

class App extends Component {

  componentWillMount() {
    /*this.props.fetchData("https://4", {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({})
    })*/
  }

  render() {
    return (
      <div className="wrapper">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      error: state.error,
      loading: state.loading,
      cities: state.cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fetchData: (url, params) => dispatch(showCities(url, params)),
  };
};

App.propTypes = {
  children: PropTypes.node
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
