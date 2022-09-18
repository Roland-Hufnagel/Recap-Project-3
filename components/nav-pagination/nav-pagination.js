export function createPagination(content) {
  const span = document.createElement('span');
  span.classList.add('navigation__pagination');
  span.setAttribute('data-js', 'pagination');
  span.textContent = content;
  return span;
}
