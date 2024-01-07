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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/edit.svg */ \"(app-pages-browser)/./src/app/assets/edit.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./src/app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomePage = (param)=>{\n    let { sessiondata } = param;\n    var _sessiondata_data_user, _sessiondata_data;\n    _s();\n    const [lobbyCode, setLobbyCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const userEmail = \"\".concat(sessiondata === null || sessiondata === void 0 ? void 0 : (_sessiondata_data = sessiondata.data) === null || _sessiondata_data === void 0 ? void 0 : (_sessiondata_data_user = _sessiondata_data.user) === null || _sessiondata_data_user === void 0 ? void 0 : _sessiondata_data_user.email);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)(\"email\", \"==\", userEmail));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(q);\n            const userData = [];\n            querySnapshot.forEach((doc)=>{\n                userData.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setData(userData);\n        };\n        fetchData();\n    }, [\n        userEmail\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"absolute pl-[42px] pt-[20px] text-[34px] font-medium\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-[900px] h-[550px] bg-white rounded-3xl m-auto items-center justify-evenly\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[350px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-[120px] h-[120px] bg-[#93939357] rounded-full relative\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"absolute w-[33px] h-[33px] bottom-1 right-1 rounded-full bg-[#13224357]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"ml-1\",\n                                            src: _assets_edit_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                            width: 26,\n                                            height: 26,\n                                            alt: \"edit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[23px] font-medium\",\n                                    children: \"Welcome,\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[22px] font-bold\",\n                                    children: data && data.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                user.username,\n                                                \"!\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[20px] bg-blue-200 rounded-2xl w-[190px] h-[50px] text-[20px] items-center justify-center font-semibold\",\n                                    children: \"Edit username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                                    },\n                                    className: \"flex mt-[10px] bg-red-400 rounded-xl w-[110px] h-[40px] text-[20px] items-center justify-center font-semibold\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[450px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex w-[220px] text-[26px] mt-[-20px] font-semibold text-center\",\n                                    children: \"Join or Create a lobby\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter lobby code\",\n                                    onChange: (e)=>{\n                                        setLobbyCode(e.target.value);\n                                    },\n                                    className: \"border-[2px] text-[22px] font-medium mt-[20px] bg-[#f3f3f3] border-[#757575] duration-[300ms] outline-none rounded-[18px] w-[350px] h-[50px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center mt-[30px] gap-[5px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-200 rounded-2xl w-[190px] h-[50px] text-[22px] items-center justify-center font-semibold\",\n                                            children: \"Join\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-200 rounded-2xl w-[190px] h-[50px] text-[22px] items-center justify-center font-semibold\",\n                                            children: \"Create\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n        lineNumber: 29,\n        columnNumber: 8\n    }, undefined);\n};\n_s(HomePage, \"BU3vxev/wY6TbGmtKKbWvJEzoNg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNPO0FBQ007QUFDVTtBQUNjO0FBQ25DO0FBQ2pDLE1BQU1XLFdBQVc7UUFBQyxFQUFDQyxXQUFXLEVBQUM7UUFHTkEsd0JBQUFBOztJQUZyQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1lLFlBQVksR0FBa0MsT0FBL0JMLHdCQUFBQSxtQ0FBQUEsb0JBQUFBLFlBQWFHLElBQUksY0FBakJILHlDQUFBQSx5QkFBQUEsa0JBQW1CTSxJQUFJLGNBQXZCTiw2Q0FBQUEsdUJBQXlCTyxLQUFLO0lBQ25EaEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsWUFBWTtZQUNoQixNQUFNQyxJQUFJYix5REFBS0EsQ0FBQ0YsOERBQVVBLENBQUNJLHlDQUFFQSxFQUFFLFVBQVVELHlEQUFLQSxDQUFDLFNBQVMsTUFBTVE7WUFDOUQsTUFBTUssZ0JBQWdCLE1BQU1mLDJEQUFPQSxDQUFDYztZQUVwQyxNQUFNRSxXQUFXLEVBQUU7WUFDbkJELGNBQWNFLE9BQU8sQ0FBQyxDQUFDQztnQkFDckJGLFNBQVNHLElBQUksQ0FBQztvQkFBRUMsSUFBSUYsSUFBSUUsRUFBRTtvQkFBRSxHQUFHRixJQUFJVixJQUFJLEVBQUU7Z0JBQUM7WUFDNUM7WUFFQUMsUUFBUU87UUFFVjtRQUNBSDtJQUNGLEdBQUc7UUFBQ0g7S0FBVTtJQUVoQixxQkFDSyw4REFBQ1c7UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF1RDs7Ozs7OzhCQUNyRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRTt3Q0FBT0YsV0FBVTtrREFDaEIsNEVBQUM3QixtREFBS0E7NENBQ0o2QixXQUFVOzRDQUNWRyxLQUFLL0Isd0RBQUlBOzRDQUNUZ0MsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJViw4REFBQ0M7b0NBQUVQLFdBQVU7OENBQStCOzs7Ozs7OENBQzVDLDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBOEJkLFFBQVFBLEtBQUtzQixHQUFHLENBQUMsQ0FBQ25CLHFCQUN2RCw4REFBQ2tCOztnREFBR2xCLEtBQUtvQixRQUFRO2dEQUFDOzs7Ozs7Ozs7Ozs7OENBR3hCLDhEQUFDUDtvQ0FBT0YsV0FBVTs4Q0FBa0g7Ozs7Ozs4Q0FHcEksOERBQUNFO29DQUFPUSxTQUFTO3dDQUFPbkMsd0RBQU9BO29DQUFFO29DQUFHeUIsV0FBVTs4Q0FBZ0g7Ozs7Ozs7Ozs7OztzQ0FNaEssOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7OENBQWtFOzs7Ozs7OENBQy9FLDhEQUFDVztvQ0FBTUMsYUFBWTtvQ0FBbUJDLFVBQVUsQ0FBQ0M7d0NBQU83QixhQUFhNkIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUFDO29DQUFHaEIsV0FBVTs7Ozs7OzhDQUNqRyw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNmLDhEQUFDRTs0Q0FBUUYsV0FBVTtzREFBbUc7Ozs7OztzREFHdEgsOERBQUNFOzRDQUFPRixXQUFVO3NEQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkk7R0FwRU1sQjtLQUFBQTtBQXNFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UuanN4P2NkMmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi4vYXNzZXRzL2VkaXQuc3ZnJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCB7Y29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmNvbnN0IEhvbWVQYWdlID0gKHtzZXNzaW9uZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtsb2JieUNvZGUsIHNldExvYmJ5Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGAke3Nlc3Npb25kYXRhPy5kYXRhPy51c2VyPy5lbWFpbH1gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICd1c2VycycpLCB3aGVyZSgnZW1haWwnLCAnPT0nLCB1c2VyRW1haWwpKTtcclxuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcclxuICBcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IFtdO1xyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICB1c2VyRGF0YS5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBzZXREYXRhKHVzZXJEYXRhKTtcclxuICAgICAgICBcclxuICAgICAgfTtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbdXNlckVtYWlsXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyNGMUYxRjRdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Fic29sdXRlIHBsLVs0MnB4XSBwdC1bMjBweF0gdGV4dC1bMzRweF0gZm9udC1tZWRpdW0nPkhvbWU8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctWzkwMHB4XSBoLVs1NTBweF0gYmctd2hpdGUgcm91bmRlZC0zeGwgbS1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICB7LyogTGVmdCBQYXJ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bMzUwcHhdIGgtWzQ1MHB4XSBiZy1bI0Q5RDlEOTU3XSByb3VuZGVkLTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bMTIwcHhdIGgtWzEyMHB4XSBiZy1bIzkzOTM5MzU3XSByb3VuZGVkLWZ1bGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdhYnNvbHV0ZSB3LVszM3B4XSBoLVszM3B4XSBib3R0b20tMSByaWdodC0xIHJvdW5kZWQtZnVsbCBiZy1bIzEzMjI0MzU3XSc+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtMSdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e0VkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4IHRleHQtWzIzcHhdIGZvbnQtbWVkaXVtJz5XZWxjb21lLDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggdGV4dC1bMjJweF0gZm9udC1ib2xkJz57ZGF0YSAmJiBkYXRhLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLnVzZXJuYW1lfSE8L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggbXQtWzIwcHhdIGJnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzE5MHB4XSBoLVs1MHB4XSB0ZXh0LVsyMHB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBFZGl0IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2lnbk91dCgpfX0gY2xhc3NOYW1lPSdmbGV4IG10LVsxMHB4XSBiZy1yZWQtNDAwIHJvdW5kZWQteGwgdy1bMTEwcHhdIGgtWzQwcHhdIHRleHQtWzIwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSaWdodCBQYXJ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bNDUwcHhdIGgtWzQ1MHB4XSBiZy1bI0Q5RDlEOTU3XSByb3VuZGVkLTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggdy1bMjIwcHhdIHRleHQtWzI2cHhdIG10LVstMjBweF0gZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+Sm9pbiBvciBDcmVhdGUgYSBsb2JieTwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBsb2JieSBjb2RlXCIgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TG9iYnlDb2RlKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT0nYm9yZGVyLVsycHhdIHRleHQtWzIycHhdIGZvbnQtbWVkaXVtIG10LVsyMHB4XSBiZy1bI2YzZjNmM10gYm9yZGVyLVsjNzU3NTc1XSBkdXJhdGlvbi1bMzAwbXNdIG91dGxpbmUtbm9uZSByb3VuZGVkLVsxOHB4XSB3LVszNTBweF0gaC1bNTBweF0gcGwtWzIwcHhdIHByLVsyMHB4XScvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC1bMzBweF0gZ2FwLVs1cHhdJz5cclxuICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9J2JnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzE5MHB4XSBoLVs1MHB4XSB0ZXh0LVsyMnB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBKb2luXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzE5MHB4XSBoLVs1MHB4XSB0ZXh0LVsyMnB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkVkaXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZGIiLCJIb21lUGFnZSIsInNlc3Npb25kYXRhIiwibG9iYnlDb2RlIiwic2V0TG9iYnlDb2RlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VyRW1haWwiLCJ1c2VyIiwiZW1haWwiLCJmZXRjaERhdGEiLCJxIiwicXVlcnlTbmFwc2hvdCIsInVzZXJEYXRhIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIiwibWFwIiwidXNlcm5hbWUiLCJvbkNsaWNrIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HomePage.jsx\n"));

/***/ })

});