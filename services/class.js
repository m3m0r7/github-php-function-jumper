const classServiceRegistry = (items, marker, name, element, classDetails, realClass = null) => {
  const nextNode = element.nextSibling;
  const prevNode = element.previousElementSibling;

  if (prevNode
    && prevNode.nodeName === 'SPAN'
  ) {

    switch (prevNode.innerText.toLowerCase()) {
      case 'extends':
        items.push({
          marker,
          name,
          element,
          ...templates.optionParameters,
          isClass: true,
          isClassReference: true,
          details: classDetails['methods']['__construct'],
          classDetails,
        });
        return;
      case 'implements':
        items.push({
          marker,
          name,
          element,
          ...templates.optionParameters,
          isClass: true,
          isInterface: true,
          details: classDetails['methods']['__construct'],
          classDetails,
        });
        return;
    }
  }

  // Verify static node
  if (nextNode !== null
    && nextNode.nodeName === 'SPAN'
    && nextNode.innerText === '::'
  ) {
    const nextNextNode = nextNode.nextSibling;
    if (nextNextNode !== null
      && nextNextNode.nodeName === 'SPAN'
    ) {
      switch (nextNextNode.innerText) {
        case 'class': // class reference
          items.push({
            marker,
            name,
            element: nextNextNode,
            ...templates.optionParameters,
            isClass: true,
            isClassReference: true,
            details: classDetails['methods']['__construct'],
            classDetails,
          });
          return;
      }
      return;
    }

    if (nextNextNode !== null
      && nextNextNode.nodeName === '#text'
    ) {
      const methodName = nextNextNode.nodeValue
        .replace(/\s*([A-Za-z0-9_]+).+/, '$1');
      const loweredMethodName = methodName.toLowerCase();

      if (!classDetails['methods'].hasOwnProperty(loweredMethodName)) {
        return;
      }

      items.push({
        marker,
        name,
        calleeMethodName: loweredMethodName,
        element: nextNextNode,
        ...templates.optionParameters,
        isClass: true,
        isStaticMethodAtClass: true,
        enableToWrapNode: true,
        details: classDetails['methods'][loweredMethodName],
        realClass,
        classDetails,
      });
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
    realClass,
    classDetails,
  });
};

const beatifyClassSignature = (info) => {
  const parameters = beatifyParameters(info.details.spec.parameters);

  const descriptor = [];

  if (info.isClassReference) {
    return `<span class="gp-code-jumper-colors--primary">class</span> `
      + `<span class="gp-code-jumper-fonts--bold">${info.classDetails.name}</span>`;
  }

  if (info.isInterface) {
    return `<span class="gp-code-jumper-colors--primary">interface</span> `
      + `<span class="gp-code-jumper-fonts--bold">${info.classDetails.name}</span>`;
  }

  if (info.isTrait) {
    return `<span class="gp-code-jumper-colors--primary">trait</span> `
      + `<span class="gp-code-jumper-fonts--bold">${info.classDetails.name}</span>`;
  }

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

  let name = info.classDetails.name;

  if (info.realClass) {
    name = info.realClass.name;
  }

  return `<span class="gp-code-jumper-colors--primary">${descriptor.join(' ')}</span> `
    + `<span class="gp-code-jumper-fonts--bold">${name}::${info.details.name}</span>`
    + `(${parameters})`
    + (
        info.details.spec.returnValue
          ? `<span class="gp-code-jumper-colors--primary">: ${info.details.spec.returnValue}</span>`
          : ''
    )
};
