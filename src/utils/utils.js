export function getPosterPath(movie, loading = false, size = 154) {
  return loading || !movie.poster_path
    ? "https://via.placeholder.com/120x168?text= "
    : `http://image.tmdb.org/t/p/w${size}/${movie.poster_path}`;
}
