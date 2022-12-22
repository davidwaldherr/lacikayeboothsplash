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

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\n\n\nconst Item = (param)=>{\n    let { name , imageUrl  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"300\",\n        h: \"300\",\n        textAlign: \"center\",\n        overflow: \"hidden\",\n        position: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                src: imageUrl,\n                alt: name,\n                objectFit: \"cover\",\n                h: \"300\",\n                w: \"300\",\n                style: {\n                    display: \"block\",\n                    margin: \"0 auto\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                position: \"relative\",\n                top: \"50%\",\n                left: \"50%\",\n                p: \"4\",\n                bg: \"rgba(0, 0, 0, 0.7)\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: \"xl\",\n                    fontWeight: \"bold\",\n                    color: \"white\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                variantColor: \"teal\",\n                mt: 4,\n                children: \"Listen\"\n            }, void 0, false, {\n                fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEI7QUFDa0M7QUFFNUQsTUFBTUssT0FBTyxTQUF3QjtRQUF2QixFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRTtJQUM1QixxQkFDRSw4REFBQ04saURBQUdBO1FBQUNPLEdBQUU7UUFBTUMsR0FBRTtRQUFNQyxXQUFVO1FBQVNDLFVBQVM7UUFBU0MsVUFBUzs7MEJBQ2pFLDhEQUFDVixtREFBS0E7Z0JBQUNXLEtBQUtOO2dCQUFVTyxLQUFLUjtnQkFBTVMsV0FBVTtnQkFBUU4sR0FBRTtnQkFBTUQsR0FBRTtnQkFBTVEsT0FBTztvQkFBRUMsU0FBUztvQkFBU0MsUUFBUTtnQkFBUzs7Ozs7OzBCQUMvRyw4REFBQ2pCLGlEQUFHQTtnQkFBQ1csVUFBUztnQkFBV08sS0FBSTtnQkFBTUMsTUFBSztnQkFBTUMsR0FBRTtnQkFBSUMsSUFBRzswQkFDckQsNEVBQUNuQixrREFBSUE7b0JBQUNvQixVQUFTO29CQUFLQyxZQUFXO29CQUFPQyxPQUFNOzhCQUN6Q25COzs7Ozs7Ozs7OzswQkFHTCw4REFBQ0Ysb0RBQU1BO2dCQUFDc0IsY0FBYTtnQkFBT0MsSUFBSTswQkFBRzs7Ozs7Ozs7Ozs7O0FBS3pDO0tBZEl0QjtBQWdCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0l0ZW0uanM/ODBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBJbWFnZSwgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmNvbnN0IEl0ZW0gPSAoeyBuYW1lLCBpbWFnZVVybCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggdz1cIjMwMFwiIGg9XCIzMDBcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBvdmVyZmxvdz1cImhpZGRlblwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VVcmx9IGFsdD17bmFtZX0gb2JqZWN0Rml0PVwiY292ZXJcIiBoPVwiMzAwXCIgdz1cIjMwMFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzAgYXV0bycgfX0gLz5cbiAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgdG9wPVwiNTAlXCIgbGVmdD1cIjUwJVwiIHA9XCI0XCIgYmc9XCJyZ2JhKDAsIDAsIDAsIDAuNylcIj5cbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cInRlYWxcIiBtdD17NH0+XG4gICAgICAgICAgTGlzdGVuXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJJbWFnZSIsIlRleHQiLCJCdXR0b24iLCJJdGVtIiwibmFtZSIsImltYWdlVXJsIiwidyIsImgiLCJ0ZXh0QWxpZ24iLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwic3JjIiwiYWx0Iiwib2JqZWN0Rml0Iiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwidG9wIiwibGVmdCIsInAiLCJiZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwidmFyaWFudENvbG9yIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Item.js\n"));

/***/ })

});