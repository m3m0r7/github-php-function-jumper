const filterElementsOnPage = (enableRenderingCache) => {
  enableRenderingCache = typeof enableRenderingCache !== 'undefined'
    ? enableRenderingCache
    : true;

  const suffix = enableRenderingCache
    ? ':not([data-gp-is-rendered="true"])'
    : '';

  const elements = [];
  elements.push(
    // For new GitHub syntax highlight
    ...getSPLWithElements(
      document.querySelectorAll(
        '.type-php .pl-en' + suffix + ','
        + '.type-php .pl-v' + suffix + ','
        + '.type-php .pl-smi' + suffix
      ),
      'source'
    ),
    ...getSPLWithElements(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-v' + suffix + ','
        + '[data-file-type=".php"] .pl-en' + suffix + ','
        + '[data-file-type=".php"] .pl-smi' + suffix
      ),
      'files'
    ),
    ...getCommentOutsWithElements(
      document.querySelectorAll(
        '.type-php .pl-en' + suffix + ','
        + '.type-php .pl-v' + suffix + ','
        + '.type-php .pl-smi' + suffix
      ),
      'source'
    ),
    ...getCommentOutsWithElements(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-v' + suffix + ','
        + '[data-file-type=".php"] .pl-en' + suffix + ','
        + '[data-file-type=".php"] .pl-smi' + suffix
      ),
      'files'
    ),
    ...getVariableWithElements(
      document.querySelectorAll(
        '.type-php .pl-s1' + suffix
      ),
      'source'
    ),
    ...getVariableWithElements(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-s1' + suffix
      ),
      'files'
    ),
    ...getVariableWithElements(
      document.querySelectorAll(
        '#discussion_bucket .pl-s1' + suffix
      ),
      'discussion'
    ),
    ...getSPLWithElements(
      document.querySelectorAll(
        '#discussion_bucket code' + suffix
      ),
      'discussion'
    ),
    ...getSPLWithElements(
      document.querySelectorAll(
        '#discussion_bucket .pl-v' + suffix + ','
        + '#discussion_bucket .pl-en' + suffix + ','
        + '#discussion_bucket .pl-smi' + suffix
      ),
      'discussion'
    ),
  );
  return elements;
};
