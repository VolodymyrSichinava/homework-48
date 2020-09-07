import React from 'react';
import './App.css';
import About from './components/aboutus';
import Intro from './components/intro';
import Competence from './components/competence';
import Team from './components/team';
import Work from './components/work';

function App() {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Competence></Competence>
      <Team></Team>
      <Work></Work>
    </div>
  );
}

export default App;