const everyKiller = ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Leatherface",
"Freddy","Pig","Clown","Spirit","Legion","Plague","Ghostface","Demogorgon","Oni","Deathslinger","Pyramidhead",
"Blight","Twins","Trickster","Nemesis","Cenobite","Artist","Sadako","Dredge","Wesker","Knight","Skullmerchant",
"Singularity","Xenomorph","Chucky","Unknown","Vecna","Dracula","Houndmaster","Ghoul","Springtrap","Krasue"];

const everyPerk = ["teachables","anyperk","generator","lunge","generic","hexundying","hex","scourgecompass","scourge","token",
"exposed","vault","endgame","faster","blood","morestun","scream","obsession","healing","block"];

const loadoutExplainPerk = ["The 3 teachable perks for your chosen Killer (3)","Any perk of your choice (2)","One perk with Keyword: Generator (2)",
"One or two perks with Keyword: Lunge (1)","One perk that is NOT a teachable, a generic perk (1)","The perk Hex: Undying and one perk with Keyword: Hex (2)","One perk with Keyword: Hex (1)",
"The perk Scourge Hook: Jagged Compass and one perk with Keyword: Scourge Hook (2)","One perk with Keyword: Scourge Hook (1)","One perk with Keyword: Token (1)","One perk with Keyword: Exposed (1)",
"One perk with Keyword: Vault (2)","Two perks with Keyword: End Game (1)","Two perks with Keyword: Faster (2)","One perk with Keyword: Blood (1)","Bring Dark Arrogance, CANNOT bring Enduring (-1)",
"One perk with Keyword: Scream (1)","One or two perks with Keyword: Obsession (1)","One perk with Keyword: Healing (1)","One perk with Keyword: Block (2)"];

const perkCosts = [3, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, -1, 1, 1, 1, 2];

const everyAddon = ["brownsAdd","greensAdd","bluesAdd","purpleAdd","redsAdd","anyLowAdd","noAdd","anyMidAdd","sneakyAdd","singleRedAdd","durationAdd","anyAdd","speedAdd","poinAdd","basicAdd"];

const loadoutExplainAddon = ["Any two brown/common add-ons (1)","Any two green/uncommon add-ons (1)",
"Any one blue/rare add-on (1)","Any one purple/very-rare add-on (2)","Both Iridescent/Visceral  add-ons","One brown [common] or green [uncommon] add-on (0)",
"Take no add-ons (-1)","One blue [rare] or purple [very rare] add-on (1)","One add-on with Keyword: Undetectable (0)","One Iridescent [Visceral] add-on (2)",
"One or two add-ons with Keyword: Duration (1)","Any two add-ons (3)","One add-on with Keyword: Speed","Only one add-on can be brought, with the Keyword: Poin (-2)",
"One add-on with Keyword: Basic Attack (0)"];

const addonCosts = [1, 1, 1, 2, 2, 0, -1, 1, 0, 2, 1, 3, 1, -2, 0];

const everyLoadout = everyPerk.concat(everyAddon);
const loadoutExplain = loadoutExplainPerk.concat(loadoutExplainAddon);
const loadoutCosts = perkCosts.concat(addonCosts);

let testarray = [1, 2, 3, 4, 5, 6, 7];

let selectedLoadout = ["No Killer Selected"];
let cooldowns = [];
let toggledCooldown = false;

let startKillNum = 1;
let startLoadNum = 0;
let loadoutCost = 0;
let loadoutCostMax = 4;

let sessionKillers = [];
let activeKillers = [];
let graveKillers = [];
let deckKillers = [];

let sessionPerks = [];
let sessionAddons = [];

let activeLoadouts = [];
let graveLoadouts = [];
let deckLoadouts = [];

let resultKills = 0;
let resultGens = 0;
let resultHatch = false;
let resultPoints = 0;

let mEditK = document.getElementById("mEditorK");
let mEditL = document.getElementById("mEditorL");
let mEditIndexK = 0;
let mEditNameK = "Trapper";
let mEditIndexL = 0;
let mEditNameL = "The 3 teachable perks for your chosen Killer (3)";
let mEditLoadTotal = 0;
let mManualAddNum = 0;

