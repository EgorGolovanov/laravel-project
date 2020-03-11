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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  document.getElementById('editbutton').addEventListener('click', function (e) {
    var parent = e.target.parentNode;
    parent.classList.add('edit-mode');
  });
  document.getElementById('cancelbutton').addEventListener('click', function (e) {
    var parent = e.target.parentNode;
    parent.classList.remove('edit-mode');
  }); //слушатель для обработки событий при выборе сортировки списка

  document.addEventListener("click", function (e) {
    if (e.target && e.target.matches("input[name='sort-radiobutton']")) {
      Sorting(e.target);
    }
  });
}; //функция для сортировки ul списка, где fields - входное условие для выбора сортировки


function Sorting(fields) {
  var listUl = document.getElementById('list-item');
  var newList = Sort(fields);
  listUl.innerHTML = '';
  makeUl(newList);
} //функция заполнения ul по входному массиву


function makeUl(array) {
  var list = document.getElementById('list-item');

  for (var i = 0; i < array.length; i++) {
    list.appendChild(array[i]);
  }

  return list;
} //функция сортировки массива по id или value


function Sort(fields) {
  //let nodeList = document.querySelectorAll('li');
  var list = document.getElementById('list-item');
  var nodeList = list.children;
  var itemsArray = [];

  for (var i = 0; i < nodeList.length; i++) {
    itemsArray.push(nodeList[i]);
  }

  itemsArray.sort(function (nodeA, nodeB) {
    //выбор нужнго поля для сортировки
    var textA = nodeA.querySelector('.' + fields.value).textContent;
    var textB = nodeB.querySelector('.' + fields.value).textContent; //проверка числовая или текстовая сортировка

    var A = parseInt(textA);
    var B = parseInt(textB);
    if (!A && B) B = textB;
    if (!B && A) A = textA;
    if (!A) A = textA;
    if (!B) B = textB;
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
  });
  if (fields.className.indexOf('asc') == -1) itemsArray.reverse();
  return itemsArray;
}

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/laravalProject/lists-laravel-project/resources/js/script.js */"./resources/js/script.js");


/***/ })

/******/ });