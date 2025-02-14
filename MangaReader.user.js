// ==UserScript==
// @name					ZonaTMO - Reader Mode
// @namespace			https://github.com/Apryed/Manga-ReadMode
// @version				2024-02-14_0.0.1
// @description		Just make it like I want to read manga at ZonaTMO.
// @author				Apryed
// @match					https://viciosgames.com/news/*
// @match					https://techingtoday.com/news/*
// @icon					https://www.google.com/s2/favicons?sz=64&domain=zonatmo.com
// @downloadURL		https://raw.githubusercontent.com/Apryed/Manga-ReadMode/main/MangaReader.user.js
// @updateURL			https://raw.githubusercontent.com/Apryed/Manga-ReadMode/main/MangaReader.user.js
// @supportURL		https://github.com/Apryed/Manga-ReadMode/issues
// @run-at				document-end
// @grant					none
// ==/UserScript==
(function () {
	'use strict'
	if ( !(document.URL).toLowerCase().match("cascade") ){
		// Open in cascade mode
		document.querySelectorAll("nav > div a")[2].click()
	} else {
		// Remove Ads
		document.querySelectorAll(".pbl").forEach( el=> el.remove())
		// Toggle Full Width
		document.querySelectorAll("nav > div a")[3].click()
		let MainC = document.getElementById("main-container")
		MainC.setAttribute("style", "background-color:black; padding: 0 5em !important")
		let comments = document.querySelector("div[class='col-12 col-lg-4']")
		comments.previousElementSibling.setAttribute("style", "flex: 0 0 100%; max-width: 100%")
		comments.remove()
	}
})()
