import React from 'react';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormLabel';
import FormSubmitBtn from '../FormSubmitBtn/FormSubmitBtn';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';

function SignIn() {
  const [email, setEmail] = React.useState('@yandex.ru');
  const [password, setPassword] = React.useState('123456');
  const [isDisabledBtn, setIsDisabledBtn] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setErrorMsg] = React.useState('Что-то пошло не так...');
  function handleEmailInput(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setIsDisabledBtn(!isDisabledBtn);
  }
  return (
    <Form handleFormSubmit={handleFormSubmit}>
      <FormLabel label="E-mail">
        <FormInput type="email" value={email} handleNameInput={handleEmailInput} isValid={false}/>
      </FormLabel>
      <FormLabel label="Пароль">
        <FormInput type="password" value={password} handleNameInput={handlePasswordInput} isValid={true}/>
      </FormLabel>
      <FormErrorMessage errorMsg={errorMsg}/>
      <FormSubmitBtn text={'Войти'} isDisabledBtn={isDisabledBtn}/>
    </Form>
  );
}

export default SignIn;
