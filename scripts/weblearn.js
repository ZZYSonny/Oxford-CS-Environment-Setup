// ==UserScript==
// @name         Oxford WebLearn Helper
// @namespace    https://greasyfork.org/users/169007
// @version      0.1
// @description  try to take over the world!
// @author       ZZYSonny
// @match        https://weblearn.ox.ac.uk/*
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';
    if(document.getElementsByClassName("link").length==2){
        document.getElementsByClassName("link")[0].click()
    }
    // Your code here...
})();