// ==UserScript==
// @name         Oxford MS Login Helper
// @namespace    https://greasyfork.org/users/169007
// @version      0.1
// @description  try to take over the world!
// @author       ZZYSonny
// @match        https://login.microsoftonline.com/*
// @require      https://raw.githubusercontent.com/jiangts/JS-OTP/master/dist/jsOTP.min.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    var totp = new jsOTP.totp();
    const secret = "your_authenticator_secret";
    const email = "your_email";
    const password = "your_password";
    function inputThenClick(inputName, text, buttonid) {
        var div = document.getElementsByName(inputName)[0];
        var divCtx = ko.contextFor(div);
        var bp = ko.bindingProvider.instance;
        var bindings = bp.getBindings(div, divCtx);
        bindings.textInput(text);
        document.getElementById(buttonid).click();
    }

    function waitUntil(cond) {
        return new Promise((resolve, reject) => {
            var timer = setInterval(() => {
                if (cond()) {
                    clearInterval(timer);
                    resolve();
                }
            }, 200);
        })
    }

    function waitUntilElement(id) {
        return waitUntil(() => document.getElementById(id) != null);
    }

    function elementTextStartWith(id, text) {
        var element = document.getElementById(id);
        return element != null && element.innerText.startsWith(text);
    }

    waitUntil(() => {
        //wait until oxford banner logo appears
        var logo = document.getElementsByClassName("banner-logo")[0];
        return logo != null && logo.src.indexOf("637405101442943286") != -1;
    }).then(() => {
        //wait until login header appear
        waitUntilElement('loginHeader').then(() => {
            waitUntil(() => elementTextStartWith('loginHeader', '选择帐户'))
                .then(() => document.getElementsByClassName("table-row")[0].click());

            waitUntil(() => elementTextStartWith('loginHeader', '登录'))
                .then(() => inputThenClick("loginfmt", email, "idSIButton9"));

            waitUntil(() => elementTextStartWith('loginHeader', '输入密码'))
                .then(() => inputThenClick("passwd", password, "idSIButton9"));
        })
        //wait until otc appear
        waitUntilElement('idDiv_SAOTCC_Title').then(() => {
            waitUntil(() => elementTextStartWith('idDiv_SAOTCC_Title', '输入验证码'))
                .then(() => inputThenClick("otc", totp.getOtp(secret), "idSubmit_SAOTCC_Continue"));
        });
    })

    waitUntilElement('loginHeader').then(() => {
        //outlook
        waitUntil(() => elementTextStartWith('loginHeader', '选择帐户'))
            .then(() => document.getElementsByClassName("table-row")[0].click())
    })
})();