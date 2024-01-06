"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/forgot-password/page",{

/***/ "(app-pages-browser)/./src/app/components/ForgotPasswordForm.jsx":
/*!***************************************************!*\
  !*** ./src/app/components/ForgotPasswordForm.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Logo.svg */ \"(app-pages-browser)/./src/app/assets/Logo.svg\");\n/* harmony import */ var _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/arrow.svg */ \"(app-pages-browser)/./src/app/assets/arrow.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ForgotPasswordForm = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const resetPassword = async (e)=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.sendPasswordResetEmail)(auth, email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"design-bg bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white h-[570px] w-[470px] flex flex-col m-auto items-center rounded-3xl pt-[40px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            width: 20,\n                            height: 20,\n                            alt: \"Back\",\n                            className: \"absolute top-8 left-8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        width: 200,\n                        height: 200,\n                        alt: \"SameView Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[12rem] h-[0.1rem] bg-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"p-2 text-lg font-medium text-[#616161]\",\n                        children: \"Reset Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-[10px] pt-[60px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        name: \"secretkey\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            placeholder: \"Enter your email\",\n                                            type: \"email\",\n                                            name: \"email\",\n                                            required: true,\n                                            onChange: (e)=>{\n                                                setEmail(e.target.value);\n                                            },\n                                            className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"w-[170px] pl-[10px] mt-[-8px] font-medium text-[#7E7D7D] text-[12px]\",\n                                        children: \"We will send a link for change your password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center items-center w-[180px] h-[35px] mt-[20px] custom-blue rounded-[10px] ease-out duration-[300ms] hover:bg-sky-300\",\n                                name: \"login-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: resetPassword,\n                                    disabled: !email,\n                                    className: \"flex pt-[3px] font-bold text-lg text-center justify-center cursor-pointer\",\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ForgotPasswordForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n_c = ForgotPasswordForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPasswordForm);\nvar _c;\n$RefreshReg$(_c, \"ForgotPasswordForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDQTtBQUNPO0FBQ0U7QUFDWDtBQUMwQjtBQUd2RCxNQUFNTSxxQkFBcUI7O0lBRXpCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNUyxnQkFBZ0IsT0FBTUM7UUFDMUJMLHFFQUFzQkEsQ0FBQ00sTUFBTUo7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVCxrREFBSUE7d0JBQUNVLE1BQUs7a0NBQ1gsNEVBQUNiLG1EQUFLQTs0QkFDRmMsS0FBS1oseURBQUtBOzRCQUNWYSxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFJOzRCQUNKTCxXQUFVOzs7Ozs7Ozs7OztrQ0FHZCw4REFBQ1osbURBQUtBO3dCQUNGYyxLQUFLYix3REFBSUE7d0JBQ1RjLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7Ozs7OztrQ0FFUiw4REFBQ047d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ007d0JBQUdOLFdBQVU7a0NBQXlDOzs7Ozs7a0NBQ3ZELDhEQUFDTzs7MENBQ0QsOERBQUNSO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlTLE1BQUs7a0RBQ1YsNEVBQUNDOzRDQUFNQyxhQUFZOzRDQUFtQkMsTUFBSzs0Q0FBUUgsTUFBSzs0Q0FBUUksUUFBUTs0Q0FBQ0MsVUFBVSxDQUFDaEI7Z0RBQU9GLFNBQVNFLEVBQUVpQixNQUFNLENBQUNDLEtBQUs7NENBQUM7NENBQUdmLFdBQVU7Ozs7Ozs7Ozs7O2tEQUdoSSw4REFBQ2dCO3dDQUFFaEIsV0FBVTtrREFBdUU7Ozs7Ozs7Ozs7OzswQ0FHcEYsOERBQUNEO2dDQUFJQyxXQUFVO2dDQUFzSVEsTUFBSzswQ0FDMUosNEVBQUNTO29DQUFPQyxTQUFTdEI7b0NBQWV1QixVQUFVLENBQUN6QjtvQ0FBT00sV0FBVTs4Q0FBNEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81SjtHQTdDTVA7S0FBQUE7QUErQ04sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRGb3JtLmpzeD9hMzc5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXRzL0xvZ28uc3ZnJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uL2Fzc2V0cy9hcnJvdy5zdmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBzZW5kUGFzc3dvcmRSZXNldEVtYWlsIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsKGF1dGgsIGVtYWlsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Rlc2lnbi1iZyBiZy1bI0YxRjFGNF0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIGgtWzU3MHB4XSB3LVs0NzBweF0gZmxleCBmbGV4LWNvbCBtLWF1dG8gaXRlbXMtY2VudGVyIHJvdW5kZWQtM3hsIHB0LVs0MHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e0Fycm93fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTggbGVmdC04J1xyXG4gICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiU2FtZVZpZXcgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxMnJlbV0gaC1bMC4xcmVtXSBiZy1ibGFja1wiPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LVsjNjE2MTYxXVwiPlJlc2V0IFBhc3N3b3JkPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLVsxMHB4XSBwdC1bNjBweF0nPiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG5hbWU9XCJzZWNyZXRrZXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgdHlwZT0nZW1haWwnIG5hbWU9J2VtYWlsJyByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHtzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSBjbGFzc05hbWU9J2JvcmRlci0yIGR1cmF0aW9uLVszMDBtc10gb3V0bGluZS1ub25lIHJvdW5kZWQtWzE1cHhdIHctWzM0MHB4XSBoLVs0NXB4XSBwbC1bMjBweF0gcHItWzIwcHhdJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3LVsxNzBweF0gcGwtWzEwcHhdIG10LVstOHB4XSBmb250LW1lZGl1bSB0ZXh0LVsjN0U3RDdEXSB0ZXh0LVsxMnB4XSc+V2Ugd2lsbCBzZW5kIGEgbGluayBmb3IgY2hhbmdlIHlvdXIgcGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1bMTgwcHhdIGgtWzM1cHhdIG10LVsyMHB4XSBjdXN0b20tYmx1ZSByb3VuZGVkLVsxMHB4XSBlYXNlLW91dCBkdXJhdGlvbi1bMzAwbXNdIGhvdmVyOmJnLXNreS0zMDBcIiBuYW1lPVwibG9naW4tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldFBhc3N3b3JkfSBkaXNhYmxlZD17IWVtYWlsfSBjbGFzc05hbWU9XCJmbGV4IHB0LVszcHhdIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyXCI+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZEZvcm07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwiTG9nbyIsIkFycm93IiwiTGluayIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJGb3Jnb3RQYXNzd29yZEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwicmVzZXRQYXNzd29yZCIsImUiLCJhdXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJmb3JtIiwibmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ForgotPasswordForm.jsx\n"));

/***/ })

});