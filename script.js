// ==UserScript==
// @name         That's it, no more twitter views
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Gets rid of the twitter view thingy
// @author       @Space_Yaj
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

document.addEventListener("scroll", (event) => {
    console.log('hello');
	const foobarDivs = document.getElementsByClassName('css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr');
	while (foobarDivs.length > 0) {
  		foobarDivs[0].parentNode.remove();
	}
})
