"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// api/youtube.js

async function handler(req, res) {
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
            part: "snippet",
            maxResults: "50",
            playlistId: "PLQWdi0MuGKqtEqEJXch4HHlj3dNSCO4yB",
            key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
        }
    }).then((response)=>{
        // Map over the response and extract the title and videoId
        const videos = response.data.items.map((item)=>({
                title: item.snippet.title,
                videoId: item.snippet.resourceId.videoId
            }));
        // Set the state
        res.status(200).json(videos);
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(743));
module.exports = __webpack_exports__;

})();