function sessionTransferInfo() {
	startKillNum = Number(sessionStorage.getItem("startKillers"));
	startLoadNum = Number(sessionStorage.getItem("startLoadouts"));
	if (!startKillNum) {
		console.log("ERROR NO SESSION DATA FOUND");
	} else {
		for (let index=0; index < everyKiller.length; index++) {
			sessionKillers.push(sessionStorage.getItem(everyKiller[index]));
		}
		for (let index=0; index < everyPerk.length; index++) {
			sessionPerks.push(Number(sessionStorage.getItem(everyPerk[index])));
		}
		for (let index=0; index < everyAddon.length; index++) {
			sessionAddons.push(Number(sessionStorage.getItem(everyAddon[index])));
		}
	}
	fillPageVars();
}

function fillPageVars() {
	for (let index=0; index < sessionKillers.length; index ++) {
		let value = sessionKillers[index];
		//console.log(value + " - " + index);
		if (value) {
			deckKillers.push(value);
		}
	}
	for (let index=0; index < sessionPerks.length; index ++ ) {
		let val2 = sessionPerks[index];
		if (val2 > 0) {
			for (let indtwo=0; indtwo < val2; indtwo ++ ) {
				deckLoadouts.push(everyPerk[index]);
			}
		}
	}
	for (let index=0; index < sessionAddons.length; index ++ ) {
		let val2 = sessionAddons[index];
		if (val2 > 0) {
			for (let indtwo=0; indtwo < val2; indtwo ++ ) {
				deckLoadouts.push(everyAddon[index]);
			}
		}
	}
}

function chooseKillers() {
	if (deckKillers.length > startKillNum) {
		let tempArray = randomNumbers(deckKillers.length,(startKillNum));
		//console.log(tempArray + " - presorted");
		tempArray.sort(function(a,b){return b - a});
		for (let index=0; index < tempArray.length; index++) {
			activeKillers.push(everyKiller[tempArray[index]]);
			deckKillers.splice(tempArray[index],1);
		}
	} else {
		console.log("deck killer length error!");
	}
}

function chooseLoadouts() {
	if (deckLoadouts.length > startLoadNum) {
		let tempArray = randomNumbers(deckLoadouts.length,startLoadNum);
		for (let index=0; index < tempArray.length; index++) {
			activeLoadouts.push(deckLoadouts[tempArray[index]]);
		}
		for (let index=0; index < activeLoadouts.length; index++) {
			let kid = activeLoadouts[index];
			activeLoadouts[index] = kid + index;
		}
	}
}

function randomNumbers(max, amount) {
	if (max <= amount) {
		console.log("Random Number error!");
		return false;
	}
	let array = [];
	while (array.length < amount) {
		let randInt = Math.floor(Math.random()*max);
		if (!array.includes(randInt)) {
			array.push(randInt);
		}
	}
	return array;
}
/*	for (let index=0; index < amount; index++) {
		while (!array[index]) {
			let randInt = Math.floor(Math.random()*max);
			if (!array.includes(randInt)) {
				array.push(randInt);
			}
		}
	}
	return array;
}*/

function drawKillers(amount) {
	//console.log(amount);
	if (deckKillers.length > 0) {
		let tempArray = randomNumbers(deckKillers.length,amount);
		tempArray.sort(function(a,b){return b - a});
		for (let index=0; index < tempArray.length; index++) {
			activeKillers.push(deckKillers[tempArray[index]]);
			deckKillers.splice(tempArray[index],1);
		}
		//document.getElementById("actKillers").innerHTML = activeKillers;
		//document.getElementById("graveKillers").innerHTML = graveKillers;
		//document.getElementById("remKillers").innerHTML = deckKillers;
		createKillerList();
	} else {
		console.log("No remaining killer cards!");
	}
}

function removeKiller(name) {
	let tid = activeKillers.findIndex(function (element) {
		return element === name;
	});
	console.log(tid + " found id slot of killer name");
	graveKillers.push(activeKillers[tid]);
	activeKillers.splice(tid,1);
	//document.getElementById("actKillers").innerHTML = activeKillers;
	//document.getElementById("graveKillers").innerHTML = graveKillers;
	//document.getElementById("remKillers").innerHTML = deckKillers;
}

function createKillerList() {
	let data = activeKillers;
	data.sort();
	let list = document.getElementById("killerList");
	//Removes any old data from the list
	list.innerHTML = "";
	for (let index=0; index < data.length; index++) {
		let li=document.createElement('li');
		li.innerHTML = data[index];
		li.id = data[index];
		//li.setAttribute("onclick","toggleK(data[index])");
		//let tempAt = "toggleK(" + data[index] + ")";
		//console.log(tempAT + " - tempat string");
		li.setAttribute("onclick","toggleK(this.id)");
		if (cooldowns.includes(data[index])) {
			li.style.backgroundColor = '#FFCCCB'; //Red Hex Code
		}
		//li.onclick = toggleK(data[index]);
		list.appendChild(li);
	}
}

