function validateInput(name, value) {
  const result = {
    isValid: false,
    err: '',
  };
  switch (name) {
    case 'email':
      result.isValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
      result.err = !result.isValid ? 'Введите корректный email' : '';
      break;
    case 'password':
      result.isValid = value.length >= 6;
      result.err = !result.isValid
        ? 'Пароль должен быть минимум из 6 символов'
        : '';
      break;
    case 'name':
      result.isValid = /^[a-zA-Z- ]+$/.test(value);
      result.err = !result.isValid
        ? 'Имя должно содержать только латиницу, пробел или дефис.'
        : '';
      break;
    default:
      break;
  }
  return result;
}

export default validateInput;
