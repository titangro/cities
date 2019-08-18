import React from 'react';
import PropTypes from 'prop-types';

//import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getCities, showCity } from './actions/cities';
//import { createError, deleteError } from './actions/error';

const App = (props) => {

  /*componentWillMount() {
    this.props.fetchData("https://4", {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({})
    })
  }*/
  
  console.log(props)

  return (
    <div className="wrapper">
      test
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      error: state.error,
      loading: state.loading,
      cities: state.cities,
      city: state.city
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, params) => dispatch(getCities(url, params)),
  };
};

App.defaultProps = {
  apiRoot: 'https://api.teleport.org/api/'
}

App.propTypes = {
  children: PropTypes.node,
  apiRoot: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
