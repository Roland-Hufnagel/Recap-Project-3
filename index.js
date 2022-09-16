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

const rooturl = 'https://rickandmortyapi.com/api/character';
// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

cardContainer.innerHTML = '';

fetchCharacters(rooturl + '?page=1');

function fetchCharacters(url) {
  fetch(url)
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

function fetchMaxPage(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data.info.pages);
}

fetchMaxPage(rooturl).then(maxPage => {
  nextButton.addEventListener('click', () => {
    if (page >= maxPage) return;
    cardContainer.innerHTML = '';
    ++page;
    pagination.textContent = page + ' / ' + maxPage;
    const url = rooturl + '?page=' + page;
    fetchCharacters(url);

    prevButton.addEventListener('click', () => {
      if (page <= 1) return;
      cardContainer.innerHTML = '';
      --page;
      pagination.textContent = page + ' / ' + maxPage;
      const url = rooturl + '?page=' + page;
      fetchCharacters(url);
    });
  });
});

searchBar.addEventListener('submit', event => {
  event.preventDefault();
  const searchWhat = searchBar.elements.query.value;
  const searchurl = rooturl + '?name=' + searchWhat;
  console.log(searchurl);
  fetchMaxPage(searchurl).then(maxsearchpage => {
    console.log(maxsearchpage);
    let fetchurl = '';
    cardContainer.innerHTML = '';
    for (let i = 1; i <= maxsearchpage; i++) {
      fetchurl = rooturl + '?page=' + i + '&name=' + searchWhat;
      fetchCharacters(fetchurl);
    }
  });
});
