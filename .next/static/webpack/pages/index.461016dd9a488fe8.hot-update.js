"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Carousel\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel */ \"./node_modules/react-alice-carousel/lib/react-alice-carousel.js\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data.js */ \"./data/data.js\");\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_data_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst responsive = {\n    0: {\n        items: 1\n    },\n    568: {\n        items: 2\n    },\n    1024: {\n        items: 3\n    }\n};\nconst Carousel = (param)=>{\n    let { images , links  } = param;\n    const items = images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: links[index],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: image,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Carousel.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Carousel.js\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {\n        mouseTracking: true,\n        items: items,\n        responsive: responsive,\n        controlsStrategy: \"alternate\"\n    }, void 0, false, {\n        fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Carousel.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDdUI7QUFDSTtBQUNMO0FBRWhELE1BQU1JLGFBQWE7SUFDakIsR0FBRztRQUFFQyxPQUFPO0lBQUU7SUFDZCxLQUFLO1FBQUVBLE9BQU87SUFBRTtJQUNoQixNQUFNO1FBQUVBLE9BQU87SUFBRTtBQUNuQjtBQUVPLE1BQU1DLFdBQVcsU0FBdUI7UUFBdEIsRUFBRUosT0FBTSxFQUFFQyxNQUFLLEVBQUU7SUFDeEMsTUFBTUUsUUFBUUgsT0FBT0ssR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUMvQiw4REFBQ0M7WUFBRUMsTUFBTVIsS0FBSyxDQUFDTSxNQUFNO3NCQUNuQiw0RUFBQ0c7Z0JBQUlDLEtBQUtMO2dCQUFPTSxLQUFJOzs7Ozs7Ozs7OztJQUl6QixxQkFDRSw4REFBQ2IsNkRBQWFBO1FBQ1pjLGFBQWE7UUFDYlYsT0FBT0E7UUFDUEQsWUFBWUE7UUFDWlksa0JBQWlCOzs7Ozs7QUFHdkIsRUFBQztLQWZZVjtBQWlCYiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzPzI3YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gJ3JlYWN0LWFsaWNlLWNhcm91c2VsJztcbmltcG9ydCAncmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzcyc7XG5pbXBvcnQgeyBpbWFnZXMsIGxpbmtzIH0gZnJvbSAnLi4vZGF0YS9kYXRhLmpzJztcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgMDogeyBpdGVtczogMSB9LFxuICA1Njg6IHsgaXRlbXM6IDIgfSxcbiAgMTAyNDogeyBpdGVtczogMyB9LFxufTtcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsID0gKHsgaW1hZ2VzLCBsaW5rcyB9KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgPGEgaHJlZj17bGlua3NbaW5kZXhdfT5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiXCIgLz5cbiAgICA8L2E+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgIG1vdXNlVHJhY2tpbmdcbiAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICBjb250cm9sc1N0cmF0ZWd5PVwiYWx0ZXJuYXRlXCJcbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJBbGljZUNhcm91c2VsIiwiaW1hZ2VzIiwibGlua3MiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJDYXJvdXNlbCIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIm1vdXNlVHJhY2tpbmciLCJjb250cm9sc1N0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel.js\n"));

/***/ })

});