import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import ProfileContainer from './container/ProfileContainer';
import ProfileData from './data/ProfileData';
import FooterData from './data/FooterData';

library.add( fas, fab );

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      profile: ProfileData,
      footer: FooterData
    }
  }

  render() {
    const { profile, footer } = this.state;

    return (
      <div>
        <NavBar searchData={ profile.search }></NavBar>
        <Container fluid>
          <Router>
              <Route exact path="/" render={ () => { return <HomeContainer data={ profile }></HomeContainer> } } />
              <Route exact path="/profile/" render={ () => { return <ProfileContainer data={ profile } footerData={ footer }></ProfileContainer> } } />
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
