function handleMainApiError(status) {
  let result = '';
  switch (status) {
    case 409:
      result = 'Пользователь с таким email уже существует.';
      break;
    case 401:
      result = 'Вы ввели неправильный логин или пароль.';
      break;
    default:
      break;
  }
  return result;
}

export default handleMainApiError;
