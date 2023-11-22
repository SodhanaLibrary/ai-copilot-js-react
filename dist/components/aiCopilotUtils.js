"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForElement = exports.typeText = exports.triggerMouseUpEvent = exports.triggerMouseOverEvent = exports.triggerMouseOutEvent = exports.triggerMouseMoveEvent = exports.triggerMouseDownEvent = exports.triggerKeyEvent = exports.triggerClickEvent = exports.selectDropdownValue = exports.selectDropdownByLabel = exports.pause = exports.navigateTo = exports.isElementVisible = exports.isElementDisabled = exports.isElementClickable = exports.getHeaderElementsWithVisibleText = exports.getElementsWithVisibleText = exports.getElementHighlights = exports.getElementDimensions = exports.generateXPathWithNearestParentId = exports.generateCssSelector = exports.findElementsWithOnClick = exports.findElementByXPath = exports.findElementBySelector = exports.findElementById = exports.findElementByCss = exports.findElementByAttribute = exports.findAnchorElements = void 0;
const triggerClickEvent = element => {
  // Check if the element exists
  if (element) {
    // Create a new MouseEvent object
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });

    // Dispatch the click event on the element
    element.dispatchEvent(event);
  } else {
    console.error("Element not found.");
  }
};
exports.triggerClickEvent = triggerClickEvent;
const findElementByXPath = xpath => {
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  return result.singleNodeValue;
};
exports.findElementByXPath = findElementByXPath;
const findElementById = id => {
  return document.getElementById(id);
};
exports.findElementById = findElementById;
const findElementByCss = selector => {
  return document.querySelector(selector);
};
exports.findElementByCss = findElementByCss;
const findElementBySelector = target => {
  const targetStrs = target.split('=');
  let tr = target.substring(6);
  let findElement = findElementByXPath;
  if (targetStrs[0] === 'id') {
    findElement = findElementById;
    tr = target.substring(3);
  } else if (targetStrs[0] === 'css') {
    findElement = findElementByCss;
    tr = target.substring(4);
  }
  return findElement(tr);
};
exports.findElementBySelector = findElementBySelector;
const waitForElement = async function (target) {
  let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  const targetStrs = target.split('=');
  let tr = target.substring(6);
  let findElement = findElementByXPath;
  if (targetStrs[0] === 'id') {
    findElement = findElementById;
    tr = target.substring(3);
  } else if (targetStrs[0] === 'css') {
    findElement = findElementByCss;
    tr = target.substring(4);
  }
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    function checkElement() {
      const element = findElement(tr);
      if (element) {
        // Element found, resolve the Promise with the element
        resolve(element);
      } else if (Date.now() - startTime < timeout) {
        // Element not found, but there's still time left, so keep checking
        setTimeout(checkElement, 100); // Check again in 100 milliseconds
      } else {
        // Element not found within the specified timeout, reject the Promise
        resolve(null);
      }
    }

    // Start checking for the element
    checkElement();
  });
};
exports.waitForElement = waitForElement;
const typeText = async function (element, text) {
  let speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  let index = 0;
  return new Promise((resolve, reject) => {
    function typeCharacter() {
      if (index < text.length) {
        const char = text.charAt(index);

        // If the element is an input, set the value attribute
        if (element instanceof HTMLInputElement) {
          element.value += char;
          if ("createEvent" in document) {
            const evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
          } else {
            element.fireEvent("onchange");
          }
        } else {
          // For other elements, set the innerText or innerHTML property
          element.innerText += char;
        }
        index += 1;

        // Call the function recursively for the next character
        setTimeout(typeCharacter, speed);
      } else {
        resolve(null);
      }
    }

    // Start typing the text
    typeCharacter();
  });
};

// // Trigger a keydown event for the 'Enter' key
// triggerKeyEvent(inputElement, 'keydown', 'Enter');

