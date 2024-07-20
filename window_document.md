## `window` Object

- **Global Object**: The `window` object represents the global browsing context that contains the DOM (Document Object Model) and other browser-related properties and methods.
- **Top-Level Scope**: All global JavaScript variables, functions, and objects are members of the `window` object. This means you can access them globally without explicitly prefixing `window.`.
- **Browser Properties**: The `window` object provides access to various properties related to the browser window, such as `window.innerWidth`, `window.innerHeight` (dimensions of the viewport), `window.location` (URL of the current page), etc.
- **Methods**: It also provides methods like `window.alert()`, `window.open()`, `window.close()` for interacting with the user and manipulating the browser window.
- **Frames and Popups**: Manages frames and popups within the browser context.

## `document` Object

- **DOM Representation**: The `document` object represents the HTML document that is currently loaded in the browser window.
- **Access to DOM Elements**: It provides methods and properties to access and manipulate elements within the document, like `document.getElementById()`, `document.querySelector()`, etc.
- **Structure**: Represents the entire HTML structure as a tree-like structure of nodes (elements, text nodes, etc.).
- **Events**: Allows attaching event handlers to elements (`element.addEventListener()`) to respond to user actions or other events in the browser.
- **Content Manipulation**: Methods like `document.createElement()`, `document.createTextNode()`, `element.appendChild()` are used to dynamically create and modify the document's content.

## Key Differences

- **Scope**: `window` is the global object in the browser environment, encompassing everything in the browser window. `document` is a property of the `window` object that represents the DOM of the current web page.
- **Purpose**: `window` manages the overall browser environment and provides global functionality and properties. `document` specifically represents and manipulates the structure and content of the HTML document.
- **Access**: While `window` is always globally accessible, `document` is accessible within the scope of the current document.

## Example Usage

```javascript
// Accessing window properties
console.log(window.innerWidth);  // Output: Current viewport width

// Accessing document properties
console.log(document.title);     // Output: Title of the current HTML document
```
