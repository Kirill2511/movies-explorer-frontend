import './AboutMe.css';
import me from '../../images/me.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(){
  return(
    <section id="me" className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme-info">
        <img className="aboutme-info__foto" alt="Фото студента" src={me}/>
        <div className="aboutme-info__bio">
          <div>
            <h3 className="aboutme-info__name">Виталий</h3>
            <p className="aboutme-info__short">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme-info__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <ul className="aboutme-info__links">
            <li className="aboutme-info__link-item">
              <a className="aboutme-info__link" href="https://www.facebook.com/">Facebook</a>
            </li>
            <li className="aboutme-info__link-item">
              <a className="aboutme-info__link" href="https://github.com/">Github</a>
            </li>
          </ul>
        </div>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;
