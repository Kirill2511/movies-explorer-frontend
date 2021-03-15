import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormLabel';
import FormSubmitBtn from '../FormSubmitBtn/FormSubmitBtn';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import validateInput from '../../utils/validateInput';

function SignIn({ handleSignIn, setErrorMsg, errorMsg, isError, setIsError }) {
  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [passwordIsValid, setPasswordIsValid] = React.useState(true);
  const [isDisabledBtn, setIsDisabledBtn] = React.useState(false);

  React.useEffect(() => {
    if (emailIsValid && passwordIsValid && email && password) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
  }, [emailIsValid, passwordIsValid]);

  React.useEffect(
    () => () => {
      setIsError(false);
    },
    [],
  );
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
      email,
      password,
    };
    handleSignIn(userData);
  }
  return (
    <Form handleFormSubmit={handleFormSubmit}>
      <FormLabel label="E-mail">
        <FormInput
          type="email"
          value={email}
          handleNameInput={handleEmailInput}
          isValid={emailIsValid}
          inputName={'email'}
        />
      </FormLabel>
      <FormLabel label="Пароль">
        <FormInput
          type="password"
          value={password}
          handleNameInput={handlePasswordInput}
          isValid={passwordIsValid}
          inputName={'password'}
        />
      </FormLabel>
      <FormErrorMessage errorMsg={errorMsg} isError={isError} />
      <FormSubmitBtn text={'Войти'} isDisabledBtn={isDisabledBtn} />
    </Form>
  );
}

SignIn.propTypes = {
  handleSignIn: PropTypes.func,
  setErrorMsg: PropTypes.func,
  errorMsg: PropTypes.string,
  isError: PropTypes.bool,
  setIsError: PropTypes.func,
};

export default SignIn;
