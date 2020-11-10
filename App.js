import React from 'react';
import {StatusBar} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import MainPage from './components/MainPage';
import Schedule from './containers/Schedule';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Router>
          <Scene key = "root">
            <Scene key = "main" component = {MainPage} title = "SUPER FILM" initial = {true} />
            <Scene key = "schedule" component = {Schedule} title = "SUPER FILM" />
          </Scene>
      </Router>
    </>
  );
};

export default App;
