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

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/error\"\n    },\n    callbacks: {\n        async redirect ({ url , baseUrl  }) {\n            // Allows relative callback URLs\n            if (url.startsWith(\"/\")) return `${baseUrl}${url}`;\n            else if (new URL(url).origin === baseUrl) return url;\n            return baseUrl;\n        }\n    },\n    theme: {\n        colorScheme: \"auto\",\n        brandColor: \"\",\n        logo: \"\" // Absolute URL to image\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3dCO0FBRXhELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCLGlEQUFpRDtJQUNqREUsU0FBUyxFQUFFO1FBQ1RELGlFQUFjLENBQUM7WUFDYkUsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7U0FDL0MsQ0FBQztLQUNIO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxNQUFNLEVBQUUsY0FBYztRQUN0QkMsS0FBSyxFQUFFLGFBQWE7S0FDckI7SUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsUUFBUSxFQUFDLEVBQUVDLEdBQUcsR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFDL0IsZ0NBQWdDO1lBQ2hDLElBQUlELEdBQUcsQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFRCxPQUFPLENBQUMsRUFBRUQsR0FBRyxDQUFDLENBQUM7aUJBRTdDLElBQUksSUFBSUcsR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0ksTUFBTSxLQUFLSCxPQUFPLEVBQUUsT0FBT0QsR0FBRztZQUNwRCxPQUFPQyxPQUFPO1NBQ2Y7S0FDRjtJQUNESSxLQUFLLEVBQUU7UUFDTEMsV0FBVyxFQUFFLE1BQU07UUFDbkJDLFVBQVUsRUFBRSxFQUFFO1FBQ2RDLElBQUksRUFBRSxFQUFFLENBQUMsd0JBQXdCO0tBQ2xDO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbnNodWtpLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxuICAgIH0pLFxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXG4gICAgZXJyb3I6ICcvYXV0aC9lcnJvcicsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHJlZGlyZWN0KHsgdXJsLCBiYXNlVXJsIH0pIHtcbiAgICAgIC8vIEFsbG93cyByZWxhdGl2ZSBjYWxsYmFjayBVUkxzXG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCIvXCIpKSByZXR1cm4gYCR7YmFzZVVybH0ke3VybH1gXG4gICAgICAvLyBBbGxvd3MgY2FsbGJhY2sgVVJMcyBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgIGVsc2UgaWYgKG5ldyBVUkwodXJsKS5vcmlnaW4gPT09IGJhc2VVcmwpIHJldHVybiB1cmxcbiAgICAgIHJldHVybiBiYXNlVXJsXG4gICAgfVxuICB9LFxuICB0aGVtZToge1xuICAgIGNvbG9yU2NoZW1lOiBcImF1dG9cIiwgLy8gXCJhdXRvXCIgfCBcImRhcmtcIiB8IFwibGlnaHRcIlxuICAgIGJyYW5kQ29sb3I6IFwiXCIsIC8vIEhleCBjb2xvciBjb2RlXG4gICAgbG9nbzogXCJcIiAvLyBBYnNvbHV0ZSBVUkwgdG8gaW1hZ2VcbiAgfVxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwiVVJMIiwib3JpZ2luIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImJyYW5kQ29sb3IiLCJsb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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