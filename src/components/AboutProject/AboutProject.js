import './AboutProject.css';

function AboutProject(){
  return (
    <section id="about" className="about">
      <h2 className="about__title">О проекте</h2>
      <ul className="about-info about__about-info">
        <li className="about-info__item">
          <h3 className="about-info__heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-info__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-info__item">
          <h3 className="about-info__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about-info__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-timing about__about-timing">
        <p className="about-timing__time about-timing__time_back">1 неделя</p>
        <p className="about-timing__time about-timing__time_front">4 недели</p>
        <p className="about-timing__action">Back-end</p>
        <p className="about-timing__action">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
