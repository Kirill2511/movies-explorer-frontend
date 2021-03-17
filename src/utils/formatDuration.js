function formatDuration(duration) {
  let result = '';
  const hours = duration / 60;
  const minutes = duration % 60;
  if (hours >= 1) {
    result += `${Math.floor(hours)}ч `;
  }
  if (minutes > 0) {
    result += `${minutes}м`;
  }
  return result;
}

export default formatDuration;
