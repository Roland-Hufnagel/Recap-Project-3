import {createButton} from './components/nav-button/nav-button.js';
import {createSearchBar} from './components/search-bar/search-bar.js';
import {createPagination} from './components/nav-pagination/nav-pagination.js';
import {createCharacterCard} from './components/card/card.js';
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const navigation = document.querySelector('[data-js="navigation"]');

const main = document.querySelector('main');

const rooturl = 'https://rickandmortyapi.com/api/character';

let frontpage = {maxPage: 1, page: 1, searchQuery: '', url: rooturl};

function fetchCharacters(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      cardContainer.innerHTML = '';
      frontpage.maxPage = data.info.pages;
      pagination.textContent = `${frontpage.page} / ${frontpage.maxPage}`;
      data.results.forEach(result => {
        const profile = {
          name: result.name,
          img: result.image,
          type: result.type,
          status: result.status,
          occurrences: result.episode.length,
        };

        cardContainer.append(createCharacterCard(profile));
      });
    })
    .catch(error => console.error(error));
}

fetchCharacters(rooturl);

const prevButton = createButton(
  frontpage,
  url => {
    fetchCharacters(url);
  },
  'button--prev',
  'button--prev',
  'previous',
  '',
);

const nextButton = createButton(
  frontpage,
  url => {
    fetchCharacters(url);
  },
  'button--next',
  'button--next',
  'next',
  '',
);
const pagination = createPagination(`${frontpage.page} / ${frontpage.maxPage}`);

navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);

const searchBar = createSearchBar(frontpage, url => {
  fetchCharacters(url);
});
main.insertBefore(searchBar, cardContainer);
