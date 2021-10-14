import "./scss/main.scss";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </Router> 
  );
}

export default App;
