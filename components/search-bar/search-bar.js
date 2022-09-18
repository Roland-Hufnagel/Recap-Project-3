import {createButton} from '../nav-button/nav-button.js';

export function createSearchBar(paras, onsubmit) {
  const div = document.createElement('div');
  div.classList.add('search-bar-container');
  div.setAttribute('data-js', 'search-bar');
  div.innerHTML = `<form action="" class="search-bar" data-js="search-bar">
    <input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search characters"
  aria-label="character name"
/>
<button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button> </form>`;
  const form = div.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    paras.searchQuery = form.elements.query.value;
    paras.page = 1;
    const url = paras.url + '?page=1&name=' + paras.searchQuery;
    onsubmit(url);
  });
  return div;
}
