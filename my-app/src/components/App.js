
import './App.css';
import Home from "./components/Home";
import Category from './Category';
import Source from './Source';
import Favorites from './Favorites';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router';

function App() {
  return (<div>
          <Switch>
            <NavBar />
            <Route exact path="/"><Home /></Route>
            <Route path="/category"><Category /></Route>
            <Route path="/source"><Source /></Route>
            <Route path="/favorites"><Favorites /></Route>
          </Switch>
        </div>);
}

export default App;