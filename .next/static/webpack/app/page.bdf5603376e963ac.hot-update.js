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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./src/app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HomePage = (param)=>{\n    let { sessiondata } = param;\n    var _sessiondata_data_user, _sessiondata_data;\n    _s();\n    const [lobbyCode, setLobbyCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const userEmail = \"\".concat(sessiondata === null || sessiondata === void 0 ? void 0 : (_sessiondata_data = sessiondata.data) === null || _sessiondata_data === void 0 ? void 0 : (_sessiondata_data_user = _sessiondata_data.user) === null || _sessiondata_data_user === void 0 ? void 0 : _sessiondata_data_user.email);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"email\", \"==\", userEmail));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n            const userData = [];\n            querySnapshot.forEach((doc)=>{\n                userData.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setData(userData);\n        };\n        fetchData();\n    }, [\n        userEmail\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"absolute pl-[42px] pt-[20px] text-[34px] font-medium\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-[900px] h-[550px] bg-white rounded-3xl m-auto items-center justify-evenly\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[350px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-[120px] h-[120px] bg-[#93939357] rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[23px] font-medium\",\n                                    children: \"Welcome,\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex text-[22px] font-bold\",\n                                    children: [\n                                        data && data.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: user.username\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            }, user.id, false, {\n                                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 9\n                                            }, undefined)),\n                                        \"!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Edit username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                                    },\n                                    className: \"flex mt-[10px] bg-red-400 rounded-xl w-[110px] h-[40px] text-[20px] items-center justify-center font-semibold\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[450px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex w-[220px] text-[30px] font-semibold text-center\",\n                                    children: \"Join or Create a lobby\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter lobby code\",\n                                    onChange: (e)=>{\n                                        setLobbyCode(e.target.value);\n                                    },\n                                    className: \"border-[2px] text-[25px] font-medium mt-[20px] bg-[#f3f3f3] border-[#757575] duration-[300ms] outline-none rounded-[18px] w-[350px] h-[60px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex mt-[30px] bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Join\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex bg-blue-200 rounded-2xl w-[220px] h-[55px] text-[22px] items-center justify-center font-semibold\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\HomePage.jsx\",\n        lineNumber: 27,\n        columnNumber: 8\n    }, undefined);\n};\n_s(HomePage, \"BU3vxev/wY6TbGmtKKbWvJEzoNg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QztBQUNVO0FBQ2M7QUFDbkM7QUFDakMsTUFBTVMsV0FBVztRQUFDLEVBQUNDLFdBQVcsRUFBQztRQUdOQSx3QkFBQUE7O0lBRnJCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUM7SUFDakMsTUFBTWUsWUFBWSxHQUFrQyxPQUEvQkwsd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBYUcsSUFBSSxjQUFqQkgseUNBQUFBLHlCQUFBQSxrQkFBbUJNLElBQUksY0FBdkJOLDZDQUFBQSx1QkFBeUJPLEtBQUs7SUFDbkRoQixnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixZQUFZO1lBQ2hCLE1BQU1DLElBQUliLHlEQUFLQSxDQUFDRiw4REFBVUEsQ0FBQ0kseUNBQUVBLEVBQUUsVUFBVUQseURBQUtBLENBQUMsU0FBUyxNQUFNUTtZQUM5RCxNQUFNSyxnQkFBZ0IsTUFBTWYsMkRBQU9BLENBQUNjO1lBRXBDLE1BQU1FLFdBQVcsRUFBRTtZQUNuQkQsY0FBY0UsT0FBTyxDQUFDLENBQUNDO2dCQUNyQkYsU0FBU0csSUFBSSxDQUFDO29CQUFFQyxJQUFJRixJQUFJRSxFQUFFO29CQUFFLEdBQUdGLElBQUlWLElBQUksRUFBRTtnQkFBQztZQUM1QztZQUVBQyxRQUFRTztRQUNWO1FBRUFIO0lBQ0YsR0FBRztRQUFDSDtLQUFVO0lBRWhCLHFCQUNLLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXVEOzs7Ozs7OEJBQ3JFLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQStCOzs7Ozs7OENBQzVDLDhEQUFDRTtvQ0FBRUYsV0FBVTs7d0NBQThCZCxRQUFRQSxLQUFLaUIsR0FBRyxDQUFDLENBQUNkLHFCQUNuRSw4REFBQ1U7MERBQ0MsNEVBQUNHOzhEQUFHYixLQUFLZSxRQUFROzs7Ozs7K0NBRFRmLEtBQUtTLEVBQUU7Ozs7O3dDQUdoQjs7Ozs7Ozs4Q0FFSyw4REFBQ087b0NBQU9MLFdBQVU7OENBQWtIOzs7Ozs7OENBR3BJLDhEQUFDSztvQ0FBT0MsU0FBUzt3Q0FBTy9CLHdEQUFPQTtvQ0FBRTtvQ0FBR3lCLFdBQVU7OENBQWdIOzs7Ozs7Ozs7Ozs7c0NBTWhLLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFFRixXQUFVOzhDQUF1RDs7Ozs7OzhDQUNwRSw4REFBQ087b0NBQU1DLGFBQVk7b0NBQW1CQyxVQUFVLENBQUNDO3dDQUFPekIsYUFBYXlCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQ0FBQztvQ0FBR1osV0FBVTs7Ozs7OzhDQUNqRyw4REFBQ0s7b0NBQVFMLFdBQVU7OENBQWtIOzs7Ozs7OENBR3JJLDhEQUFDSztvQ0FBT0wsV0FBVTs4Q0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhJO0dBMURNbEI7S0FBQUE7QUE0RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0hvbWVQYWdlLmpzeD9jZDJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHtjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmV9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuY29uc3QgSG9tZVBhZ2UgPSAoe3Nlc3Npb25kYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2xvYmJ5Q29kZSwgc2V0TG9iYnlDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgdXNlckVtYWlsID0gYCR7c2Vzc2lvbmRhdGE/LmRhdGE/LnVzZXI/LmVtYWlsfWBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvbihkYiwgJ3VzZXJzJyksIHdoZXJlKCdlbWFpbCcsICc9PScsIHVzZXJFbWFpbCkpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gW107XHJcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgIHVzZXJEYXRhLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIHNldERhdGEodXNlckRhdGEpO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFt1c2VyRW1haWxdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1bI0YxRjFGNF0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nYWJzb2x1dGUgcGwtWzQycHhdIHB0LVsyMHB4XSB0ZXh0LVszNHB4XSBmb250LW1lZGl1bSc+SG9tZTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bOTAwcHhdIGgtWzU1MHB4XSBiZy13aGl0ZSByb3VuZGVkLTN4bCBtLWF1dG8gaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgIHsvKiBMZWZ0IFBhcnQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVszNTBweF0gaC1bNDUwcHhdIGJnLVsjRDlEOUQ5NTddIHJvdW5kZWQtMnhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LVsxMjBweF0gaC1bMTIwcHhdIGJnLVsjOTM5MzkzNTddIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCB0ZXh0LVsyM3B4XSBmb250LW1lZGl1bSc+V2VsY29tZSw8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4IHRleHQtWzIycHhdIGZvbnQtYm9sZCc+e2RhdGEgJiYgZGF0YS5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICA8cD57dXNlci51c2VybmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gITwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBtdC1bMzBweF0gYmctYmx1ZS0yMDAgcm91bmRlZC0yeGwgdy1bMjIwcHhdIGgtWzU1cHhdIHRleHQtWzIycHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIEVkaXQgdXNlcm5hbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtzaWduT3V0KCl9fSBjbGFzc05hbWU9J2ZsZXggbXQtWzEwcHhdIGJnLXJlZC00MDAgcm91bmRlZC14bCB3LVsxMTBweF0gaC1bNDBweF0gdGV4dC1bMjBweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtc2VtaWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFJpZ2h0IFBhcnQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs0NTBweF0gaC1bNDUwcHhdIGJnLVsjRDlEOUQ5NTddIHJvdW5kZWQtMnhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCB3LVsyMjBweF0gdGV4dC1bMzBweF0gZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+Sm9pbiBvciBDcmVhdGUgYSBsb2JieTwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBsb2JieSBjb2RlXCIgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TG9iYnlDb2RlKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT0nYm9yZGVyLVsycHhdIHRleHQtWzI1cHhdIGZvbnQtbWVkaXVtIG10LVsyMHB4XSBiZy1bI2YzZjNmM10gYm9yZGVyLVsjNzU3NTc1XSBkdXJhdGlvbi1bMzAwbXNdIG91dGxpbmUtbm9uZSByb3VuZGVkLVsxOHB4XSB3LVszNTBweF0gaC1bNjBweF0gcGwtWzIwcHhdIHByLVsyMHB4XScvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT0nZmxleCBtdC1bMzBweF0gYmctYmx1ZS0yMDAgcm91bmRlZC0yeGwgdy1bMjIwcHhdIGgtWzU1cHhdIHRleHQtWzIycHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICAgIEpvaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBiZy1ibHVlLTIwMCByb3VuZGVkLTJ4bCB3LVsyMjBweF0gaC1bNTVweF0gdGV4dC1bMjJweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtc2VtaWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsImRiIiwiSG9tZVBhZ2UiLCJzZXNzaW9uZGF0YSIsImxvYmJ5Q29kZSIsInNldExvYmJ5Q29kZSIsImRhdGEiLCJzZXREYXRhIiwidXNlckVtYWlsIiwidXNlciIsImVtYWlsIiwiZmV0Y2hEYXRhIiwicSIsInF1ZXJ5U25hcHNob3QiLCJ1c2VyRGF0YSIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJ1c2VybmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HomePage.jsx\n"));

/***/ })

});