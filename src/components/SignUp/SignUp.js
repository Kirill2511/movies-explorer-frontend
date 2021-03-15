import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormLabel';
import FormSubmitBtn from '../FormSubmitBtn/FormSubmitBtn';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import validateInput from '../../utils/validateInput';

function SignUp({ handleSignUp, setErrorMsg, errorMsg, isError, setIsError }) {
  const [name, setName] = React.useState('');
  const [nameIsValid, setNameIsValid] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [passwordIsValid, setPasswordIsValid] = React.useState(true);
  const [isDisabledBtn, setIsDisabledBtn] = React.useState(true);

  React.useEffect(
    () => () => {
      setIsError(false);
    },
    [],
  );
  React.useEffect(() => {
    if (
      nameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      name &&
      email &&
      password
    ) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
  }, [nameIsValid, emailIsValid, passwordIsValid]);
  function handleNameInput(event) {
    const validateResult = validateInput(event.target.name, event.target.value);
    setName(event.target.value);
    setNameIsValid(validateResult.isValid);
    setIsError(!validateResult.isValid);
    setErrorMsg(validateResult.err);
  }

  function handleEmailInput(event) {
    const validateResult = validateInput(event.target.name, event.target.value);
    setEmail(event.target.value);
    setEmailIsValid(validateResult.isValid);
    setIsError(!validateResult.isValid);
    setErrorMsg(validateResult.err);
  }

  function handlePasswordInput(event) {
    const validateResult = validateInput(event.target.name, event.target.value);
    setPassword(event.target.value);
    setPasswordIsValid(validateResult.isValid);
    setIsError(!validateResult.isValid);
    setErrorMsg(validateResult.err);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    handleSignUp(userData);
  }
  return (
    <Form handleFormSubmit={handleFormSubmit}>
      <FormLabel label="Имя" name={'name'}>
        <FormInput
          type="text"
          value={name}
          handleNameInput={handleNameInput}
          isValid={nameIsValid}
          inputName={'name'}
        />
      </FormLabel>
      <FormLabel label="E-mail" name={'email'}>
        <FormInput
          type="email"
          value={email}
          handleNameInput={handleEmailInput}
          isValid={emailIsValid}
          inputName={'email'}
        />
      </FormLabel>
      <FormLabel label="Пароль" name={'password'}>
        <FormInput
          type="password"
          value={password}
          handleNameInput={handlePasswordInput}
          isValid={passwordIsValid}
          inputName={'password'}
        />
      </FormLabel>
      <FormErrorMessage errorMsg={errorMsg} isError={isError} />
      <FormSubmitBtn
        text={'Зарегистрироваться'}
        isDisabledBtn={isDisabledBtn}
        setIsDisabledBtn={setIsDisabledBtn}
      />
    </Form>
  );
}

SignUp.propTypes = {
  handleSignUp: PropTypes.func,
  setErrorMsg: PropTypes.func,
  errorMsg: PropTypes.string,
  isError: PropTypes.bool,
  setIsError: PropTypes.func,
};

export default SignUp;
