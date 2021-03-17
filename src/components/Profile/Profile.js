import React from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import validateInput from '../../utils/validateInput';
import './Profile.css';
import handleMainApiError from '../../utils/handleMainApiError';

function Profile(props) {
  const { setCurrentUser, signOut } = props;
  const [name, setName] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isEditing, setisEditing] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [somethingChanged, setSomethingChanged] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const submitBtnSelector =
    isError || !somethingChanged ? 'profile__submit-btn_disabled' : '';
  const nameInputInvalidSelector = !isNameValid ? 'profile__input_invalid' : '';
  const emailInputInvalidSelector = !isEmailValid
    ? 'profile__input_invalid'
    : '';
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    if (currentUser.name !== name || currentUser.email !== email) {
      setSomethingChanged(true);
    } else {
      setSomethingChanged(false);
    }
    if (isNameValid && isEmailValid) {
      setIsError(false);
      setErrorText('');
    } else {
      setIsError(true);
    }
  }, [name, email]);

  function handleError(validateResult) {
    setIsError(!validateResult.isValid);
    setErrorText(validateResult.err);
  }

  function handleNameInput(event) {
    const validateResult = validateInput(event.target.name, event.target.value);
    setIsNameValid(validateResult.isValid);
    if (!validateResult.isValid) {
      handleError(validateResult);
    }
    setName(event.target.value);
  }

  function handleEmailInput(event) {
    const validateResult = validateInput(event.target.name, event.target.value);
    setIsEmailValid(validateResult.isValid);
    if (!validateResult.isValid) {
      handleError(validateResult);
    }
    setEmail(event.target.value);
  }

  function toggleEditing() {
    setisEditing(!isEditing);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const userData = {};
    if (currentUser.name !== name) {
      userData.name = name;
    } else if (currentUser.email !== email) {
      userData.email = email;
    } else {
      return;
    }
    mainApi
      .updateUserData(userData)
      .then(res => {
        if (res.data) {
          setIsSuccess(true);
          setisEditing(false);
          setCurrentUser(res.data);
          setTimeout(() => {
            setIsSuccess(false);
          }, 1500);
        }
      })
      .catch(err => {
        setIsError(true);
        setErrorText(handleMainApiError(err.status));
      });
  }

  return (
    <div className="profile">
      {isSuccess && (
        <div className="profile__success">
          <p className="profile__text">Данные успешно изменены.</p>
        </div>
      )}
      <h3 className="profile__title">Привет {currentUser.name}!</h3>
      <form className="profile__form" onSubmit={handleSubmitForm}>
        <label className="profile__input-label" htmlFor="name">
          Имя
          <input
            className={`profile__input ${nameInputInvalidSelector}`}
            type="text"
            name="name"
            value={name || ''}
            disabled={!isEditing}
            onChange={handleNameInput}
          />
        </label>
        <label className="profile__input-label" htmlFor="email">
          Почта
          <input
            className={`profile__input ${emailInputInvalidSelector}`}
            type="email"
            name="email"
            value={email || ''}
            disabled={!isEditing}
            onChange={handleEmailInput}
          />
        </label>
        {<span className="profile__error-message">{errorText}</span>}
        {isEditing && (
          <button
            type="submit"
            className={`profile__submit-btn ${submitBtnSelector}`}
          >
            Сохранить
          </button>
        )}
        {!isEditing && (
          <button
            type="button"
            className="profile__edit-btn"
            onClick={toggleEditing}
          >
            Редактировать
          </button>
        )}
        {!isEditing && (
          <button
            type="button"
            className="profile__sign-out-btn"
            onClick={signOut}
          >
            Выйти из аккаунта
          </button>
        )}
      </form>
    </div>
  );
}

Profile.propTypes = {
  props: PropTypes.object,
  setCurrentUser: PropTypes.func,
  signOut: PropTypes.func,
};

export default Profile;
