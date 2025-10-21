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

let killerTier = [1, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];

let killerCost = [4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 3, 4, 3];

let globalLoadoutCostMax = 4;

const everyPerk = ["teachables","oddball","evensteven","generic","morestun","anyperk","otherteaches","samepage","shope","anythree",
	"block","blood","entity","exhaust","exitgate","exposed","faster","generator","health","healing","hex","hexundying","hooking","hinder","lunge",
	"obsession","scourge","scourgecompass","scream","them","token","trap","undetectable","vault","yaura"];

let perkAmt = [3, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2];

const everyAddon = ["brownsAdd","greensAdd","bluesAdd","purplesAdd","redsAdd","anyLowAdd","anyMidAdd","anyUpperAdd","anyTopAdd","anyAdd","noAdd","firstGreenAdd","midColAdd","cornersAdd",
"hiLoAdd","basicAdd","durationAdd","inflictAdd","speedAdd","sneakyAdd"];

let addOnAmt = [1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2];

const everyStart = ["startKillers","startLoadouts"];

let startHand = [5, 10];

//let constAmt = [4];

//let dbugnum = 0;

//let tempstor = "none";

let maxCostStyle = 1;

let drawStyle = 0;

let randKillerNum = Math.floor(Math.random()*killers.length);

let tierLowLoadoutCost = 5;
let tierMidLoadoutCost = 4;
let tierTopLoadoutCost = 3;

let lowTierWeight = 20;
let midTierWeight = 65;
let topTierWeight = 15;
let totalTierWeight = 100;

let enableHandicap = 0;
let handicapCustom = "";
const customTextEnter = document.getElementById("customTextEnter");

customTextEnter.addEventListener('input',function(event) {
	let customField = document.getElementById("handicapButtons").getElementsByTagName("p");
	handicapCustom = customField[0].innerHTML;
});

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
	let descText = document.getElementById(card).getElementsByTagName("h2");
	drawAmt = startHand[0];
	//console.log(drawAmt);
	//console.log(card + " " + kid + "\nCard name, card array/id slot");
	//console.log(killers.includes(card) + " - if killers includes card above");
	if (killers.includes(card)) {
		killers[kid] = "none";
		localStorage.setItem(card, "none");
		displayCard(card,false);
		descText[0].innerHTML = "   DISABLED";
	} else {
		killers[kid] = card;
		localStorage.setItem(card, card);
		displayCard(card,true);
		descText[0].innerHTML = "   Can be Drawn";
	}
	let maxKills = calcMaxKillers();
	//console.log(maxKills + " - calculated max killers");
	if (drawAmt > maxKills) {
		addStartHand("startKillers",0);
		//console.log("Too many starting cards!");
	}
}

function adjustHandicap(opp) {
	let btns = document.getElementById("handicapButtons").getElementsByTagName("button");
	let customField = document.getElementById("handicapButtons").getElementsByTagName("p");
	btns[0].classList.remove("onPage");
	btns[1].classList.remove("onPage");
	btns[2].classList.remove("onPage");
	btns[3].classList.remove("onPage");
	customField[0].classList.add("hidden");
	enableHandicap = opp;
	switch (opp) {
		case 0:
			btns[0].classList.add("onPage");
		break;
		case 1:
			btns[1].classList.add("onPage");
		break;
		case 2:
			btns[2].classList.add("onPage");
		break;
		case 3:
			btns[3].classList.add("onPage");
			customField[0].classList.remove("hidden");
			customField[0].innerHTML = "Enter Bonus Here";
			handicapCustom = customField[0].innerHTML;
		break;
		default:
			console.log("adjustHandicap switch error!");
	}
	localStorage.setItem("enableHandicap",enableHandicap);
}

function toggleTier(card,kid) {
	let current = killerTier[kid];
	let descText = document.getElementById(card).getElementsByTagName("h2");
	let saveId = card + "tier";
	current ++;
	if (current > 3) {
		current = 1;
	}
	killerTier[kid] = current;
	switch (current) {
		case 1:
			descText[1].innerHTML = "Low";
		break;
		case 2:
			descText[1].innerHTML = "Mid";
		break;
		case 3:
			descText[1].innerHTML = "Top";
		break;
		default:
	}
	localStorage.setItem(saveId,current);
	
}

