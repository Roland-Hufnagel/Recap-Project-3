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

cardContainer.innerHTML = '';

fetchCharacters();
function fetchCharacters() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      data.results.forEach(result => {
        const profile = {
          name: result.name,
          img: result.image,
          type: result.type,
          status: result.status,
          occurrences: result.episode.length,
        };
        renderElement(createCharacterCard(profile));
      });
    });
}

function renderElement(element) {
  cardContainer.appendChild(element); // Append the Element to the page
}
