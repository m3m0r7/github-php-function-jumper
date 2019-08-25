const settingOptionNames = [
  'languageId',
  'positionId',
  'popupEnableAtTheFileId',
  'popupEnableAtTheDiscussionId',
  'themeId',
];

const beSnakeCase = (propertyName) => {
  return propertyName.replace(/([A-Z])/g, (all) => `-${all.toLowerCase()}`);
};

const updateText = (propertyName, value) => {
  const propertyTarget = [
    beSnakeCase(propertyName.replace(/Id$/, '')),
    `data-${beSnakeCase(propertyName)}`,
  ];

  document.querySelector(`.choose-${propertyTarget[0]} .active`).classList.remove('active');
  document.querySelector(`.choose-${propertyTarget[0]} [${propertyTarget[1]}="${value}"]`).classList.add('active');
};

const update = (propertyName) => {
  chrome.storage.sync.get(
    settingOptionNames,
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
};

document.addEventListener('DOMContentLoaded', () => {

  for (const optionName of settingOptionNames) {
    update(optionName);
    const attrName = `data-${beSnakeCase(optionName)}`;

    // Updates
    document.querySelectorAll(`[${attrName}]`).forEach((element) => {
      element.addEventListener('click', (e) => {
        change(
          optionName,
          element.getAttribute(attrName) * 1
        );
      })
    });
  }

  // Translation
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const text = element.getAttribute('data-translate');
    element.innerHTML = chrome.i18n.getMessage(text);
  });

  document.querySelectorAll('[data-registered]').forEach((element) => {
    // The format is fixed en-US.
    const format = 'en-US';

    switch (element.getAttribute('data-registered')) {
      case 'classes':
        element.innerText = new Intl.NumberFormat(format).format(
          Object.keys(classes)
          .reduce(
            (sum, targetedClasses) => sum + Object.keys(classes[targetedClasses]).length,
            0
          )
        );
        break;
      case 'methods':
        element.innerText = new Intl.NumberFormat(format).format(
          Object.keys(classes)
            .reduce(
              (sum, targetedClasses) => sum + Object.keys(classes[targetedClasses])
                .reduce(
                  (sum, targetClass) => sum + Object.keys(classes[targetedClasses][targetClass].methods).length,
                  0
                ),
              0
            )
        );
        break;
      case 'functions':
        element.innerText = new Intl.NumberFormat(format).format(
          Object.keys(functions)
            .reduce(
              (sum, targetedClasses) => sum + Object.keys(functions[targetedClasses]).length,
              0
            )
        );
        break;
    }
  });
});
