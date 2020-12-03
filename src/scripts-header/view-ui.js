module.exports = isProd =>
`// ==UserScript==
// @name         View UI
// @version      1.0.0
// @description  隐藏文档中菜单项：Pro、物料
// @author       sakura-flutter
// @namespace    https://github.com/sakura-flutter/tampermonkey-scripts/commits/master/src/scripts/view-ui
// @license      GPL-3.0
// @compatible   chrome >= Latest
// @compatible   firefox >= Latest
// @match        https://www.iviewui.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @require      https://cdn.jsdelivr.net/npm/vue@3.0.4/dist/vue.runtime.global${isProd ? '.prod' : ''}.js
// ==/UserScript==
`
