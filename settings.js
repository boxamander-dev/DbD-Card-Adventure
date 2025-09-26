// Example JavaScript code in script.js
//function greetUser() {
//    alert("Hello from external JavaScript!");
//}

// Call the function when the page loads
//window.onload = greetUser;


const everyKiller = ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Leatherface",
"Freddy","Pig","Clown","Spirit","Legion","Plague","Ghostface","Demogorgon","Oni","Deathslinger","Pyramidhead",
"Blight","Twins","Trickster","Nemesis","Cenobite","Artist","Sadako","Dredge","Wesker","Knight","Skullmerchant",
"Singularity","Xenomorph","Chucky","Unknown","Vecna","Dracula","Houndmaster","Ghoul","Springtrap","Krasue"];

let killers = ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Leatherface",
"Freddy","Pig","Clown","Spirit","Legion","Plague","Ghostface","Demogorgon","Oni","Deathslinger","Pyramidhead",
"Blight","Twins","Trickster","Nemesis","Cenobite","Artist","Sadako","Dredge","Wesker","Knight","Skullmerchant",
"Singularity","Xenomorph","Chucky","Unknown","Vecna","Dracula","Houndmaster","Ghoul","Springtrap","Krasue"];

let killNum = 5;

const everyPerk = ["teachables","anyperk","generator","lunge","generic","hexundying","hex","scourgecompass","scourge","token",
"exposed","vault","endgame","faster","blood","morestun","scream","obsession","healing","block"];

let perkAmt = [5, 2, 4, 2, 4, 1, 3, 1, 3, 5, 5, 3, 2, 4, 2, 2, 3, 3, 4, 4];

const everyAddon = ["brownsAdd","greensAdd","bluesAdd","purpleAdd","redsAdd","anyLowAdd","noAdd","anyMidAdd","sneakyAdd","singleRedAdd","durationAdd","anyAdd","speedAdd","poinAdd","basicAdd"];

let addOnAmt = [4, 5, 5, 4, 2, 5, 3, 5, 3, 2, 4, 3, 3, 2, 3];

const everyStart = ["startKillers","startLoadouts"];

let startHand = [4, 10];

//let constAmt = [4];

//let dbugnum = 0;

//let tempstor = "none";

let randKillerNum = Math.floor(Math.random()*killers.length);



function checkStorage(storname) {
	if (storageAvailable("localStorage")) {
		if(!localStorage.getItem(storname)) {
			populateStorage();
			document.getElementById("storageget").innerText = "storage NOT";
		} else {
			document.getElementById("storageget").innerText = "storage found";
			transferStorage();
		}
	}
}

function killButton() {
	getRandomKillerInt();
	display();
}


function getRandomKillerInt() {
	randKillerNum = Math.floor(Math.random()*killers.length);
}

function debugNum() {
	document.getElementById("randint").innerText = randKillerNum;
	document.getElementById("maxlength").innerText = killers.length;
}

function display() {
	document.getElementById("demo").innerText = "Hello World";
	document.getElementById("demo2").innerText = killers[randKillerNum];
	//const randKiller = killers[Math.floor(Math.random() * array.length)];
	//alert("Killer is " + killers[randKiller]);
}

function debugCardToggle() {
	document.getElementById("carddebug").innerText = killers;
	tempstor = localStorage.getItem("Trapper") + " - " + localStorage.getItem("Wraith") + " - " + localStorage.getItem("Hillbilly");
	document.getElementById("cardstorage").innerText = tempstor;
}

function debugCardToggle2() {
	document.getElementById("carddebug").innerText = perkAmt;
	tempstor = localStorage.getItem("teachables") + " - " + localStorage.getItem("anyperk") + " - " + localStorage.getItem("generator");
	//tempstor = localStorage.getItem("Trapper") + localStorage.getItem("Wraith") + localStorage.getItem("Hillbilly)";
	document.getElementById("cardstorage").innerText = tempstor;
	toggleAllPerkCards();
	//document.getElementById("storagedebug").innerText = localStorage.getItem('Trapper') + localStorage.getItem('Wraith');
}

