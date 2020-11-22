import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import resume from '../src/resume.pdf'

import Home from './Home'
import About from './About'
import Resume from './Resume';
import Footer from './Footer'

function App() {
  return (
    <Router>
      <div id='header'>
        <nav>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <a href={resume} target='_blank'>RESUME</a>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path='/about'>
          <About />
          <Footer />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/'>
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
