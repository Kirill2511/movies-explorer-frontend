import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import ProjectSection from '../ProjectSection/ProjectSection';
import AboutProject from '../AboutProject/AboutProject';
import Progressbar from '../Progressbar/Progressbar';

function Main() {
  return (
    <main className="main">
      <Header />
      <Promo />
      <NavTab />
      <ProjectSection  id="about" title="О проекте">
        <AboutProject />
        <Progressbar />
      </ProjectSection>
    </main>
  )
}

export default Main;
