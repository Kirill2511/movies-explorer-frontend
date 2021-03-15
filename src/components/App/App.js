import './App.css';
import React, { useLayoutEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import User from '../User/User';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import MobileMenu from '../MobileMenu/MobileMenu';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import findMovies from '../../utils/findMovies';
import handleMainApiError from '../../utils/handleMainApiError';

function App() {
  const [isMobileMenuOpened, setsMobileMenuOpened] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedFilteredMovies, setSavedFilteredMovies] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isResizing, setIsResizing] = React.useState(false);
  const [enteredPath, setEnteredPath] = React.useState('');
  const [isMoviesSorted, setIsMoviesSorted] = React.useState(false);
  const [isSavedMoviesSorted, setIsSavedMoviesSorted] = React.useState(false);
  const [userError, setUserError] = React.useState('');
  const [isUserError, setIsUserError] = React.useState(false);
  const location = useLocation();
  const history = useHistory();

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then(res => {
        if (!res) {
          throw new Error('Ошибка при получении сохраненных фильмов');
        }
        setSavedMovies(res.data);
        setSavedFilteredMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function getUserData() {
    mainApi
      .getUserData()
      .then(user => {
        if (user) {
          setCurrentUser(user.data);
          getSavedMovies();
          setIsLoggedIn(true);
        } else {
          console.log('Что-то пошло не так');
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
      });
  }

  React.useEffect(() => {
    const path = location.pathname;
    const protectedPaths = ['/profile', '/movies', '/saved-movies'];
    const jwt = localStorage.getItem('jwt');
    if (!isLoggedIn && protectedPaths.includes(path) && !!jwt) {
      setEnteredPath(path);
      return;
    }
    if (enteredPath !== '/') {
      history.push(enteredPath);
      setEnteredPath('');
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.setToken(jwt);
      getUserData();
    } else {
      setIsLoggedIn(false);
    }
    const searchedMovies = localStorage.getItem('searchedMovies');
    if (searchedMovies) {
      setMovies(JSON.parse(searchedMovies));
    }
  }, []);

  useLayoutEffect(() => {
    function updateWidth() {
      if (!isResizing) {
        setIsResizing(true);
        setTimeout(() => {
          setWidth(window.innerWidth);
          setIsResizing(false);
        }, 700);
      }
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function isSavedMovie(film) {
    return savedMovies.find(el => Number(el.id) === Number(film.id));
  }

  function deleteMovieFromSaved(movieId) {
    mainApi
      .deleteMovie(movieId)
      .then(deletedMovie => {
        if (!deletedMovie) {
          throw new Error('При удалении фильма произошла ошибка');
        } else {
          const newSavedMoviesArr = savedMovies.filter(
            mov => mov.id !== deletedMovie.data.id,
          );
          setSavedMovies(newSavedMoviesArr);
          setSavedFilteredMovies(newSavedMoviesArr);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  function saveMovie(movieData) {
    mainApi
      .uploadNewMovie(movieData)
      .then(savedMovie => {
        if (!savedMovie) {
          throw new Error('При добавлении фильма произошла ошибка');
        } else {
          setSavedMovies([savedMovie.data, ...savedMovies]);
          setSavedFilteredMovies([savedMovie.data, ...savedMovies]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  function toggleMovieLike(movieData) {
    const clickedMovie = isSavedMovie(movieData);
    if (clickedMovie) {
      deleteMovieFromSaved(clickedMovie._id);
    } else {
      saveMovie(movieData);
    }
  }
  function handleSavedMovieBtnClick(mov) {
    deleteMovieFromSaved(mov._id);
  }

  function handleSignIn(userData) {
    mainApi
      .signInUser(userData)
      .then(res => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          mainApi.setToken(res.token);
          getUserData();
          setIsLoggedIn(true);
          history.push('/movies');
        } else {
          setUserError('Ошибка авторизации');
          setIsUserError(true);
        }
      })
      .catch(error => {
        setUserError(handleMainApiError(error.status));
        setIsUserError(true);
      });
  }

  function handleSignUp(userData) {
    const { email, password } = userData;
    mainApi
      .createUser(userData)
      .then(user => {
        if (user) {
          handleSignIn({ email, password });
        }
      })
      .catch(error => {
        setUserError(handleMainApiError(error.status));
        setIsUserError(true);
      });
  }

  function signOut() {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    mainApi.clearToken();
    history.push('/');
  }

  function filterMovies(films, searhText) {
    const moviesRegExp = findMovies(searhText);
    return films.filter(movie => moviesRegExp.test(movie.nameRU));
  }

  function getMovies(searchText) {
    setIsLoading(true);
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    if (localMovies) {
      setMovies(filterMovies(localMovies, searchText));
      localStorage.setItem(
        'searchedMovies',
        JSON.stringify(filterMovies(localMovies, searchText)),
      );
      setIsLoading(false);
    } else {
      moviesApi
        .getMovies()
        .then(films => {
          if (films) {
            localStorage.setItem('movies', JSON.stringify(films));
            setMovies(filterMovies(films, searchText));
            localStorage.setItem(
              'searchedMovies',
              JSON.stringify(filterMovies(films, searchText)),
            );
            setIsLoading(false);
          } else {
            setIsLoading(false);
            throw new Error('Ошибка при получении фильмов');
          }
        })
        .catch(error => {
          setIsLoading(false);
          console.log(error);
        });
    }
  }
  function handleSearchMoviesBtn(searchText) {
    getMovies(searchText);
  }
  function handleSearchSavedMoviesBtn(searchText) {
    setSavedFilteredMovies(filterMovies(savedMovies, searchText));
  }
  function cleanSavedMoviesFilter() {
    setSavedFilteredMovies(savedMovies);
  }
  function cleanMoviesFilter() {
    setMovies([]);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          setsMobileMenuOpened={setsMobileMenuOpened}
          isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            component={Movies}
            width={width}
            movies={movies}
            handleMovieBtnClick={toggleMovieLike}
            getMovies={getMovies}
            isLoading={isLoading}
            handleSearchBtn={handleSearchMoviesBtn}
            cleanFilter={cleanMoviesFilter}
            isSavedMovie={isSavedMovie}
            isSorted={isMoviesSorted}
            setIsSorted={setIsMoviesSorted}
          />
          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            component={Movies}
            width={width}
            movies={savedFilteredMovies}
            isSaved={true}
            handleMovieBtnClick={handleSavedMovieBtnClick}
            setSavedMovies={setSavedMovies}
            handleSearchBtn={handleSearchSavedMoviesBtn}
            cleanFilter={cleanSavedMoviesFilter}
            isSorted={isSavedMoviesSorted}
            setIsSorted={setIsSavedMoviesSorted}
          />
          <ProtectedRoute
            path="/profile"
            isLoggedIn={isLoggedIn}
            component={Profile}
            setCurrentUser={setCurrentUser}
            signOut={signOut}
          />
          <Route path="/signin">
            <User title={'Рады видеть!'}>
              <SignIn
                handleSignIn={handleSignIn}
                setErrorMsg={setUserError}
                errorMsg={userError}
                isError={isUserError}
                setIsError={setIsUserError}
              />
            </User>
          </Route>
          <Route path="/signup">
            <User title={'Добро пожаловать!'}>
              <SignUp
                handleSignUp={handleSignUp}
                setErrorMsg={setUserError}
                errorMsg={userError}
                isError={isUserError}
                setIsError={setIsUserError}
              />
            </User>
          </Route>
          <Route path="/*">
            <PageNotFound />
          </Route>
        </Switch>
        {location.pathname !== '/profile' && <Footer />}
        <MobileMenu
          setsMobileMenuOpened={setsMobileMenuOpened}
          isMobileMenuOpened={isMobileMenuOpened}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
