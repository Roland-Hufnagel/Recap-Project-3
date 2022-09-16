export function createCharacterCard(profile) {
  const cardItem = document.createElement('li');
  cardItem.classList.add('card');
  cardItem.innerHTML = `
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
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${profile.status}</dd>
      <dt class="card__info-title">${profile.type}</dt>
      <dd class="card__info-description"></dd>
      <dt class="card__info-title">Occurences</dt>
      <dd class="card__info-description">${profile.occurences}</dd>
    </dl>
  </div>
    `;
  console.log(cardItem);
  return cardItem;
}
