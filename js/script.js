let films = [{
  image: 'https://www.kinopoisk.ru/images/film_big/46225.jpg',
  name: 'Бриллиантовая рука',
  year: 1968,
  genres: ['Комедия', ' Приключения'],
  rating: 8.50,
  country: 'СССР'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/8151.jpg',
  name: 'Интервью с вампиром',
  year: 1994,
  genres: ['Ужасы', ' Фэнтэзи', ' Драма'],
  rating: 7.96,
  country: 'США'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/2213.jpg',
  name: 'Титаник',
  year: 1997,
  genres: ['Мелодрама', ' Триллер', ' Драма'],
  rating: 8.36,
  country: 'США'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/801.jpg',
  name: 'Обитель зла',
  year: 2002,
  genres: ['Ужасы', ' Боевик', ' Фантастика'],
  rating: 7.53,
  country: 'Германия'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/386.jpg',
  name: 'Чужой',
  year: 1979,
  genres: ['Ужасы', ' Фантастика', ' Триллер'],
  rating: 8.06,
  country: 'Великобритания'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/57004.jpg',
  name: 'Игрушка',
  year: 1976,
  genres: ['Комедия', ' Драма'],
  rating: 8,
  country: 'Франция'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/423210.jpg',
  name: 'Три идиота',
  year: 2009,
  genres: ['Комедия', ' Мелодрама'],
  rating: 8.11,
  country: 'Индия'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/86208.jpg',
  name: '"V" значит Вендетта',
  year: 2006,
  genres: ['Фантастика', ' Боевик', ' Триллер'],
  rating: 7.83,
  country: 'Великобритания'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/251733.jpg',
  name: 'Аватар',
  year: 2009,
  genres: ['Фантастика', ' Боевик', ' Драма'],
  rating: 7.93,
  country: 'США'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/93377.jpg',
  name: 'Типа крутые легавые',
  year: 2007,
  genres: ['Боевик', ' Комедия'],
  rating: 7.60,
  country: 'Франция'
}, {
  image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5fd40d16-f1e2-4e63-a958-a52442ae8c64/600x900',
  name: 'Ликвидация',
  year: 2007,
  genres: ['Детектив', ' Криминал'],
  rating: 8.42,
  country: 'Россия'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/195272.jpg',
  name: 'Мальчик в девочке',
  year: 2006,
  genres: ['Фэнтэзи', ' Мелодрама', ' Комедия'],
  rating: 6.79,
  country: 'Канада'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/44045.jpg',
  name: 'Свадьба в Малиновке',
  year: 1967,
  genres: ['Мюзикл', ' Комедия', ' Военный'],
  rating: 8.03,
  country: 'СССР'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/521689.jpg',
  name: 'Метро',
  year: 2012,
  genres: ['Триллер', ' Драма'],
  rating: 7.19,
  country: 'Россия'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/42664.jpg',
  name: 'Иван Васильевич меняет профессию',
  year: 1973,
  genres: ['Фантастика', ' Комедия', ' Приключения'],
  rating: 8.78,
  country: 'СССР'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/814016.jpg',
  name: 'Люди Икс: Апокалипсис',
  year: 2016,
  genres: ['Фантастика', ' Боевик', ' Приключения'],
  rating: 6.99,
  country: 'США'
}, {
  image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/85555f98-958f-4fc2-ac1c-07b0141c4194/600x900',
  name: 'Мосгаз',
  year: 2011,
  genres: ['Детектив', ' Криминал'],
  rating: 7.23,
  country: 'Россия'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/2053.jpg',
  name: 'Послезавтра',
  year: 2004,
  genres: ['Фантастика', ' Триллер', ' Драма'],
  rating: 7.66,
  country: 'США'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/325598.jpg',
  name: 'Репортаж',
  year: 2007,
  genres: ['Ужасы', ' Триллер', ' Детектив'],
  rating: 7,
  country: 'Испания'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/381.jpg',
  name: 'Жизнь прекрасна',
  year: 1997,
  genres: ['Мелодрама', ' Военный', ' Комедия'],
  rating: 8.62,
  country: 'Италия'
}, {
  image: 'https://www.kinopoisk.ru/images/film_big/279102.jpg',
  name: 'ВАЛЛ-И',
  year: 2008,
  genres: ['Мультфильм', ' Фантастика'],
  rating: 8.31,
  country: 'США'
}];

let desiredFilms = [];

const sortByYearButton = document.getElementById('button-sort-by-year');
const sortByRatingButton = document.getElementById('button-sort-by-rating');




function sortByYear() {
  const sortedFilms = [...films].sort((a, b) => a.year - b.year);
  renderItemList(sortedFilms);
}

function sortByRating() {
  const sortedFilms = [...films].sort((a, b) => a.rating - b.rating);
  renderItemList(sortedFilms);
}

function renderItemList(films) {
  const filmsContainer = document.getElementById('films-list');
  filmsContainer.innerHTML = '';

  films.forEach((film) => {
      const filmCard = `
      <div class="card">
        <div class="card-body">
          <figure>
            <img src="${film.image}">
            <figcaption>
              <h4 class="card-title">${film.name}</h4>
              <p class="card-text">Год выпуска: ${film.year}</p>
              <p class="card-text">${film.genres}</p>
              <p class="card-text">Рейтинг: ${film.rating}</p>
              <p class="card-text">Страна: ${film.country}</p>
              <button class="btn btn-primary add-to-desired-list-button">Добавить в список желаемого</button>
            </figcaption>
          </figure>  
        </div>
      </div>`;
  filmsContainer.insertAdjacentHTML('beforeend', filmCard);
  });

  const addToDesiredListButtons = document.getElementsByClassName('add-to-desired-list-button');

  Array.from(addToDesiredListButtons).forEach((button) => {
    button.addEventListener('click', function() {
      // push
      alert('Фильм добавлен в список желаемых');
    })
  })
}

sortByYearButton.addEventListener('click', sortByYear);
sortByRatingButton.addEventListener('click', sortByRating);

renderItemList(films);