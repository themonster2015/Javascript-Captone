/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Comic Sans MS\\\", \\\"Comic Sans\\\", cursive;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  text-decoration: none;\\r\\n  color: #222;\\r\\n}\\r\\n\\r\\n.navbar-brand {\\r\\n  width: 120px;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  bottom: 0;\\r\\n  height: 100px;\\r\\n  width: 100%;\\r\\n  border-top: 2px solid black;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nfooter > p {\\r\\n  margin-left: 30px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  padding-bottom: 30px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  max-width: 90%;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.pokeWrapper {\\r\\n  flex-basis: 33.333333%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.pokeImg {\\r\\n  max-width: 50%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  max-width: 50%;\\r\\n}\\r\\n\\r\\n.cmtBtn {\\r\\n  box-shadow: 5px 5px;\\r\\n  border-radius: 0 !important;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.comments-modal {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  width: 50%;\\r\\n  margin-top: 60px;\\r\\n  background-color: white;\\r\\n  padding: 2rem 6rem;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.close-modal {\\r\\n  position: absolute;\\r\\n  top: 1.2rem;\\r\\n  right: 2rem;\\r\\n  font-size: 5rem;\\r\\n  color: #333;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.pokemon__img {\\r\\n  width: 50%;\\r\\n  height: 50%;\\r\\n}\\r\\n\\r\\n.pokemon__img__container {\\r\\n  border: 1px solid #333;\\r\\n  background: #ffd60a;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-captone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-captone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-captone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-captone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-captone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-captone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-captone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-captone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-captone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/countPokemons.js":
/*!******************************!*\
  !*** ./src/countPokemons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countPokemons = (data) => data.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countPokemons);\n\n//# sourceURL=webpack://javascript-captone/./src/countPokemons.js?");

/***/ }),

/***/ "./src/fetchInteractions.js":
/*!**********************************!*\
  !*** ./src/fetchInteractions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchLikes\": () => (/* binding */ fetchLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst fetchLikes = async () => {\r\n  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FgxwWwDd7byG5fwpAa6v/likes/')\r\n    .then((res) => res.json())\r\n    .then((res) => res);\r\n  return data;\r\n};\r\n\r\nconst postLike = async (id) => {\r\n  const data = {\r\n    item_id: id,\r\n  };\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FgxwWwDd7byG5fwpAa6v/likes/', {\r\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\r\n    mode: 'cors', // no-cors, *cors, same-origin\r\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\r\n    credentials: 'same-origin', // include, *same-origin, omit\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n      // 'Content-Type': 'application/x-www-form-urlencoded',\r\n    },\r\n    redirect: 'follow', // manual, *follow, error\r\n    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url\r\n    body: JSON.stringify(data), // body data type must match \"Content-Type\" header);\r\n\r\n  })\r\n    .then((res) => res.status);\r\n};\r\n\n\n//# sourceURL=webpack://javascript-captone/./src/fetchInteractions.js?");

/***/ }),

/***/ "./src/fetchPoke.js":
/*!**************************!*\
  !*** ./src/fetchPoke.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPokeStats\": () => (/* binding */ fetchPokeStats),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokeUrl = 'https://pokeapi.co/api/v2/pokemon';\r\n\r\nconst fetchPoke = async () => {\r\n  const data = await fetch(`${pokeUrl}?limit=6`)\r\n    .then((res) => res.json())\r\n    .then((res) => res.results);\r\n  return data;\r\n};\r\n\r\nconst fetchPokeStats = async (index) => {\r\n  const stats = {};\r\n\r\n  const res = await fetch(`${pokeUrl}/${index}`);\r\n  const data = await res.json();\r\n\r\n  stats.height = data.height;\r\n  stats.moves = data.moves.length;\r\n  stats.weight = data.weight;\r\n  stats.order = data.order;\r\n\r\n  return stats;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPoke);\n\n//# sourceURL=webpack://javascript-captone/./src/fetchPoke.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _fetchPoke_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchPoke.js */ \"./src/fetchPoke.js\");\n/* harmony import */ var _loadPoke_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadPoke.js */ \"./src/loadPoke.js\");\n/* harmony import */ var _fetchInteractions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchInteractions.js */ \"./src/fetchInteractions.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = async () => {\r\n  (0,_loadPoke_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(await (0,_fetchPoke_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), await (0,_fetchInteractions_js__WEBPACK_IMPORTED_MODULE_3__.fetchLikes)());\r\n};\n\n//# sourceURL=webpack://javascript-captone/./src/index.js?");

/***/ }),

