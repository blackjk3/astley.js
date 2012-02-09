/*
 *
 * Authors: Jason Kadrmas (@itooamaneatguy)
 * Astley.js: You know the rules... And so do I!
 * License: MIT
 *
 *
 */

(function() {
	var tags = document.body.getElementsByTagName('a'),
		url = 'http://youtu.be/dQw4w9WgXcQ';
	
	for(var i=0,len=tags.length; i<len; i++) {
		tags[i].href = url;
		tags[i].target = '_blank';
	}
})();