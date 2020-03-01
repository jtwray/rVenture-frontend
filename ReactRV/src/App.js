//React
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Components
import Login from './components/SignInForm';
import ListingForm from './components/ListingForm'
import ProtectedRoute from './components/ProtectedRoute';
import ListingDetails from './components/ListingDetails';
import ListingList from './components/ListingList';

//Common Components
import Navigation from "./partials/Navigation";
import Footer from './partials/Footer';

//Design
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SignUpForm from './components/SignUpForm';


function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/signin' component={Login} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/listings' component={ListingList} />
        <Route exact path='/listings/add' component={ListingForm} />
        <ProtectedRoute exact path="/protected" component={ListingForm} />
        <Route path='/listings/:id' render={props => <ListingDetails {...props} />} />

      </Switch>
      <Footer />
    </div>
    </Router>

  );
}

export default App;
