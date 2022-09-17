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

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

function getcurrentState() {
  const state = {page: page, maxpage: maxPage};
  console.log(state);
}

const rooturl = 'https://rickandmortyapi.com/api/character';
fetchCharacters(rooturl);

async function fetchCharacters(url) {
  try {
    const result = await fetch(url);
    const data = await result.json();

    cardContainer.innerHTML = '';
    console.log('result ', data.results);
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
  } catch (error) {
    console.error(error.message);
  }
}

function fetchMaxpages(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => (maxPage = data.info.pages));
}

searchBar.addEventListener('submit', event => {
  event.preventDefault();
  searchQuery = searchBar.elements.query.value;
  let url = rooturl + '?page=1&name=' + searchQuery;
  fetchCharacters(url);
});
