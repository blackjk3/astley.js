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
    var tags = document.body.getElementsByTagName('a'),
        url = 'http://youtu.be/dQw4w9WgXcQ',
        i,
        len;

    for (i = 0, len = tags.length; i < len; i = i + 1) {
        tags[i].href = url;
        tags[i].target = '_blank';
    }
}());