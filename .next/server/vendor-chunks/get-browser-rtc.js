/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-browser-rtc";
exports.ids = ["vendor-chunks/get-browser-rtc"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-browser-rtc/index.js":
/*!***********************************************!*\
  !*** ./node_modules/get-browser-rtc/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("// originally pulled out of simple-peer\nmodule.exports = function getBrowserRTC() {\n    if (typeof globalThis === \"undefined\") return null;\n    var wrtc = {\n        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,\n        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,\n        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate\n    };\n    if (!wrtc.RTCPeerConnection) return null;\n    return wrtc;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1lLXZpZXcvLi9ub2RlX21vZHVsZXMvZ2V0LWJyb3dzZXItcnRjL2luZGV4LmpzP2YzMWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gb3JpZ2luYWxseSBwdWxsZWQgb3V0IG9mIHNpbXBsZS1wZWVyXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0QnJvd3NlclJUQyAoKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIHZhciB3cnRjID0ge1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uOiBnbG9iYWxUaGlzLlJUQ1BlZXJDb25uZWN0aW9uIHx8IGdsb2JhbFRoaXMubW96UlRDUGVlckNvbm5lY3Rpb24gfHxcbiAgICAgIGdsb2JhbFRoaXMud2Via2l0UlRDUGVlckNvbm5lY3Rpb24sXG4gICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uOiBnbG9iYWxUaGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiB8fFxuICAgICAgZ2xvYmFsVGhpcy5tb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gfHwgZ2xvYmFsVGhpcy53ZWJraXRSVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgUlRDSWNlQ2FuZGlkYXRlOiBnbG9iYWxUaGlzLlJUQ0ljZUNhbmRpZGF0ZSB8fCBnbG9iYWxUaGlzLm1velJUQ0ljZUNhbmRpZGF0ZSB8fFxuICAgICAgZ2xvYmFsVGhpcy53ZWJraXRSVENJY2VDYW5kaWRhdGVcbiAgfVxuICBpZiAoIXdydGMuUlRDUGVlckNvbm5lY3Rpb24pIHJldHVybiBudWxsXG4gIHJldHVybiB3cnRjXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImdldEJyb3dzZXJSVEMiLCJnbG9iYWxUaGlzIiwid3J0YyIsIlJUQ1BlZXJDb25uZWN0aW9uIiwibW96UlRDUGVlckNvbm5lY3Rpb24iLCJ3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiIsIlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiIsIm1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiIsIndlYmtpdFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiIsIlJUQ0ljZUNhbmRpZGF0ZSIsIm1velJUQ0ljZUNhbmRpZGF0ZSIsIndlYmtpdFJUQ0ljZUNhbmRpZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBRXZDQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0M7SUFDeEIsSUFBSSxPQUFPQyxlQUFlLGFBQWEsT0FBTztJQUM5QyxJQUFJQyxPQUFPO1FBQ1RDLG1CQUFtQkYsV0FBV0UsaUJBQWlCLElBQUlGLFdBQVdHLG9CQUFvQixJQUNoRkgsV0FBV0ksdUJBQXVCO1FBQ3BDQyx1QkFBdUJMLFdBQVdLLHFCQUFxQixJQUNyREwsV0FBV00sd0JBQXdCLElBQUlOLFdBQVdPLDJCQUEyQjtRQUMvRUMsaUJBQWlCUixXQUFXUSxlQUFlLElBQUlSLFdBQVdTLGtCQUFrQixJQUMxRVQsV0FBV1UscUJBQXFCO0lBQ3BDO0lBQ0EsSUFBSSxDQUFDVCxLQUFLQyxpQkFBaUIsRUFBRSxPQUFPO0lBQ3BDLE9BQU9EO0FBQ1QiLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LWJyb3dzZXItcnRjL2luZGV4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-browser-rtc/index.js\n");

/***/ })

};
;