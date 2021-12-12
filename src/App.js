import React from "react";
import Home from "./components/home";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const statistics = useSelector((state) => state.history);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        statistics.isCorrectLink ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );

  let location = useLocation();

  return (
    <>
      <div>
        <CssBaseline />
        <Switch>
          <PrivateRoute path="/statistics" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;