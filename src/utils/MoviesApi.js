class MoviesApi {
  constructor(options) {
      this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
  }

  //получение списка фильмов
  getMovies() {
      return fetch(this._baseUrl,
          {
              method: 'GET',
          })
          .then(this._checkResponse)
          .then((data) => {
              return data;
          })
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;