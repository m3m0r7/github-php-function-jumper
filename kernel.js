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
      items.push({
        marker,
        name,
        element: value,
        isClass: true,
        isFunction: false,
        details: classes[char][loweredName]['methods']['__construct'],
        classDetails: classes[char][loweredName],
      });
      return;
    }

    if (!functions.hasOwnProperty(char) || !functions[char].hasOwnProperty(loweredName)) {
      return;
    }

    const nextNode = value.nextSibling;
    if (nextNode.nodeName === 'SPAN'
      && nextNode.classList.contains('pl-k')
      && (
        nextNode.innerText === '::'
        || nextNode.innerText === '->'
      )
    ) {
      return;
    }
    items.push({
      marker,
      name,
      element: value,
      isClass: false,
      isFunction: true,
      details: functions[char][loweredName],
    });
  });
  return items;
};
