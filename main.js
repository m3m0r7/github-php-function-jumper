setInterval(
  () => {
    // re-render
    inspectVariables();
    inspectPage();
  },
  3000
);

inspectVariables();
inspectPage();
