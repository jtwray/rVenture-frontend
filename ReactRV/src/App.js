//React
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Components
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import ListingForm from './components/ListingForm'
import ProtectedRoute from './components/ProtectedRoute';
import ListingDetails from './components/ListingDetails';
import ListingList from './components/ListingList';
import Logout from './components/Logout';

//Common Components
import Navigation from "./partials/Navigation";
import Footer from './partials/Footer';

//Design
import './App.css';
import 'semantic-ui-css/semantic.min.css'

//Contexts
import { UserContext } from "./contexts/UserContext";
import { ListingContext } from './contexts/ListingsContext';


function App() {
  const [user, setUser] = useState({});

  const addUserID = item => {
    console.log('item', item);
    setUser({ username: item.username, userID: item.userID, reservations:''});
    console.log('user', user);
  }


  // useEffect(() => {
  //   setUser({ username: 'Pete', userID: '1', reservations:''});
  // }, []);

  // MVP req: location, description, price per day, photo
// optional: listingID, ownerID, amenaties
// reservation for RV owner: listing ID, date, ownerID

  console.log(UserContext);


  return (
    <UserContext.Provider value={{ user, addUserID}}>
      <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={SignUpForm} />
          <Route exact path='/signin' component={SignInForm} />
          <Route exact path='/signup' component={SignUpForm} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/listings' component={ListingList} />
          <Route exact path='/listings/add' component={ListingForm} />
          <Route path='/listings/:id' render={props => <ListingDetails {...props} />} />

        </Switch>
        <Footer />
      </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
