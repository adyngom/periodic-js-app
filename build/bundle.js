/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles.css */ \"./assets/styles.css\");\n/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function getTable() {\n  try {\n    let response = await fetch(\"https://api.myjson.com/bins/z24ty\");\n    let data = response.json();\n    return data;\n  } catch (err) {\n    throw err;\n  }\n}\n\nconst Body = document.getElementsByTagName(\"body\")[0];\nlet ShowCard;\nlet state = {\n  elements: {}\n};\ngetTable().then(data => {\n  state.elements = data.table.elements;\n  init(data);\n}).catch(err => {});\n\nfunction init(data) {\n  const {\n    order,\n    elements\n  } = data.table;\n\n  const __lanthanides = [...order].slice(56, 71);\n\n  const __actinides = [...order].slice(88, 103);\n\n  const __allothers = order.filter(e => elements[e].category !== \"lanthanide\" && elements[e].category !== \"actinide\");\n\n  const mkpFactory = makeElemMkp(elements);\n\n  const others = __allothers.map(mkpFactory).join(\"\");\n\n  const lanthanides = __lanthanides.map(mkpFactory).join(\"\");\n\n  const actinides = __actinides.map(mkpFactory).join(\"\");\n\n  const html = tableMkp(others, lanthanides, actinides);\n  render(\"app\", `${html}`);\n  ShowCard = document.getElementById(\"showcard\");\n  addPageEvents();\n}\n\nfunction render(elementId, mkp) {\n  const element = document.querySelector(`#${elementId}`);\n  element.innerHTML = mkp;\n}\n\nfunction makeElemMkp(elems) {\n  return function (name) {\n    return elemMkp(elems[name]);\n  };\n}\n\nfunction elemMkp(data) {\n  return `<div \n                    class=\"card element-${data.number} element-${data.symbol.toLowerCase()} ${quickSlug(data.category)}\"\n                    data-element=\"${data.name}\"\n                    >\n                    ${cardMkp(data)}\n                </div>`;\n}\n\nfunction cardMkp(data) {\n  return `\n    <div class=\"card-content\">\n        <div class=\"content\">\n            <div class=\"card-metrics\">\n                <h3>${data.number}</h3>  \n            </div>\n            <div class=\"card-name\">\n                <h1>${data.symbol}</h1>\n                <p>${data.name}</p>   \n                <!--<p>${data.atomic_mass.toFixed(4)}</p>-->                         \n            </div>\n        </div>\n    </div>\n    `;\n}\n\nfunction elemPage(data) {\n  return `\n        \n                <div class=\"card element-card ${quickSlug(data.category)}\">\n                    ${cardMkp(data)}\n                </div>\n                <div class=\"element-content\">\n                    <p>${data.summary}</p>\n                </div>\n       \n    `;\n}\n\nfunction tableMkp(others, lanthanides, actinides) {\n  return `\n        <div class='flashcards'>\n            <div class='showCard' id='showcard'></div>\n            <div class='lanthanide' id='lanth-row'>\n                <h4>57 - 71</h4>\n            </div>\n            <div class='actinide' id='act-row'>\n                <h4>89 - 103</h4>\n            </div>\n            ${others}\n        </div>\n        <div class='flashcards lanth-row'>\n           ${lanthanides}\n           <div class='card card-empty'></div> \n        </div>\n        <div class='flashcards actin-row'>\n            ${actinides}\n            <div class='card card-empty'></div> \n        </div>\n    `;\n}\n\nfunction quickSlug(str) {\n  return !!str && str.split(\" \").join(\"-\");\n}\n\nfunction addPageEvents() {\n  const CardsHandler = PageEventsHandler(\".card\");\n  CardsHandler(\"click\")(event => {\n    const key = event.target.dataset.element.toLowerCase();\n    showPage(key);\n  });\n}\n\nfunction showPage(name) {\n  const pageFragment = new DocumentFragment();\n  const pageMkp = elemPage(state.elements[name]); //   const wrapper = document.createElement(\"div\");\n  //   wrapper.classList = \"wrapper full-screen\";\n  //   wrapper.innerHTML = pageMkp;\n  //   pageFragment.appendChild(wrapper);\n  //Body.appendChild(pageFragment);\n\n  ShowCard.innerHTML = pageMkp;\n}\n\nfunction PageEventsHandler(element) {\n  return function (eventType) {\n    return function (callback = null) {\n      document.querySelectorAll(`#app ${element}`).forEach(el => el.addEventListener(eventType, event => {\n        callback(event);\n      }));\n    };\n  };\n}\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./assets/styles.css":
/*!***************************!*\
  !*** ./assets/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./assets/styles.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/colors.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/colors.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".card {\\n    background-color: #9c9a9b;\\n    color: #fbfffe;\\n}\\n.card-empty {\\n    background-color: transparent;\\n}\\n\\n.actinide {\\n    background-color: #d146a3;\\n}\\n\\n.alkali-metal {\\n    background-color: #f13420;\\n}\\n\\n.alkaline-earth-metal {\\n    background-color: #f87c26;\\n}\\n\\n.diatomic-nonmetal {\\n    background-color: #60af42;\\n}\\n\\n.lanthanide {\\n    background-color: #6e57af;\\n}\\n\\n.metalloid {\\n    background-color: #b2792a;\\n}\\n\\n.noble-gas {\\n    background-color: #3dc2e3;\\n}\\n\\n.polyatomic-nonmetal {\\n    background-color: #5ac287;\\n}\\n\\n.post-transition-metal {\\n    background-color: #406285;\\n}\\n\\n.transition-metal {\\n    background-color: #3572b3;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./assets/colors.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/grid.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/grid.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#app {\\n  transform: scale(0.825);\\n}\\n.flashcards {\\n  display: grid;\\n  grid-template-columns: repeat(18, 1fr);\\n  /* grid-template-columns: repeat(18, 1fr); */\\n  column-gap: 8px;\\n  row-gap: 8px;\\n  margin-bottom: 8px;\\n}\\n#showcard {\\n  grid-column: 3 / 13;\\n  grid-row: 1 / 4;\\n  display: grid;\\n  grid-template-columns: 3fr 7fr;\\n  /* height: 225px; */\\n  min-height: 0; /* NEW */\\n  min-width: 0; /* NEW; needed for Firefox */\\n  overflow: scroll;\\n  column-gap: 8px;\\n}\\n#lanth-row {\\n  grid-column: 3;\\n  grid-row: 6;\\n  border: 2px solid #000;\\n  color: #fff;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#act-row {\\n  grid-column: 3;\\n  grid-row: 7;\\n  border: 2px solid #000;\\n  color: #fff;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.element-2 {\\n  grid-column-start: -2;\\n}\\n.element-5,\\n.element-13 {\\n  grid-column-start: 13;\\n}\\n.element-hf,\\n.element-rf {\\n  grid-column-start: 4;\\n}\\n.element-la,\\n.element-ac {\\n  grid-column-start: 3;\\n}\\n.element-uue {\\n  display: none;\\n}\\n.lanth-row {\\n  margin-top: 24px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./assets/grid.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/styles.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./grid.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/grid.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./colors.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/colors.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\n// Module\nexports.push([module.i, \"body {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Cambay\\\", serif;\\n  font-size: 1.6em;\\n  position: relative;\\n  /* display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100vw;\\n    height: 100vh; */\\n}\\n/** quick reset **/\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul {\\n  margin: 0;\\n  padding: 0;\\n}\\nul,\\nli {\\n  list-style: none;\\n}\\n/** end quick reset **/\\n\\nh1,\\nh2 {\\n  font-family: \\\"Montserrat\\\", serif;\\n}\\n\\n#app {\\n  padding: 16px;\\n  width: 100vw;\\n  box-sizing: border-box;\\n}\\n.card {\\n  padding-top: 100%;\\n  border: 2px solid #333;\\n  box-sizing: border-box;\\n  position: relative;\\n  cursor: pointer;\\n}\\n.card > * {\\n  pointer-events: none;\\n}\\n.content {\\n  width: 100%;\\n  padding: 2px;\\n  font-size: 1.25vh;\\n}\\n.card-metrics {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 4px;\\n}\\n.card-content {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.card-name {\\n  font-weight: bold;\\n  text-align: center;\\n  line-height: auto;\\n}\\n.card-name > h1 {\\n  font-size: 3.2em;\\n}\\n.card-empty {\\n  border: none;\\n}\\n\\n.full-screen {\\n  position: absolute;\\n  background: #fff;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n}\\n#element-page {\\n  display: grid;\\n  grid-template-columns: 2fr 3fr;\\n  grid-template-rows: 1fr;\\n  width: 100%;\\n  height: 100%;\\n}\\n.element-card {\\n  position: relative;\\n}\\n\\n.reveal {\\n  position: absolute;\\n  background: #fff;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n}\\n#element-page {\\n  display: grid;\\n  grid-template-columns: 2fr 3fr;\\n  grid-template-rows: 1fr;\\n  width: 100%;\\n  height: 100%;\\n}\\n.element-card {\\n  position: relative;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./assets/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });