import React, { Component } from 'react';
import AvatarApi from '../../containers/AvatarApi';
import CharacterDetailsPage from '../../containers/CharacterDetailsPage';
import {  BrowserRouter as Router,  Route,  Switch } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (

      <Router>

        <Switch>
          <Route path="/" exact={true}
            component={AvatarApi}
          />

          <Route path="/:_id" exact={true}
            component={CharacterDetailsPage}
          />

        </Switch>

      </Router>
    );
  }
}
