function update() {
  chrome.storage.sync.get(
    ['languageId'],
    (items) => {
      document.querySelector('.active').classList.remove('active');
      document.querySelector('[data-language-id="' + items.languageId + '"]').classList.add('active');
    }
  );
}
function changeLanguage(languageId) {
  chrome.storage.sync.set({
    languageId,
  });
  update();

  document.querySelector('.description').classList.add('disabled');
  document.querySelector('.flash-message').classList.remove('disabled');
}

document.addEventListener('DOMContentLoaded', () => {
  update();
  document.querySelectorAll('[data-language-id]').forEach((element) => {
    element.addEventListener('click', (e) => {
      const languageId = e.path[1].getAttribute('data-language-id') * 1;
      changeLanguage(languageId);
    })
  });
});
