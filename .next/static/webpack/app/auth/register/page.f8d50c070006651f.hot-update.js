"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/register/page",{

/***/ "(app-pages-browser)/./src/app/components/RegisterForm.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/RegisterForm.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Logo.svg */ \"(app-pages-browser)/./src/app/assets/Logo.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./src/app/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst RegisterForm = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [passwordRepeat, setPasswordRepeat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function addDataToFirestore(username, email, password) {\n        try {\n            const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"users\"), {\n                username: username,\n                email: email,\n                password: password\n            });\n            console.log(\"User doc id:\", docRef.id);\n            return true;\n        } catch (err) {\n            console.log(\"Error adding user to data:\", err);\n            return false;\n        }\n    }\n    const registerUserOnFirebase = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth, email, password);\n    };\n    const register = ()=>{\n        if (!username || !email || !password || !passwordRepeat) {\n            if (password === passwordRepeat) {\n                registerUserOnFirebase();\n            }\n            alert(\"Passwords are not \");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"design-bg bg-[#F1F1F4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white h-[570px] w-[470px] flex flex-col m-auto items-center rounded-3xl pt-[40px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        width: 200,\n                        height: 200,\n                        alt: \"SameView Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[12rem] h-[0.1rem] bg-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"p-2 pr-5 text-lg font-medium text-[#616161]\",\n                        children: \"Registration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-[10px] pt-[40px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                name: \"username\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter username\",\n                                    onChange: (e)=>{\n                                        setUsername(e.target.value);\n                                    },\n                                    className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                name: \"email\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Enter email\",\n                                    value: email,\n                                    onChange: (e)=>{\n                                        setEmail(e.target.value);\n                                    },\n                                    className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                name: \"password\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Enter password\",\n                                    value: password,\n                                    onChange: (e)=>{\n                                        setPassword(e.target.value);\n                                    },\n                                    className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                name: \"password-repeat\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Enter password again\",\n                                    onChange: (e)=>{\n                                        setPasswordRepeat(e.target.value);\n                                    },\n                                    className: \"border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex m-auto justify-center w-[180px] h-[35px] mt-[20px] custom-blue rounded-[10px] ease-out duration-[300ms] hover:bg-sky-300 cursor-pointer\",\n                                name: \"login-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>register(),\n                                    disabled: !email || !password,\n                                    className: \"flex pt-[3px] w-[180px] h-[35px] rounded-[10px] font-bold text-lg text-center justify-center cursor-pointer\",\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute flex flex-row font-medium bottom-3 right-6 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Have an account? \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"login\",\n                                        className: \"text-[#006ACB]\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 107\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 87\n                            }, undefined),\n                            \"  \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CASPER\\\\Desktop\\\\SameView\\\\SameView\\\\src\\\\app\\\\components\\\\RegisterForm.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegisterForm, \"LwoiQ3fM9Cou2a/XoYThUbwkn54=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9SZWdpc3RlckZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQUNPO0FBQ1Q7QUFDSTtBQUNXO0FBQ1Y7QUFDMEI7QUFDM0I7QUFDdUI7QUFFeEQsTUFBTVcsZUFBZTs7SUFDbkIsTUFBTUMsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2UsZ0JBQWdCQyxrQkFBa0IsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXJELGVBQWVpQixtQkFBbUJSLFFBQVEsRUFBRUUsS0FBSyxFQUFFRSxRQUFRO1FBQ3pELElBQUk7WUFDRixNQUFNSyxTQUFTLE1BQU1aLDBEQUFNQSxDQUFDRCw4REFBVUEsQ0FBQ0QseUNBQUVBLEVBQUUsVUFBVTtnQkFDbkRLLFVBQVVBO2dCQUNWRSxPQUFPQTtnQkFDUEUsVUFBVUE7WUFDWjtZQUNBTSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRixPQUFPRyxFQUFFO1lBQ3JDLE9BQU87UUFDVCxFQUFFLE9BQU9DLEtBQUs7WUFDWkgsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QkU7WUFDMUMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNQyx5QkFBeUI7UUFDN0JwQiw2RUFBOEJBLENBQUNELDJDQUFJQSxFQUFFUyxPQUFPRTtJQUM5QztJQUVBLE1BQU1XLFdBQVc7UUFDZixJQUFJLENBQUNmLFlBQVksQ0FBQ0UsU0FBUyxDQUFDRSxZQUFZLENBQUNFLGdCQUFnQjtZQUN2RCxJQUFJRixhQUFhRSxnQkFBZ0I7Z0JBRS9CUTtZQUNGO1lBQ0FFLE1BQU07UUFDUjtJQUVGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQzlCLG1EQUFLQTt3QkFDRitCLEtBQUs5Qix3REFBSUE7d0JBQ1QrQixPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJOzs7Ozs7a0NBRVIsOERBQUNMO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNLO3dCQUFHTCxXQUFVO2tDQUE4Qzs7Ozs7O2tDQUM1RCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDRDtnQ0FBSU8sTUFBSzswQ0FDViw0RUFBQ0M7b0NBQU1DLGFBQVk7b0NBQWlCQyxVQUFVLENBQUNDO3dDQUFPM0IsWUFBWTJCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQ0FBQztvQ0FBR1osV0FBVTs7Ozs7Ozs7Ozs7MENBRTlGLDhEQUFDRDtnQ0FBSU8sTUFBSzswQ0FDViw0RUFBQ0M7b0NBQU1NLE1BQUs7b0NBQVFMLGFBQVk7b0NBQWNJLE9BQU81QjtvQ0FBT3lCLFVBQVUsQ0FBQ0M7d0NBQU96QixTQUFTeUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUFDO29DQUFHWixXQUFVOzs7Ozs7Ozs7OzswQ0FFbkgsOERBQUNEO2dDQUFJTyxNQUFLOzBDQUNWLDRFQUFDQztvQ0FBTU0sTUFBSztvQ0FBV0wsYUFBWTtvQ0FBaUJJLE9BQU8xQjtvQ0FBVXVCLFVBQVUsQ0FBQ0M7d0NBQU92QixZQUFZdUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUFDO29DQUFHWixXQUFVOzs7Ozs7Ozs7OzswQ0FFL0gsOERBQUNEO2dDQUFJTyxNQUFLOzBDQUNWLDRFQUFDQztvQ0FBTU0sTUFBSztvQ0FBV0wsYUFBWTtvQ0FBdUJDLFVBQVUsQ0FBQ0M7d0NBQU9yQixrQkFBa0JxQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0NBQUM7b0NBQUdaLFdBQVU7Ozs7Ozs7Ozs7OzBDQUs5SCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Z0NBQStJTSxNQUFLOzBDQUNqSyw0RUFBQ1E7b0NBQU9DLFNBQVMsSUFBTWxCO29DQUFhbUIsVUFBVyxDQUFDaEMsU0FBUyxDQUFDRTtvQ0FBV2MsV0FBVTs4Q0FBOEc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcvTCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUF1RCw4REFBQ2lCOztvQ0FBRTtrREFBaUIsOERBQUM3QyxrREFBSUE7d0NBQUM4QyxNQUFLO3dDQUFRbEIsV0FBVTtrREFBaUI7Ozs7Ozs7Ozs7Ozs0QkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hLO0dBM0VNcEI7O1FBQ1dOLHNEQUFTQTs7O0tBRHBCTTtBQTZFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUmVnaXN0ZXJGb3JtLmpzeD8zZGYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL2Fzc2V0cy9Mb2dvLnN2Zyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB7Y3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRSZXBlYXQsIHNldFBhc3N3b3JkUmVwZWF0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gYWRkRGF0YVRvRmlyZXN0b3JlKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZG9jIGlkOlwiLCBkb2NSZWYuaWQpXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgYWRkaW5nIHVzZXIgdG8gZGF0YTpcIiwgZXJyKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJVc2VyT25GaXJlYmFzZSA9ICgpID0+IHtcclxuICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZWdpc3RlciA9ICgpID0+IHtcclxuICAgIGlmICghdXNlcm5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhcGFzc3dvcmRSZXBlYXQpIHtcclxuICAgICAgaWYgKHBhc3N3b3JkID09PSBwYXNzd29yZFJlcGVhdCkge1xyXG5cclxuICAgICAgICByZWdpc3RlclVzZXJPbkZpcmViYXNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgYWxlcnQoXCJQYXNzd29yZHMgYXJlIG5vdCBcIik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNpZ24tYmcgYmctWyNGMUYxRjRdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBoLVs1NzBweF0gdy1bNDcwcHhdIGZsZXggZmxleC1jb2wgbS1hdXRvIGl0ZW1zLWNlbnRlciByb3VuZGVkLTN4bCBwdC1bNDBweF1cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb31cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlNhbWVWaWV3IExvZ29cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTJyZW1dIGgtWzAuMXJlbV0gYmctYmxhY2tcIj48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC0yIHByLTUgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LVsjNjE2MTYxXVwiPlJlZ2lzdHJhdGlvbjwvaDE+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLVsxMHB4XSBwdC1bNDBweF0nPiBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG5hbWU9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXJuYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfX0gY2xhc3NOYW1lPSdib3JkZXItMiBkdXJhdGlvbi1bMzAwbXNdIG91dGxpbmUtbm9uZSByb3VuZGVkLVsxNXB4XSB3LVszNDBweF0gaC1bNDVweF0gcGwtWzIwcHhdIHByLVsyMHB4XScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHtzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSBjbGFzc05hbWU9J2JvcmRlci0yIGR1cmF0aW9uLVszMDBtc10gb3V0bGluZS1ub25lIHJvdW5kZWQtWzE1cHhdIHctWzM0MHB4XSBoLVs0NXB4XSBwbC1bMjBweF0gcHItWzIwcHhdJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4ge3NldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT0nYm9yZGVyLTIgZHVyYXRpb24tWzMwMG1zXSBvdXRsaW5lLW5vbmUgcm91bmRlZC1bMTVweF0gdy1bMzQwcHhdIGgtWzQ1cHhdIHBsLVsyMHB4XSBwci1bMjBweF0nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuYW1lPVwicGFzc3dvcmQtcmVwZWF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkIGFnYWluXCIgb25DaGFuZ2U9eyhlKSA9PiB7c2V0UGFzc3dvcmRSZXBlYXQoZS50YXJnZXQudmFsdWUpfX0gY2xhc3NOYW1lPSdib3JkZXItMiBkdXJhdGlvbi1bMzAwbXNdIG91dGxpbmUtbm9uZSByb3VuZGVkLVsxNXB4XSB3LVszNDBweF0gaC1bNDVweF0gcGwtWzIwcHhdIHByLVsyMHB4XScgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtLWF1dG8ganVzdGlmeS1jZW50ZXIgdy1bMTgwcHhdIGgtWzM1cHhdIG10LVsyMHB4XSBjdXN0b20tYmx1ZSByb3VuZGVkLVsxMHB4XSBlYXNlLW91dCBkdXJhdGlvbi1bMzAwbXNdIGhvdmVyOmJnLXNreS0zMDAgY3Vyc29yLXBvaW50ZXJcIiBuYW1lPVwibG9naW4tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVnaXN0ZXIoKX0gIGRpc2FibGVkPXsoIWVtYWlsIHx8ICFwYXNzd29yZCl9IGNsYXNzTmFtZT1cImZsZXggcHQtWzNweF0gdy1bMTgwcHhdIGgtWzM1cHhdIHJvdW5kZWQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXggZmxleC1yb3cgZm9udC1tZWRpdW0gYm90dG9tLTMgcmlnaHQtNiBcIj48cD5IYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9XCJsb2dpblwiIGNsYXNzTmFtZT1cInRleHQtWyMwMDZBQ0JdXCI+TG9naW48L0xpbms+PC9wPiAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMb2dvIiwiTGluayIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRiIiwiY29sbGVjdGlvbiIsImFkZERvYyIsIlJlZ2lzdGVyRm9ybSIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkUmVwZWF0Iiwic2V0UGFzc3dvcmRSZXBlYXQiLCJhZGREYXRhVG9GaXJlc3RvcmUiLCJkb2NSZWYiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJlcnIiLCJyZWdpc3RlclVzZXJPbkZpcmViYXNlIiwicmVnaXN0ZXIiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJuYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/RegisterForm.jsx\n"));

/***/ })

});