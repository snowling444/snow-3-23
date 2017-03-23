import React, { Component } from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import App from './App';

class Routes extends React.Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home} >
          <IndexRoute component={App}/>
          <Route path="blog" component={Blog} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
