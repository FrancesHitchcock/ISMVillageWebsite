//declare global variables
const wideScreen = window.matchMedia('(min-width: 481px)')
const mobScreen = window.matchMedia('(max-width: 480px)')

const nav = document.getElementById("navBar");

const dropDown1 = document.getElementById("dropDown1");
const dropDown2 = document.getElementById("dropDown2");

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");

const linkEl1 = document.getElementById("events_link");
const linkEl2 = document.getElementById("comm_link");

const eventsItem = document.getElementById("events_item");
const commItem = document.getElementById("comm_item");

const mobileArrow1 = document.getElementById("mobile_arrow1");
const mobileArrow2 = document.getElementById("mobile_arrow2");

const hamburger = document.getElementById("hamburger");

const headerSection = document.getElementById("header_section");
const mainSection = document.getElementById("main_section");
const homeItem = document.getElementById("home_item");
const showItem = document.getElementById("show_item");

const closeItems = [headerSection, mainSection, homeItem, eventsItem, commItem, showItem];


// For viewports of minimum width 481px, navigation element to be permanently visible
function handleTabletChange(e) {
  if (e.matches) {
    nav.style.visibility = "visible";	
		dropDown1.style.visibility = "hidden";
		dropDown2.style.visibility = "hidden";
		linkEl1.style.color = "white";
		linkEl2.style.color = "white";
		arrow1.src = "resources/images/arrow_blank.png";
		arrow2.src = "resources/images/arrow_blank.png";
  }
}
wideScreen.addListener(handleTabletChange)

// For viewports of max width 480px, navigation element to be hidden, menu icon to be visible
function handleMobChange(e) {
  if (e.matches) {
    nav.style.visibility = "hidden";
		dropDown1.style.visibility = "hidden";
		dropDown2.style.visibility = "hidden";
		linkEl1.style.color = "white";
		linkEl2.style.color = "white";
		mobileArrow1.src = "resources/images/mobile_arrow_blank.png";
		mobileArrow2.src = "resources/images/mobile_arrow_blank.png";
		hamburger.src = "resources/images/hamburger.png";		
  }
}
mobScreen.addListener(handleMobChange)


//For viewports of minimum width 481px, nested list dropdown to be visible, navigation list text and arrow to display as orange
function showDropDown(item, dropdown, arrow, linkEl) {
	item.addEventListener("mouseover", function() {
		if (wideScreen.matches) {
			dropdown.style.visibility = "visible";
			arrow.src = "resources/images/arrow.png";
			linkEl.style.color = "#e9982f";
		}
	});
}
showDropDown(eventsItem, dropDown1, arrow1, linkEl1);
showDropDown(commItem, dropDown2, arrow2, linkEl2);

//For viewports of minimum width 481px, nested list dropdown to be hidden, navigation list text and arrow to display as white
function hideDropDown(item, dropdown, arrow, linkEl) {
	item.addEventListener("mouseout", function() {
		if (wideScreen.matches) {
			dropdown.style.visibility = "hidden";
			arrow.src = "resources/images/arrow_blank.png";
			linkEl.style.color = "white";
		}
	});
}
hideDropDown(eventsItem, dropDown1, arrow1, linkEl1);
hideDropDown(commItem, dropDown2, arrow2, linkEl2);

//For viewports of maximum width 480px, set all dropdowns to "hidden" from initialisation
if (mobScreen.matches) {
	dropDown1.style.visibility = "hidden";
	dropDown2.style.visibility = "hidden";
	nav.style.visibility = "hidden";
}
	
//For viewports of maximum width 480px, toggle navigation list between visible and hidden
function displayNav() {
	hamburger.addEventListener("click", function() {
		if (mobScreen.matches) {
			if (nav.style.visibility === "hidden") {
				nav.style.visibility = "visible";
				hamburger.src = "resources/images/cancel_icon.png";		 
			}
			else {
				nav.style.visibility = "hidden";
				hamburger.src = "resources/images/hamburger.png";			 
			}
		}
	});
}
displayNav();

//for For viewports of maximum width 480px, toggle nested list dropdown to be visible/hidden, navigation list text and arrow to display as orange/white
function toggleMobileDropDown(item, dropdown, arrow, linkEl) {
	item.addEventListener("click", function() {	
		if (mobScreen.matches) {
			if (dropdown.style.visibility === "hidden") {
				dropdown.style.visibility = "visible";
				arrow.src = "resources/images/mobile_arrow.png";
				linkEl.style.color = "#e9982f";
			}
			else {
				dropdown.style.visibility = "hidden";
				arrow.src = "resources/images/mobile_arrow_blank.png";
				linkEl.style.color = "white";
			}
		}
	});
}
toggleMobileDropDown(eventsItem, dropDown1, mobileArrow1, linkEl1);
toggleMobileDropDown(commItem, dropDown2, mobileArrow2, linkEl2);

//For viewports of maximum width 480px, hide nested list by clicking on defined DOM elements
function hideMobileDropDown(item, dropdown, arrow, linkEl, exception) {	
	for (let i = 0; i < item.length; i++) {
		if (item[i] === exception) {
			continue;
		}
		item[i].addEventListener("click", function() {
			if (mobScreen.matches) {
				if (dropdown.style.visibility !== "hidden") {
					dropdown.style.visibility = "hidden";
					arrow.src = "resources/images/mobile_arrow_blank.png";
					linkEl.style.color = "white";
				}
			}
		});
	}
}
hideMobileDropDown(closeItems, dropDown1, mobileArrow1, linkEl1, eventsItem);
hideMobileDropDown(closeItems, dropDown2, mobileArrow2, linkEl2, commItem);

	//slide show function
	function slideShow(stageType) {
	  window.addEventListener("DOMContentLoaded", function(e) {
    const stage = document.getElementById(stageType);
    const fadeComplete = function(e) { stage.appendChild(arr[0]); };
    const arr = stage.getElementsByTagName("img");
    for(let i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  }, false);
}
	
	slideShow("stage_pc");
	slideShow("stage_tablet");
	