function toggleK(clicked_id) {
	//console.log(name);
	//console.log(clicked_id + "- selected killer");
	selectedLoadout[0] = "No Killer Selected";
	let killList = document.getElementById("killerList").querySelectorAll('li');
	//console.log(killList);
	for (let index=0; index < killList.length; index++) {
		//console.log(killList[index]);
		let refName = activeKillers[index];
		killList[index].style.backgroundColor = '#D3D3D3'; //Light gray hex code
		if (cooldowns.includes(refName)) {
			killList[index].style.backgroundColor = '#FFCCCB'; //Red Hex Code
		}
	}
	let toggled = document.getElementById(clicked_id);
	toggled.style.backgroundColor = '#00FF00'; //Green Hex Code
	selectedLoadout[0] = clicked_id;
	checkCooldown();
	updateChosenCards();
}

function updateChosenCards() {
	let data = selectedLoadout;
	let list=document.getElementById("selectedList");
	list.innerHTML = "";
	let li=document.createElement('li');
	li.innerHTML = data[0];
	li.id = data[0];
	list.appendChild(li);
	let ci=document.createElement('li');
	ci.innerHTML = loadoutCost + "/" + loadoutCostMax + " Loadout Cost";
	ci.id = "Loadoutcost";
	list.appendChild(ci);
	if (loadoutCost > loadoutCostMax) {
		let zi=document.createElement('li');
		zi.innerHTML = "Max Cost Exceeded!";
		zi.id = "cost warning";
		list.appendChild(zi);
		let toggled = document.getElementById("cost warning");
		toggled.style.backgroundColor = '#FFCCCB'; //Red Hex Code
	}
	if (toggledCooldown) {
		let fi=document.createElement('li');
		fi.innerHTML = "Cooldown Card Selected!";
		fi.id = "cooldown warning";
		list.appendChild(fi);
		let toggled = document.getElementById("cooldown warning");
		toggled.style.backgroundColor = '#FFCCCB'; //Red Hex Code
	}
	/*for (let index=0; index < data.length; index++) {
		//let li=document.createElement('li');
		//li.innerHTML = data[index];
		//li.id = data[index];
		//list.appendChild(li);
	}*/
}

function createLoadoutList() {
	let data = activeLoadouts;
	let refArray = loadoutExplainPerk.concat(loadoutExplainAddon);
	let list = document.getElementById("loadoutList");
	list.innerHTML = "";
	for (let index=0; index < data.length; index++) {
		let li=document.createElement('li');
		let descRef = removeEndingNumbers(data[index]);
		if (everyLoadout.includes(descRef)) {
			let resul = everyLoadout.indexOf(descRef);
			descRef = loadoutExplain[resul];
			} else {
				console.log("Description find error!");
			}
		li.innerHTML = descRef;
		li.id = data[index];
		//li.setAttribute("onclick","toggleK(data[index])");
		//let tempAt = "toggleK(" + data[index] + ")";
		//console.log(tempAT + " - tempat string");
		li.setAttribute("onclick","toggleL(this.id)");
		if (cooldowns.includes(data[index])) {
			li.style.backgroundColor = '#FFCCCB'; //Red Hex Code
		}
		//li.onclick = toggleK(data[index]);
		list.appendChild(li);
	}
}

function removeEndingNumbers(string) {
	let master = string;
	let last = string.length-1;
	let digit = string[last];
	if (!isNaN(digit)) {
		master = master.slice(0,-1);
	}
	last = master.length-1;
	digit = master[last];
	if (!isNaN(digit)) {
		master = master.slice(0,-1);
	}
	last = master.length-1;
	digit = master[last];
	if (!isNaN(digit)) {
		master = master.slice(0,-1);
	}
	last = master.length-1;
	digit = master[last];
	if (!isNaN(digit)) {
		master = master.slice(0,-1);
	}
	return master;
}

