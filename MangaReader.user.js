// ==UserScript==
// @name					ZonaTMO - Reader Mode
// @namespace			https://github.com/Apryed/Manga-ReadMode
// @version				2024-02-14_0.0.1
// @description		Just make it like I want to read manga at ZonaTMO.
// @author				Apryed
// @match				https://zonatmo.com/profile/follow
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
	'use strict';
	if (document.URL=="https://zonatmo.com/profile/follow"){
		document.querySelector("div.col-12.col-lg-4.text-center").remove();
		document.querySelector("div.col-12.col-lg-8").style.maxWidth="100%";
		document.querySelector("div.col-12.col-lg-8").style.width="100%";
		document.querySelector("div.container.p-0.p-sm-2").style.display="block";
		document.querySelector("div.container.p-0.p-sm-2").style.maxWidth="100%";
		document.querySelector("div.container.p-0.p-sm-2").style.width="100%";
		document.querySelector("div.container.p-0.p-sm-2").style.setProperty("padding",'1% 5%','important');
		document.querySelector("div.container.p-0.p-sm-2").children[0].style.display="block";
		document.querySelector("div.container.p-0.p-sm-2").children[0].style.maxWidth="100%";
		document.querySelector("div.container.p-0.p-sm-2").children[0].style.width="100%";
		(Array.from(document.querySelector("div.container.p-0.p-sm-2").children[0].children[0].children[0].children).shift()).children[0].style.margin="0";
		(Array.from(document.querySelector("div.container.p-0.p-sm-2").children[0].children[0].children[0].children).shift()).children[0].style.textAlign="center";
		(Array.from(document.querySelector("div.container.p-0.p-sm-2").children[0].children[0].children[0].children).slice(1)).forEach(el=>{
			el.style.flex="0 1 calc(20% - 0px)";
			el.style.maxWidth="20%";
		});
	} else {
		if (!(document.URL).toLowerCase().match("cascade")){
			document.querySelectorAll("nav > div a")[2].click();
		} else {
			document.querySelectorAll(".pbl").forEach( el=> el.remove());
			document.querySelectorAll("nav > div a")[3].click();
			let MainC = document.getElementById("main-container");
			MainC.setAttribute("style", "background-color:black; padding: 0 5em !important");
			let comments = document.querySelector("div[class='col-12 col-lg-4']");
			comments.previousElementSibling.setAttribute("style", "flex: 0 0 100%; max-width: 100%");
			comments.remove();
		};
	};
})();
