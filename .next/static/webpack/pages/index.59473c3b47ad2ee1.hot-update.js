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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Item = (param)=>{\n    let { name , imageUrl  } = param;\n    _s();\n    const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                w: \"300\",\n                h: \"300\",\n                textAlign: \"center\",\n                overflow: \"hidden\",\n                position: \"relative\",\n                bg: \"rgba(0, 0, 0, 0.7)\",\n                pt: \"4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: imageUrl,\n                        alt: name,\n                        objectFit: \"cover\",\n                        h: \"300\",\n                        w: \"300\",\n                        style: {\n                            display: \"block\",\n                            margin: \"0 auto\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        position: \"absolute\",\n                        top: \"0\",\n                        left: \"0\",\n                        right: \"0\",\n                        bottom: \"0\",\n                        p: \"4\",\n                        textAlign: \"center\",\n                        bg: hover ? \"rgba(0, 0, 0, 0.7)\" : \"rgba(0, 0, 0, 0)\",\n                        color: hover ? \"#fca1da\" : \"black\",\n                        transition: \"0.3s\",\n                        onMouseEnter: ()=>{\n                            setHover(true);\n                        },\n                        onMouseLeave: ()=>{\n                            setHover(false);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: \"xl\",\n                            fontWeight: \"bold\",\n                            fontFamily: \"corsiva\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                position: \"relative\",\n                mt: 4,\n                textAlign: \"center\",\n                bg: \"rgba(0, 0, 0, 0.7)\",\n                pt: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    outlineColor: \"black\",\n                    fontSize: \"65\",\n                    color: \"#fca1da\",\n                    fontWeight: \"bold\",\n                    fontFamily: \"corsiva\",\n                    children: \"~Listen~\"\n                }, void 0, false, {\n                    fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/DavidWaldherr_1/Desktop/davedev/lacikayeboothsplash/components/Item.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Item, \"bRXmKus9fOZFlca/6zXTYU+twGY=\");\n_c = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2tDO0FBQzNCO0FBRWpDLE1BQU1NLE9BQU8sU0FBd0I7UUFBdkIsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUU7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVixxREFBYyxDQUFDLEtBQUs7SUFFOUMscUJBQ0k7OzBCQUdKLDhEQUFDQyxpREFBR0E7Z0JBQUNVLEdBQUU7Z0JBQU1DLEdBQUU7Z0JBQU1DLFdBQVU7Z0JBQVNDLFVBQVM7Z0JBQVNDLFVBQVM7Z0JBQVdDLElBQUc7Z0JBQXFCQyxJQUFHOztrQ0FDckcsOERBQUNmLG1EQUFLQTt3QkFBQ2dCLEtBQUtWO3dCQUFVVyxLQUFLWjt3QkFBTWEsV0FBVTt3QkFBUVIsR0FBRTt3QkFBTUQsR0FBRTt3QkFBTVUsT0FBTzs0QkFBRUMsU0FBUzs0QkFBU0MsUUFBUTt3QkFBUzs7Ozs7O2tDQUMvRyw4REFBQ3RCLGlEQUFHQTt3QkFDRmMsVUFBUzt3QkFDVFMsS0FBSTt3QkFDSkMsTUFBSzt3QkFDTEMsT0FBTTt3QkFDTkMsUUFBTzt3QkFDUEMsR0FBRTt3QkFDRmYsV0FBVTt3QkFDVkcsSUFBSVAsUUFBUSx1QkFBdUIsa0JBQWtCO3dCQUNyRG9CLE9BQU9wQixRQUFRLFlBQVksT0FBTzt3QkFDbENxQixZQUFXO3dCQUNYQyxjQUFjLElBQU07NEJBQ2xCckIsU0FBUyxJQUFJO3dCQUNmO3dCQUNBc0IsY0FBYyxJQUFNOzRCQUNsQnRCLFNBQVMsS0FBSzt3QkFDaEI7a0NBRUEsNEVBQUNQLGtEQUFJQTs0QkFBQzhCLFVBQVM7NEJBQUtDLFlBQVc7NEJBQU9DLFlBQVk7c0NBQy9DNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtQLDhEQUFDTixpREFBR0E7Z0JBQUNjLFVBQVM7Z0JBQVdxQixJQUFJO2dCQUFHdkIsV0FBVTtnQkFBU0csSUFBRztnQkFBcUJDLElBQUc7MEJBQzVFLDRFQUFDZCxrREFBSUE7b0JBQUNrQyxjQUFhO29CQUFTSixVQUFTO29CQUFLSixPQUFNO29CQUFVSyxZQUFXO29CQUFPQyxZQUFZOzhCQUFXOzs7Ozs7Ozs7Ozs7O0FBUXpHO0dBMUNJN0I7S0FBQUE7QUE0Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JdGVtLmpzPzgwZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEl0ZW0gPSAoeyBuYW1lLCBpbWFnZVVybCB9KSA9PiB7XG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICBcbiAgICA8Qm94IHc9XCIzMDBcIiBoPVwiMzAwXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgYmc9XCJyZ2JhKDAsIDAsIDAsIDAuNylcIiBwdD1cIjRcIj5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VVcmx9IGFsdD17bmFtZX0gb2JqZWN0Rml0PVwiY292ZXJcIiBoPVwiMzAwXCIgdz1cIjMwMFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzAgYXV0bycgfX0gLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD1cIjBcIlxuICAgICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgICByaWdodD1cIjBcIlxuICAgICAgICAgIGJvdHRvbT1cIjBcIlxuICAgICAgICAgIHA9XCI0XCJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGJnPXtob3ZlciA/ICdyZ2JhKDAsIDAsIDAsIDAuNyknIDogJ3JnYmEoMCwgMCwgMCwgMCknfVxuICAgICAgICAgIGNvbG9yPXtob3ZlciA/IFwiI2ZjYTFkYVwiIDogJ2JsYWNrJ31cbiAgICAgICAgICB0cmFuc2l0aW9uPVwiMC4zc1wiXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRIb3Zlcih0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0SG92ZXIoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBmb250RmFtaWx5PXsnY29yc2l2YSd9PlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICBcbiAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIG10PXs0fSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBiZz1cInJnYmEoMCwgMCwgMCwgMC43KVwiIHB0PVwiNFwiPlxuICAgICAgICA8VGV4dCBvdXRsaW5lQ29sb3I9XCJibGFja1wiICBmb250U2l6ZT1cIjY1XCIgY29sb3I9XCIjZmNhMWRhXCIgZm9udFdlaWdodD1cImJvbGRcIiBmb250RmFtaWx5PXsnY29yc2l2YSd9PlxuICAgICAgICAgIH5MaXN0ZW5+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICBcbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiSW1hZ2UiLCJUZXh0IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJJdGVtIiwibmFtZSIsImltYWdlVXJsIiwiaG92ZXIiLCJzZXRIb3ZlciIsInciLCJoIiwidGV4dEFsaWduIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImJnIiwicHQiLCJzcmMiLCJhbHQiLCJvYmplY3RGaXQiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJwIiwiY29sb3IiLCJ0cmFuc2l0aW9uIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsIm10Iiwib3V0bGluZUNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Item.js\n"));

/***/ })

});