function toggleL(clicked_id) {
	//console.log(clicked_id + " - clicked id");
	//refinedId = clicked_id.substring(0,clicked_id.length-1);
	//console.log(refinedId + " - refined id");
	let toggled = document.getElementById(clicked_id);
	if (selectedLoadout.includes(clicked_id)) {
		let index = selectedLoadout.indexOf(clicked_id);
		toggled.style.backgroundColor = '#D3D3D3'; //Light gray hex code
		if (cooldowns.includes(clicked_id)) {
			toggled.style.backgroundColor = '#FFCCCB'; //Red Hex Code
		}
		selectedLoadout.splice(index, 1);
		let sub = returnLoadoutCost(clicked_id);
		loadoutCost = loadoutCost - sub;
	} else {
		toggled.style.backgroundColor = '#00FF00'; //Green Hex Code
		selectedLoadout.push(clicked_id);
		let add = returnLoadoutCost(clicked_id);
		loadoutCost = loadoutCost + add;
	}
	checkCooldown();
	updateChosenCards();
}

function returnLoadoutCost(refid) {
	//console.log("Return Loadout Cost Function Firing!");
	let newid = removeEndingNumbers(refid);
	//console.log(newid);
	if (everyLoadout.includes(newid)) {
		let ind = everyLoadout.indexOf(newid);
		let refName = Number(loadoutCosts[ind]);
		return refName;
	} else {
		console.log("Loadout cost not found!");
	}
}

function addResults(nameid, max) {
	//console.log(nameid + " - nameid sent");
	if (nameid === "resultKills") {
		resultKills ++;
		if (resultKills > max) {
			resultKills = max;
		}
		let cellTemp = document.getElementById(nameid).getElementsByTagName("p");
		let cellLine = cellTemp[1];
		if (cellTemp[1]) {
		cellTemp[1].innerHTML = resultKills;
		}
	} else if (nameid === "resultGens") {
		resultGens ++;
		if (resultGens > max) {
			resultGens = max;
		}
		let cellTemp = document.getElementById(nameid).getElementsByTagName("p");
		let cellLine = cellTemp[1];
		if (cellTemp[1]) {
		cellTemp[1].innerHTML = resultGens;
		}
	}
	calculateResultPoints();
}

function subResults(nameid, min) {
	if (nameid === "resultKills") {
		resultKills --;
		if (resultKills < min) {
			resultKills = min;
		}
		let cellTemp = document.getElementById(nameid).getElementsByTagName("p");
		let cellLine = cellTemp[1];
		if (cellTemp[1]) {
		cellTemp[1].innerHTML = resultKills;
		}
	} else if (nameid === "resultGens") {
		resultGens --;
		if (resultGens < min) {
			resultGens = min;
		}
		let cellTemp = document.getElementById(nameid).getElementsByTagName("p");
		let cellLine = cellTemp[1];
		if (cellTemp[1]) {
		cellTemp[1].innerHTML = resultGens;
		}
	}
	calculateResultPoints();
}

function toggleResults(nameid) {
	resultHatch = !resultHatch;
	let cellTemp = document.getElementById(nameid).getElementsByTagName("p");
	let cellLine = cellTemp[1];
	if (resultHatch) {
		if (cellTemp[1]) {
			cellTemp[1].innerHTML = "Yes";
		}
	} else {
		if (cellTemp[1]) {
			cellTemp[1].innerHTML = "No";
		}
	}
	calculateResultPoints();
}

function calculateResultPoints() {
	let points = 0;
	points += resultKills*3;
	points -= resultGens;
	if (resultHatch) {
		points ++;
	}
	let textr = document.getElementById("finalPoints");
	if (textr) {
		textr.innerHTML = points;
	}
	resultPoints = points;
}

function checkCooldown() {
	toggledCooldown = false;
	for (index=0; index < selectedLoadout.length; index++) {
		let kid = selectedLoadout[index];
		if (cooldowns.includes(kid)) {
			toggledCooldown = true;
		}
	}
}

function updateCooldowns() {
	cooldowns = selectedLoadout;
	console.log(cooldowns + " - set cooldowns");
	for (let index = 1; index < selectedLoadout.length; index++) {
		let kid = selectedLoadout[index];
		//toggleL(kid);
		let toggled = document.getElementById(kid);
		toggled.style.backgroundColor = '#FFCCCB'; //Red Hex Code
	}
	selectedLoadout = ["No Killer Selected"];
	let listkills = document.getElementById("killerList").querySelectorAll('li');
	let listloads = document.getElementById("loadoutList").querySelectorAll('li');
	loadoutCost = 0;
	if (activeKillers.includes(cooldowns[0])) {
		for (let index = 0; index < activeKillers.length; index++) {
			let nid = activeKillers[index];
			if (cooldowns.includes(nid)) {
				listkills[index].style.backgroundColor = '#FFCCCB'; //Red Hex Code
			} else {
				listkills[index].style.backgroundColor = '#D3D3D3'; //Light gray hex code
			}
		}
	}
	updateChosenCards();
	saveStatus();
	window.scrollTo(0,0);
}

