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

const getCommentOutsWithElements = (matches, marker) => {
  const allowsAnnotations = [
    '@return',
    '@var',
    '@param',
  ];
  const items = [];
  matches.forEach((value, key) => {
    const annotation = value.innerText;
    value.setAttribute('data-gp-is-rendered', 'true');
    if (allowsAnnotations.indexOf(annotation.toLowerCase()) === -1) {
      return;
    }

    const nextNode = value.nextSibling;
    if (nextNode.nodeName !== '#text') {
      return;
    }

    const info = nextNode.nodeValue
      .replace(/^\s+/, '')
      .replace(/\s+$/, '')
      .split(/\s+/);

    if (typeof info[0] === 'undefined') {
      return;
    }

    for (const name of info[0].split('|')) {
      const loweredName = name.toLowerCase();
      const char = name.charAt(0).toLowerCase();
      if (!classes.hasOwnProperty(char)
        || !classes[char].hasOwnProperty(loweredName)
        || !classes[char][loweredName]['methods'].hasOwnProperty('__construct')
      ) {
        continue;
      }
      const classDetails = classes[char][loweredName];

      items.push({
        marker,
        name,
        element: nextNode,
        ...templates.optionParameters,
        isClass: true,
        isClassReference: true,
        enableToWrapNode: true,
        details: classDetails['methods']['__construct'],
        classDetails,
      });
    }

  });
  return items;
};
