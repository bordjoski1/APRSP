import React from 'react';
import ReactRoutes from './config/ReactRoutes';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav'
import Login from './pages/Login'
import Register from './pages/Regster';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route path={ReactRoutes.LOGIN}>
          <Login/>
        </Route>
        <Route path={ReactRoutes.REGISTER}>
          <Register/>
        </Route>
        <Route path={ReactRoutes.HOME}>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
