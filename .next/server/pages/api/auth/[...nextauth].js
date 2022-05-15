"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/apple":
/*!********************************************!*\
  !*** external "next-auth/providers/apple" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/apple");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/instagram":
/*!************************************************!*\
  !*** external "next-auth/providers/instagram" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/instagram");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/apple */ \"next-auth/providers/apple\");\n/* harmony import */ var next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/instagram */ \"next-auth/providers/instagram\");\n/* harmony import */ var next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.APPLE_ID,\n            clientSecret: process.env.APPLE_SECRET\n        }),\n        next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.INSTAGRAM_CLIENT_ID,\n            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUN3QjtBQUNGO0FBQ1E7QUFFOUQsaUVBQWVBLGdEQUFRLENBQUM7SUFDdEIsaURBQWlEO0lBQ2pESSxTQUFTLEVBQUU7UUFDVEgsaUVBQWMsQ0FBQztZQUNiSSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtTQUMvQyxDQUFDO1FBQ0ZSLGdFQUFhLENBQUM7WUFDWkcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksUUFBUTtZQUM5QkYsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssWUFBWTtTQUN2QyxDQUFDO1FBQ0FULG9FQUFpQixDQUFDO1lBQ3BCRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxtQkFBbUI7WUFDekNKLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNPLHVCQUF1QjtTQUNsRCxDQUFDO0tBQ0Q7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2luc2h1a2kvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IEFwcGxlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXBwbGVcIjtcbmltcG9ydCBJbnN0YWdyYW1Qcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9pbnN0YWdyYW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxuICAgIH0pLFxuICAgIEFwcGxlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFQUExFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BUFBMRV9TRUNSRVRcbiAgICB9KSxcbiAgICAgIEluc3RhZ3JhbVByb3ZpZGVyKHtcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuSU5TVEFHUkFNX0NMSUVOVF9JRCxcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LklOU1RBR1JBTV9DTElFTlRfU0VDUkVUXG4gIH0pXG4gIF0sXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQXBwbGVQcm92aWRlciIsIkluc3RhZ3JhbVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiQVBQTEVfSUQiLCJBUFBMRV9TRUNSRVQiLCJJTlNUQUdSQU1fQ0xJRU5UX0lEIiwiSU5TVEFHUkFNX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();