//Will alter the toggled cards
function toggleCard(card,kid,stor) {
	//console.log(Number.isInteger(stor) + " - stor is int or not");
	//console.log(card + " " + kid + " " + stor + "\nCard name, card array/id slot, operation value");
	document.getElementById("stordebug").innerText = stor;
	//console.log(perkAmt[kid] + " Array value prior to update");
	if (stor = 0) {
		//console.log("Killer card toggle operation");
		if (killers.includes(card)) {
			//document.getElementById(mid).style.backgroundColor='#FFCCCB';
			killers[kid] = "none";
			localStorage.setItem(card, "none");
		} else {
			//document.getElementById(mid).style.backgroundColor='#90EE90'; //Light Green Hex Code
			killers[kid] = card;
			localStorage.setItem(card, card);
		}
	} else if (stor = 1) {
		//dbugnum = Number(localStorage.getItem(card));
		//dbugnum = perkAmt[kid] + 1;
		//dbugnum += 1;
		perkAmt[kid] += 1;
		//console.log(perkAmt[kid] + " added perkamt num, addition operation");
		//console.log(dbugnum + " temporary number to update into array");
		//perkAmt[kid] += 1;
		displayCard(card,true);
		//localStorage.setItem(card,perkAmt[kid]);
		if (perkAmt[kid] >= 9) {
			perkAmt[kid] = 9;
			localStorage.setItem(card,9);
		}
		//Updates the HTML with new value
		let cellTemp = document.getElementById(card).getElementsByTagName("p");
		let cellLine = cellTemp[1];
		cellLine.innerHTML = perkAmt[kid];
		localStorage.setItem(card,dbugnum);
	} else if (stor = 2) {
		perkAmt[kid] -= 1;
		//console.log(perkAmt[kid] + " SUBTRACTED perkamt num, subtract operation");
		displayCard(card,true);
		if (perkAmt[kid] <= 0) {
			displayCard(card,false);
			perkAmt[kid] = 0;
		}
		localStorage.setItem(card,perkAmt[kid]);
		//Updates the HTML with new value
		let cellTemp = document.getElementById(card).getElementsByTagName("p");
		let cellLine = cellTemp[1];
		cellLine.innerHTML = perkAmt[kid];
	}
	//console.log(perkAmt[kid] + " final array number");
}

//Toggles killer cards
function toggleKillerCard(card,kid) {
	//console.log("Killer card toggle operation");
	drawAmt = startHand[0];
	//console.log(drawAmt);
	//console.log(card + " " + kid + "\nCard name, card array/id slot");
	//console.log(killers.includes(card) + " - if killers includes card above");
	if (killers.includes(card)) {
		//document.getElementById(mid).style.backgroundColor='#FFCCCB';
		killers[kid] = "none";
		localStorage.setItem(card, "none");
		displayCard(card,false);
	} else {
		//document.getElementById(mid).style.backgroundColor='#90EE90'; //Green Hex Code
		killers[kid] = card;
		localStorage.setItem(card, card);
		displayCard(card,true);
	}
	let maxKills = calcMaxKillers();
	//console.log(maxKills + " - calculated max killers");
	if (drawAmt > maxKills) {
		addStartHand("startKillers",0);
		//console.log("Too many starting cards!");
	}
}

