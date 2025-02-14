// ==UserScript==
// @name			ZonaTMO - Reader Mode
// @namespace		https://github.com/Apryed/Manga-ReadMode
// @version			2024-02-14_0.0.1
// @description		Just make it like I want to read manga at ZonaTMO.
// @author			Apryed
// @match			https://zonatmo.com/profile/follow
// @match			https://zonatmo.com/viewer/*
// @icon			https://www.google.com/s2/favicons?sz=64&domain=zonatmo.com
// @downloadURL		https://raw.githubusercontent.com/Apryed/Manga-ReadMode/main/MangaReader.user.js
// @updateURL		https://raw.githubusercontent.com/Apryed/Manga-ReadMode/main/MangaReader.user.js
// @supportURL		https://github.com/Apryed/Manga-ReadMode/issues
// @run-at			document-end
// @grant			none
// ==/UserScript==
(function () {
	'use strict';
	switch (document.URL) {
		case "https://zonatmo.com/profile/follow":
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
		break;
		default: {
			switch ((document.URL).toLowerCase().match("cascade")) {
				case null:
					document.querySelectorAll("nav > div a")[3].click();
				break;
				default:
					if (document.querySelectorAll("div[class='d-inline px-1']")[3].innerText == ' ANCHO'){document.querySelectorAll("div[class='d-inline px-1']")[3].children[0].click();}
					if (document.querySelectorAll("div[class='d-inline px-1']")[4].children[0].style.display== "none"){document.querySelectorAll("div[class='d-inline px-1']")[4].children[1].click();}
					document.getElementById("main-container").setAttribute("style", "background-color:black; padding: 25px 5em !important; max-width:100%");
					document.querySelector("div[class='col-12 col-lg-4 col-xl-3']").parentElement.remove();
			}
		}
	};
})();
