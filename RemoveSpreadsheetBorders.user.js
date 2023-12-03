// ==UserScript==
// @name         RemoveSpreadsheetBorders
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove spreadsheet elemetns borders
// @author       Limekys
// @match        *://docs.google.com/spreadsheets/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

function clearBorders() {
    var _elms = document.getElementsByClassName("waffle-embedded-object-overlay");
    var _arr = Array.from(_elms);
    _arr.forEach((element) => element.style.border = "0px");
}

(function() {
    'use strict';

    setInterval(() =>
    clearBorders()
    , 1000);
})();