//Adds amount to selected card
function addPerkCard(card,kid) {
	//console.log(perkAmt[kid] + " - array value prior");
	if (!perkAmt[kid] && perkAmt[kid] != 0) {
		perkAmt[kid] = 3;
	}
	perkAmt[kid] += 1;
	displayCard(card,true);
	if (perkAmt[kid] >= 9) {
		perkAmt[kid] = 9;
		let targ = document.getElementById(card);
		if (targ) {
			targ.style.backgroundColor = '#00FF00'; //Green Hex Code
		}
	}
	localStorage.setItem(card,perkAmt[kid]);
	//console.log(perkAmt[kid] + " - array value after");
	//Updates the HTML with new value
	let cellTemp = document.getElementById(card).getElementsByTagName("p");
	//let cellLine = cellTemp[1];
	if (cellTemp[1]) {
		cellTemp[1].innerHTML = perkAmt[kid];
	}
	//cellLine.innerHTML = perkAmt[kid];
}


//Removes amount to selected card
function subPerkCard(card,kid) {
	drawAmt = startHand[1];
	//console.log(perkAmt[kid] + " - array value prior");
	if (!perkAmt[kid] && perkAmt[kid] != 0) {
		perkAmt[kid] = 3;
	}
	perkAmt[kid] -= 1;
	displayCard(card,true);
	if (perkAmt[kid] <= 0) {
		perkAmt[kid] = 0;
		displayCard(card,false);
	}
	localStorage.setItem(card,perkAmt[kid]);
	//console.log(perkAmt[kid] + " - array value after");
	//Updates the HTML with new value
	let cellTemp = document.getElementById(card).getElementsByTagName("p");
	//let cellLine = cellTemp[1];
	if (cellTemp[1]) {
		cellTemp[1].innerHTML = perkAmt[kid];
	}
	let maxLoad = calcMaxLoad();
	//console.log(maxKills + " - calculated max killers");
	if (drawAmt > maxLoad) {
		addStartHand("startLoadouts",1);
		//console.log("Too many starting cards! LOADOUT");
	}
	//cellLine.innerHTML = perkAmt[kid];
}

//Adds add-ons to cards
function addOnCard(card,kid) {
	//console.log(perkAmt[kid] + " - array value prior");
	if (!addOnAmt[kid] && addOnAmt[kid] != 0) {
		addOnAmt[kid] = 3;
	}
	addOnAmt[kid] += 1;
	displayCard(card,true);
	if (addOnAmt[kid] >= 9) {
		addOnAmt[kid] = 9;
		let targ = document.getElementById(card);
		if (targ) {
			targ.style.backgroundColor = '#00FF00'; //Green Hex Code
		}
	}
	localStorage.setItem(card,addOnAmt[kid]);
	//console.log(addOnAmt[kid] + " - array value after");
	//Updates the HTML with new value
	let cellTemp = document.getElementById(card).getElementsByTagName("p");
	//let cellLine = cellTemp[1];
	if (cellTemp[1]) {
		cellTemp[1].innerHTML = addOnAmt[kid];
	}
	//cellLine.innerHTML = perkAmt[kid];
}

//Removes amount to selected card
function subOnCard(card,kid) {
	drawAmt = startHand[1];
	//console.log(addOnAmt[kid] + " - array value prior");
	if (!addOnAmt[kid] && addOnAmt[kid] != 0) {
		addOnAmt[kid] = 3;
	}
	addOnAmt[kid] -= 1;
	displayCard(card,true);
	if (addOnAmt[kid] <= 0) {
		addOnAmt[kid] = 0;
		displayCard(card,false);
	}
	localStorage.setItem(card,addOnAmt[kid]);
	//console.log(addOnAmt[kid] + " - array value after");
	//Updates the HTML with new value
	let cellTemp = document.getElementById(card).getElementsByTagName("p");
	//let cellLine = cellTemp[1];
	if (cellTemp[1]) {
		cellTemp[1].innerHTML = addOnAmt[kid];
	}
	let maxLoad = calcMaxLoad();
	//console.log(maxKills + " - calculated max killers");
	if (drawAmt > maxLoad) {
		addStartHand("startLoadouts",1);
		//console.log("Too many starting cards! LOADOUT");
	}
	//cellLine.innerHTML = perkAmt[kid];
}

