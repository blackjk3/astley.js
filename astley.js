/*
 *
 * Authors: Jason Kadrmas (@itooamaneatguy)
 *          Aaron Johnson (@ge3kusa)
 * Astley.js: You know the rules... And so do I!
 * License: MIT
 *
 *
 */

(function () {
    "use strict";
    var body = document.body,
        url = 'http://youtu.be/dQw4w9WgXcQ';

    function rickRoll(ele) {
        var tags = ele.getElementsByTagName('a'),
            i,
            len;

        for (i = 0, len = tags.length; i < len; i = i + 1) {
            tags[i].href = url;
            tags[i].target = '_blank';
        }
    }
    rickRoll(body);

    // Check for any new links and rick roll those too!
    body.addEventListener("DOMNodeInserted", function (event) {
        var target = event.target;

        if (target.tagName) {
            rickRoll(target);
        }
    }, false);

}());