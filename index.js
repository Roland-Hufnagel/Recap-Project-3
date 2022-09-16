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
fetchCharacters();

async function fetchCharacters() {
  try{
  const result = await fetch('https://rickandmortyapi.com/api/character');
  const data = await result.json();

  cardContainer.innerHTML = '';
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
}catch(error){
  console.error(error.message);
}
  
}