// // Trigger a keyup event for the 'A' key with the Shift key modifier
// triggerKeyEvent(inputElement, 'keyup', 'A', { shiftKey: true });
exports.typeText = typeText;
const triggerKeyEvent = function (element, eventType, key) {
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  const eventOptions = {
    key: key || '',
    code: options.code || '',
    keyCode: options.keyCode || 0,
    which: options.which || 0,
    shiftKey: options.shiftKey || false,
    ctrlKey: options.ctrlKey || false,
    altKey: options.altKey || false,
    metaKey: options.metaKey || false,
    bubbles: options.bubbles || true,
    cancelable: options.cancelable || true
  };
  try {
    const event = new KeyboardEvent(eventType, eventOptions);
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the keyboard event:', e);
  }
};
exports.triggerKeyEvent = triggerKeyEvent;
const triggerMouseOverEvent = element => {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    const event = new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouseover event:', e);
  }
};
exports.triggerMouseOverEvent = triggerMouseOverEvent;
const triggerMouseDownEvent = element => {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    const event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse down event:', e);
  }
};
exports.triggerMouseDownEvent = triggerMouseDownEvent;
const generateCssSelector = element => {
  if (!(element instanceof Element)) return '';
  const selectors = [];
  while (element.parentElement) {
    const tagName = element.tagName.toLowerCase();
    const id = element.id;
    const classes = Array.from(element.classList).map(c => ".".concat(c)).join('');
    selectors.unshift("".concat(tagName).concat(id ? "#".concat(id) : '').concat(classes));
    element = element.parentElement;
  }
  return selectors.join(' > ');
};
exports.generateCssSelector = generateCssSelector;
const generateXPathWithNearestParentId = element => {
  let path = '';
  let nearestParentId = null;

  // Check if the current element's has an ID
  if (element.id) {
    nearestParentId = element.id;
  }
  while (!nearestParentId && element !== document.body) {
    const tagName = element.tagName.toLowerCase();
    let index = 1;
    let sibling = element.previousElementSibling;
    while (sibling) {
      if (sibling.tagName.toLowerCase() === tagName) {
        index += 1;
      }
      sibling = sibling.previousElementSibling;
    }
    if (index === 1) {
      path = "/".concat(tagName).concat(path);
    } else {
      path = "/".concat(tagName, "[").concat(index, "]").concat(path);
    }

    // Check if the current element's parent has an ID
    if (element.parentElement.id) {
      nearestParentId = element.parentElement.id;
      break; // Stop searching when we find the nearest parent with an ID
    }

    element = element.parentElement;
  }
  if (nearestParentId && nearestParentId !== 'doodlemars-nav-gpt-section') {
    path = "//*[@id='".concat(nearestParentId, "']").concat(path);
    return path;
  }
  return null; // No parent with an ID found
};
exports.generateXPathWithNearestParentId = generateXPathWithNearestParentId;
const findElementByAttribute = (attribute, value) => {
  const selector = "[".concat(attribute, "=\"").concat(value, "\"]");
  return document.querySelector(selector);
};
exports.findElementByAttribute = findElementByAttribute;
const selectDropdownValue = (element, value) => {
  if (element) {
    element.value = value;
  } else {
    console.error('Dropdown element not found.');
  }
};
exports.selectDropdownValue = selectDropdownValue;
const selectDropdownByLabel = (selectElement, label) => {
  if (selectElement) {
    for (let i = 0; i < selectElement.options.length; i += 1) {
      if (selectElement.options[i].textContent === label) {
        selectElement.selectedIndex = i;
        break;
      }
    }
  } else {
    console.error('Dropdown element not found.');
  }
};
exports.selectDropdownByLabel = selectDropdownByLabel;
const triggerMouseOutEvent = element => {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    const event = new MouseEvent('mouseout', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse out event:', e);
  }
};
exports.triggerMouseOutEvent = triggerMouseOutEvent;
const triggerMouseMoveEvent = (element, clientX, clientY) => {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    const event = new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: clientX || 0,
      clientY: clientY || 0
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse move event:', e);
  }
};
exports.triggerMouseMoveEvent = triggerMouseMoveEvent;
const triggerMouseUpEvent = element => {
  if (!element) {
    console.error('Invalid target element.');
    return;
  }
  try {
    const event = new MouseEvent('mouseup', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  } catch (e) {
    console.error('Error creating or dispatching the mouse up event:', e);
  }
};
exports.triggerMouseUpEvent = triggerMouseUpEvent;
const pause = milliseconds => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
};

// Function to navigate to a new route
exports.pause = pause;
const navigateTo = route => {
  // Update the browser's URL without causing a page reload
  window.history.replaceState(null, null, route);
};

