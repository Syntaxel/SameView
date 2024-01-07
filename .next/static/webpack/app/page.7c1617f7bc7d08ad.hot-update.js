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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./src/app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HomePage = (param)=>{\n    let { sessiondata } = param;\n    var _sessiondata_data_user, _sessiondata_data;\n    _s();\n    const [lobbyCode, setLobbyCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const userEmail = sessiondata === null || sessiondata === void 0 ? void 0 : (_sessiondata_data = sessiondata.data) === null || _sessiondata_data === void 0 ? void 0 : (_sessiondata_data_user = _sessiondata_data.user) === null || _sessiondata_data_user === void 0 ? void 0 : _sessiondata_data_user.email;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"email\", \"==\", userEmail));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n            const userData = [];\n            querySnapshot.forEach((doc)=>{\n                userData.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setData(userData);\n        };\n        fetchData();\n    }, [\n        userEmail\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"absolute pl-[42px] pt-[20px] text-[34px] font-medium\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-[900px] h-[550px] bg-white rounded-3xl m-auto items-center justify-evenly\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[350px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-[120px] h-[120px] bg-[#93939357] rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[23px] font-medium\",\n                                    children: \"Welcome,\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[22px] font-bold\",\n                                    children: [\n                                        data && data.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: user.username\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            }, user.id, false, {\n                                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 9\n                                            }, undefined)),\n                                        \"!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Edit username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                                    },\n                                    className: \"flex mt-[10px] bg-red-400 rounded-xl w-[110px] h-[40px] text-[20px] items-center justify-center font-semibold\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[450px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex w-[220px] text-[30px] font-semibold text-center\",\n                                    children: \"Join or Create a lobby\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter lobby code\",\n                                    onChange: (e)=>{\n                                        setLobbyCode(e.target.value);\n                                    },\n                                    className: \"border-[2px] text-[25px] font-medium mt-[20px] bg-[#f3f3f3] border-[#757575] duration-[300ms] outline-none rounded-[18px] w-[350px] h-[60px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Join\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n        lineNumber: 27,\n        columnNumber: 8\n    }, undefined);\n};\n_s(HomePage, \"BU3vxev/wY6TbGmtKKbWvJEzoNg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QztBQUNVO0FBQ2M7QUFDbkM7QUFDakMsTUFBTVMsV0FBVztRQUFDLEVBQUNDLFdBQVcsRUFBQztRQUdUQSx3QkFBQUE7O0lBRmxCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUM7SUFDakMsTUFBTWUsWUFBWUwsd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBYUcsSUFBSSxjQUFqQkgseUNBQUFBLHlCQUFBQSxrQkFBbUJNLElBQUksY0FBdkJOLDZDQUFBQSx1QkFBeUJPLEtBQUs7SUFDaERoQixnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixZQUFZO1lBQ2hCLE1BQU1DLElBQUliLHlEQUFLQSxDQUFDRiw4REFBVUEsQ0FBQ0kseUNBQUVBLEVBQUUsVUFBVUQseURBQUtBLENBQUMsU0FBUyxNQUFNUTtZQUM5RCxNQUFNSyxnQkFBZ0IsTUFBTWYsMkRBQU9BLENBQUNjO1lBRXBDLE1BQU1FLFdBQVcsRUFBRTtZQUNuQkQsY0FBY0UsT0FBTyxDQUFDLENBQUNDO2dCQUNyQkYsU0FBU0csSUFBSSxDQUFDO29CQUFFQyxJQUFJRixJQUFJRSxFQUFFO29CQUFFLEdBQUdGLElBQUlWLElBQUksRUFBRTtnQkFBQztZQUM1QztZQUVBQyxRQUFRTztRQUNWO1FBRUFIO0lBQ0YsR0FBRztRQUFDSDtLQUFVO0lBRWhCLHFCQUNLLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXVEOzs7Ozs7OEJBQ3JFLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQStCOzs7Ozs7OENBQzVDLDhEQUFDRTtvQ0FBRUYsV0FBVTs7d0NBQThCZCxRQUFRQSxLQUFLaUIsR0FBRyxDQUFDLENBQUNkLHFCQUNuRSw4REFBQ1U7MERBQ0MsNEVBQUNHOzhEQUFHYixLQUFLZSxRQUFROzs7Ozs7K0NBRFRmLEtBQUtTLEVBQUU7Ozs7O3dDQUdoQjs7Ozs7Ozs4Q0FFSyw4REFBQ087b0NBQU9MLFdBQVU7OENBQWtIOzs7Ozs7OENBR3BJLDhEQUFDSztvQ0FBT0MsU0FBUzt3Q0FBTy9CLHdEQUFPQTtvQ0FBRTtvQ0FBR3lCLFdBQVU7OENBQWdIOzs7Ozs7Ozs7Ozs7c0NBTWhLLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFFRixXQUFVOzhDQUF1RDs7Ozs7OzhDQUNwRSw4REFBQ087b0NBQU1DLGFBQVk7b0NBQW1CQyxVQUFVLENBQUNDO3dDQUFPekIsYUFBYXlCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQ0FBQztvQ0FBR1osV0FBVTs7Ozs7OzhDQUNqRyw4REFBQ0s7b0NBQVFMLFdBQVU7OENBQWtIOzs7Ozs7OENBR3JJLDhEQUFDSztvQ0FBT0wsV0FBVTs4Q0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhJO0dBMURNbEI7S0FBQUE7QUE0RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0hvbWVQYWdlLmpzeD9jZDJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHtjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmV9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuY29uc3QgSG9tZVBhZ2UgPSAoe3Nlc3Npb25kYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2xvYmJ5Q29kZSwgc2V0TG9iYnlDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbmRhdGE/LmRhdGE/LnVzZXI/LmVtYWlsXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICd1c2VycycpLCB3aGVyZSgnZW1haWwnLCAnPT0nLCB1c2VyRW1haWwpKTtcclxuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcclxuICBcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IFtdO1xyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICB1c2VyRGF0YS5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBzZXREYXRhKHVzZXJEYXRhKTtcclxuICAgICAgfTtcclxuICBcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbdXNlckVtYWlsXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyNGMUYxRjRdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Fic29sdXRlIHBsLVs0MnB4XSBwdC1bMjBweF0gdGV4dC1bMzRweF0gZm9udC1tZWRpdW0nPkhvbWU8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctWzkwMHB4XSBoLVs1NTBweF0gYmctd2hpdGUgcm91bmRlZC0zeGwgbS1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICB7LyogTGVmdCBQYXJ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bMzUwcHhdIGgtWzQ1MHB4XSBiZy1bI0Q5RDlEOTU3XSByb3VuZGVkLTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bMTIwcHhdIGgtWzEyMHB4XSBiZy1bIzkzOTM5MzU3XSByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggdGV4dC1bMjNweF0gZm9udC1tZWRpdW0nPldlbGNvbWUsPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCB0ZXh0LVsyMnB4XSBmb250LWJvbGQnPntkYXRhICYmIGRhdGEubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgPHA+e3VzZXIudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICE8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggbXQtWzMwcHhdIGJnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzIyMHB4XSBoLVs1NXB4XSB0ZXh0LVsyMnB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBFZGl0IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2lnbk91dCgpfX0gY2xhc3NOYW1lPSdmbGV4IG10LVsxMHB4XSBiZy1yZWQtNDAwIHJvdW5kZWQteGwgdy1bMTEwcHhdIGgtWzQwcHhdIHRleHQtWzIwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSaWdodCBQYXJ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bNDUwcHhdIGgtWzQ1MHB4XSBiZy1bI0Q5RDlEOTU3XSByb3VuZGVkLTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggdy1bMjIwcHhdIHRleHQtWzMwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPkpvaW4gb3IgQ3JlYXRlIGEgbG9iYnk8L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgbG9iYnkgY29kZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge3NldExvYmJ5Q29kZShlLnRhcmdldC52YWx1ZSl9fSBjbGFzc05hbWU9J2JvcmRlci1bMnB4XSB0ZXh0LVsyNXB4XSBmb250LW1lZGl1bSBtdC1bMjBweF0gYmctWyNmM2YzZjNdIGJvcmRlci1bIzc1NzU3NV0gZHVyYXRpb24tWzMwMG1zXSBvdXRsaW5lLW5vbmUgcm91bmRlZC1bMThweF0gdy1bMzUwcHhdIGgtWzYwcHhdIHBsLVsyMHB4XSBwci1bMjBweF0nLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9J2ZsZXggbXQtWzMwcHhdIGJnLWJsdWUtMjAwIHJvdW5kZWQtMnhsIHctWzIyMHB4XSBoLVs1NXB4XSB0ZXh0LVsyMnB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgICAgICBKb2luXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggYmctYmx1ZS0yMDAgcm91bmRlZC0yeGwgdy1bMjIwcHhdIGgtWzU1cHhdIHRleHQtWzIycHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJkYiIsIkhvbWVQYWdlIiwic2Vzc2lvbmRhdGEiLCJsb2JieUNvZGUiLCJzZXRMb2JieUNvZGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZXJFbWFpbCIsInVzZXIiLCJlbWFpbCIsImZldGNoRGF0YSIsInEiLCJxdWVyeVNuYXBzaG90IiwidXNlckRhdGEiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwibWFwIiwidXNlcm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HomePage.jsx\n"));

/***/ })

});