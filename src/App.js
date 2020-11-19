import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationItems from "./components/Navigation/NavigationItems";
import Home from "./pages/Home";
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <NavigationItems />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beer/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;