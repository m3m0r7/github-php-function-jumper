const beatifyParameters = (parameters) => {
  return parameters
    .replace(
      /(=\s*[^\s\]]+)/g,
      (value) => {
        return `<span class="gp-code-jumper-colors--secondary">${value}</span>`;
      }
    )
    .replace(
      /(?<!\$[A-Za-z0-9_]*)(string|array|int|integer|bool|boolean|void|float|double|callable|resource|mixed)/g,
      '<span class="gp-code-jumper-colors--primary">$1</span>'
    )
    .replace(
      /(\[|\])/g,
      '<span class="gp-code-jumper-colors--third">$1</span>'
    );
};
