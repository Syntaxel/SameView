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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Logo.svg */ \"(app-pages-browser)/./src/app/assets/Logo.svg\");\n/* harmony import */ var _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/arrow.svg */ \"(app-pages-browser)/./src/app/assets/arrow.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ForgotPasswordForm = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const resetPassword = async (e)=>{\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.sendPasswordResetEmail)(auth, email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"design-bg bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white h-[570px] w-[470px] flex flex-col m-auto items-center rounded-3xl pt-[40px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            width: 20,\n                            height: 20,\n                            alt: \"Back\",\n                            className: \"absolute top-8 left-8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        width: 200,\n                        height: 200,\n                        alt: \"SameView Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[12rem] h-[0.1rem] bg-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"p-2 text-lg font-medium text-[#616161]\",\n                        children: \"Reset Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-[10px] pt-[60px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        name: \"secretkey\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            placeholder: \"Enter your email\",\n                                            type: \"email\",\n                                            name: \"email\",\n                                            required: true,\n                                            onChange: (e)=>{\n                                                setEmail(e.target.value);\n                                            },\n                                            className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"w-[170px] pl-[10px] mt-[-8px] font-medium text-[#7E7D7D] text-[12px]\",\n                                        children: \"We will send a link for change your password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center items-center w-[180px] h-[35px] mt-[20px] custom-blue rounded-[10px] ease-out duration-[300ms] hover:bg-sky-300\",\n                                name: \"login-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: resetPassword,\n                                    disabled: !email,\n                                    className: \"flex pt-[3px] font-bold text-lg text-center justify-center cursor-pointer\",\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\ForgotPasswordForm.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ForgotPasswordForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n_c = ForgotPasswordForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPasswordForm);\nvar _c;\n$RefreshReg$(_c, \"ForgotPasswordForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDQTtBQUNPO0FBQ0U7QUFDWDtBQUMwQjtBQUd2RCxNQUFNTSxxQkFBcUI7O0lBRXpCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNUyxnQkFBZ0IsT0FBTUM7UUFDMUIsTUFBTUwscUVBQXNCQSxDQUFDTSxNQUFNSjtJQUNyQztJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNULGtEQUFJQTt3QkFBQ1UsTUFBSztrQ0FDWCw0RUFBQ2IsbURBQUtBOzRCQUNGYyxLQUFLWix5REFBS0E7NEJBQ1ZhLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUk7NEJBQ0pMLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDWixtREFBS0E7d0JBQ0ZjLEtBQUtiLHdEQUFJQTt3QkFDVGMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTs7Ozs7O2tDQUVSLDhEQUFDTjt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDTTt3QkFBR04sV0FBVTtrQ0FBeUM7Ozs7OztrQ0FDdkQsOERBQUNPOzswQ0FDRCw4REFBQ1I7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSVMsTUFBSztrREFDViw0RUFBQ0M7NENBQU1DLGFBQVk7NENBQW1CQyxNQUFLOzRDQUFRSCxNQUFLOzRDQUFRSSxRQUFROzRDQUFDQyxVQUFVLENBQUNoQjtnREFBT0YsU0FBU0UsRUFBRWlCLE1BQU0sQ0FBQ0MsS0FBSzs0Q0FBQzs0Q0FBR2YsV0FBVTs7Ozs7Ozs7Ozs7a0RBR2hJLDhEQUFDZ0I7d0NBQUVoQixXQUFVO2tEQUF1RTs7Ozs7Ozs7Ozs7OzBDQUdwRiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Z0NBQXNJUSxNQUFLOzBDQUMxSiw0RUFBQ1M7b0NBQU9DLFNBQVN0QjtvQ0FBZXVCLFVBQVUsQ0FBQ3pCO29DQUFPTSxXQUFVOzhDQUE0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVKO0dBN0NNUDtLQUFBQTtBQStDTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZEZvcm0uanN4P2EzNzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9hc3NldHMvTG9nby5zdmcnO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vYXNzZXRzL2Fycm93LnN2Zyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuXHJcbmNvbnN0IEZvcmdvdFBhc3N3b3JkRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzaWduLWJnIGJnLVsjRjFGMUY0XSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgaC1bNTcwcHhdIHctWzQ3MHB4XSBmbGV4IGZsZXgtY29sIG0tYXV0byBpdGVtcy1jZW50ZXIgcm91bmRlZC0zeGwgcHQtWzQwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17QXJyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtOCBsZWZ0LTgnXHJcbiAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTYW1lVmlldyBMb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzEycmVtXSBoLVswLjFyZW1dIGJnLWJsYWNrXCI+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtWyM2MTYxNjFdXCI+UmVzZXQgUGFzc3dvcmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtWzEwcHhdIHB0LVs2MHB4XSc+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbmFtZT1cInNlY3JldGtleVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiB0eXBlPSdlbWFpbCcgbmFtZT0nZW1haWwnIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4ge3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT0nYm9yZGVyLTIgZHVyYXRpb24tWzMwMG1zXSBvdXRsaW5lLW5vbmUgcm91bmRlZC1bMTVweF0gdy1bMzQwcHhdIGgtWzQ1cHhdIHBsLVsyMHB4XSBwci1bMjBweF0nLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3ctWzE3MHB4XSBwbC1bMTBweF0gbXQtWy04cHhdIGZvbnQtbWVkaXVtIHRleHQtWyM3RTdEN0RdIHRleHQtWzEycHhdJz5XZSB3aWxsIHNlbmQgYSBsaW5rIGZvciBjaGFuZ2UgeW91ciBwYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LVsxODBweF0gaC1bMzVweF0gbXQtWzIwcHhdIGN1c3RvbS1ibHVlIHJvdW5kZWQtWzEwcHhdIGVhc2Utb3V0IGR1cmF0aW9uLVszMDBtc10gaG92ZXI6Ymctc2t5LTMwMFwiIG5hbWU9XCJsb2dpbi1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0UGFzc3dvcmR9IGRpc2FibGVkPXshZW1haWx9IGNsYXNzTmFtZT1cImZsZXggcHQtWzNweF0gZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJMb2dvIiwiQXJyb3ciLCJMaW5rIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsIkZvcmdvdFBhc3N3b3JkRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJyZXNldFBhc3N3b3JkIiwiZSIsImF1dGgiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMSIsImZvcm0iLCJuYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ForgotPasswordForm.jsx\n"));

/***/ })

});