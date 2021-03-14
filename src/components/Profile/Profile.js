import React from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [name, setName] = React.useState('user.name');
  const [email, setEmail] = React.useState('user@yandex.ru');
  const [isEditing, setisEditing] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const history = useHistory();
  const submitBtnSelector = isError ? 'profile__submit-btn_disabled' : '';
  function handleNameInput(event) {
    if (name.length > 20) {
      return;
    }
    setName(event.target.value);
  }

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function toggleEditing() {
    setisEditing(!isEditing);
  }

  function handleSubmitForm(event) {
    console.log('SUBMIT');
    event.preventDefault();
    console.log(isError);
    if (isError) {
      setErrorText('');
      setisEditing(false);
      setIsError(false);
    } else {
      setErrorText('При обновлении профиля произошла ошибка.');
      setIsError(true);
    }
  }

  function handleSignOut() {
    setTimeout(() => history.push('/'), 1000);
  }
  return (
    <div className="profile">
      <h3 className="profile__title">
        Привет user.name!
      </h3>
      <form className="profile__form" onSubmit={handleSubmitForm}>
        <label className="profile__input-label" htmlFor="name">
          Имя
          <input className="profile__input" type="text" name="name" value={name || ''} disabled={!isEditing} onChange={handleNameInput} />
        </label>
        <label className="profile__input-label" htmlFor="email">
          Почта
          <input className="profile__input" type="email" name="email" value={email || ''} disabled={!isEditing} onChange={handleEmailInput} />
        </label>
        {isError && <span className="profile__error-message">{errorText}</span>}
        {isEditing && <button type="submit" className={`profile__submit-btn ${submitBtnSelector}`}>Сохранить</button>}
        {!isEditing && <button type="button" className="profile__edit-btn" onClick={toggleEditing}>Редактировать</button>}
        {!isEditing && <button type="button" className="profile__sign-out-btn" onClick={handleSignOut}>Выйти из аккаунта</button>}
      </form>
    </div>
  );
}

export default Profile;
