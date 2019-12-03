const settingData = {};

chrome.storage.sync.get(
  null,
  (items) => {
    // Set to global heapspace.
    for (let key in items) {
      settingData[key] = items[key];
    }

    const matchedWhitelistURLs = settingData.whitelistURLs.filter(
        (url) => location.href.match(
            url.replace(/\//g, '\\/')
                .replace(/\./g, '\\.')
                .replace(/\*/g, '.*?')
        )
    );

    if (matchedWhitelistURLs.length === 0) {
        // Do not effect.
        return;
    }

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

    // Listener
    chrome.runtime.onMessage.addListener(
      (message, sender, sendResponse) => {
        const requestMessage = JSON.parse(message);
        switch (requestMessage.tag) {
          case 'REQUEST_FILTERED_ITEMS':
            sendResponse({
              tag: 'RESPONSE_FILTERED_ITEMS',
              payload: {
                spl: filteredItems,
                variables,
              },
            });
            break;
        }
      }
    );

  }
);
