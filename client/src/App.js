import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MySavedBooks from './pages/MySavedBooks';
import Search from './pages/Search';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/saved' component={MySavedBooks} />
          <Route exact path='/saved/:id' component={MySavedBooks} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
