"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/page",{

/***/ "(app-pages-browser)/./src/app/components/LoginForm.jsx":
/*!******************************************!*\
  !*** ./src/app/components/LoginForm.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Logo.svg */ \"(app-pages-browser)/./src/app/assets/Logo.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst LoginForm = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handlesignin = async (e)=>{\n        e.preventDefault();\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(\"credentials\", {\n            email,\n            password,\n            redirect: true,\n            callbackUrl: \"/\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"design-bg bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white h-[570px] w-[470px] flex flex-col m-auto items-center rounded-3xl pt-[40px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        width: 200,\n                        height: 200,\n                        alt: \"SameView Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[12rem] h-[0.1rem] bg-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"p-2 text-lg font-medium text-[#616161]\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-[10px] pt-[60px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    name: \"email\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"Enter email\",\n                                        type: \"email\",\n                                        name: \"email\",\n                                        autoComplete: \"email\",\n                                        required: true,\n                                        onChange: (e)=>{\n                                            setEmail(e.target.value);\n                                        },\n                                        className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    name: \"password\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"Enter password\",\n                                        type: \"password\",\n                                        name: \"password\",\n                                        autoComplete: \"current-password\",\n                                        required: true,\n                                        onChange: (e)=>{\n                                            setPassword(e.target.value);\n                                        },\n                                        className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"\",\n                                    className: \"pl-[10px] mt-[-8px] text-[#006ACB]\",\n                                    children: \"Forgot Password?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex m-auto justify-center w-[180px] h-[35px] mt-[20px] custom-blue rounded-[10px] ease-out duration-[300ms] hover:bg-sky-300\",\n                                    name: \"login-btn\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handlesignin,\n                                        disabled: !email || !password,\n                                        className: \"flex pt-[3px] font-bold text-lg text-center justify-center cursor-pointer\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute flex flex-row font-medium bottom-3 right-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"New member? \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"register\",\n                                        className: \"text-[#006ACB]\",\n                                        children: \"Register now\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 102\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 87\n                            }, undefined),\n                            \"  \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\LoginForm.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginForm, \"TSZhDBNy8CmbxXgprY/vvMmTG1Q=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2dpbkZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQUNPO0FBQ1Q7QUFDSTtBQUNRO0FBR3pDLE1BQU1NLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTU8sZUFBZSxPQUFNQztRQUN6QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNUix1REFBTUEsQ0FBQyxlQUFlO1lBQUNFO1lBQU9FO1lBQVVLLFVBQVU7WUFBTUMsYUFBYTtRQUFHO0lBQ2hGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2hCLG1EQUFLQTt3QkFDRmlCLEtBQUtoQix3REFBSUE7d0JBQ1RpQixPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJOzs7Ozs7a0NBRVIsOERBQUNMO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNLO3dCQUFHTCxXQUFVO2tDQUF5Qzs7Ozs7O2tDQUN2RCw4REFBQ007a0NBQ0QsNEVBQUNQOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7b0NBQUlRLE1BQUs7OENBQ1YsNEVBQUNDO3dDQUFNQyxhQUFZO3dDQUFjQyxNQUFLO3dDQUFRSCxNQUFLO3dDQUFRSSxjQUFhO3dDQUFRQyxRQUFRO3dDQUFDQyxVQUFVLENBQUNsQjs0Q0FBT0osU0FBU0ksRUFBRW1CLE1BQU0sQ0FBQ0MsS0FBSzt3Q0FBQzt3Q0FBR2YsV0FBVTs7Ozs7Ozs7Ozs7OENBRWhKLDhEQUFDRDtvQ0FBSVEsTUFBSzs4Q0FDViw0RUFBQ0M7d0NBQU1DLGFBQVk7d0NBQWlCQyxNQUFLO3dDQUFXSCxNQUFLO3dDQUFXSSxjQUFhO3dDQUFtQkMsUUFBUTt3Q0FBQ0MsVUFBVSxDQUFDbEI7NENBQU9GLFlBQVlFLEVBQUVtQixNQUFNLENBQUNDLEtBQUs7d0NBQUM7d0NBQUdmLFdBQVU7Ozs7Ozs7Ozs7OzhDQUV2Syw4REFBQ2Qsa0RBQUlBO29DQUFDOEIsTUFBSztvQ0FBR2hCLFdBQVU7OENBQXFDOzs7Ozs7OENBR2pFLDhEQUFDRDtvQ0FBSUMsV0FBVTtvQ0FBZ0lPLE1BQUs7OENBQ2xKLDRFQUFDVTt3Q0FBT0MsU0FBU3hCO3dDQUFjeUIsVUFBVSxDQUFDN0IsU0FBUyxDQUFDRTt3Q0FBVVEsV0FBVTtrREFBNEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXRKLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQXVELDhEQUFDb0I7O29DQUFFO2tEQUFZLDhEQUFDbEMsa0RBQUlBO3dDQUFDOEIsTUFBSzt3Q0FBV2hCLFdBQVU7a0RBQWlCOzs7Ozs7Ozs7Ozs7NEJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3SztHQXhDTVg7S0FBQUE7QUEwQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3g/MjIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9hc3NldHMvTG9nby5zdmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgVHJ1Y3VsZW50YSB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZXNpZ25pbiA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYXdhaXQgc2lnbkluKCdjcmVkZW50aWFscycsIHtlbWFpbCwgcGFzc3dvcmQsIHJlZGlyZWN0OiB0cnVlLCBjYWxsYmFja1VybDogJy8nfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNpZ24tYmcgYmctWyNGMUYxRjRdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBoLVs1NzBweF0gdy1bNDcwcHhdIGZsZXggZmxleC1jb2wgbS1hdXRvIGl0ZW1zLWNlbnRlciByb3VuZGVkLTN4bCBwdC1bNDBweF1cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb31cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlNhbWVWaWV3IExvZ29cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTJyZW1dIGgtWzAuMXJlbV0gYmctYmxhY2tcIj48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC0yIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1bIzYxNjE2MV1cIj5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC1bMTBweF0gcHQtWzYwcHhdJz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIHR5cGU9J2VtYWlsJyBuYW1lPSdlbWFpbCcgYXV0b0NvbXBsZXRlPVwiZW1haWxcIiByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHtzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSBjbGFzc05hbWU9J2JvcmRlci0yIGR1cmF0aW9uLVszMDBtc10gb3V0bGluZS1ub25lIHJvdW5kZWQtWzE1cHhdIHctWzM0MHB4XSBoLVs0NXB4XSBwbC1bMjBweF0gcHItWzIwcHhdJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiIHR5cGU9J3Bhc3N3b3JkJyBuYW1lPSdwYXNzd29yZCcgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT0nYm9yZGVyLTIgZHVyYXRpb24tWzMwMG1zXSBvdXRsaW5lLW5vbmUgcm91bmRlZC1bMTVweF0gdy1bMzQwcHhdIGgtWzQ1cHhdIHBsLVsyMHB4XSBwci1bMjBweF0nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiIGNsYXNzTmFtZT0ncGwtWzEwcHhdIG10LVstOHB4XSB0ZXh0LVsjMDA2QUNCXSc+Rm9yZ290IFBhc3N3b3JkPzwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbS1hdXRvIGp1c3RpZnktY2VudGVyIHctWzE4MHB4XSBoLVszNXB4XSBtdC1bMjBweF0gY3VzdG9tLWJsdWUgcm91bmRlZC1bMTBweF0gZWFzZS1vdXQgZHVyYXRpb24tWzMwMG1zXSBob3ZlcjpiZy1za3ktMzAwXCIgbmFtZT1cImxvZ2luLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZXNpZ25pbn0gZGlzYWJsZWQ9eyFlbWFpbCB8fCAhcGFzc3dvcmR9IGNsYXNzTmFtZT1cImZsZXggcHQtWzNweF0gZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LXJvdyBmb250LW1lZGl1bSBib3R0b20tMyByaWdodC02IFwiPjxwPk5ldyBtZW1iZXI/IDxMaW5rIGhyZWY9XCJyZWdpc3RlclwiIGNsYXNzTmFtZT1cInRleHQtWyMwMDZBQ0JdXCI+UmVnaXN0ZXIgbm93PC9MaW5rPjwvcD4gIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTG9nbyIsIkxpbmsiLCJ1c2VTdGF0ZSIsInNpZ25JbiIsIkxvZ2luRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlc2lnbmluIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJmb3JtIiwibmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LoginForm.jsx\n"));

/***/ })

});