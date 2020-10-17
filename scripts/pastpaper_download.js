// ==UserScript==
// @name         Oxford CS Past Paper downloader
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Download past paper from Oxford CS Website
// @match        https://www.cs.ox.ac.uk/*/pastpapers.html
// @namespace    https://greasyfork.org/users/169007
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(confirm("Start Downloading?")){
        var all = document.getElementById('maincontent').childNodes
        var i
        for(i=0;i<all.length;i++){
            if(all[i].innerText=="Computer Science"){
                var list=all[i+2]
                break
            }
        }
        for(i=0;i<list.children.length;i++){
            var x=list.children[i].children[0]
            var link = document.createElement('a');
            link.href = x.href
            link.download = x.innerText
            link.dispatchEvent(new MouseEvent('click'));
            console.log(x.innerText + "\n" + x.href)
        }
    }
})();