export function createCharacterCard() {}

const cardContainer = document.querySelector('[data-js="card-container"]');

function createCharacterCard(profile) {
  const cardItem = document.createElement('li');
  cardItem.classList.add('card');
  cardItem.INNERHTML = `
  <div class="card__image-container">
    <img
      class="card__image"
      src=${profile.image}
      alt=${profile.name}
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${profile.name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">${profile.status}</dt>
      <dd class="card__info-description">Alive</dd>
      <dt class="card__info-title">${profile.type}</dt>
      <dd class="card__info-description"></dd>
      <dt class="card__info-title">${profile.occurences}</dt>
      <dd class="card__info-description">51</dd>
    </dl>
  </div>
    `;
}
