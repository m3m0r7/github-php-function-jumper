const filterElementsOnPage = (enableRenderingCache) => {
  enableRenderingCache = typeof enableRenderingCache !== 'undefined'
    ? enableRenderingCache
    : true;

  const suffix = enableRenderingCache
    ? ':not([data-gp-is-rendered="true"])'
    : '';

  const elements = [];
  elements.push(
    ...getSPLWithElements(
      document.querySelectorAll(
        '.type-php .pl-c1' + suffix
      ),
      'source'
    ),
    // Files
    ...getSPLWithElements(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-c1' + suffix
      ),
      'files'
    ),
    ...getCommentOutsWithElements(
      document.querySelectorAll(
        '.type-php .pl-s1 .pl-c .pl-k' + suffix
      ),
      'source'
    ),
    ...getCommentOutsWithElements(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-s1 .pl-c .pl-k' + suffix
      ),
      'files'
    ),
    ...getVariableWithElements(
      document.querySelectorAll(
        '.type-php .pl-s1 .pl-smi' + suffix
      ),
      'source'
    ),
    ...getVariableWithElements(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-s1 .pl-smi' + suffix
      ),
      'files'
    ),
    ...getSPLWithElements(
      document.querySelectorAll(
        '#discussion_bucket code' + suffix
      ),
      'discussion'
    ),
    ...getCommentOutsWithElements(
      document.querySelectorAll(
        '#discussion_bucket .pl-s1 .pl-c .pl-k' + suffix
      ),
      'discussion'
    ),
    ...getVariableWithElements(
      document.querySelectorAll(
        '#discussion_bucket .pl-s1 .pl-smi' + suffix
      ),
      'discussion'
    ),
  );
  return elements;
};
