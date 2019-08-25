let filteredItems = [];
let beforeUrl = location.href;
const inspectPage = () => {
  const analyzedItems = filterElementsOnPage();
  if (analyzedItems.length === 0 && beforeUrl === location.href) {
    return;
  }

  // Copy
  filteredItems = [...analyzedItems];

  // Set before URL
  beforeUrl = location.href;

  chrome.storage.sync.get(
    null,
    (items) => {
      const pageURI = manual[items.languageId || 0];
      filteredItems.map((value) => {

        let {
          marker,
          element,
          isFunction,
          enableToWrapNode,
          details,
        } = value;

        const mode = settingData.themeId === 0
          ? 'white'
          : 'dark';
        
        const isEnabledPopupAtTheFile = typeof settingData.popupEnableAtTheFileId === 'undefined'
          || settingData.popupEnableAtTheFileId == 1;

        const isEnabledPopupAtTheDiscussion = typeof settingData.popupEnableAtTheDiscussionId === 'undefined'
          || settingData.popupEnableAtTheDiscussionId == 1;

        const position = items.positionId || 0;

        if (enableToWrapNode) {
          const wrapper = document.createElement('span');

          element.parentNode.insertBefore(wrapper, element);
          wrapper.appendChild(element);

          const [ , beforeRemainedTexts, method, afterRemainedTexts ] = wrapper.innerHTML.match(/^([^A-Za-z0-9_]*)([A-Za-z0-9_]+)(.*)/);

          if (beforeRemainedTexts.length > 0) {
            wrapper.before(beforeRemainedTexts);
          }

          wrapper.innerHTML = method;

          if (afterRemainedTexts.length > 0) {
            wrapper.after(afterRemainedTexts);
          }

          // Apply rendered flags;
          wrapper.setAttribute('data-gp-is-rendered', 'true');
          wrapper.setAttribute('data-gp-generated', 'true');

          // Change the reference;
          element = wrapper;
        }

        element.innerHTML =
          `<a href="${pageURI + details.url}.php" target="_blank" class="gp-code-jumper-targeted">`
          + `${element.innerHTML}`
          + `</a>`;

        if (marker === 'source' || marker === 'file') {
          if (!isEnabledPopupAtTheFile) {
            return;
          }
        }

        if (marker === 'discussion') {
          if (!isEnabledPopupAtTheDiscussion) {
            return;
          }
        }

        // Create popup DOM.
        const popup = document.createElement('div');
        popup.classList.add('gp-code-jumper-targeted__popup');
        popup.classList.add('gp-code-jumper-targeted__popup--' + mode);
        popup.classList.add('gp-code-jumper-targeted__popup--' + (position === 0 ? 'top' : 'bottom'));

        const popupCursorTriangle = document.createElement('div');
        popupCursorTriangle.classList.add('gp-code-jumper-targeted-popup__triangle');
        popupCursorTriangle.classList.add('gp-code-jumper-targeted-popup__triangle--' + mode);

        popup.innerHTML = isFunction
          ? beatifyFunctionSignature(value)
          : beatifyClassSignature(value);

        popup.append(popupCursorTriangle);

        // Set mouse actions.
        element.querySelector('.gp-code-jumper-targeted').addEventListener(
          'mouseover',
          (e) => {
            let baseClass = '.Box-body';
            switch (marker) {
              case 'files':
                baseClass = '.Details';
                break;
              case 'discussion':
                baseClass = '.js-timeline-item';
                break;
            }
            const boxBody = document.querySelector(baseClass).getBoundingClientRect();

            // Set popup position.
            const { top, left } = element.getBoundingClientRect();
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
              popupCursorTriangle.style.left = (-(tempXPosition - diff) + left + 10) + 'px';
              popup.style.left = (tempXPosition - diff) + 'px';
            }
          }
        );

        element.querySelector('.gp-code-jumper-targeted').addEventListener(
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
