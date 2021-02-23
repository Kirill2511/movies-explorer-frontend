import React from 'react';
import './AboutProject.css';

const AboutProject = () => (
  <div id="About" className="about-project">
    <div className="about-project__table">
      <h6 className="about-project__title">Дипломный проект включал 5 этапов</h6>
      <p className="about-project__desription">
        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
      </p>
    </div>
    <div className="about-project__table">
      <h6 className="about-project__title">На выполнение диплома ушло 5 недель</h6>
      <p className="about-project__desription">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
      </p>
    </div>
  </div>
);

export default AboutProject;
