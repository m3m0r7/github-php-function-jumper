const updateText = (propertyName, value) => {
  const propertyTarget = propertyName === 'languageId'
    ? ['language', 'data-language-id']
    : ['position', 'data-position-id'];

  console.log(`.choose-${propertyTarget[0]} [${propertyTarget[1]}="${value}"]`);
  document.querySelector(`.choose-${propertyTarget[0]} .active`).classList.remove('active');
  document.querySelector(`.choose-${propertyTarget[0]} [${propertyTarget[1]}="${value}"]`).classList.add('active');
};

const update = (propertyName) => {
  chrome.storage.sync.get(
    ['languageId', 'positionId'],
    (items) => {
      const value = items[propertyName] || 0;
      updateText(propertyName, value);
    }
  );
};

const change = (propertyName, value) => {
  chrome.storage.sync.set({
    [propertyName]: value,
  });
  updateText(propertyName, value);

  document.querySelector('.description').classList.add('disabled');
  document.querySelector('.flash-message').classList.remove('disabled');
};

document.addEventListener('DOMContentLoaded', () => {
  update('languageId');
  update('positionId');

  // Update languages
  document.querySelectorAll('[data-language-id]').forEach((element) => {
    element.addEventListener('click', (e) => {
      const languageId = element.getAttribute('data-language-id') * 1;
      change(
        'languageId',
        languageId
      );
    })
  });

  // Update positions
  document.querySelectorAll('[data-position-id]').forEach((element) => {
    element.addEventListener('click', (e) => {
      const positionId = element.getAttribute('data-position-id') * 1;
      change(
        'positionId',
        positionId
      );
    })
  });

  // Translation
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const text = element.getAttribute('data-translate');
    element.innerHTML = chrome.i18n.getMessage(text);
  });
});