function killerAddLoad(card,kid) {
	let current = killerCost[kid];
	let saveId = card + "max";
	let descText = document.getElementById(card).getElementsByTagName("h2");
	current ++;
	if (current > 15) {
		current = 15;
	}
	killerCost[kid] = current;
	descText[2].innerHTML = current;
	localStorage.setItem(saveId,current);
}

function killerSubLoad(card,kid) {
	let current = killerCost[kid];
	let saveId = card + "max";
	let descText = document.getElementById(card).getElementsByTagName("h2");
	current --;
	if (current < 0) {
		current = 0;
	}
	killerCost[kid] = current;
	descText[2].innerHTML = current;
	localStorage.setItem(saveId,current);
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
	calcMaxLoadoutCards();
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
	calcMaxLoadoutCards();
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
	calcMaxLoadoutCards();
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
	calcMaxLoadoutCards();
	//cellLine.innerHTML = perkAmt[kid];
}

//Only updates the visuals for the toggled cards
function displayCard(card,state){
	let targ = document.getElementById(card);
	if (targ) {
		let BG = targ.style.backgroundColor;
		//console.log(targ + " - " + BG);
		if (state) {
			targ.style.backgroundColor = '#90EE90'; //Light Green Hex Code
		} else {
			targ.style.backgroundColor = '#FFCCCB'; //Red Hex Code
		}
	}
	
}

