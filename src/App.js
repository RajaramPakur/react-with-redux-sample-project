import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/font-awesome.min.css';
import Loadable from 'react-loadable';
import store from './store/index';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
