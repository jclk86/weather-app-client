import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./modules/routesConfig";

const App = (props) => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={i}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
