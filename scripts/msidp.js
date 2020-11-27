// ==UserScript==
// @name         Oxford MS Login Helper
// @namespace    https://greasyfork.org/users/169007
// @version      0.1
// @description  try to take over the world!
// @author       ZZYSonny
// @match        https://login.microsoftonline.com/*
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

    const email = "your_email_address";
    const password = "your_password";
    function inputThenClick(inputName, text, buttonid) {
        var div = document.getElementsByName(inputName)[0];
        var divCtx = ko.contextFor(div);
        var bp = ko.bindingProvider.instance;
        var bindings = bp.getBindings(div, divCtx);
        bindings.textInput(text);
        document.getElementById(buttonid).click();
    }

    function waitLoginHeader(callback) {
        var timer = setInterval(function () {
            var loginHeader = document.getElementById("loginHeader");
            if (loginHeader != null) {
                callback();
                clearInterval(timer);
            }
        }, 200);
    }

    function waitBannerLogo(callback) {
        var timer = setInterval(function () {
            var logo = document.getElementsByClassName("banner-logo")[0];
            if (logo != null) {
                if (logo.src.indexOf("637405101442943286") != -1) {
                    callback();
                    clearInterval(timer);
                }
            }
        }, 200);
    }

    function waitCond(cond, callback) {
        var timer = setInterval(function () {
            if (cond()) {
                callback();
                clearInterval(timer);
            }
        }, 200);
    }

    function waitCheckDo(f, cond, callback) {
        f(() => waitCond(cond, callback))
    }

    //idp email
    waitCheckDo(waitBannerLogo,
        () => document.getElementById("loginHeader").innerText.startsWith("登录"),
        () => inputThenClick("loginfmt", email, "idSIButton9"))

    //idp password
    waitCheckDo(waitBannerLogo,
        () => document.getElementById("loginHeader").innerText.startsWith("输入密码"),
        () => inputThenClick("passwd", password, "idSIButton9"))

    //choose account
    waitCheckDo(waitBannerLogo,
        () => document.getElementById("loginHeader").innerText.startsWith("选择帐户"),
        () => document.getElementsByClassName("table-row")[0].click())

    //outlook
    waitCheckDo(waitLoginHeader, () => {
        var loginHeader = document.getElementById("loginHeader");
        return loginHeader.innerText.startsWith("选择帐户") && loginHeader.innerText.endsWith("Outlook");
    }, () => document.getElementsByClassName("table-row")[0].click())



})();