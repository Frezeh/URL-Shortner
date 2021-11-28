import React from 'react';
import Home from './components/home';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <div style={{ backgroundColor: 'white'}}>
    <CssBaseline />
      <Container fixed>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
               <Route exact path='/statistics'>
                <Dashboard />
              </Route>
              <Redirect to='/' />
            </Switch>
      </Container>
    </div>
    </>
  );
}

export default App;
