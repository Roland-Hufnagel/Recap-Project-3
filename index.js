import {createCharacterCard} from './components/card/card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// string fuer url manipulation
let apiUrl = 'https://rickandmortyapi.com/api/character';

prevButton.addEventListener('click', () => {
  if (page > 1) {
    --page;
    cardContainer.innerHTML = '';
    fetchCharacters(apiUrl + `?page=${page}`);
  }
});

nextButton.addEventListener('click', () => {
  if (page < maxPage) {
    ++page;
    cardContainer.innerHTML = '';
    fetchCharacters(apiUrl + `?page=${page}`);
  }
});

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

console.log(maxPage);

async function fetchCharacters(apiUrl) {
  try {
    const result = await fetch(apiUrl);
    const data = await result.json();
    console.log(data);

    data.results.forEach(character => {
      const profile = {
        name: character.name,
        image: character.image,
        type: character.type,
        status: character.status,
        occurences: character.episode.length,
      };

      cardContainer.append(createCharacterCard(profile));
    });

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;

    console.log(maxPage);
  } catch (error) {
    console.error(error.message);
  }
}

fetchCharacters(apiUrl);
