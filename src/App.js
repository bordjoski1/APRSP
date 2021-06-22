import React from 'react';
import ReactRoutes from './config/ReactRoutes';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav'
import Login from './pages/Login'
import Register from './pages/Regster';
import Meats from './pages/Meats'
import FruitsVeggies from './pages/FruitsVeggies';
import Drinks from './pages/Drinks';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route path={ReactRoutes.FRUITSVEGGIES}>
          <FruitsVeggies/>
        </Route>
        <Route path={ReactRoutes.DRINKS}>
          <Drinks/>
        </Route>
        <Route path={ReactRoutes.MEATS}>
          <Meats/>
        </Route>
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
