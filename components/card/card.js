export function createCharacterCard(profile) {
  const li = document.createElement('li'); // Create a new article Element
  li.classList.add('card'); // Add the class 'card'
  li.innerHTML = `
    <div class="card__image-container">
            <img
              class="card__image"
              src=${profile.img}
              alt=${profile.name}
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${profile.name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${profile.status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${profile.type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${profile.occurrences}</dd>
            </dl>
          </div>`;
  return li;
  // Fill the article element with content.
  return card;
}