/***/ "./src/loadPoke.js":
/*!*************************!*\
  !*** ./src/loadPoke.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchInteractions */ \"./src/fetchInteractions.js\");\n/* harmony import */ var _countPokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countPokemons */ \"./src/countPokemons.js\");\n/* harmony import */ var _loadPokeDetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadPokeDetail.js */ \"./src/loadPokeDetail.js\");\n\r\n\r\n\r\n\r\nconst list = document.getElementsByClassName('list');\r\nconst el = document.getElementById('pokeCounter');\r\n\r\nconst loadPoke = (data, likes) => {\r\n  const countPoke = (0,_countPokemons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n  el.innerHTML = `Pokemons(${countPoke})`;\r\n\r\n  data.forEach((poke, index) => {\r\n    const wrapper = document.createElement('div');\r\n    wrapper.classList.add('card');\r\n    const img = document.createElement('img');\r\n    const description = document.createElement('div');\r\n    const cardBody = document.createElement('div');\r\n    cardBody.classList.add('card-body');\r\n    description.classList.add('description');\r\n    const name = document.createElement('span');\r\n    name.classList.add('card-title');\r\n    const pokeName = poke.name.slice(0, 1).toUpperCase() + poke.name.slice(1);\r\n    name.innerHTML = pokeName;\r\n    const likeDiv = document.createElement('div');\r\n    likeDiv.classList.add('d-flex', 'flex-column');\r\n    let likeCount;\r\n    const item = likes.filter((i) => i.item_id === poke.name);\r\n    if (item.length === 0) {\r\n      likeCount = 0;\r\n    } else {\r\n      likeCount = item[0].likes;\r\n    }\r\n    const likeBtn = document.createElement('btn');\r\n    likeBtn.classList.add('btn');\r\n    likeBtn.innerHTML += \"<i class='fa fa-heart' aria-hidden='true'></i>\";\r\n    likeBtn.addEventListener('click', () => {\r\n      (0,_fetchInteractions__WEBPACK_IMPORTED_MODULE_0__.postLike)(poke.name).then(() => {\r\n        window.location.reload();\r\n      });\r\n    });\r\n\r\n    likeDiv.appendChild(likeBtn);\r\n    const likeCounter = document.createElement('span');\r\n    likeCounter.innerHTML = `${likeCount} likes`;\r\n    wrapper.classList.add('pokeWrapper');\r\n    likeDiv.appendChild(likeCounter);\r\n    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`;\r\n    img.setAttribute('src', imgUrl);\r\n    img.setAttribute('alt', 'Pokemon');\r\n    img.classList.add('pokeImg', 'card-img-top');\r\n    const commentBtn = document.createElement('btn');\r\n    commentBtn.classList.add('cmtBtn', 'btn', 'btn-outline-dark', 'btn-lg');\r\n    commentBtn.innerText = 'Comments';\r\n    commentBtn.addEventListener('click', _loadPokeDetail_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(undefined, imgUrl, pokeName, index));\r\n\r\n    wrapper.appendChild(img);\r\n    description.appendChild(name);\r\n    description.appendChild(likeDiv);\r\n    cardBody.appendChild(description);\r\n    cardBody.appendChild(commentBtn);\r\n    wrapper.appendChild(cardBody);\r\n    list[0].appendChild(wrapper);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPoke);\r\n\n\n//# sourceURL=webpack://javascript-captone/./src/loadPoke.js?");

/***/ }),

/***/ "./src/loadPokeDetail.js":
/*!*******************************!*\
  !*** ./src/loadPokeDetail.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchPoke_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchPoke.js */ \"./src/fetchPoke.js\");\n\r\n\r\nconst commentModalDiv = document.querySelector('.comments-modal');\r\n\r\nconst loadPokeDetail = async (imgUrl, pokeName, index) => {\r\n  index += 1;\r\n  const stats = await (0,_fetchPoke_js__WEBPACK_IMPORTED_MODULE_0__.fetchPokeStats)(index);\r\n\r\n  const html = `\r\n  <article class=\"d-flex flex-column justify-content-center\">\r\n    <button class=\"close-modal\">&times;</button>\r\n    <div class=\"pokemon__img__container d-flex justify-content-center w-100\">\r\n      <img class=\"pokemon__img\" src=\"${imgUrl}\" />\r\n    </div>\r\n    <div class=\"pokemon__data\">\r\n      <h3 class=\"pokemon__name text-center mt-3 text-primary\">${pokeName}</h3>\r\n      <div class=\"d-flex justify-content-between\">\r\n        <p class=\"pokemon__row\"><span>Height:</span>${stats.height}</p>\r\n        <p class=\"pokemon__row\"><span>Moves:</span>${stats.moves}</p>\r\n      </div>\r\n      <div class=\"d-flex justify-content-between\">\r\n        <p class=\"pokemon__row\"><span>Weight:</span>${stats.weight}</p>\r\n        <p class=\"pokemon__row\"><span>Order:</span>${stats.order}</p>\r\n      </div>\r\n    </div>\r\n  `;\r\n  commentModalDiv.insertAdjacentHTML('beforeend', html);\r\n  commentModalDiv.classList.remove('hidden');\r\n\r\n  const btnCloseModal = document.querySelector('.close-modal');\r\n  const closeModal = () => {\r\n    commentModalDiv.classList.add('hidden');\r\n    commentModalDiv.innerHTML = '';\r\n  };\r\n\r\n  btnCloseModal.addEventListener('click', closeModal.bind(null));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPokeDetail);\n\n//# sourceURL=webpack://javascript-captone/./src/loadPokeDetail.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;