//Only updates the visuals for the toggled cards
function displayCard(card,state){
	let targ = document.getElementById(card);
	let BG = targ.style.backgroundColor;
	//console.log(targ + " - " + BG);
	if (state) {
		targ.style.backgroundColor = '#90EE90'; //Light Green Hex Code
	} else {
		targ.style.backgroundColor = '#FFCCCB';
	}
}

//Visually updates all toggled cards based on storage
function toggleAllKillerCards() {
	for (let index=0; index < killers.length; ++index) {
		let element = killers[index];
		let tempid = everyKiller[index];
		if (element === tempid) {
			displayCard(tempid,true);
		} else {
			displayCard(tempid,false);
		}
		//displayCard(element,tempid);
	}
}

//Visually updates all perk cards with amount selected
function toggleAllPerkCards() {
	if (perkAmt[0] >= 0) {
		//console.log("Perk Amount found");
		for (let index=0; index < perkAmt.length; ++index) {
			let element = perkAmt[index];
			let tempid = everyPerk[index];
			//console.log(element);
			let cellTemp = document.getElementById(tempid).getElementsByTagName("p");
			//let cellLine = cellTemp[1];
			if (element > 0) {
				displayCard(tempid,true);
				if (element >= 9) {
					let targ = document.getElementById(tempid);
					if (targ) {
						targ.style.backgroundColor = '#00FF00'; //Green Hex Code
					}
				}
			} else {
				displayCard(tempid,false);
			}
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = element;
			} else if (cellTemp[1] = 0) {
				cellTemp[1].innerHTML = 0;
			}
			//cellLine.innerHTML = element;
			//displayCard(element,tempid);
		}
	} else {
		//console.log("NOT FOUND - PERK AMOUNT ARRAY VALUES");
	}
}

//Visually updates all addon cards with amounts selected
function toggleAllAddOnCards() {
	if (addOnAmt[0] >= 0) {
		//console.log("Add-on Amount found");
		for (let index=0; index < addOnAmt.length; ++index) {
			let element = addOnAmt[index];
			let tempid = everyAddon[index];
			//console.log(element);
			let cellTemp = document.getElementById(tempid).getElementsByTagName("p");
			//let cellLine = cellTemp[1];
			if (element > 0) {
				displayCard(tempid,true);
				if (element >= 9) {
					let targ = document.getElementById(tempid);
					if (targ) {
						targ.style.backgroundColor = '#00FF00'; //Green Hex Code
					}
				}
			} else {
				displayCard(tempid,false);
			}
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = element;
			} else if (cellTemp[1] = 0) {
				cellTemp[1].innerHTML = 0;
			}
			//cellLine.innerHTML = element;
			//displayCard(element,tempid);
		}
	} else {
		//console.log("NOT FOUND - ADDON AMOUNT ARRAY VALUES");
	}
}

function toggleAllStartCards() {
	if (startHand[0] >= 0) {
		//console.log("Add-on Amount found");
		for (let index=0; index < startHand.length; ++index) {
			let element = startHand[index];
			let tempid = everyStart[index];
			//console.log(element);
			let cellTemp = document.getElementById(tempid).getElementsByTagName("p");
			//let cellLine = cellTemp[1];
			if (element > 0) {
				displayCard(tempid,true);
			} else {
				displayCard(tempid,false);
			}
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = element;
			} else if (cellTemp[1] = 0) {
				cellTemp[1].innerHTML = 0;
			}
			//cellLine.innerHTML = element;
			//displayCard(element,tempid);
		}
	} else {
		//console.log("NOT FOUND - ADDON AMOUNT ARRAY VALUES");
	}
}


