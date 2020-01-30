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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_css__WEBPACK_IMPORTED_MODULE_0__);


async function getTable() {
  try {
    let response = await fetch("https://api.myjson.com/bins/z24ty");
    let data = response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

const Body = document.getElementsByTagName("body")[0];
let ShowCard;
let state = {
  elements: {}
};
getTable().then(data => {
  state.elements = data.table.elements;
  init(data);
}).catch(err => {});

function init(data) {
  const {
    order,
    elements
  } = data.table;

  const __lanthanides = [...order].slice(56, 71);

  const __actinides = [...order].slice(88, 103);

  const __allothers = order.filter(e => elements[e].category !== "lanthanide" && elements[e].category !== "actinide");

  const mkpFactory = makeElemMkp(elements);

  const others = __allothers.map(mkpFactory).join("");

  const lanthanides = __lanthanides.map(mkpFactory).join("");

  const actinides = __actinides.map(mkpFactory).join("");

  const html = tableMkp(others, lanthanides, actinides);
  render("app", `${html}`);
  ShowCard = document.getElementById("showcard");
  addPageEvents();
}

function render(elementId, mkp) {
  const element = document.querySelector(`#${elementId}`);
  element.innerHTML = mkp;
}

function makeElemMkp(elems) {
  return function (name) {
    return elemMkp(elems[name]);
  };
}

function elemMkp(data) {
  return `<div 
                    class="card element-${data.number} element-${data.symbol.toLowerCase()} ${quickSlug(data.category)}"
                    data-element="${data.name}"
                    >
                    ${cardMkp(data)}
                </div>`;
}

function cardMkp(data) {
  return `
    <div class="card-content">
        <div class="content">
            <div class="card-metrics">
                <h3>${data.number}</h3>  
            </div>
            <div class="card-name">
                <h1>${data.symbol}</h1>
                <p>${data.name}</p>   
                <!--<p>${data.atomic_mass.toFixed(4)}</p>-->                         
            </div>
        </div>
    </div>
    `;
}

function elemPage(data) {
  return `
        
                <div class="card element-card ${quickSlug(data.category)}">
                    ${cardMkp(data)}
                </div>
                <div class="element-content">
                    <p>${data.summary}</p>
                </div>
       
    `;
}

function tableMkp(others, lanthanides, actinides) {
  return `
        <div class='flashcards'>
            <div class='showCard' id='showcard'></div>
            <div class='lanthanide' id='lanth-row'>
                <h4>57 - 71</h4>
            </div>
            <div class='actinide' id='act-row'>
                <h4>89 - 103</h4>
            </div>
            ${others}
        </div>
        <div class='flashcards lanth-row'>
           ${lanthanides}
           <div class='card card-empty'></div> 
        </div>
        <div class='flashcards actin-row'>
            ${actinides}
            <div class='card card-empty'></div> 
        </div>
    `;
}

function quickSlug(str) {
  return !!str && str.split(" ").join("-");
}

function addPageEvents() {
  const CardsHandler = PageEventsHandler(".card");
  CardsHandler("click")(event => {
    const key = event.target.dataset.element.toLowerCase();
    showPage(key);
  });
}

function showPage(name) {
  const pageFragment = new DocumentFragment();
  const pageMkp = elemPage(state.elements[name]); //   const wrapper = document.createElement("div");
  //   wrapper.classList = "wrapper full-screen";
  //   wrapper.innerHTML = pageMkp;
  //   pageFragment.appendChild(wrapper);
  //Body.appendChild(pageFragment);

  ShowCard.innerHTML = pageMkp;
}

function PageEventsHandler(element) {
  return function (eventType) {
    return function (callback = null) {
      document.querySelectorAll(`#app ${element}`).forEach(el => el.addEventListener(eventType, event => {
        callback(event);
      }));
    };
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(4);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(0);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(5);
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
// Module
exports.push([module.i, "body {\n  padding: 0;\n  margin: 0;\n  font-family: \"Cambay\", serif;\n  font-size: 1.6em;\n  position: relative;\n  /* display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh; */\n}\n/** quick reset **/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul {\n  margin: 0;\n  padding: 0;\n}\nul,\nli {\n  list-style: none;\n}\n/** end quick reset **/\n\nh1,\nh2 {\n  font-family: \"Montserrat\", serif;\n}\n\n#app {\n  padding: 16px;\n  width: 100vw;\n  box-sizing: border-box;\n}\n.card {\n  padding-top: 100%;\n  border: 2px solid #333;\n  box-sizing: border-box;\n  position: relative;\n  cursor: pointer;\n}\n.card > * {\n  pointer-events: none;\n}\n.content {\n  width: 100%;\n  padding: 2px;\n  font-size: 1.25vh;\n}\n.card-metrics {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 4px;\n}\n.card-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-name {\n  font-weight: bold;\n  text-align: center;\n  line-height: auto;\n}\n.card-name > h1 {\n  font-size: 3.2em;\n}\n.card-empty {\n  border: none;\n}\n\n.full-screen {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n#element-page {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-template-rows: 1fr;\n  width: 100%;\n  height: 100%;\n}\n.element-card {\n  position: relative;\n}\n\n.reveal {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n#element-page {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-template-rows: 1fr;\n  width: 100%;\n  height: 100%;\n}\n.element-card {\n  position: relative;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(0);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app {\n  /* transform: scale(0.825); */\n}\n.flashcards {\n  display: grid;\n  grid-template-columns: repeat(18, 60px);\n  /* grid-template-columns: repeat(18, 1fr); */\n  grid-auto-rows: 60px;\n  gap: 4x;\n  margin-bottom: 4px;\n}\n#showcard {\n  grid-column: 3 / 13;\n  grid-row: 1 / 4;\n  display: grid;\n  grid-template-columns: 3fr 7fr;\n  /* height: 225px; */\n  min-height: 0; /* NEW */\n  min-width: 0; /* NEW; needed for Firefox */\n  overflow: scroll;\n  column-gap: 4px;\n}\n#lanth-row {\n  grid-column: 3;\n  grid-row: 6;\n  border: 2px solid #000;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#act-row {\n  grid-column: 3;\n  grid-row: 7;\n  border: 2px solid #000;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.element-2 {\n  grid-column-start: -2;\n}\n.element-5,\n.element-13 {\n  grid-column-start: 13;\n}\n.element-hf,\n.element-rf {\n  grid-column-start: 4;\n}\n.element-la,\n.element-ac {\n  grid-column-start: 3;\n}\n.element-uue {\n  display: none;\n}\n.lanth-row {\n  margin-top: 24px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(0);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card {\n    background-color: #9c9a9b;\n    color: #fbfffe;\n}\n.card-empty {\n    background-color: transparent;\n}\n\n.actinide {\n    background-color: #d146a3;\n}\n\n.alkali-metal {\n    background-color: #f13420;\n}\n\n.alkaline-earth-metal {\n    background-color: #f87c26;\n}\n\n.diatomic-nonmetal {\n    background-color: #60af42;\n}\n\n.lanthanide {\n    background-color: #6e57af;\n}\n\n.metalloid {\n    background-color: #b2792a;\n}\n\n.noble-gas {\n    background-color: #3dc2e3;\n}\n\n.polyatomic-nonmetal {\n    background-color: #5ac287;\n}\n\n.post-transition-metal {\n    background-color: #406285;\n}\n\n.transition-metal {\n    background-color: #3572b3;\n}", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);