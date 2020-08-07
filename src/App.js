import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CookiesProvider, withCookies } from 'react-cookie';
import history from './history';
import ContactList from './components/contact-list/ContactList'
import Singin from './components/signin/Signin'
import './App.css';

class App extends Component {
  render() {
    // let userProfile = {}
    // function setProfileData(data) {
    //   // TODO: store in local storage
    //   userProfile = {
    //     name: data.profileObj.name,
    //     email: data.profileObj.email,
    //     token: data.googleId,
    //     image: data.profileObj.imageUrl,
    //   }
    // }
    return (
      <div className="App">
        <CookiesProvider>
          <Router history={history}>
            <div>
              <Switch>
                <Route path="/" exact>
                  <Singin history={history} cookies={this.props.cookies}/>
                </Route>
                <Route path="/contacts">
                  <ContactList cookies={this.props.cookies}/>
                </Route>
              </Switch>
            </div>
          </Router>
        </CookiesProvider>
      </div>
    );
  }
}

export default withCookies(App);
