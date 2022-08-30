export function markup(arr) {
  const result = arr.reduce(
    (acc, { title, genre_names }) =>
      (acc += `<li><h2>${title}</h2><ul>${genre_names.reduce(
        (acc, id) => (acc += `<li>${id}</li>`),
        ``
      )}</ul></li>`),
    ``
  );

  return result;
}