//Visually updates all toggled cards based on storage
function toggleAllKillerCards() {
	for (let index=0; index < everyKiller.length; ++index) {
		let element = killers[index];
		let descText;
		let tempid = everyKiller[index];
		let tier = killerTier[index];
		let cost = killerCost[index];
		//console.log(tempid + " - tempid");
		if (document.getElementById(tempid)) {
			descText = document.getElementById(tempid).getElementsByTagName("h2");
			options = document.getElementById(tempid).getElementsByTagName("h2");
		}
		if (element === tempid) {
			displayCard(tempid,true);
			if (descText) {
				descText[0].innerHTML = "   Can be Drawn";
			}
		} else {
			displayCard(tempid,false);
			if (descText) {
				descText[0].innerHTML = "   DISABLED";
			}
		}
		descText[2].innerHTML = cost;
		switch (tier) {
			case 1:
				descText[1].innerHTML = "Low";
			break;
			case 2:
				descText[1].innerHTML = "Mid";
			break;
			case 3:
				descText[1].innerHTML = "Top";
			break;
			default:
				console.log("Error toggling all killer cards tier opp");
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
			//let cellTemp = document.getElementById(tempid);
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
			let cellTemp = document.getElementById(tempid).getElementsByTagName("h1");
			//let cellLine = cellTemp[1];
			/*if (element > 0) {
				displayCard(tempid,true);
			} else {
				displayCard(tempid,false);
			}*/
			if (cellTemp[0]) {
				cellTemp[0].innerHTML = element;
			} else if (cellTemp[0] = 0) {
				cellTemp[0].innerHTML = 0;
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
	perkAmt = [3, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2];
	addOnAmt = [1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2];
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
	calcMaxLoadoutCards();
}

function calcMaxLoadoutCards() {
	let perkText = document.getElementById("totalperks");
	let pTotalText = document.getElementById("totalperks2");
	let addText = document.getElementById("totaladds");
	let aTotalText = document.getElementById("totaladds2");
	let perkFinal = 0;
	let addFinal = 0;
	let tempvalue = 0;
	for (let index=0; index < perkAmt.length; ++index) {
		tempValue = perkAmt[index];
		perkFinal += tempValue;
	}
	tempvalue = 0;
	for (let index=0; index < addOnAmt.length; ++index) {
		tempValue = addOnAmt[index];
		addFinal += tempValue;
	}
	let perkDescText = "Total Perk Cards: " + perkFinal.toString();
	let addDescText = "Total Add-On Cards: " + addFinal.toString();
	perkText.innerHTML = perkDescText;
	addText.innerHTML = addDescText;
	let totalFinal = perkFinal + addFinal;
	let totalText = "Total Loadout Cards: " + totalFinal;
	pTotalText.innerHTML = totalText;
	aTotalText.innerHTML = totalText;
}

function calcMaxPerkCards() {
	let descText = document.getElementById("totalperks");
	let descText2 = document.getElementById("totalPerks2");
	let finalAmt = 0;
	let tempValue = 0;
	for (let index=0; index < perkAmt.length; ++index) {
		tempValue = perkAmt[index];
		finalAmt += tempValue;
	}
	let totalFinal = finalAmt;
	let finaltext = "Total Perk Cards: " + finalAmt;
	descText.innerHTML = finaltext;
	for (let index=0; index < addOnAmt.length; ++index) {
		tempValue = addOnAmt[index];
		totalFinal += tempValue;
	}
	let totalfinaltext = "Total Loadout Cards: " + totalFinal;
	descText2.innerHTML = totalfinaltext;
}

function calcMaxAddCards() {
	let descText = document.getElementById("totaladds");
	let descText2 = document.getElementById("totaladds2");
	let finalAmt = 0;
	let tempValue = 0;
	for (let index=0; index < addOnAmt.length; ++index) {
		tempValue = addOnAmt[index];
		finalAmt += tempValue;
	}
	let totalFinal = finalAmt;
	let finaltext = "Total Add-On Cards: " + finalAmt;
	descText.innerHTML = finaltext;
	for (let index=0; index < perkAmt.length; ++index) {
		tempValue = perkAmt[index];
		totalFinal += tempValue;
	}
	let totalfinaltext = "Total Loadout Cards: " + totalFinal;
	descText2.innerHTML = totalfinaltext;
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
	startHand = [5,10];
}


//Pulls all relevant data from storage and stores it in appropriate arrays
function transferKillerStorage() {
	//console.log("Transfer KILLER CARD storage function");
	maxCostStyle = Number(localStorage.getItem("maxCostStyle"));
	if (!maxCostStyle) {
		maxCostStyle = 0;
	}
	tierLowLoadoutCost = Number(localStorage.getItem("tierLowLoadoutCost"));
	if (!tierLowLoadoutCost) {
		tierLowLoadoutCost = 4;
	}
	tierMidLoadoutCost = Number(localStorage.getItem("tierMidLoadoutCost"));
	if (!tierMidLoadoutCost) {
		tierMidLoadoutCost = 4;
	}
	tierTopLoadoutCost = Number(localStorage.getItem("tierTopLoadoutCost"));
	if (!tierTopLoadoutCost) {
		tierTopLoadoutCost = 3;
	}
	globalLoadoutCostMax = Number(localStorage.getItem("globalLoadoutCostMax"));
	if (!globalLoadoutCostMax) {
		globalLoadoutCostMax = 4;
	}
	drawStyle = Number(localStorage.getItem("drawStyle"));
	if (!drawStyle) {
		drawStyle = 0;
	}
	lowTierWeight = Number(localStorage.getItem("lowTierWeight"));
	if (!lowTierWeight) {
		lowTierWeight = 35;
		midTierWeight = 50;
		topTierWeight = 15;
	}
	midTierWeight = Number(localStorage.getItem("midTierWeight"));
	if (!midTierWeight) {
		lowTierWeight = 35;
		midTierWeight = 50;
		topTierWeight = 15;
	}
	topTierWeight = Number(localStorage.getItem("topTierWeight"));
	if (!topTierWeight) {
		lowTierWeight = 35;
		midTierWeight = 50;
		topTierWeight = 15;
	}
	totalTierWeight = lowTierWeight + midTierWeight + topTierWeight;
	for (let index=0; index < everyKiller.length; ++index) {
		let tempName = everyKiller[index];
		let tempTier = tempName + "tier";
		let tempMax = tempName + "max";
		if(localStorage.getItem(tempName)) {
			killers[index] = localStorage.getItem(tempName);
		} else {
			killers[index] = tempName;
		}
		if(localStorage.getItem(tempTier)) {
			killerTier[index] = Number(localStorage.getItem(tempTier));
		} else {
			killerTier[index] = 2;
		}
		if(localStorage.getItem(tempMax)) {
			killerCost[index] = Number(localStorage.getItem(tempMax));
		} else {
			killerCost[index] = 4;
		}
	}
	enableHandicap = Number(localStorage.getItem("enableHandicap"));
	if (!enableHandicap) {
		enableHandicap = 0;
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
		startHand[kid] = 5;
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
	let cellTemp = document.getElementById(card).getElementsByTagName("h1");
	let cellLine = cellTemp[0];
	if (cellTemp[0]) {
		cellTemp[0].innerHTML = startHand[kid];
	}
	//cellLine.innerHTML = perkAmt[kid];
}

//Removes starting cards
function subStartHand(card,kid) {
	//console.log(startHand[kid] + " - array value prior");
	if (!startHand[kid] && startHand[kid] != 0) {
		startHand[kid] = 5;
	}
	startHand[kid] -= 1;
	if (startHand[kid] <= 1) {
		startHand[kid] = 1;
		}
	localStorage.setItem(card,startHand[kid]);
	//console.log(addOnAmt[kid] + " - array value after");
	//Updates the HTML with new value
	let cellTemp = document.getElementById(card).getElementsByTagName("h1");
	let cellLine = cellTemp[0];
	if (cellTemp[0]) {
		cellTemp[0].innerHTML = startHand[kid];
	}
	//cellLine.innerHTML = perkAmt[kid];
}

function alterDrawStyle(opp) {
	let drawRow = document.getElementById("startDrawStyle").getElementsByTagName("button");
	let descText = document.getElementById("drawStyleDesc");
	let weightDesc = document.getElementById("drawStyleWeighted");
	drawRow[0].classList.remove("onPage");
	drawRow[1].classList.remove("onPage");
	weightDesc.classList.add("hidden");
	switch (opp) {
		case 0:
			drawRow[0].classList.add("onPage");
			descText.innerHTML = "Every enabled Killer Card has the same chances at being drawn";
		break;
		case 1:
			drawRow[1].classList.add("onPage");
			descText.innerHTML = "Odds for drawing Killer Cards are dependent on their tier (see below)";
			weightDesc.classList.remove("hidden");
		break;
		default:
			console.log("Alter draw style opp switch error");
	}
	drawStyle = opp;
	localStorage.setItem("drawStyle",drawStyle);
}

function adjustTierWeight(opp,amt) {
	let difAmt = 0;
	let lowDesc = document.getElementById("weightLow").getElementsByTagName("h2");
	let midDesc = document.getElementById("weightMid").getElementsByTagName("h2");
	let topDesc = document.getElementById("weightTop").getElementsByTagName("h2");
	switch (opp) {
		case 0:
			lowTierWeight += amt;
			if (lowTierWeight < 1) {
				lowTierWeight = 1;
			}
			totalTierWeight = lowTierWeight + midTierWeight + topTierWeight;
			if (totalTierWeight > 100) {
				difAmt = totalTierWeight - 100;
				lowTierWeight -= difAmt;
			}
		break;
		case 1:
			midTierWeight += amt;
			if (midTierWeight < 1) {
				midTierWeight = 1;
			}
			totalTierWeight = lowTierWeight + midTierWeight + topTierWeight;
			if (totalTierWeight > 100) {
				difAmt = totalTierWeight - 100;
				midTierWeight -= difAmt;
			}
		break;
		case 2:
			topTierWeight += amt;
			if (topTierWeight < 1) {
				topTierWeight = 1;
			}
			totalTierWeight = lowTierWeight + midTierWeight + topTierWeight;
			if (totalTierWeight > 100) {
				difAmt = totalTierWeight - 100;
				topTierWeight -= difAmt;
			}
		break;
		case 3:
			console.log("Update visuals only");
		default:
			console.log("adjust Tier Weight opp switch error");
	}
	totalTierWeight = 100*(lowTierWeight + midTierWeight + topTierWeight);
	lowDesc[1].innerHTML = lowTierWeight;
	let lowDescPerc = (lowTierWeight*100) / totalTierWeight;
	lowDescPerc = 100*lowDescPerc;
	lowDesc[2].innerHTML = lowDescPerc.toFixed(1) + ("% chance");
	midDesc[1].innerHTML = midTierWeight;
	let midDescPerc = (midTierWeight*100) / totalTierWeight;
	midDescPerc = 100*midDescPerc;
	midDesc[2].innerHTML = midDescPerc.toFixed(1) + ("% chance");
	topDesc[1].innerHTML = topTierWeight;
	let topDescPerc = (topTierWeight*100) / totalTierWeight;
	topDescPerc = 100*topDescPerc;
	topDesc[2].innerHTML = topDescPerc.toFixed(1) + ("% chance");
	localStorage.setItem("lowTierWeight",lowTierWeight);
	localStorage.setItem("midTierWeight",midTierWeight);
	localStorage.setItem("topTierWeight",topTierWeight);
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
	console.log("Session saved");
	sessionStorage.setItem("startKillers",startHand[0]);
	sessionStorage.setItem("startLoadouts",startHand[1]);
	sessionStorage.setItem("maxCostStyle",maxCostStyle);
	sessionStorage.setItem("tierLowLoadoutCost",tierLowLoadoutCost);
	sessionStorage.setItem("tierMidLoadoutCost",tierMidLoadoutCost);
	sessionStorage.setItem("tierTopLoadoutCost",tierTopLoadoutCost);
	sessionStorage.setItem("globalLoadoutCostMax",globalLoadoutCostMax);
	sessionStorage.setItem("drawStyle",drawStyle);
	sessionStorage.setItem("lowTierWeight",lowTierWeight);
	sessionStorage.setItem("midTierWeight",midTierWeight);
	sessionStorage.setItem("topTierWeight",topTierWeight);
	sessionStorage.setItem("enableHandicap",enableHandicap);
	sessionStorage.setItem("handicapCustom",handicapCustom);
	for (let index=0; index < everyKiller.length; ++index) {
		let id = killers[index];
		let idTier = id + "tier";
		let idCost = id + "max";
		let cost = killerCost[index];
		let tier = killerTier[index];
		sessionStorage.setItem(id,id);
		sessionStorage.setItem(idTier,tier);
		sessionStorage.setItem(idCost,cost);
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

function openTab(name) {
	let page = document.getElementById(name);
	alterDrawStyle(drawStyle);
	let tablinks = document.getElementsByClassName("tablinks");
	for (index = 0; index < tablinks.length; index++) {
		tablinks[index].classList.remove("onPage");
	}
	let tabcontent = document.getElementsByClassName("tabcontent");
	for (index = 0; index < tabcontent.length; index++) {
		let varTab = tabcontent[index];
		varTab.classList.add("hidden");
	}
	page.classList.remove("hidden");
	switch (name){
		case "killer":
			tablinks[0].classList.add("onPage");
		break;
		case "loadout":
			tablinks[1].classList.add("onPage");
		break;
		case "final":
			tablinks[2].classList.add("onPage");
			adjustTierWeight(3.0);
			adjustHandicap(enableHandicap);
		break;
		default:
			console.log("Invalid tab highlight opperation");
	}
}

function maxLoadCostToggle(opp) {
	//let allOptions = document.getElementsByClassName("toggleMaxLoad");
	let descText = document.getElementById("maxLoadExplain");
	let global = document.getElementById("none");
	let tier = document.getElementById("tier");
	let unique = document.getElementById("unique");
	let globalBtn = document.getElementById("none").getElementsByTagName("button");
	let tierBtn = document.getElementById("tier").getElementsByTagName("button");
	let uniqueBtn = document.getElementById("unique").getElementsByTagName("button");
	let globalAdjst = document.getElementById("globalAdjust");
	let tierAdjst = document.getElementById("tierAdjusts");
	let targ = "";
	/*for (index = 0; index < allOptions.length; index ++) {
		let targie = allOptions[index];
		targie.style.backgroundColor = '#FFCCCB';
		
	}*/
	global.style.backgroundColor = '#FFCCCB';
	tier.style.backgroundColor = '#FFCCCB';
	unique.style.backgroundColor = '#FFCCCB';
	globalBtn[0].classList.remove("onPage");
	tierBtn[0].classList.remove("onPage");
	uniqueBtn[0].classList.remove("onPage");
	globalAdjst.classList.add("hidden");
	tierAdjst.classList.add("hidden");
	maxCostStyle = opp;
	document.getElementById("desc0").innerHTML = globalLoadoutCostMax;
	document.getElementById("descLow").innerHTML = tierLowLoadoutCost;
	document.getElementById("descMid").innerHTML = tierMidLoadoutCost;
	document.getElementById("descTop").innerHTML = tierTopLoadoutCost;
	switch(opp){
		case 0:
			targ = document.getElementById("none");
			descText.innerHTML = "Every Killer will have the same Loadout Cost";
			global.style.backgroundColor = '#00FF00'; //Green Hex Code
			globalBtn[0].classList.add("onPage");
			globalAdjst.classList.remove("hidden");
		break;
		case 1:
			targ = document.getElementById("tier");
			descText.innerHTML = "Killer Loadout Costs will depend on the Tier that Killer is in";
			tier.style.backgroundColor = '#00FF00'; //Green Hex 
			tierBtn[0].classList.add("onPage");
			tierAdjst.classList.remove("hidden");
		break;
		case 2:
			targ = document.getElementById("unique");
			descText.innerHTML = "Each Killer will have their own Loadout Cost (can be adjusted below)";
			unique.style.backgroundColor = '#00FF00'; //Green Hex Code
			uniqueBtn[0].classList.add("onPage");
		break;
		default:
			console.log("Invalid togglecost opp value");
	}
	localStorage.setItem("maxCostStyle",maxCostStyle);
	localStorage.setItem("globalLoadoutCostMax",globalLoadoutCostMax);
	localStorage.setItem("tierLowLoadoutCost",tierLowLoadoutCost);
	localStorage.setItem("tierMidLoadoutCost",tierMidLoadoutCost);
	localStorage.setItem("tierTopLoadoutCost",tierTopLoadoutCost);
}

function maxLoadToggleValue(amt,opp) {
	switch (opp) {
		case 0:
			globalLoadoutCostMax += amt;
			if (globalLoadoutCostMax < 0) {
				globalLoadoutCostMax = 0;
			}
			let desc0 = document.getElementById("desc0");
			desc0.innerHTML = globalLoadoutCostMax;
		break;
		case 1:
			tierLowLoadoutCost += amt;
			if (tierLowLoadoutCost < 0) {
				tierLowLoadoutCost = 0;
			}
			let descLow = document.getElementById("descLow");
			descLow.innerHTML = tierLowLoadoutCost;
		break;
		case 2:
			tierMidLoadoutCost += amt;
			if (tierMidLoadoutCost < 0) {
				tierMidLoadoutCost = 0;
			}
			let descMid = document.getElementById("descMid");
			descMid.innerHTML = tierMidLoadoutCost;
		break;
		case 3:
			tierTopLoadoutCost += amt;
			if (tierTopLoadoutCost < 0) {
				tierTopLoadoutCost = 0;
			}
			let descTop = document.getElementById("descTop");
			descTop.innerHTML = tierTopLoadoutCost;
		break;
		default:
			console.log("Opp error for toggle max loadout values");
	}
	localStorage.setItem("globalLoadoutCostMax",globalLoadoutCostMax);
	localStorage.setItem("tierLowLoadoutCost",tierLowLoadoutCost);
	localStorage.setItem("tierMidLoadoutCost",tierMidLoadoutCost);
	localStorage.setItem("tierTopLoadoutCost",tierTopLoadoutCost);
}

window.onload = (event) => {
  //console.log("page is fully loaded");
  checkKillerStorage();
  toggleAllKillerCards();
  toggleAllPerkCards();
  toggleAllAddOnCards();
  toggleAllStartCards();
  openTab("killer");
  maxLoadCostToggle(maxCostStyle);
  calcMaxLoadoutCards();
};