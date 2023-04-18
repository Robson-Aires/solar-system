import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Title from './components/Title';
import PLanetCard from './components/PlanetCard';

// atenção Instrutor(a) da trybe!!!!
// Caso haja problema que eu copiei esse código, esse é o MEU código de quando EU estava na turma 24, como eu ja havia finalizado esse trabalho
// não achei necessário refazer todo esse projeto do 0. passar bem....

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem headline="Planetas" />
        <Missions headline="Missões" />
        <Title />
        <PLanetCard planetName="" planetImage="" />
      </>
    );
  }
}

export default App;