function matchLost() {
	graveKillers.push(selectedLoadout[0]);
	for (index = 0; index < activeKillers.length; index ++) {
		let kid = activeKillers[index];
		if (selectedLoadout.includes(kid)) {
			activeKillers.splice(index, 1);
		}
	}
	for (ind2 = 1; ind2 < selectedLoadout.length; ind2++) {
		let lid = selectedLoadout[ind2];
		let numlessLid = removeEndingNumbers(lid);
		let lDesc = convertLoadoutDescription(numlessLid);
		let spot = activeLoadouts.indexOf(lid);
		console.log(spot + " - " + lid);
		activeLoadouts.splice(spot,1);
		graveLoadouts.push(lDesc);
	}
	selectedLoadout = ["No Killer Selected"];
	cooldowns = [];
	loadoutCost = 0;
	updateChosenCards();
	resetLists();
	window.scrollTo(0,0);
	saveStatus();
}

function resetLists() {
	createKillerList();
	createLoadoutList();
	//document.getElementById("actKillers").innerHTML = activeKillers;
	document.getElementById("graveKillers").innerHTML = graveKillers;
	//document.getElementById("remKillers").innerHTML = deckKillers;
	//document.getElementById("actLoadouts").innerHTML = activeLoadouts;
	document.getElementById("graveLoadouts").innerHTML = graveLoadouts;
	updateChosenCards();
}

function convertLoadoutDescription(name) {
	let numless = removeEndingNumbers(name);
	for (index = 0; index < everyLoadout.length; index++ ) {
		let ref = everyLoadout[index];
		if (ref === numless) {
			return loadoutExplain[index];
		}
	}
}

function milestoneReached() {
	drawKillers(1);
	activeLoadouts = [];
	chooseLoadouts();
	createLoadoutList();
	for (index = cooldowns.length; index > 0; index--) {
		cooldowns.splice(index,1);
	}
	selectedLoadouts = ["No Killer Selected"];
	loadoutCost = 0;
	selectedLoadout = ["No Killer Selected"];
	resetLists();
	window.scrollTo(0,0);
	saveStatus();
}

function manualEdit() {
	let popupK = document.getElementById("killerSettings");
	let popupL = document.getElementById("loadoutSettings");
	mEditNameK = everyKiller[mEditIndexK];
	mEditK.innerHTMl = mEditNameK;
	popupK.style.opacity = 1;
	popupK.style.zIndex = 9;
	popupL.style.opacity = 0;
	popupL.style.zIndex = -1;
	document.getElementById("mDesc").innerHTML = manualDescReturn(mEditNameK);
	saveStatus();
}

function manualLoadoutEdit() {
	mEditL.innerHTML = loadoutExplain[mEditIndexL];
	mEditNameL = everyLoadout[mEditIndexL];
	let popupK = document.getElementById("killerSettings");
	let popupL = document.getElementById("loadoutSettings");
	popupK.style.opacity = 0;
	popupK.style.zIndex = -1;
	popupL.style.opacity = 1;
	popupL.style.zIndex = 9;
	manualAdjustmentLoadout(9);
}

//let mEdit = document.getElementById("mEditor");
//let mEditIndex = 0;

function manualKillerNext() {
	mEditIndexK ++;
	if (mEditIndexK > everyKiller.length-1) {
		mEditIndexK = 0;
	}
	mEditK.innerHTML = everyKiller[mEditIndexK];
	mEditNameK = everyKiller[mEditIndexK];
	document.getElementById("mDesc").innerHTML = manualDescReturn(mEditNameK);
}

function manualKillerLast() {
	mEditIndexK --;
	if (mEditIndexK < 0) {
		mEditIndexK = everyKiller.length-1;
	}
	mEditK.innerHTML = everyKiller[mEditIndexK];
	mEditNameK = everyKiller[mEditIndexK];
	document.getElementById("mDesc").innerHTML = manualDescReturn(mEditNameK);
}

