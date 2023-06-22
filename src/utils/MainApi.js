class MainApi {
  constructor(options) {
      this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
  }


  getUserInfo() {
      const token = localStorage.getItem('jwt');
      return fetch(`${this._baseUrl}/users/me`,
          {
              headers: {
                  'Authorization': `Bearer ${token}`
              },
              method: 'GET',
          })
          .then(this._checkResponse)
          .then((data) => {
              return data;
          })
  }


  updateUserInfo(userName, userEmail) {
      const token = localStorage.getItem('jwt');
      return fetch(`${this._baseUrl}/users/me`,
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                  name: userName,
                  email: userEmail,
              }),
              method: 'PATCH',
          })
          .then(this._checkResponse)
          .then((data) => {
              return data;
          })
  }


  getMovies() {
      const token = localStorage.getItem('jwt');
      return fetch(`${this._baseUrl}/movies`,
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              method: 'GET',
          })
          .then(this._checkResponse)
          .then((data) => {
              return data;
          })
  }


  toggleLikeMovie(movie) {
      const token = localStorage.getItem('jwt');
      return fetch(`${this._baseUrl}/movies`,
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
              },
              method: 'POST',
              body: JSON.stringify({
                  country: movie.country,
                  director: movie.director,
                  duration: movie.duration,
                  year: movie.year,
                  description: movie.description,
                  image: `https://api.nomoreparties.co/${movie.image.url}`,
                  trailerLink: movie.trailerLink,
                  thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
                  movieId: movie.id,
                  nameRU: movie.nameRU,
                  nameEN: movie.nameEN,
              }),
          })
          .then(this._checkResponse)
          .then((data) => {
              return data;
          })
  }


  deleteMovie(movieId) {
      const token = localStorage.getItem('jwt');
      return fetch(`${this._baseUrl}/movies/${movieId}`,
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
              },
              method: 'DELETE',
          })
          .then(this._checkResponse)
          .then((data) => {
              return data;
          })
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.manzhikova.diploma.nomoredomains.rocks'
});

export default mainApi;