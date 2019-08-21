const getFunctionsWithElements = (matches, marker) => {
  const items = [];
  matches.forEach((value, key) => {
    const name = value.innerText
      .replace(/^\s+/, '')
      .replace(/\s+$/, '')
      .replace(/^([^(]+).*$/, '$1')
      .replace(/^\\/, '');
    const char = name.charAt(0).toLowerCase();
    const loweredName = name.toLowerCase();

    // Set rendering flags.
    value.setAttribute('data-gp-is-rendered', 'true');

    if (classes.hasOwnProperty(char) && classes[char].hasOwnProperty(loweredName) && classes[char][loweredName]['methods'].hasOwnProperty('__construct')) {
      classServiceRegistry(items, marker, name, value, classes[char][loweredName]);
      return;
    }

    if (!functions.hasOwnProperty(char) || !functions[char].hasOwnProperty(loweredName)) {
      return;
    }
    functionServiceRegistry(items, marker, name, value, functions[char][loweredName]);
  });
  return items;
};
