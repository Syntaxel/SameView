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

/***/ "(app-pages-browser)/./src/app/components/HomePage.jsx":
/*!*****************************************!*\
  !*** ./src/app/components/HomePage.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./src/app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HomePage = async (param)=>{\n    let { sessiondata } = param;\n    var _sessiondata_data_user, _sessiondata_data, _sessiondata_data_user1, _sessiondata_data1;\n    _s();\n    const [lobbyCode, setLobbyCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\");\n    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(usersCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"email\", \"==\", \"\".concat(sessiondata === null || sessiondata === void 0 ? void 0 : (_sessiondata_data = sessiondata.data) === null || _sessiondata_data === void 0 ? void 0 : (_sessiondata_data_user = _sessiondata_data.user) === null || _sessiondata_data_user === void 0 ? void 0 : _sessiondata_data_user.email)));\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n    querySnapshot.forEach((doc)=>{\n        console.log(doc.id, \"\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"absolute pl-[42px] pt-[20px] text-[34px] font-medium\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-[900px] h-[550px] bg-white rounded-3xl m-auto items-center justify-evenly\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[350px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-[120px] h-[120px] bg-[#93939357] rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[23px] font-medium\",\n                                    children: \"Welcome,\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[22px] font-bold\",\n                                    children: [\n                                        sessiondata === null || sessiondata === void 0 ? void 0 : (_sessiondata_data1 = sessiondata.data) === null || _sessiondata_data1 === void 0 ? void 0 : (_sessiondata_data_user1 = _sessiondata_data1.user) === null || _sessiondata_data_user1 === void 0 ? void 0 : _sessiondata_data_user1.email,\n                                        \" !\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Edit username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                                    },\n                                    className: \"flex mt-[10px] bg-red-400 rounded-xl w-[110px] h-[40px] text-[20px] items-center justify-center font-semibold\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[450px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex w-[220px] text-[30px] font-semibold text-center\",\n                                    children: \"Join or Create a lobby\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter lobby code\",\n                                    onChange: (e)=>{\n                                        setLobbyCode(e.target.value);\n                                    },\n                                    className: \"border-[2px] text-[25px] font-medium mt-[20px] bg-[#f3f3f3] border-[#757575] duration-[300ms] outline-none rounded-[18px] w-[350px] h-[60px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Join\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n        lineNumber: 16,\n        columnNumber: 8\n    }, undefined);\n};\n_s(HomePage, \"g73FNBibXtSu+ufeXyWul6xE8Xs=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNxQjtBQUNjO0FBQ25DO0FBQ2pDLE1BQU1RLFdBQVc7UUFBTSxFQUFDQyxXQUFXLEVBQUM7UUFJeUJBLHdCQUFBQSxtQkFjSkEseUJBQUFBOztJQWpCckQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1ZLGtCQUFrQlQsOERBQVVBLENBQUNJLHlDQUFFQSxFQUFFO0lBQ3ZDLE1BQU1NLElBQUlSLHlEQUFLQSxDQUFDTyxpQkFBaUJOLHlEQUFLQSxDQUFDLFNBQVMsTUFBTSxHQUFrQyxPQUEvQkcsd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBYUssSUFBSSxjQUFqQkwseUNBQUFBLHlCQUFBQSxrQkFBbUJNLElBQUksY0FBdkJOLDZDQUFBQSx1QkFBeUJPLEtBQUs7SUFDdkYsTUFBTUMsZ0JBQWdCLE1BQU1iLDJEQUFPQSxDQUFDUztJQUNwQ0ksY0FBY0MsT0FBTyxDQUFDLENBQUNDO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLEVBQUUsRUFBRTtJQUN0QjtJQUNGLHFCQUNLLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXVEOzs7Ozs7OEJBQ3JFLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQStCOzs7Ozs7OENBQzVDLDhEQUFDRTtvQ0FBRUYsV0FBVTs7d0NBQThCZix3QkFBQUEsbUNBQUFBLHFCQUFBQSxZQUFhSyxJQUFJLGNBQWpCTCwwQ0FBQUEsMEJBQUFBLG1CQUFtQk0sSUFBSSxjQUF2Qk4sOENBQUFBLHdCQUF5Qk8sS0FBSzt3Q0FBRTs7Ozs7Ozs4Q0FDM0UsOERBQUNXO29DQUFPSCxXQUFVOzhDQUFrSDs7Ozs7OzhDQUdwSSw4REFBQ0c7b0NBQU9DLFNBQVM7d0NBQU8zQix3REFBT0E7b0NBQUU7b0NBQUd1QixXQUFVOzhDQUFnSDs7Ozs7Ozs7Ozs7O3NDQU1oSyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNLO29DQUFNQyxhQUFZO29DQUFtQkMsVUFBVSxDQUFDQzt3Q0FBT3JCLGFBQWFxQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0NBQUM7b0NBQUdWLFdBQVU7Ozs7Ozs4Q0FDakcsOERBQUNHO29DQUFRSCxXQUFVOzhDQUFrSDs7Ozs7OzhDQUdySSw4REFBQ0c7b0NBQU9ILFdBQVU7OENBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4STtHQTFDTWhCO0tBQUFBO0FBNENOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS5qc3g/Y2QyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQge2NvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZX0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5jb25zdCBIb21lUGFnZSA9IGFzeW5jKHtzZXNzaW9uZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtsb2JieUNvZGUsIHNldExvYmJ5Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKTtcclxuICAgIGNvbnN0IHEgPSBxdWVyeSh1c2Vyc0NvbGxlY3Rpb24sIHdoZXJlKFwiZW1haWxcIiwgXCI9PVwiLCBgJHtzZXNzaW9uZGF0YT8uZGF0YT8udXNlcj8uZW1haWx9YCkpO1xyXG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7IFxyXG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiXCIpXHJcbiAgICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyNGMUYxRjRdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Fic29sdXRlIHBsLVs0MnB4XSBwdC1bMjBweF0gdGV4dC1bMzRweF0gZm9udC1tZWRpdW0nPkhvbWU8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctWzkwMHB4XSBoLVs1NTBweF0gYmctd2hpdGUgcm91bmRlZC0zeGwgbS1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICB7LyogTGVmdCBQYXJ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bMzUwcHhdIGgtWzQ1MHB4XSBiZy1bI0Q5RDlEOTU3XSByb3VuZGVkLTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bMTIwcHhdIGgtWzEyMHB4XSBiZy1bIzkzOTM5MzU3XSByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggdGV4dC1bMjNweF0gZm9udC1tZWRpdW0nPldlbGNvbWUsPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCB0ZXh0LVsyMnB4XSBmb250LWJvbGQnPntzZXNzaW9uZGF0YT8uZGF0YT8udXNlcj8uZW1haWwgfSAhPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IG10LVszMHB4XSBiZy1ibHVlLTIwMCByb3VuZGVkLTJ4bCB3LVsyMjBweF0gaC1bNTVweF0gdGV4dC1bMjJweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtc2VtaWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgRWRpdCB1c2VybmFtZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NpZ25PdXQoKX19IGNsYXNzTmFtZT0nZmxleCBtdC1bMTBweF0gYmctcmVkLTQwMCByb3VuZGVkLXhsIHctWzExMHB4XSBoLVs0MHB4XSB0ZXh0LVsyMHB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUmlnaHQgUGFydCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctWzQ1MHB4XSBoLVs0NTBweF0gYmctWyNEOUQ5RDk1N10gcm91bmRlZC0yeGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4IHctWzIyMHB4XSB0ZXh0LVszMHB4XSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyJz5Kb2luIG9yIENyZWF0ZSBhIGxvYmJ5PC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIGxvYmJ5IGNvZGVcIiBvbkNoYW5nZT17KGUpID0+IHtzZXRMb2JieUNvZGUoZS50YXJnZXQudmFsdWUpfX0gY2xhc3NOYW1lPSdib3JkZXItWzJweF0gdGV4dC1bMjVweF0gZm9udC1tZWRpdW0gbXQtWzIwcHhdIGJnLVsjZjNmM2YzXSBib3JkZXItWyM3NTc1NzVdIGR1cmF0aW9uLVszMDBtc10gb3V0bGluZS1ub25lIHJvdW5kZWQtWzE4cHhdIHctWzM1MHB4XSBoLVs2MHB4XSBwbC1bMjBweF0gcHItWzIwcHhdJy8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPSdmbGV4IG10LVszMHB4XSBiZy1ibHVlLTIwMCByb3VuZGVkLTJ4bCB3LVsyMjBweF0gaC1bNTVweF0gdGV4dC1bMjJweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtc2VtaWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgSm9pblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGJnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzIyMHB4XSBoLVs1NXB4XSB0ZXh0LVsyMnB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZGIiLCJIb21lUGFnZSIsInNlc3Npb25kYXRhIiwibG9iYnlDb2RlIiwic2V0TG9iYnlDb2RlIiwidXNlcnNDb2xsZWN0aW9uIiwicSIsImRhdGEiLCJ1c2VyIiwiZW1haWwiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HomePage.jsx\n"));

/***/ })

});