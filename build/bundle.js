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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTable() {
  return _getTable.apply(this, arguments);
}

function _getTable() {
  _getTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://api.myjson.com/bins/z24ty");

          case 3:
            response = _context.sent;
            data = response.json();
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getTable.apply(this, arguments);
}

var Body = document.getElementsByTagName("body")[0];
var ShowCard;
var state = {
  elements: {}
};
getTable().then(function (data) {
  state.elements = data.table.elements;
  init(data);
})["catch"](function (err) {});

function init(data) {
  var _data$table = data.table,
      order = _data$table.order,
      elements = _data$table.elements;

  var __lanthanides = _toConsumableArray(order).slice(56, 71);

  var __actinides = _toConsumableArray(order).slice(88, 103);

  var __allothers = order.filter(function (e) {
    return elements[e].category !== "lanthanide" && elements[e].category !== "actinide";
  });

  var mkpFactory = makeElemMkp(elements);

  var others = __allothers.map(mkpFactory).join("");

  var lanthanides = __lanthanides.map(mkpFactory).join("");

  var actinides = __actinides.map(mkpFactory).join("");

  var html = tableMkp(others, lanthanides, actinides);
  render("app", "".concat(html));
  ShowCard = document.getElementById("showcard");
  addPageEvents();
}

function render(elementId, mkp) {
  var element = document.querySelector("#".concat(elementId));
  element.innerHTML = mkp;
}

function makeElemMkp(elems) {
  return function (name) {
    return elemMkp(elems[name]);
  };
}

function elemMkp(data) {
  return "<div \n                    class=\"card element-".concat(data.number, " element-").concat(data.symbol.toLowerCase(), " ").concat(quickSlug(data.category), "\"\n                    data-element=\"").concat(data.name, "\"\n                    >\n                    ").concat(cardMkp(data), "\n                </div>");
}

function cardMkp(data) {
  return "\n    <div class=\"card-content\">\n        <div class=\"content\">\n            <div class=\"card-metrics\">\n                <h3>".concat(data.number, "</h3>  \n            </div>\n            <div class=\"card-name\">\n                <h1>").concat(data.symbol, "</h1>\n                <p>").concat(data.name, "</p>   \n                <!--<p>").concat(data.atomic_mass.toFixed(4), "</p>-->                         \n            </div>\n        </div>\n    </div>\n    ");
}

function elemPage(data) {
  return "\n        \n                <div class=\"card element-card ".concat(quickSlug(data.category), "\">\n                    ").concat(cardMkp(data), "\n                </div>\n                <div class=\"element-content\">\n                    <p>").concat(data.summary, "</p>\n                </div>\n       \n    ");
}

function tableMkp(others, lanthanides, actinides) {
  return "\n        <div class='flashcards'>\n            <div class='showCard' id='showcard'></div>\n            <div class='lanthanide' id='lanth-row'>\n                <h4>57 - 71</h4>\n            </div>\n            <div class='actinide' id='act-row'>\n                <h4>89 - 103</h4>\n            </div>\n            ".concat(others, "\n        </div>\n        <div class='flashcards lanth-row'>\n           ").concat(lanthanides, "\n           <div class='card card-empty'></div> \n        </div>\n        <div class='flashcards actin-row'>\n            ").concat(actinides, "\n            <div class='card card-empty'></div> \n        </div>\n    ");
}

function quickSlug(str) {
  return !!str && str.split(" ").join("-");
}

function addPageEvents() {
  var CardsHandler = PageEventsHandler(".card");
  CardsHandler("click")(function (event) {
    var key = event.target.dataset.element.toLowerCase();
    showPage(key);
  });
}

function showPage(name) {
  var pageFragment = new DocumentFragment();
  var pageMkp = elemPage(state.elements[name]); //   const wrapper = document.createElement("div");
  //   wrapper.classList = "wrapper full-screen";
  //   wrapper.innerHTML = pageMkp;
  //   pageFragment.appendChild(wrapper);
  //Body.appendChild(pageFragment);

  ShowCard.innerHTML = pageMkp;
}

function PageEventsHandler(element) {
  return function (eventType) {
    return function () {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      document.querySelectorAll("#app ".concat(element)).forEach(function (el) {
        return el.addEventListener(eventType, function (event) {
          callback(event);
        });
      });
    };
  };
}

/***/ })
/******/ ]);