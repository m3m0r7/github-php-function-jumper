const beatifyFunctionSignature = (info) => {
  const parameters = beatifyParameters(info.details.spec.parameters);

  let descriptor = 'function';
  if (info.details.spec.hasOwnProperty('isStructure') && info.details.spec.isStructure === true) {
    descriptor = 'structure';
  }

  return `<span class="gp-code-jumper-colors--primary">${descriptor}</span> `
    + `<span class="gp-code-jumper-fonts--bold">${info.details.name}</span>`
    + `(${parameters})`
    + (
      info.details.spec.returnValue
        ? `<span class="gp-code-jumper-colors--primary">: ${info.details.spec.returnValue}</span>`
        : ''
    )
};
