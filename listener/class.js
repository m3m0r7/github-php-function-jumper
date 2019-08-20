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
