function getNumberOfMovies(width) {
  let numberOfMovies = 0;
  if (width > 1100) {
    numberOfMovies = 4;
  } else if (width > 850 && width <= 1100) {
    numberOfMovies = 3;
  } else if (width >= 500 && width <= 850) {
    numberOfMovies = 2;
  } else if (width < 500) {
    numberOfMovies = 1;
  }
  return numberOfMovies;
}

export default getNumberOfMovies;