function manualLoadoutNext() {
	mEditIndexL ++;
	if (mEditIndexL > everyLoadout.length-1) {
		mEditIndexL = 0;
	}
	mEditL.innerHTML = loadoutExplain[mEditIndexL];
	mEditNameL = everyLoadout[mEditIndexL];
	manualAdjustmentLoadout(9);
}

function manualLoadoutLast() {
	mEditIndexL --;
	if (mEditIndexL < 0) {
		mEditIndexL = everyLoadout.length-1;
	}
	mEditL.innerHTML = loadoutExplain[mEditIndexL];
	mEditNameL = everyLoadout[mEditIndexL];
	manualAdjustmentLoadout(9);
}

function manualDescReturn(kid) {
	if (cooldowns.includes(kid) && activeKillers.includes(kid)) {
		return "Under cooldown, but in hand";
	} else if (activeKillers.includes(kid)) {
		return "In hand, able to be played";
	} else if (deckKillers.includes(kid)) {
		return "Can be pulled, not currently in hand";
	} else if (graveKillers.includes(kid)) {
		return "Killer in the graveyard";
	} else if (everyKiller.includes(kid)) {
		return "Completely Unavailable";
	}
}

function manualAdjustmentKill(opp) {
	let kid=mEditNameK;
	let descc = "Available";
	let kindex = 0;
	if (deckKillers.includes(kid)) {
		kindex = deckKillers.indexOf(kid);
		deckKillers.splice(kindex,1);
	} else if (graveKillers.includes(kid)) {
		kindex = graveKillers.indexOf(kid);
		graveKillers.splice(kindex,1);
	} else if (activeKillers.includes(kid)) {
		kindex = activeKillers.indexOf(kid);
		activeKillers.splice(kindex,1);
	}
	switch (opp) {
		case 0:
			console.log("Not in deck");
			descc = "Completely Unavailable";
		break;
		case 1:
			console.log("In graveyard");
			graveKillers.push(kid);
			descc = "Killer in the graveyard";
		break;
		case 2:
			console.log("Available, not in hand");
			deckKillers.push(kid);
			descc = "Can be pulled, not currently in hand";
		break;
		case 3:
			console.log("In hand, no cooldown");
			activeKillers.push(kid);
			descc = "In hand, able to be played";
		break;
		case 4:
			console.log("Cooldown");
			activeKillers.push(kid);
			cooldowns[0] = kid;
			descc = "Under cooldown, but in hand";
		break;
		default:
			console.log("Invalid operation integer");
	}
	selectedLoadout = ["No Killer Selected"];
	resetLists();
	document.getElementById("mDesc").innerHTML = descc;
}

function closeManual() {
	let popupK = document.getElementById("killerSettings");
	let popupL = document.getElementById("loadoutSettings");
	popupK.style.opacity = 0;
	popupK.style.zIndex = -1;
	popupL.style.opacity = 0;
	popupL.style.zIndex = -1;
}

