// Send handshake
chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      JSON.stringify({
        tag: 'REQUEST_FILTERED_ITEMS',
      }),
      (response) => {
        switch (response.tag) {
          case 'RESPONSE_FILTERED_ITEMS':
            const { payload } = response;
            document.querySelectorAll('[data-rendered]').forEach((element) => {
              const type = element.getAttribute('data-rendered');
              let counter = 0;
              switch (type) {
                case 'classes':
                  counter = payload.spl.filter((item) => item.isClass).length;
                  break;
                case 'methods':
                  counter = payload.spl.filter((item) => item.isStaticMethodAtClass || item.isDynamicMethodAtClass).length;
                  break;
                case 'functions':
                  counter = payload.spl.filter((item) => item.isFunction).length;
                  break;
                case 'variables':
                  counter = Object.keys(payload.variables).length;
                  break;
              }
              element.innerText = new Intl.NumberFormat('en-US').format(
                counter
              )
            });
            break;
        }
      },
    );
});

document.addEventListener('DOMContentLoaded', () => {
  // Translation
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const text = element.getAttribute('data-translate');
    element.innerHTML = chrome.i18n.getMessage(text);
  });

  // Events
  document.querySelector('.js-link-go-to-settings').addEventListener(
    'click',
    (e) => {
      chrome.tabs.create({
        url: 'chrome://extensions/?options=' + chrome.runtime.id
      });
    }
  )
});
