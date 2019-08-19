import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { connect } from 'react-redux';
import { fetchCities, fetchCity } from './actions/cities';

import CitiesList from './components/CitiesList';
import Main from './components/Main';
import City from './components/City';

const App = (props) => {  

  console.log(props)

  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="wrapper">        
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/list">
            <CitiesList {...props} history={history} />                        
          </Route>
          <Route path="/search/:cityId" children={
            ({match}) => <City {...props} cityId={match.params.cityId} />} />
        </Switch>
      </div>
    </BrowserRouter>
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
    fetchCities: (url) => dispatch(fetchCities(url)),
    fetchCity: (url) => dispatch(fetchCity(url)),
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
