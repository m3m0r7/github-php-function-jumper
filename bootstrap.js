const getFunctionsWithElements = (matches, marker) => {
  const items = [];
  matches.forEach((value, key) => {
    const name = value.innerText
      .replace(/^\s+/, '')
      .replace(/\s+$/, '')
      .replace(/^([^(]+).*$/, '$1')
      .replace(/^\\/, '');
    const char = name.charAt(0).toLowerCase();
    const loweredName = name.toLowerCase();
    if (functions.hasOwnProperty(char) && functions[char].hasOwnProperty(loweredName)) {
      items.push({
        marker,
        name,
        element: value,
        details: functions[char][loweredName],
      });
    }
  });
  return items;
};

const inspectPage = () => {
  const filteredItems = [
    // Source tree
    ...getFunctionsWithElements(
      document.querySelectorAll(
        '.type-php .pl-c1:not([data-gp-is-rendered="true"])'
      ),
      'source'
    ),

    // Files
    ...getFunctionsWithElements(
      document.querySelectorAll(
        '[data-file-type=".php"] .pl-c1:not([data-gp-is-rendered="true"])'
      ),
      'files'
    ),

    // Discussion area
    ...getFunctionsWithElements(
      document.querySelectorAll(
        '#discussion_bucket code:not([data-gp-is-rendered="true"])'
      ),
      'discussion'
    ),
  ];

  const loadedStyle = document.querySelector('#gp-code-jumper-style');
  if (loadedStyle) {
    // Remove loaded style.
    loadedStyle.remove();
  }

  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'gp-code-jumper-style');

  style.innerHTML =
      '.gp-code-jumper-targeted { position: relative; display: inline-block }'
    + '.gp-code-jumper-targeted__popup { position: absolute; left: calc(-50% - 40px); box-shadow: 0 0 3px #888888; color: #000000; border: 1px solid #888888; background-color: #FFFFFF; display: none; z-index: 1; padding: 10px; border-radius: 2px; }'
    // + '.gp-code-jumper-targeted__popup--top { top: -45px; }'
    // + '.gp-code-jumper-targeted__popup--bottom { bottom: -45px }'
    + '.gp-code-jumper-targeted:hover .gp-code-jumper-targeted__popup { display: block }'
    + '.gp-code-jumper-colors--primary { color: #F92772 }'
    + '.gp-code-jumper-colors--secondary { color: #74715E }'
    + '.gp-code-jumper-colors--third { color: #888888 }'
    + '.gp-code-jumper-fonts--bold { font-weight: bold }'
  ;

  // Inject to body section.
  document.querySelector('body').append(style);

  chrome.storage.sync.get(
    null,
    (items) => {
      const pageURI = manual[items.languageId || 0];
      filteredItems.map((value) => {
        const parameters = value.details.spec.parameters
          .replace(
            /(=\s*[^\s\]]+)/g,
            (value) => {
              return `<span class="gp-code-jumper-colors--secondary">${value}</span>`;
            }
          )
          .replace(
            /(?<!\$)(string|array|int|integer|bool|boolean|void|float|double|callable|resource|mixed)/g,
            '<span class="gp-code-jumper-colors--primary">$1</span>'
          )
          .replace(
            /(\[|\])/g,
            '<span class="gp-code-jumper-colors--third">$1</span>'
          );

        // add rendered flag
        value.element.setAttribute('data-gp-is-rendered', 'true');

        const position = items.positionId || 0;

        value.element.innerHTML =
            `<a href="${pageURI + value.details.url}.php" target="_blank" class="gp-code-jumper-targeted">`
          + `${value.element.innerHTML}`
          + `</a>`;

        // Create popup DOM.
        const popup = document.createElement('div');
        popup.classList.add('gp-code-jumper-targeted__popup');
        popup.classList.add('gp-code-jumper-targeted__popup--' + (position === 0 ? 'top' : 'bottom'));

        popup.innerHTML =
            `<span class="gp-code-jumper-colors--primary">function</span> `
          + `<span class="gp-code-jumper-fonts--bold">${value.details.name}</span>`
          + `(${parameters})`
          + `<span class="gp-code-jumper-colors--primary">: ${value.details.spec.returnValue}</span>`;

        // Set mouse actions.
        value.element.querySelector('.gp-code-jumper-targeted').addEventListener(
          'mouseover',
          (e) => {
            let baseClass = '.Box-body';
            switch (value.marker) {
              case 'files':
                baseClass = '.Details';
                break;
              case 'discussion':
                baseClass = '.js-timeline-item';
                break;
            }
            const boxBody = document.querySelector(baseClass).getBoundingClientRect();

            // Set popup position.
            const { top, left } = value.element.getBoundingClientRect();
            popup.style.display = 'block';

            // Initialize
            popup.style.top = '0px';
            popup.style.left = '0px';

            const tempXPosition = (left - 80 - boxBody.x + boxBody.left);

            popup.style.top = (top + window.scrollY + (position === 0 ? -50 : 20)) + 'px';
            if ((tempXPosition + popup.clientWidth + 50) < window.innerWidth) {
              popup.style.left = tempXPosition + 'px';
            } else {
              const diff = (tempXPosition + popup.clientWidth + 50) - window.innerWidth;
              popup.style.left = tempXPosition - diff + 'px';
            }
          }
        );

        value.element.querySelector('.gp-code-jumper-targeted').addEventListener(
          'mouseout',
          (e) => {
            popup.style.display = 'none';
          }
        );

        // Add popup
        document.querySelector('body').append(popup);
      });
      return true;
    }
  );
};

setInterval(
  () => {
    // re-render
    inspectPage();
  },
  3000
);

inspectPage();
