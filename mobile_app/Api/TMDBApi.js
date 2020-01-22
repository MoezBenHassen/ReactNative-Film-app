

const API_TOKEN = "c57c31f09498c793fde4ed4b7742649d";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}