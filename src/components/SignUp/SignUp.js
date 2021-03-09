import React from 'react';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormLabel';
import FormSubmitBtn from '../FormSubmitBtn/FormSubmitBtn';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';

function SignUp() {
  const [name, setName] = React.useState('Кирилл');
  const [email, setEmail] = React.useState('kirill.kirill2@yandex.ru');
  const [password, setPassword] = React.useState('123456');
  const [isDisabledBtn, setIsDisabledBtn] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('Что-то пошло не так...');
  function handleNameInput(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

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
      <FormLabel label="Имя">
        <FormInput type="text" value={name} handleNameInput={handleNameInput} isValid={false}/>
      </FormLabel>
      <FormLabel label="E-mail">
        <FormInput type="email" value={email} handleNameInput={handleEmailInput} isValid={false}/>
      </FormLabel>
      <FormLabel label="Пароль">
        <FormInput type="password" value={password} handleNameInput={handlePasswordInput} isValid={true}/>
      </FormLabel>
      <FormErrorMessage errorMsg={errorMsg}/>
      <FormSubmitBtn text={'Зарегистрироваться'} isDisabledBtn={isDisabledBtn} setIsDisabledBtn={setIsDisabledBtn}/>
    </Form>
  );
}

export default SignUp;