function manualAdjustmentLoadout(opp) {
	let name = mEditNameL;
	let amtGrave = totalLoadGrave(name);
	let amtDeck = totalLoadAvail(name);
	let amtHand = totalLoadHand(name);
	let amtCooldown = totalLoadCooldown(name);
	let total = amtGrave + amtDeck + amtHand;
	let lindex = 0;
	let lindex2 = 0;
	let numName = "test0";
	let amtLive = 0;
	console.log(name + " ----- " + total);
	console.log("Loadout ref name --- Total in play");
	switch (opp) {
		case 0:
			console.log("Case 0, no longer used");
		break;
		case 1:
			console.log("Case 1, subtract grave");
			if (amtGrave > 0) {
				//amtGrave --;
				//total --;
				lindex = graveLoadouts.indexOf(name);
				graveLoadouts.splice(lindex,1);
			}
		break;
		case 2:
			console.log("Case 2, add grave");
			if (total < 9) {
				//amtGrave ++;
				//total ++;
				graveLoadouts.push(name);
			}
		break;
		case 3:
			console.log("Case 3, subtract deck");
			if (amtDeck > 0) {
				//amtDeck --;
				//total --;
				lindex = deckLoadouts.indexOf(name);
				deckLoadouts.splice(lindex,1);
			}
		break;
		case 4:
			console.log("Case 4, add deck");
			if (total < 9) {
				//amtDeck ++;
				//total ++;
				deckLoadouts.push(name);
			}
		break;
		case 5:
			console.log("Case 5, subtract hand");
			if (amtHand > 0 && amtHand > amtCooldown) {
				console.log("Case 5 TRIGGERED");
				//amtHand --;
				//total --;
				console.log(name + " - input name into function");
				lindex = loadoutExactIndexHand(name);
				console.log(lindex + " -output index value");
				activeLoadouts.splice(lindex,1);
			}
		break;
		case 6:
			console.log("Case 6, add hand");
			if (total < 9) {
				//amtHand ++;
				//total ++;
				amtLive = activeLoadouts.length + mManualAddNum;
				numName = name + amtLive;
				activeLoadouts.push(numName);
			}
		break;
		case 7:
			console.log("Case 7, subtract cooldown");
			if (amtCooldown > 0) {
				//amtCooldown --;
				//lindex = loadoutExactIndexHand(name);
				//activeLoadouts.splice(lindex,1);
				lindex2 = loadoutExactIndexCooldown(name);
				cooldowns.splice(lindex2,1);
			}
		break;
		case 8:
			console.log("Case 8, add cooldown");
			if (amtCooldown < amtHand) {
				//amtCooldown ++;
				//amtLive = activeLoadouts.length + mManualAddNum;
				//numName = name + amtLive;
				//activeLoadouts.push(numName);
				numName = addLoadoutCooldown(name);
				cooldowns.push(numName);
			}
		break;
		case 9:
			console.log("No edits, update visuals");
		break;
		default:
			console.log("Invalid loadout update operation");
	}
	amtGrave = totalLoadGrave(name);
	amtDeck = totalLoadAvail(name);
	amtHand = totalLoadHand(name);
	amtCooldown = totalLoadCooldown(name);
	total = amtGrave + amtDeck + amtHand;
	console.log(amtGrave + " - " + amtDeck + " - " + amtHand + " - " + amtCooldown);
	document.getElementById("mEditLoadGrave").innerHTML = amtGrave;
	document.getElementById("mEditLoadAvail").innerHTML = amtDeck;
	document.getElementById("mEditLoadHand").innerHTML = amtHand;
	amtCooldown2 = amtCooldown + "/" + amtHand;
	document.getElementById("mEditLoadCooldown").innerHTML = amtCooldown2;
	let left = 9 - total;
	let leftLoad = left + "/9";
	document.getElementById("mEditLoadLeft").innerHTML = leftLoad;
	mManualAddNum ++;
	resetLists();
}

function loadoutExactIndexHand(name) {
	let total = 0;
	for (index = 0; index < activeLoadouts.length; index ++) {
		let refName = activeLoadouts[index];
		let numlessName = removeEndingNumbers(refName);
		//let slength = activeLoadouts[index].length;
		//let refName = activeLoadouts[index].substring(0,slength-1);
		console.log(refName);
		if (name === numlessName) {
			return index;
		}
	}
}

function loadoutExactIndexCooldown(name) {
	let total = 0;
	for (index = 0; index < cooldowns.length; index ++) {
		let refName = cooldowns[index];
		let numlessName = removeEndingNumbers(refName);
		//let slength = cooldowns[index].length;
		//let refName = cooldowns[index].substring(0,slength-1);
		if (name === numlessName) {
			return index;
		}
	}
}

function addLoadoutCooldown(name) {
	for (index = 0; index < activeLoadouts.length; index ++) {
		let checkNums = activeLoadouts[index];
		let check = removeEndingNumbers(checkNums);
		if (name === check) {
			let grabbedName = activeLoadouts[index];
			if (cooldowns.includes(grabbedName)) {
			} else {
				return grabbedName;
			}
		}
	}
}

//Calculates total for each category, loadout cards
function totalLoadGrave(name) {
	let total = 0;
	for (index = 0; index < graveLoadouts.length; index ++) {
		let temp = graveLoadouts[index];
		let numlessName = removeEndingNumbers(temp);
		if (numlessName === name) {
			total ++;
		}
	}
	return total;
}

function totalLoadAvail(name) {
	let total = 0;
	for (index = 0; index < deckLoadouts.length; index ++) {
		let temp = deckLoadouts[index];
		let numlessName = removeEndingNumbers(temp);
		if (numlessName === name) {
			total ++;
		}
	}
	return total;
}