//Buttons for presets for various cards
function standardDefaultPerks() {
	perkAmt = [5, 2, 4, 2, 4, 1, 3, 1, 3, 5, 5, 3, 2, 4, 2, 2, 3, 3, 4, 4];
	addOnAmt = [4, 5, 5, 4, 2, 5, 3, 5, 3, 2, 4, 3, 3, 2, 3];
	toggleAllPerkCards();
	for (let index=0; index < everyPerk.length; ++index) {
		let tempName = everyPerk[index];
		//localStorage.setItem(tempName,toString(perkAmt[index]));
		localStorage.setItem(tempName,perkAmt[index]);
	}
	toggleAllAddOnCards();
		for (let index=0; index < everyAddon.length; ++index) {
		let tempName = everyAddon[index];
		//localStorage.setItem(tempName,toString(addOnAmt[index]));
		localStorage.setItem(tempName,addOnAmt[index]);
	}
}


//Checks max available killer cards
function availKillerCards() {
	killNum = everyKiller.length;
	for (let index=0; index < everyKiller.length; ++index) {
		if (killers[index] === "none") {
			killNum = killNum - 1;
		}
	}
}


//Checks if storage is actually available (killer cards)
function checkKillerStorage() {
	//console.log("Killer Storage being checked");
	if (storageAvailable("localStorage")) {
		if(!localStorage.getItem("Trapper")) {
			populateStorage();
			//console.log("Killer storage NOT found");
		} else {
			//console.log("Killer storage located");
			transferKillerStorage();
			checkPerkStorage();
		}
	}
}

//Checks if storage is actually available (perk loadout cards)
function checkPerkStorage() {
	//console.log("Perk Loadout Storage being checked");
	if (storageAvailable("localStorage")) {
		if(!localStorage.getItem("teachables")) {
			populateStorage();
			//console.log("Perk Card storage NOT found");
		} else {
			//console.log("Perk card storage located");
			transferPerkStorage();
			checkStartStorage();
		}
	}
}

//Checks if storage is actually available (staring hand)
function checkStartStorage() {
	if (storageAvailable("localStorage")) {
		if(!localStorage.getItem("startKillers")) {
			populateStorage();
		} else {
			//console.log("starting hand storage located");
			for (let index=0; index < everyStart.length; ++index) {
				let tempName = everyStart[index];
				if(localStorage.getItem(tempName)) {
					startHand[index] = Number(localStorage.getItem(tempName));
				} else {
					startHand[index] = 1;
				}
			}
		}
	}
}


//Populates storage with all TRUE if nothing is found
function populateStorage() {
	//console.log("Populate Storage Function");
	//Killer Card Selection
	for (let index=0; index < killers.length; ++index) {
		let tempName = everyKiller[index];
		localStorage.setItem(tempName, tempName);
	}
	//Loadout Cards Selection
	standardDefaultPerks();
	startHand = [4,10];
}


//Pulls all relevant data from storage and stores it in appropriate arrays
function transferKillerStorage() {
	//console.log("Transfer KILLER CARD storage function");
	for (let index=0; index < everyKiller.length; ++index) {
		let tempName = everyKiller[index];
		if(localStorage.getItem(tempName)) {
			killers[index] = localStorage.getItem(tempName);
		} else {
			killers[index] = tempName;
		}
	}
}


function transferPerkStorage() {
	//console.log("Transfer PERK AMOUNTS storage function");
	for (let index=0; index < everyPerk.length; ++index) {
		let tempName = everyPerk[index];
		if(localStorage.getItem(tempName)) {
			perkAmt[index] = Number(localStorage.getItem(tempName));
		} else {
			perkAmt[index] = 3;
		}
	}
	for (let index=0; index < everyAddon.length; ++index) {
		let tempAdd = everyAddon[index];
		if(localStorage.getItem(tempAdd)) {
			addOnAmt[index] = Number(localStorage.getItem(tempAdd));
		} else {
			addOnAmt[index] = 3;
		}
	}
	//console.log(perkAmt);
	//console.log(addOnAmt);
	//toggleAllPerkCards();
	//console.log(killers);
}

