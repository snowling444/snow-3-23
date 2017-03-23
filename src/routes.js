import React, { Component } from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import Home from './Home';
import Blog from './Blog';
import App from './App';
import Mine from './Mine';

class Routes extends React.Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home} >
          <IndexRoute component={App}/>
          <Route path="blog" component={Blog} />
          <Route path="mine" component={Mine} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
