
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    
    

    <div className="App">
        

      <Router>
      <div className="router">
        
            <Link to="/">Home</Link>
          
            <Link to="/about">About</Link>
          
            
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail />
          </Route>
          <Route path ="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}


export default App;
