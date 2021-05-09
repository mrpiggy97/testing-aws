import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomeView from "./views/HomeView"
import AboutView from "./views/AboutView"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <HomeView/>}/>
        <Route exact path="/about" render={() => <AboutView/>}/>
      </Switch>
    </div>
  );
}

export default App;
