import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Panel from './containers/Panel/Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Panel} />
        </Switch>
      </div>
    );
  }
}

export default App;
