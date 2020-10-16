// ==UserScript==
// @name         Oxford Panopto Helper
// @namespace    https://greasyfork.org/users/169007
// @version      0.1
// @description  try to take over the world!
// @author       ZZYSonny
// @match        https://ox.cloud.panopto.eu/Panopto/Pages/Auth/*
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';
    const loginURL = "https://weblearn.ox.ac.uk/access/basiclti/site/comlab/content:1245";
    const loginDestURL = "https://ox.cloud.panopto.eu/Panopto/Pages/Sessions/List.aspx?embedded=1#folderID=%22d0db5511-cc11-401d-8f87-78a2a1cda612%22";
    const loginWindow = window.open(loginURL);
    const timer = setInterval(function() {
        if(loginWindow.location.href == loginDestURL){
            clearInterval(timer);
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const returnURL = urlParams.get("ReturnUrl");
            window.location.href = returnURL;
            loginWindow.close()
        }
     }, 200);
})();