// Function to find elements with onClick functions
exports.navigateTo = navigateTo;
const findElementsWithOnClick = () => {
  const elementsWithOnClick = [];
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
    const onClickAttribute = element.getAttribute('onclick');
    if (onClickAttribute !== null || element.onclick || element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button' || element.tagName.toLowerCase() === 'select' || element.tagName.toLowerCase() === 'input') {
      elementsWithOnClick.push(element);
    }
  });
  return elementsWithOnClick;
};

// Function to check if an element is clickable
exports.findElementsWithOnClick = findElementsWithOnClick;
const isElementClickable = element => {
  const onClickAttribute = element.getAttribute('onclick');
  const isAnchorWithHref = element.tagName.toLowerCase() === 'a' && element.hasAttribute('href');
  return !!onClickAttribute || isAnchorWithHref;
};

// Function to check if an element is disabled
exports.isElementClickable = isElementClickable;
const isElementDisabled = element => {
  const isDisabled = element.hasAttribute('disabled');
  const isFormField = ['input', 'button', 'select'].includes(element.tagName.toLowerCase());
  return isDisabled && isFormField;
};

// Function to check if an element is visible
exports.isElementDisabled = isElementDisabled;
const isElementVisible = element => {
  if (!element) {
    return false; // Handle invalid elements
  }

  // Check if the element is hidden via CSS 'display' property
  const computedStyle = window.getComputedStyle(element);
  if (computedStyle.display === 'none') {
    return false;
  }

  // Check if the element is hidden via CSS 'visibility' property
  if (computedStyle.visibility === 'hidden') {
    return false;
  }

  // Check if the element has zero dimensions
  if (element.offsetWidth === 0 || element.offsetHeight === 0) {
    return false;
  }
  return true;
};

// Function to find anchor elements in the HTML document
exports.isElementVisible = isElementVisible;
const findAnchorElements = () => {
  const anchorElements = document.querySelectorAll('a');
  return Array.from(anchorElements);
};
exports.findAnchorElements = findAnchorElements;
const getElementsWithVisibleText = () => {
  const elementsWithVisibleText = [];

  // Function to check if an element has visible text content
  function hasVisibleText(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.textContent.trim() !== '';
  }

  // Recursively traverse the DOM tree starting from the document body
  function traverse(element) {
    if (hasVisibleText(element)) {
      elementsWithVisibleText.push(element);
    }
    for (let i = 0; i < element.childNodes.length; i += 1) {
      const child = element.childNodes[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        traverse(child);
      }
    }
  }

  // Start the traversal from the document body
  traverse(document.body);
  return elementsWithVisibleText;
};
exports.getElementsWithVisibleText = getElementsWithVisibleText;
const getHeaderElementsWithVisibleText = () => {
  const elementsWithVisibleText = [];

  // Function to check if an element has visible text content
  function hasVisibleText(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.textContent.trim() !== '';
  }

  // Recursively traverse the DOM tree starting from the document body
  function traverse(element) {
    if (hasVisibleText(element) && (element.tagName.toLowerCase() === 'h1' || element.tagName.toLowerCase() === 'h2' || element.tagName.toLowerCase() === 'h3' || element.tagName.toLowerCase() === 'h4' || element.tagName.toLowerCase() === 'h5' || element.tagName.toLowerCase() === 'h6')) {
      elementsWithVisibleText.push(element);
    }
    for (let i = 0; i < element.childNodes.length; i += 1) {
      const child = element.childNodes[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        traverse(child);
      }
    }
  }

  // Start the traversal from the document body
  traverse(document.body);
  return elementsWithVisibleText;
};
exports.getHeaderElementsWithVisibleText = getHeaderElementsWithVisibleText;
const getElementDimensions = element => {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height
  };
};
exports.getElementDimensions = getElementDimensions;
const getElementHighlights = element => {
  const highlights = [];
  if (!element) {
    return highlights;
  }
  if (element.onclick) {
    highlights.push('onClick function');
  }
  if (element.tagName.toLowerCase() === 'a') {
    highlights.push('Link');
  }
  if (element.tagName.toLowerCase() === 'select') {
    highlights.push('select element');
  } else if (element.tagName.toLowerCase() === 'button') {
    highlights.push('button element');
  } else if (element.tagName.toLowerCase() === 'input') {
    highlights.push('input element');
  }
  return highlights;
};
exports.getElementHighlights = getElementHighlights;