function totalLoadHand(name) {
	let total = 0;
	for (index = 0; index < activeLoadouts.length; index ++) {
		let temp = activeLoadouts[index];
		let numlessName = removeEndingNumbers(temp);
		if (numlessName === name) {
			total ++;
		}
	}
	return total;
}

function totalLoadCooldown(name) {
	let total = 0;
	for (index = 0; index < cooldowns.length; index ++) {
		let temp = cooldowns[index];
		let numlessName = removeEndingNumbers(temp);
		if (numlessName === name) {
			total ++;
		}
	}
	return total;
}

function editMaxCost(num) {
	if (Math.sign(num)) {
		loadoutCostMax += num;
	} else {
		loadoutCostMax -= num;
	}
	if (loadoutCostMax < 0) {
		loadoutCostMax = 0;
	}
	document.getElementById("maxCost").innerHTML = loadoutCostMax;
	document.getElementById("maxCost2").innerHTML = loadoutCostMax;
	updateChosenCards();
}

function saveStatus() {
	localStorage.clear();
	localStorage.setItem("saveMaxCost",loadoutCostMax);
	localStorage.setItem("saveLoadDraw",startLoadNum);
	for (index = 0; index < activeKillers.length; index ++ ) {
		let temp = activeKillers[index];
		localStorage.setItem("saveK" + index, temp);
	}
	for (index = 0; index < activeLoadouts.length; index ++ ) {
		let temp = activeLoadouts[index] + index;
		localStorage.setItem("saveL" + index, temp);
	}
	for (index = 0; index < cooldowns.length; index ++ ) {
		let temp = cooldowns[index] + index;
		localStorage.setItem("saveC" + index, temp);
	}
	for (index = 0; index < graveKillers.length; index ++ ) {
		let temp = graveKillers[index];
		localStorage.setItem("saveGK" + index, temp);
	}
	for (index = 0; index < graveLoadouts.length; index ++ ) {
		let temp = graveLoadouts[index] + index;
		localStorage.setItem("saveGL" + index, temp);
	}
	for (index = 0; index < deckKillers.length; index ++ ) {
		let temp = deckKillers[index];
		localStorage.setItem("saveDK" + index, temp);
	}
	for (index = 0; index < deckLoadouts.length; index ++ ) {
		let temp = deckLoadouts[index] + index;
		localStorage.setItem("saveDL" + index, temp);
	}
}

function loadSave() {
	let stat = true;
	let index = 0;
	let temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveK" + index);
		if (temp) {
			activeKillers.push(temp);
			index ++;
		} else {
			stat = false;
		}
	}
	stat = true;
	index = 0;
	temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveL" + index);
		if (temp) {
			activeLoadouts.push(temp);
			index ++;
		} else {
			stat = false;
		}
	}
	stat = true;
	index = 0;
	temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveGK" + index);
		if (temp) {
			graveKillers.push(temp);
			index ++;
		} else {
			stat = false;
		}
	}
	stat = true;
	index = 0;
	temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveGL" + index);
		if (temp) {
			graveLoadouts.push(temp);
			index ++;
		} else {
			stat = false;
		}
	}
	stat = true;
	index = 0;
	temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveDK" + index);
		if (temp) {
			deckKillers.push(temp);
			index ++;
		} else {
			stat = false;
		}
	}
	stat = true;
	index = 0;
	temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveDL" + index);
		if (temp) {
			deckLoadouts.push(temp);
			index ++;
		} else {
			stat = false;
		}
	}
	loadoutCostMax = localStorage.getItem("saveMaxCost");
	startLoadNum = localStorage.getItem("saveLoadDraw");
	stat = true;
	index = 0;
	temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveC" + index);
		if (temp) {
			temp = removeEndingNumbers(nam);
			cooldowns.push(temp);
			index ++;
		} else {
			stat = false;
		}
	}
}

window.onload = (event) => {
  console.log("page is fully loaded");
  let isNewSes = 0;
  isNewSes = Number(sessionStorage.getItem("new"));
  console.log(isNewSes);
  switch(isNewSes) {
	  case 0:
		console.log("Load Save Function");
		loadSave();
	  break;
	  case 1:
		console.log("Session Transfer Info Function");
		sessionTransferInfo();
		chooseKillers();
		chooseLoadouts();
	  break;
	  default:
		console.log("Session state error!");
  }
	createKillerList();
	createLoadoutList();
	resetLists();
};