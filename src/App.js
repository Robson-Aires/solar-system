import React from 'react';
import Header from './components/Header';
import Solarsystem from './components/SolarSystem';
import Missions from './components/Missions';
import Title from './components/Title';
import PLanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Solarsystem headline="Planetas" />
        <Missions headline="Missões" />
        <Title />
        <PLanetCard planetName="" planetImage="" />
      </>
    );
  }
}

export default App;
