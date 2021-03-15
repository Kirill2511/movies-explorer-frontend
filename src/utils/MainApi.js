class MainApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  setToken(token) {
    this._token = token;
  }

  clearToken() {
    this._token = null;
  }

  getUserData() {
    return this._fetcher('/users/me', 'GET');
  }

  createUser(userData) {
    return this._fetcher('/signup', 'POST', userData);
  }

  signInUser(userData) {
    return this._fetcher('/signin', 'POST', userData);
  }

  getSavedMovies() {
    return this._fetcher('/movies', 'GET');
  }

  uploadNewMovie(movie) {
    return this._fetcher('/movies', 'POST', movie);
  }

  updateUserData(newUserData) {
    return this._fetcher('/users/me', 'PATCH', newUserData);
  }

  deleteMovie(movieId) {
    return this._fetcher(`/movies/${movieId}`, 'DELETE');
  }

  _fetcher(path, method, body) {
    const headers = this._headers;
    if (this._token) {
      headers.Authorization = `Bearer ${this._token}`;
    }
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return fetch(`${this._baseUrl}${path}`, options).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.kiriii2511.students.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
