// ==UserScript==
// @name         Oxford IDP Helper
// @namespace    https://greasyfork.org/users/169007
// @version      0.1
// @description  try to take over the world!
// @author       ZZYSonny
// @match        https://webauth.ox.ac.uk/*
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';
    if(document.URL=="https://webauth.ox.ac.uk/login"){
        document.getElementsByClassName("go_button")[0].click()
    }else{
        document.getElementById("username").value="yourUsername"
        document.getElementById("password").value="yourPassword"
        document.forms[0].submit()
    }
    // Your code here...
})();