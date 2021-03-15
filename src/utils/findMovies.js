function findMovies(searchReq) {
  const clearedString = searchReq.replace(/[»«.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const wordsArr = clearedString.replace(/\s{2,}/g, ' ').split(' ');
  let result = '';
  for (let i = 0; i < wordsArr.length; ) {
    result += `(${wordsArr[i]}){1}.?`;
    i += 1;
  }
  return new RegExp(result, 'gmi');
}

export default findMovies;
