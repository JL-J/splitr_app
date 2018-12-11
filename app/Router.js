import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home'
// import EntryForm from './components/EntryForm';
// import ResultsPage from './components/ResultsPage';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="Home" component={Home} title="Home" />
    // <Scene key="results" component={ResultsPage} title="middl" />
    </Router>
  );
};

export default RouterComponent;
