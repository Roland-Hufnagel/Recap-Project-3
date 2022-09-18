export function createButton(paras, onclick, ...attributes) {
  const [_class, datajs, content, arialabel] = attributes;
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(_class);
  button.innerHTML = content;
  button.setAttribute('data-js', datajs);
  button.setAttribute('aria-label', arialabel);
  button.addEventListener('click', () => {
    if (paras.page > paras.maxPage) return;
    if (_class.endsWith('next')) ++paras.page;
    else if (_class.endsWith('prev')) --paras.page;
    else paras.page = 1;
    const url =
      paras.url + '?page=' + paras.page + '&name=' + paras.searchQuery;
    onclick(url);
  });
  return button;
}
