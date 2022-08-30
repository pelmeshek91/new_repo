export function arrayGenres(arr, obj) {
  const genresNames = arr.map(
    item => obj.genres.find(({ id }) => item === id).name
  );
  console.log(genresNames);
}