//Completely removes everything saved on local storage
function deleteStorage() {
	for (let index=0; index < killers.length; ++index) {
		let tempName = everyKiller[index];
		localStorage.removeItem(tempName);
	}
	for (let index=0; index < perkAmt.length; ++index) {
		let tempName = everyPerk[index];
		localStorage.removeItem(tempName);
	}
	for (let index=0; index < addOnAmt.length; ++index) {
		let tempName = everyAddon[index];
		localStorage.removeItem(tempName);
	}
}


//Checks if storage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function generateGame() {
	saveSession();
	sessionStorage.setItem("new","1");
	window.open("activeGame.html","_self");
}

//Adds starting cards
function addStartHand(card,kid) {
	//console.log(startHand[kid] + " - array value prior");
	if (!startHand[kid] && startHand[kid] != 0) {
		startHand[kid] = 4;
	}
	startHand[kid] += 1;
	let maxKillers = calcMaxKillers();
	let maxLoad = calcMaxLoad();
	if (card === "startKillers") {
		//console.log("start killers");
		if (startHand[kid] > maxKillers) {
			startHand[kid] = maxKillers;
			}
	} else if (card === "startLoadouts") {
		//console.log("start loadouts");
		if (startHand[kid] > maxLoad) {
			startHand[kid] = maxLoad;
		}
	}
	localStorage.setItem(card,startHand[kid]);
	//console.log(addOnAmt[kid] + " - array value after");
	//Updates the HTML with new value
	let cellTemp = document.getElementById(card).getElementsByTagName("p");
	let cellLine = cellTemp[1];
	if (cellTemp[1]) {
		cellTemp[1].innerHTML = startHand[kid];
	}
	//cellLine.innerHTML = perkAmt[kid];
}

//Removes starting cards
function subStartHand(card,kid) {
	//console.log(startHand[kid] + " - array value prior");
	if (!startHand[kid] && startHand[kid] != 0) {
		startHand[kid] = 4;
	}
	startHand[kid] -= 1;
	if (startHand[kid] <= 1) {
		startHand[kid] = 1;
		}
	localStorage.setItem(card,startHand[kid]);
	//console.log(addOnAmt[kid] + " - array value after");
	//Updates the HTML with new value
	let cellTemp = document.getElementById(card).getElementsByTagName("p");
	let cellLine = cellTemp[1];
	if (cellTemp[1]) {
		cellTemp[1].innerHTML = startHand[kid];
	}
	//cellLine.innerHTML = perkAmt[kid];
}


function calcMaxKillers() {
	let tempNum = 0;
	for (let index=0; index < killers.length; ++index) {
		if (killers[index] === "none") {
		} else {
			tempNum++;
		}
	}
	return tempNum;
}

function calcMaxLoad() {
	let tempNum=0;
	for (let index=0; index < perkAmt.length; ++index) {
		tempNum = tempNum + perkAmt[index];
	}
	for (let index=0; index < addOnAmt.length; ++index) {
		tempNum = tempNum + addOnAmt[index];
	}
	return tempNum;
}

function saveSession() {
	sessionStorage.setItem("startKillers",startHand[0]);
	sessionStorage.setItem("startLoadouts",startHand[1]);
	for (let index=0; index < everyKiller.length; ++index) {
		let id = killers[index];
		sessionStorage.setItem(id,id);
	}
	for (let index=0; index < everyPerk.length; ++index) {
		let name = everyPerk[index];
		let tempAmount = perkAmt[index];
		sessionStorage.setItem(name,tempAmount);
	}
	for (let index=0; index < everyAddon.length; ++index) {
		let name = everyAddon[index];
		let tempAmount = addOnAmt[index];
		sessionStorage.setItem(name,tempAmount);
	}
}

window.onload = (event) => {
  //console.log("page is fully loaded");
  checkKillerStorage();
  toggleAllKillerCards();
  toggleAllPerkCards();
  toggleAllAddOnCards();
  toggleAllStartCards();
};