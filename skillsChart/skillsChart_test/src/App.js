import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// comps
import Radar from "./pages/Radar";
import Bar from "./pages/Bar";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

const App=()=>
    <div className="module-container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/radar" component={Radar} />
          <Route exact path="/bar" component={Bar} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>

export default App;
