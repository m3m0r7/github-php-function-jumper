const classServiceRegistry = (items, marker, name, element, classDetails) => {
  const nextNode = element.nextSibling;

  // Verify static node
  if (nextNode.nodeName === 'SPAN' && nextNode.innerText === '::') {
    const nextNextNode = nextNode.nextSibling;
    if (nextNextNode.nodeName === 'SPAN') {
      switch (nextNextNode.innerText) {
        case 'class': // class reference
          console.log('hey');
          return;
      }
      return;
    }
    console.log(nextNextNode.nodeName);
    if (nextNextNode.nodeName === '#text') {
      const methodName = nextNextNode.nodeValue
        .replace(/([A-Za-z0-9_]+).+/, '$1');
      console.log(methodName);
    }
    return;
  }
  items.push({
    marker,
    name,
    element,
    ...templates.optionParameters,
    isClass: true,
    isConstructorAtClass: true,
    details: classDetails['methods']['__construct'],
    classDetails,
  });
};

const beatifyClassSignature = (info) => {
  const parameters = beatifyParameters(info.details.spec.parameters);

  const descriptor = [];

  if (info.details.spec.isAbstract) {
    descriptor.push('abstract');
  }

  if (info.details.spec.isFinal) {
    descriptor.push('final');
  }

  if (info.details.spec.isPrivate) {
    descriptor.push('private');
  } else if (info.details.spec.isProtected) {
    descriptor.push('protected');
  } else {
    descriptor.push('public');
  }

  descriptor.push('function');

  if (info.details.spec.isStatic) {
    descriptor.push('static');
  }

  return `<span class="gp-code-jumper-colors--primary">${descriptor.join(' ')}</span> `
    + `<span class="gp-code-jumper-fonts--bold">${info.classDetails.name}::${info.details.name}</span>`
    + `(${parameters})`
    + (
        info.details.spec.returnValue
          ? `<span class="gp-code-jumper-colors--primary">: ${info.details.spec.returnValue}</span>`
          : ''
    )
};
