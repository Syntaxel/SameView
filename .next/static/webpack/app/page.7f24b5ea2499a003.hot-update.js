"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _session_data_user, _session_data;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.redirect)(\"/auth/login\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"absolute pl-[42px] pt-[20px] text-[34px] font-medium\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-[900px] h-[550px] bg-white rounded-3xl m-auto items-center justify-evenly\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[350px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-[120px] h-[120px] bg-[#93939357] rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[23px] font-medium\",\n                                    children: \"Welcome,\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[22px] font-bold\",\n                                    children: [\n                                        session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.email,\n                                        \" !\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Edit username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n                                    },\n                                    className: \"flex mt-[10px] bg-red-400 rounded-xl w-[110px] h-[40px] text-[20px] items-center justify-center font-semibold\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[450px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex w-[220px] text-[30px] font-semibold text-center\",\n                                    children: \"Join or Create a lobby\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter lobby code\",\n                                    onChange: (e)=>{\n                                        setLobbyCode(e.target.value);\n                                    },\n                                    className: \"border-[2px] text-[25px] font-medium mt-[20px] bg-[#f3f3f3] border-[#757575] duration-[300ms] outline-none rounded-[18px] w-[350px] h-[60px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Join\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"TLdHK4K4L7Pm+aVG7dSGM4qSxic=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nHome.requireAuth = true;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNzRDtBQUNYO0FBQ1Y7QUFFbEIsU0FBU0k7UUFtQmlDQyxvQkFBQUE7O0lBaEJ2RCxNQUFNQSxVQUFVSiwyREFBVUEsQ0FBQztRQUN6QkssVUFBVTtRQUNWQztZQUNFTCx5REFBUUEsQ0FBQztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF1RDs7Ozs7OzhCQUNyRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzs7Ozs7OENBQ2YsOERBQUNFO29DQUFFRixXQUFVOzhDQUErQjs7Ozs7OzhDQUM1Qyw4REFBQ0U7b0NBQUVGLFdBQVU7O3dDQUE4Qkosb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU08sSUFBSSxjQUFiUCxxQ0FBQUEscUJBQUFBLGNBQWVRLElBQUksY0FBbkJSLHlDQUFBQSxtQkFBcUJTLEtBQUs7d0NBQUU7Ozs7Ozs7OENBQ3ZFLDhEQUFDQztvQ0FBT04sV0FBVTs4Q0FBa0g7Ozs7Ozs4Q0FHcEksOERBQUNNO29DQUFPQyxTQUFTO3dDQUFPaEIsd0RBQU9BO29DQUFFO29DQUFHUyxXQUFVOzhDQUFnSDs7Ozs7Ozs7Ozs7O3NDQU1oSyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNRO29DQUFNQyxhQUFZO29DQUFtQkMsVUFBVSxDQUFDQzt3Q0FBT0MsYUFBYUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO29DQUFDO29DQUFHZCxXQUFVOzs7Ozs7OENBQ2pHLDhEQUFDTTtvQ0FBUU4sV0FBVTs4Q0FBa0g7Ozs7Ozs4Q0FHckksOERBQUNNO29DQUFPTixXQUFVOzhDQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEk7R0EzQ3dCTDs7UUFHTkgsdURBQVVBOzs7S0FISkc7QUE2Q3hCQSxLQUFLb0IsV0FBVyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBcclxuXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oe1xyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcclxuICAgICAgcmVkaXJlY3QoJy9hdXRoL2xvZ2luJyk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyNGMUYxRjRdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Fic29sdXRlIHBsLVs0MnB4XSBwdC1bMjBweF0gdGV4dC1bMzRweF0gZm9udC1tZWRpdW0nPkhvbWU8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctWzkwMHB4XSBoLVs1NTBweF0gYmctd2hpdGUgcm91bmRlZC0zeGwgbS1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICB7LyogTGVmdCBQYXJ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bMzUwcHhdIGgtWzQ1MHB4XSBiZy1bI0Q5RDlEOTU3XSByb3VuZGVkLTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bMTIwcHhdIGgtWzEyMHB4XSBiZy1bIzkzOTM5MzU3XSByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggdGV4dC1bMjNweF0gZm9udC1tZWRpdW0nPldlbGNvbWUsPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCB0ZXh0LVsyMnB4XSBmb250LWJvbGQnPntzZXNzaW9uPy5kYXRhPy51c2VyPy5lbWFpbCB9ICE8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggbXQtWzMwcHhdIGJnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzIyMHB4XSBoLVs1NXB4XSB0ZXh0LVsyMnB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBFZGl0IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2lnbk91dCgpfX0gY2xhc3NOYW1lPSdmbGV4IG10LVsxMHB4XSBiZy1yZWQtNDAwIHJvdW5kZWQteGwgdy1bMTEwcHhdIGgtWzQwcHhdIHRleHQtWzIwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSaWdodCBQYXJ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bNDUwcHhdIGgtWzQ1MHB4XSBiZy1bI0Q5RDlEOTU3XSByb3VuZGVkLTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggdy1bMjIwcHhdIHRleHQtWzMwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPkpvaW4gb3IgQ3JlYXRlIGEgbG9iYnk8L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgbG9iYnkgY29kZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge3NldExvYmJ5Q29kZShlLnRhcmdldC52YWx1ZSl9fSBjbGFzc05hbWU9J2JvcmRlci1bMnB4XSB0ZXh0LVsyNXB4XSBmb250LW1lZGl1bSBtdC1bMjBweF0gYmctWyNmM2YzZjNdIGJvcmRlci1bIzc1NzU3NV0gZHVyYXRpb24tWzMwMG1zXSBvdXRsaW5lLW5vbmUgcm91bmRlZC1bMThweF0gdy1bMzUwcHhdIGgtWzYwcHhdIHBsLVsyMHB4XSBwci1bMjBweF0nLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9J2ZsZXggbXQtWzMwcHhdIGJnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzIyMHB4XSBoLVs1NXB4XSB0ZXh0LVsyMnB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBKb2luXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggYmctYmx1ZS0yMDAgcm91bmRlZC0yeGwgdy1bMjIwcHhdIGgtWzU1cHhdIHRleHQtWzIycHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuSG9tZS5yZXF1aXJlQXV0aCA9IHRydWUiXSwibmFtZXMiOlsic2lnbk91dCIsInVzZVNlc3Npb24iLCJyZWRpcmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInNlc3Npb24iLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZGF0YSIsInVzZXIiLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwic2V0TG9iYnlDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});