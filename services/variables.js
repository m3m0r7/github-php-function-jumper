let variables = {};

const inspectVariables = () => {
  variables = {
    ...variables,
    // Processing dynamic method
    ...getDynamicMethodConstructionNode(
      document.querySelectorAll(
        '.type-php .pl-s1 .pl-smi:not([data-gp-is-inspected-variable="true"])'
      ),
      'source'
    ),
    ...getDynamicMethodConstructionNode(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-s1 .pl-smi:not([data-gp-is-inspected-variable="true"])'
      ),
      'files'
    ),
    ...getDynamicMethodConstructionNode(
      document.querySelectorAll(
        '#discussion_bucket .pl-s1 .pl-smi:not([data-gp-is-inspected-variable="true"])'
      ),
      'discussion'
    ),

  };
};
