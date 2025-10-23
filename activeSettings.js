const everyKiller = ["Trapper","Wraith","Hillbilly","Nurse","Shape","Hag","Doctor","Huntress","Leatherface",
"Freddy","Pig","Clown","Spirit","Legion","Plague","Ghostface","Demogorgon","Oni","Deathslinger","Pyramidhead",
"Blight","Twins","Trickster","Nemesis","Cenobite","Artist","Sadako","Dredge","Wesker","Knight","Skullmerchant",
"Singularity","Xenomorph","Chucky","Unknown","Vecna","Dracula","Houndmaster","Ghoul","Springtrap","Krasue"];

const everyPerk = ["teachables","oddball","evensteven","generic","morestun","anyperk","otherteaches","samepage","shope","anythree",
	"block","blood","entity","exhaust","exitgate","exposed","faster","generator","health","healing","hex","hexundying","hooking","hinder","lunge",
	"obsession","scourge","scourgecompass","scream","them","token","trap","undetectable","vault","yaura"];

const loadoutExplainPerk = ["All three Teachables for your chosen killer (3)","Three or four perks found on ODD NUMBER pages. Cannot have multiple perks from the same page (3)",
"Three or four perks found on EVEN NUMBER pages. Cannot have multiple perks from the same page (3)","Any one or two generic perks that are NOT a teachable (1)",
"Bring Dark Arrogance, CANNOT bring Enduring (-1)","Any one perk of your Choice (2)","Any two or three Teachable Perks from the same killer; can be any killer (2)",
"Four perks from the same perk page; empty search bar (4)","Bring the perk Shattered Hope (-1)","Bring any three perks of your choice (MAX cost)","One perk with Keyword: Block (2)",
"One perk with Keyword: Blood (1)","Three perks with Keyword: Entity (3)","One perk with Keyword: Exhausted (1)","Two perks with Keyword: Exit Gate (1)","One perk with Keyword: Exposed (1)",
"Two perks with Keyword: Faster (2)","One perk with Keyword: Generator (2)","One or two perks with Keyword: Health (1)","One perk with Keyword: Healing (1)",
"One perk with Keyword: Hex (1)","Hex: Undying and one perk with Keyword: Hex (2)","Two perks with Keyword: Hooking (2)","One perk with Keyword: Hinder (0)","One or two perks with Keyword: Lunge (1)",
"One or two perks with Keyword: Obsession (1)","One perk with Keyword: Scourge Hook (1)","Scourge Hook: Jagged Compass and one perk with Keyword: Scourge Hook (2)",
"One perk with Keyword: Scream (1)","One or two perks with Keyword: Them (1)","One perk with Keyword: Token (1)","One or two perks with Keyword: Trap (1)",
"One or three perks with Keyword: Undetectable (1)","One perk with Keyword: Vault (2)","One perk with Keyword: Yellow Aura (1)"];

const perkCosts = [3, 3, 3, 1, -1, 2, 2, 4, -1, 9, 2, 1, 3, 1, 1,
	1, 2, 2, 1, 1, 1, 2, 2, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1];

const everyAddon = ["brownsAdd","greensAdd","bluesAdd","purplesAdd","redsAdd","anyLowAdd","anyMidAdd","anyUpperAdd","anyTopAdd","anyAdd","noAdd","firstGreenAdd","midColAdd","cornersAdd",
"hiLoAdd","basicAdd","durationAdd","inflictAdd","speedAdd","sneakyAdd"];

const loadoutExplainAddon = ["Two Brown [Common] add-ons (1)","Two Green [Uncommon] add-ons (1)",
"Two Blue [Rare] add-ons (1)","Two Purple [Very Rare] add-ons (2)","Both Iridescent [Visceral] add-ons (2)",
"One Brown[Common] or one Green [Uncommon] add-on(0)","One Green [Uncommon] or one Blue [Rare] add-on (0)",
"One Blue [Rare] or one Purple [Very Rare] add-on (1)","One Purple [Very Rare] or one Iridescent [Visceral] add-on (1)",
"Any one add-on (2)","Take no add-ons (-1)","The first [uppermost, then leftmost] Blue [Rare] or Purple [Very Rare] add-on (0)",
"One or two add-ons that are in the middle column of any page (1)",
"One add-on from the top left, top right, bottom left, or bottom right corner on Page 1 (1)",
"One Brown [Common] and one Iridescent [Visceral] add-ons (2)","One or two add-ons with Keyword: Basic Attack",
"One or two add-ons with Keyword: Duration (1)",
"One add-on with Keyword: Inflict --OR-- one add-on with Keyword: Status Effect (1)","One add-on with Keyword: Speed (1)",
"One add-on with Keyword: Undetectable (0)"];

const addonCosts = [1, 1, 1, 2, 2, 0, 0, 1, 1, 2, -1, 0, 1, 1, 2, 0, 1, 1, 1, 0];

const everyLoadout = everyPerk.concat(everyAddon);
const loadoutExplain = loadoutExplainPerk.concat(loadoutExplainAddon);
const loadoutCosts = perkCosts.concat(addonCosts);

let killerTier = [1, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 3, 2, 1, 2, 3];

let killerCost = [4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 3, 4, 3];

let selectedLoadout = ["No Killer Selected"];
let cooldowns = [];
let toggledCooldown = false;
let newHistKillers = [];
let histColor = 0;

let startKillNum = 1;
let startLoadNum = 0;
let loadoutCost = 0;
let loadoutCostMax = 4;
let globalLoadoutCostMax = 4;

let debugNum = 0;

let tierLowLoadoutCost = 5;
let tierMidLoadoutCost = 4;
let tierTopLoadoutCost = 3;

let lowTierWeight = 20;
let midTierWeight = 65;
let topTierWeight = 15;
let totalTierWeight = 100;

let killDrawNum = 2;
let loadDrawNum = 9;
let loadDrawStyle = 0;

let maxCostStyle = 0;
let drawStyle = 0;

let sessionKillers = [];
let activeKillers = [];
let graveKillers = [];
let deckKillers = [];

let sessionPerks = [];
let sessionAddons = [];

let activeLoadouts = [];
let graveLoadouts = [];
let deckLoadouts = [];
let graveLoadoutsDesc = [];

let tempGraveUnique = [];
let tempGraveAmt = [];

let enableHandicap = 0;
let handicapCustom = "";
const customTextEnter = document.getElementById("customTextEnter");

customTextEnter.addEventListener('input',function(event) {
	let customField = document.getElementById("handicapButtons").getElementsByTagName("p");
	handicapCustom = customField[0].innerHTML;
});

let resultKills = 0;
let resultGens = 0;
let resultHooks = 0;
let resultHatch = false;
let resultPoints = 0;

let custAsh = 1;
let custBronze = 3;
let custSilver = 5;
let custGold = 8;
let custIri = 11;
let resultStyle = 0;

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
	maxCostStyle = Number(sessionStorage.getItem("maxCostStyle"));
	tierLowLoadoutCost = Number(sessionStorage.getItem("tierLowLoadoutCost"));
	tierMidLoadoutCost = Number(sessionStorage.getItem("tierMidLoadoutCost"));
	tierTopLoadoutCost = Number(sessionStorage.getItem("tierTopLoadoutCost"));
	globalLoadoutCostMax = Number(sessionStorage.getItem("globalLoadoutCostMax"));
	drawStyle = Number(sessionStorage.getItem("drawStyle"));
	lowTierWeight = Number(sessionStorage.getItem("lowTierWeight"));
	midTierWeight = Number(sessionStorage.getItem("midTierWeight"));
	topTierWeight = Number(sessionStorage.getItem("topTierWeight"));
	totalTierWeight = lowTierWeight + midTierWeight + topTierWeight;
	enableHandicap = Number(sessionStorage.getItem("enableHandicap"));
	handicapCustom = sessionStorage.getItem("handicapCustom");
	if (!startKillNum) {
		console.log("ERROR NO SESSION DATA FOUND");
	} else {
		for (let index=0; index < everyKiller.length; index++) {
			sessionKillers.push(sessionStorage.getItem(everyKiller[index]));
			killerTier[index] = Number(sessionStorage.getItem(everyKiller[index]+ "tier"));
			killerCost[index] = Number(sessionStorage.getItem(everyKiller[index] + "max"));
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
	switch (drawStyle) {
		case 0:
			if (deckKillers.length >= startKillNum) {
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
		break;
		case 1:
			if (deckKillers.length >= startKillNum) {
				weightedDrawKillers(startKillNum);
			} else {
				console.log("deck killer length error!");
			}
		break;
		default:
			console.log("chooseKillers switch opp ERORR!");
	}
	let tempStr = "Started a new adventure with " + startLoadNum + " Loadout Cards and " + startKillNum + " Killer Cards consisting of: ";
	tempStr = tempStr + activeKillers;
	updateHistoryTab(tempStr);
}

function killerTierChoose(opp) {
	let lowRem = tierRemainAmount(0);
	let midRem = tierRemainAmount(1);
	let topRem = tierRemainAmount(2);
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
	handicapToggleDisplay();
}

function tierRemainAmount(value) {
	let amount = 0;
	for (index = 0; index < killerTier.length; index++) {
		if (killerTier[index] = value) {
			amount ++;
		}
	}
	return amount;
}

function chooseLoadouts(amount) {
	if (deckLoadouts.length >= amount) {
		let tempArray = randomNumbers(deckLoadouts.length,amount);
		//console.log(tempArray);
		for (let index=0; index < tempArray.length; index++) {
			activeLoadouts.push(deckLoadouts[tempArray[index]]);
		}
		//console.log(deckLoadouts);
		//console.log(activeLoadouts);
		for (let index=tempArray.length-1; index >= 0; index--) {
			deckLoadouts.splice(tempArray[index],1);
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
	if (amount < 2) {
		let soloRandInt = Math.floor(Math.random()*max);
		return soloRandInt;
	}
	let array = [];
	while (array.length < amount) {
		let randInt = Math.floor(Math.random()*max);
		if (!array.includes(randInt)) {
			array.push(randInt);
		}
	}
	array.sort(function(a,b){return a-b});
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
	switch (drawStyle) {
		case 0:
			drawKillersRandom(amount);
		break;
		case 1:
			weightedDrawKillers(amount);
		break;
		default:
			console.log("Function drawKillers ERROR");
	}
}

function drawKillersRandom(amount) {
	//console.log(amount);
	let tempArray = [];
	if (deckKillers.length >= amount) {
		if (amount >= 2) {
			tempArray = randomNumbers(deckKillers.length,amount);
		} else {
			tempArray[0] = randomNumbers(deckKillers.length,amount);
		}
		//tempArray.sort(function(a,b){return b - a});
		//a.sort((x, y) => y - x);
		tempArray.sort((x, y) => y - x);
		for (let index=0; index < tempArray.length; index++) {
			activeKillers.push(deckKillers[tempArray[index]]);
			newHistKillers.push(deckKillers[tempArray[index]]);
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

function weightedDrawKillers(amount) {
	let numPulls = amount;
	let deckPullCheck = true;
	let tierNum = 0;
	let lowTierStart = 0;
	let midTierStart = lowTierWeight + 1;
	let topTierStart = midTierWeight + lowTierWeight + 1;
	let finalTier = 2;
	while (numPulls > 0) {
		deckPullCheck = true;
		finalTier = 1;
		tierNum = randomNumbers(totalTierWeight,1);
		if (tierNum > midTierStart) {
			finalTier = 2;
		}
		if (tierNum > topTierStart) {
			finalTier = 3;
		}
		let deckPull = [];
		//console.log(lowTierStart + " - " + midTierStart + " - " + topTierStart + " - " + totalTierWeight + " : " + tierNum + " --- " + finalTier);
		//console.log(tierNum + "     " + finalTier);
		//console.log("Tier Num, final Tier INT");
		while (deckPullCheck) {
			for (i = 0; i < deckKillers.length; i++) {
				let cid = everyKillerExactIndex(deckKillers[i]);
				let tierId = killerTier[cid];
				if (tierId == finalTier) {
					/*console.log("Pushing killer");
					console.log(tierId + " - " + finalTier);
					console.log(deckKillers[cid] + " - id num of: " + cid);*/
					deckPull.push(everyKiller[cid]);
				}
			}
			//console.log(deckPull.length + " - deckPulling length");
			if (deckPull.length <= 0) {
				finalTier--;
				//console.log("Empty deck, adjusting tier");
				if (finalTier <= 0) {
					finalTier = 3;
				}
			//console.log("finalTier change, now:  " + finalTier);
			} else {
				//console.log(deckPull);
				//console.log(finalTier);
				deckPullCheck = false;
			}
		}
		let weightInt = randomNumbers(deckPull.length,1);
		let fName = deckPull[weightInt];
		let fid = deckKillerExactIndex(fName);
		activeKillers.push(fName);
		newHistKillers.push(fName);
		deckKillers.splice(fid,1);
		numPulls --;
	}
	createKillerList();
}

function removeKiller(name) {
	let tid = activeKillers.findIndex(function (element) {
		return element === name;
	});
	//console.log(tid + " found id slot of killer name");
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
		killList[index].style.backgroundColor = '#F2F2F2'; //Lightest gray hex code
		if (cooldowns.includes(refName)) {
			killList[index].style.backgroundColor = '#FFCCCB'; //Red Hex Code
		}
	}
	let toggled = document.getElementById(clicked_id);
	toggled.style.backgroundColor = '#00FF00'; //Green Hex Code
	selectedLoadout[0] = clicked_id;
	updateLoadoutCost();
	checkCooldown();
	updateChosenCards();
	updateLoadoutCost();
}

function handicapToggleDisplay() {
	let handiSet = document.getElementById("handicapSet");	
	let handiText = document.getElementById("handiTex");
	let tempId = everyKiller.indexOf(selectedLoadout[0]);
	tempId = killerTier[tempId];
	handiSet.classList.add("hidden");
		if (enableHandicap > 0) {
			if (tempId == 1) {
				handiSet.classList.remove("hidden");
				switch (enableHandicap) {
					case 1:
						handiText.innerHTML = "One free perk, not counting Loadout Cost";
					break;
					case 2:
						handiText.innerHTML = "One free add-on Blue [Rare] rarity or lower, not counting Loadout Cost";
					break;
					case 3:
						handiText.innerHTML = handicapCustom;
					break;
					default:
						console.log("updateChosenCards enableHandicap switch error!");
			}
		}
	}
}


function updateChosenCards() {
	let chosen = true;
	let style = maxCostStyle;
	let data = selectedLoadout;
	let list=document.getElementById("selectedList");
	let killerImg = document.getElementById("killerPic");
	let killerBG = document.getElementById("killerBG");
	let tempId = 0;
	list.innerHTML = "";
	let li=document.createElement('li');
	if (selectedLoadout[0] === "No Killer Selected") {
		killerImg.src = "images/DbD Card - Back.png";
		killerBG.style.backgroundImage = "url('images/DbD Card - Back.png')";
	} else {
		let iconName = selectedLoadout[0];
		let finalIconName = "images/" + iconName + " Icon.png";
		killerImg.src = finalIconName;
		killerBG.style.backgroundImage = "url('images/DbD Card - Forward.png')"
		handicapToggleDisplay();
	}
	//li.innerHTML = data[0];
	//li.id = data[0];
	//list.appendChild(li);
	tempId = everyKiller.indexOf(data[0]);
	tempId = killerTier[tempId];
	switch (style) {
		case 0:
			loadoutCostMax = globalLoadoutCostMax;
		break;
		case 1:
			switch (tempId) {
				case 0:
					loadoutCostMax = tierMidLoadoutCost;
				break;
				case 1:
					loadoutCostMax = tierLowLoadoutCost;
				break;
				case 2:
					loadoutCostMax = tierMidLoadoutCost;
				break;
				case 3:
					loadoutCostMax = tierTopLoadoutCost;
				break;
				default:
					//console.log("Nested SWITCH error for killer tier costs, opp value of: " + tempId);
					chosen = false;
					li.innerHTML = "Please select a Killer Card";
			}
		break;
		case 2:
			tempId = everyKiller.indexOf(data[0]);
			loadoutCostMax = killerCost[tempId];
			if (!Number.isInteger(loadoutCostMax)) {
				li.innerHTML = "Please select a Killer Card";
				chosen = false;
			}
		break;
		default:
			console.log("Switch ERROR for load Draw Style updating chosen cards!");
	}
	let ci=document.createElement('li');
	if (chosen) {
		ci.innerHTML = loadoutCost + "/" + loadoutCostMax + " Loadout Cost";
	} else {
		ci.innerHTML = "Select a Killer Card First";
	}
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
	//console.log(data.length);
	let refArray = loadoutExplainPerk.concat(loadoutExplainAddon);
	let listPerk = document.getElementById("loadoutListPerks");
	let listAdd = document.getElementById("loadoutListAdd");
	let firstPerkList = everyPerk.length;
	let resul = 0;
	listPerk.innerHTML = "";
	listAdd.innerHTML = "";
	//list.innerHTML = "";
	for (let index=0; index < data.length; index++) {
		let li=document.createElement('li');
		let descRef = removeEndingNumbers(data[index]);
		if (everyLoadout.includes(descRef)) {
			resul = everyLoadout.indexOf(descRef);
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
		//li.onclick = toggleK(data[index]);
		if (resul < firstPerkList) {
			li.style.backgroundColor = '#CBC3E3'; //Light Purple Hex Code
			listPerk.appendChild(li);
		} else {
			li.style.backgroundColor = '#C4A484'; //Brown Hex Code
			listAdd.appendChild(li);
		}
		if (cooldowns.includes(data[index])) {
			li.style.backgroundColor = '#FFCCCB'; //Red Hex Code
		}
	}
}

function removeEndingNumbers(stringN) {
	let master = stringN;
	let digit = master.at(-1);
	while (!isNaN(digit)) {
		master = master.slice(0,-1);
		digit = master.at(-1);
	}
	return master;
}

function toggleL(clicked_id) {
	//console.log(clicked_id + " - clicked id");
	//refinedId = clicked_id.substring(0,clicked_id.length-1);
	//console.log(refinedId + " - refined id");
	let toggled = document.getElementById(clicked_id);
	let type = perkAddLoadout(clicked_id);
	if (selectedLoadout.includes(clicked_id)) {
		let index = selectedLoadout.indexOf(clicked_id);
		switch (type) {
			case 0:
				toggled.style.backgroundColor = '#CBC3E3'; //Light Purple Hex Code
			break;
			case 1:
				toggled.style.backgroundColor = '#C4A484'; //Brown Hex Code
			break;
			default:
				toggled.style.backgroundColor = '#F2F2F2'; //Lightest gray hex code
		}
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

function updateLoadoutCost() {
	let list=document.getElementById("selectedList");
	loadoutCost = 0;
	for (index = 1; index < selectedLoadout.length; index ++) {
		let refName = selectedLoadout[index];
		let tempCost = returnLoadoutCost(refName);
		loadoutCost += tempCost;
	}
	if (list[1]) {
		list[1].innerHTML = loadoutCost + "/" + loadoutCostMax + " Loadout Cost";
	}
}

function perkAddLoadout(id) {
	let checkerNumless = removeEndingNumbers(id);
	let checker = checkerNumless.slice(-3);
	if (checker === "Add") {
		return 1;
	} else {
		return 0;
	}
}

function returnLoadoutCost(refid) {
	//console.log("Return Loadout Cost Function Firing!");
	let newid = removeEndingNumbers(refid);
	if (newid === "anythree") {
		switch (maxCostStyle) {
			case 0:
				return globalLoadoutCostMax;
			break;
			case 1:
				if (selectedLoadout[0] != "No Killer Selected") {
					let tempIndex = everyKiller.indexOf(selectedLoadout[0]);
					let tier = killerTier[tempIndex];
					switch (tier) {
						case 1:
							return tierLowLoadoutCost;
						break;
						case 2:
							return tierMidLoadoutCost;
						break;
						case 3:
							return tierTopLoadoutCost;
						break;
						default:
					}
				} else {
					return 0;
				}
			break;
			case 2:
				if (selectedLoadout[0] != "No Killer Selected") {
					let tempIndex = everyKiller.indexOf(selectedLoadout[0]);
					return killerCost[tempIndex];
				} else {
					return 0;
				}
			break;
			default:
				console.log("returnLoadoutCost SWITCH ERROR");
		}
	}
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
	let cellTemp;
	let cellLine;
	switch (nameid) {
		case "resultKills":
			resultKills ++;
			if (resultKills > max) {
				resultKills = max;
			}
			if (resultKills > resultHooks) {
				resultHooks = resultKills;
			}
			cellTemp = document.getElementById(nameid).getElementsByTagName("p");
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = resultKills;
			}
			let otherLine = document.getElementById("resultHooks").getElementsByTagName("p");
			let lineText = otherLine[1];
			if (otherLine[1]) {
				otherLine[1].innerHTML = resultHooks;
			}
		break;
		case "resultGens":
			resultGens ++;
			if (resultGens > max) {
				resultGens = max;
			}
			cellTemp = document.getElementById(nameid).getElementsByTagName("p");
			cellLine = cellTemp[1];
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = resultGens;
			}
		break;
		case "resultHooks":
			resultHooks ++;
			if (resultHooks > max) {
				resultHooks = max;
			}
			cellTemp = document.getElementById(nameid).getElementsByTagName("p");
			cellLine = cellTemp[1];
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = resultHooks;
			}
		break;
		default:
			console.log("Add Results opp error!");
	}
	calculateResultPoints();
}

function subResults(nameid, min) {
	let cellTemp;
	let cellLine;
	switch (nameid) {
		case "resultKills":
			resultKills --;
			if (resultKills < min) {
				resultKills = min;
			}
			cellTemp = document.getElementById(nameid).getElementsByTagName("p");
			cellLine = cellTemp[1];
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = resultKills;
			}
		break;
		case "resultGens":
			resultGens --;
			if (resultGens < min) {
				resultGens = min;
			}
			cellTemp = document.getElementById(nameid).getElementsByTagName("p");
			cellLine = cellTemp[1];
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = resultGens;
			}
		break;
		case "resultHooks":
			resultHooks --;
			if (resultHooks < min) {
				resultHooks = min;
			}
			if (resultHooks < resultKills) {
				resultKills = resultHooks;
			}
			cellTemp = document.getElementById(nameid).getElementsByTagName("p");
			if (cellTemp[1]) {
				cellTemp[1].innerHTML = resultHooks;
			}
			let otherLine = document.getElementById("resultKills").getElementsByTagName("p");
			let lineText = otherLine[1];
			if (otherLine[1]) {
				otherLine[1].innerHTML = resultKills;
			}
		break;
		default:
			console.log("Add Results opp error!");
	}
	calculateResultPoints();
}

function changeResultStyle(opp) {
	let but0 = document.getElementById("resulS0");
	let but1 = document.getElementById("resulS1");
	let editableText = document.getElementById("resultStyleTable").getElementsByTagName("p");
	let tableButtons = document.getElementById("resultStyleTable").getElementsByTagName("button");
	if (opp < 2) {
		resultStyle = opp;
	}
	if (resultStyle === 0) {
		but0.classList.add("onPage");
		but1.classList.remove("onPage");
		editableText[0].innerHTML = 0;
		editableText[1].innerHTML = 3;
		editableText[2].innerHTML = 5;
		editableText[3].innerHTML = 8;
		editableText[4].innerHTML = 11;
		tableButtons[2].classList.add("hidden");
		tableButtons[3].classList.add("hidden");
		tableButtons[4].classList.add("hidden");
		tableButtons[5].classList.add("hidden");
		tableButtons[6].classList.add("hidden");
		tableButtons[7].classList.add("hidden");
		tableButtons[8].classList.add("hidden");
		tableButtons[9].classList.add("hidden");
		tableButtons[10].classList.add("hidden");
		tableButtons[11].classList.add("hidden");
	} else {
		but0.classList.remove("onPage");
		but1.classList.add("onPage");
		editableText[0].innerHTML = custAsh;
		editableText[1].innerHTML = custBronze;
		editableText[2].innerHTML = custSilver;
		editableText[3].innerHTML = custGold;
		editableText[4].innerHTML = custIri;
		tableButtons[2].classList.remove("hidden");
		tableButtons[3].classList.remove("hidden");
		tableButtons[4].classList.remove("hidden");
		tableButtons[5].classList.remove("hidden");
		tableButtons[6].classList.remove("hidden");
		tableButtons[7].classList.remove("hidden");
		tableButtons[8].classList.remove("hidden");
		tableButtons[9].classList.remove("hidden");
		tableButtons[10].classList.remove("hidden");
		tableButtons[11].classList.remove("hidden");
	}
}

function adjustCustomWin(type,amount) {
	let editableText = document.getElementById("resultStyleTable").getElementsByTagName("p");
	switch (type) {
		case 0:
			custAsh += amount;
			if (custAsh < -5) {
				custAsh = -5;
			}
			if (custAsh > 17) {
				custAsh = 17;
			}
			editableText[0].innerHTML = custAsh;
		break;
		case 1:
			custBronze += amount;
			if (custBronze < -5) {
				custBronze = -5;
			}
			if (custBronze > 17) {
				custBronze = 17;
			}
			editableText[1].innerHTML = custBronze;
		break;
		case 2:
			custSilver += amount;
			if (custSilver < -5) {
				custSilver = -5;
			}
			if (custSilver > 17) {
				custSilver = 17;
			}
			editableText[2].innerHTML = custSilver;
		break;
		case 3:
			custGold += amount;
			if (custGold < -5) {
				custGold = -5;
			}
			if (custGold > 17) {
				custGold = 17;
			}
			editableText[3].innerHTML = custGold;
		break;
		case 4:
			custIri += amount;
			if (custIri < -5) {
				custIri = -5;
			}
			if (custIri > 17) {
				custIri = 17;
			}
			editableText[4].innerHTML = custIri;
		break;
		default:
			console.log("adjustCustomWin switch error!");
	}
	saveStatus();
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
	points += resultHooks;
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
	let firstPerkList = everyPerk.length;
	let resul = 0;
	for (indL = 0; indL < activeLoadouts.length; indL++) {
		let cardL = activeLoadouts[indL];
		let cardLNum = removeEndingNumbers(cardL);
		let dispCard = document.getElementById(cardL);
		if (everyLoadout.includes(cardLNum)) {
			resul = everyLoadout.indexOf(cardLNum);
			} else {
				console.log("Description find error! updateCooldowns function");
			}
		if (resul < firstPerkList) {
				dispCard.style.backgroundColor = '#CBC3E3'; //Light Purple Hex Code
			} else {
				dispCard.style.backgroundColor = '#C4A484'; //Brown Hex Code
			}
	}
	cooldowns = selectedLoadout;
	histColor = 1;
	//console.log(cooldowns + " - set cooldowns");
	let hisStrLength = selectedLoadout.length - 1;
	let hisStr = "Using " + selectedLoadout[0] + ", won a match with " + hisStrLength + " Loadout Cards.";
	updateHistoryTab(hisStr);
	for (let index = 1; index < selectedLoadout.length; index++) {
		let kid = selectedLoadout[index];
		//toggleL(kid);
		let toggled = document.getElementById(kid);
		toggled.style.backgroundColor = '#FFCCCB'; //Red Hex Code
	}
	selectedLoadout = ["No Killer Selected"];
	let listkills = document.getElementById("killerList").querySelectorAll('li');
	//let listloadsPerk = document.getElementById("loadoutListPerk");
	//let listloadsAdd = document.getElementById("loadoutListAdd");
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
	closeMatchResults();
	saveStatus();
}

function matchLost() {
	let loadAmtHist = selectedLoadout.length -1;
	histColor = 2;
	let hisStr = "Match lost using " + selectedLoadout[0] + ", along with " + loadAmtHist + " Loadout Cards.";
	updateHistoryTab(hisStr);
	graveKillers.push(selectedLoadout[0]);
	for (index = 0; index < activeKillers.length; index ++) {
		let kid = activeKillers[index];
		if (selectedLoadout.includes(kid)) {
			activeKillers.splice(index, 1);
		}
	}
	for (ind2 = 1; ind2 < selectedLoadout.length; ind2++) {
		let lid = selectedLoadout[ind2];
		let numlesslid = removeEndingNumbers(lid);
		let spot = activeLoadouts.indexOf(lid);
		graveLoadouts.push(numlesslid);
		activeLoadouts.splice(spot,1);
		/*let lid = selectedLoadout[ind2];
		let numlessLid = removeEndingNumbers(lid);
		let lDesc = convertLoadoutDescription(numlessLid);
		let spot = activeLoadouts.indexOf(lid);
		console.log(spot + " - " + lid);
		graveLoadouts.push(numlessLid);
		activeLoadouts.splice(spot,1);
		graveLoadoutsDesc.push(lDesc);*/
	}
	selectedLoadout = ["No Killer Selected"];
	cooldowns = [];
	loadoutCost = 0;
	updateChosenCards();
	resetLists();
	window.scrollTo(0,0);
	closeMatchResults();
	saveStatus();
}

function graveDescUpdate() {
	console.log(graveLoadouts + " - unaltered graveyard");
	console.log(tempGraveUnique + " - unique entires only");
	//console.log(tempGraveAmt + " - amt unique entires");
	let numTimes = tempGraveUnique.length;
	//console.log(numTimes);
	for (index = 0; index < numTimes; index ++) {
		//console.log("Firing push for grave loadouts desc, index instance: " + index);
		let num = String(tempGraveAmt[index]);
		//console.log(num);
		let disc = convertLoadoutDescription(tempGraveUnique[index]);
		//console.log(disc);
		let fullNim = "[" + num + " Card(s)] " + disc;
		//console.log(fullNim);
		//console.log(tempGraveUnique);
		//console.log(tempGraveUnique.length);
		//toBeDesc = tempGraveUnique[index];
		//descText = convertLoadoutDescription(toBeDesc);
		//descName = "[" + tempGraveAmt[index] + " Card(s)] " + descText;
		graveLoadoutsDesc.push(fullNim);
	}
}

function graveRemoveDuplicates() {
	tempGraveUnique = [];
	tempGraveAmt = [];
	graveLoadoutsDesc = [];
	let tempAmt = 0;
	let checker;
	console.log(graveLoadouts);
	console.log("Grave Loadouts above");
	if (graveLoadouts.length >= 1) {
		console.log("Firing grave loadout unique table filler");
		for (indG = 0; indG < graveLoadouts.length; indG++) {
			console.log(graveLoadouts[indG] + " - checking to remove end nums");
			checker = removeEndingNumbers(graveLoadouts[indG]);
			if (tempGraveUnique.includes(checker)) {
				//console.log("duplicate found, skipping!");
			} else {
				tempGraveUnique.push(checker);
				tempAmt = 0;
				for (i = 0; i < graveLoadouts.length; i++) {
					let numlessCheck = removeEndingNumbers(graveLoadouts[i]);
					if (checker === numlessCheck) {
						tempAmt ++;
					}
				}
				tempGraveAmt.push(tempAmt);
			}
		}
	}
	graveDescUpdate();
}

function resetLists() {
	createKillerList();
	createLoadoutList();
	//document.getElementById("actKillers").innerHTML = activeKillers;
	//document.getElementById("graveKillers").innerHTML = graveKillers;
	//document.getElementById("remKillers").innerHTML = deckKillers;
	//document.getElementById("actLoadouts").innerHTML = activeLoadouts;
	graveRemoveDuplicates();
	//document.getElementById("graveLoadouts").innerHTML = graveLoadoutsDesc;
	showGraveyardNames();
	updateChosenCards();
}

function showGraveyardNames() {
	let killGravs = document.getElementById("graveKillers");
	let loadGravs = document.getElementById("graveLoadouts");
	killGravs.innerHTML = "";
	loadGravs.innerHTML = "";
	for (index = 0; index < graveKillers.length; index ++) {
		let li=document.createElement('li');
		li.innerHTML = graveKillers[index];
		li.id = graveKillers[index];
		li.classList.add("displayOnly");
		killGravs.appendChild(li);
	}
	for (index = 0; index < graveLoadoutsDesc.length; index++) {
		let zi = document.createElement('li');
		zi.innerHTML = graveLoadoutsDesc[index];
		zi.id = tempGraveUnique[index];
		zi.classList.add("displayOnly");
		loadGravs.appendChild(zi);
	}
}

function convertLoadoutDescription(name) {
	let numless = removeEndingNumbers(name);
	let foundDesc = "";
	for (i = 0; i < everyLoadout.length; i++ ) {
		let ref = everyLoadout[i];
		foundDesc = loadoutExplain[i];
		if (ref === numless) {
			i = everyLoadout.length;
		}
	}
	return foundDesc;
}

function milestoneSet() {
	alterDrawStyle(drawStyle);
	let popupM = document.getElementById("milestoneSettings");
	popupM.style.opacity = 1;
	popupM.style.zIndex = 9;
	let descTextK = document.getElementById("drawAmtKill");
	let descTextL = document.getElementById("drawAmtLoad");
	if (loadDrawNum > deckLoadouts.length) {
		loadDrawNum = deckLoadouts.length-1;
	}
	if (killDrawNum > deckKillers.length) {
		killDrawNum = deckKillers.length-1;
	}
	descTextK.innerHTML = killDrawNum;
	descTextL.innerHTML = loadDrawNum;
	loadoutDrawStyle(loadDrawStyle);
}

function enterMatchResults() {
	let killText = document.getElementById("resultKills").getElementsByTagName("p");
	if (killText[1]) {
		killText[1].innerHTML = resultKills;
	}
	let hookText = document.getElementById("resultHooks").getElementsByTagName("p");
	if (hookText[1]) {
		hookText[1].innerHTML = resultHooks;
	}
	let genText = document.getElementById("resultGens").getElementsByTagName("p");
	if (genText[1]) {
		genText[1].innerHTML = resultGens;
	}
	let cellTemp = document.getElementById("resultHatch").getElementsByTagName("p");
	if (resultHatch) {
		if (cellTemp[1]) {
			cellTemp[1].innerHTML = "Yes";
		}
	} else {
		if (cellTemp[1]) {
			cellTemp[1].innerHTML = "No";
		}
	}
	let popupR = document.getElementById("matchResults");
	popupR.style.opacity = 1;
	popupR.style.zIndex = 9;
}

function closeMatchResults() {
	let popupR = document.getElementById("matchResults");
	resultGens = 0;
	resultHooks = 0;
	resultKills = 0;
	resultHatch = false;
	popupR.style.opacity = 0;
	popupR.style.zIndex = -1;
	window.scrollTo(0,0);
}

function alterDrawStyle(opp) {
	let drawRow = document.getElementById("milestoneDrawStyle").getElementsByTagName("button");
	let descText = document.getElementById("descMileDrawStyle");
	let weightDesc = document.getElementById("drawStyleWeighted");
	let weightEditor = document.getElementById("weightEditMilestoner");
	drawRow[0].classList.remove("onPage");
	drawRow[1].classList.remove("onPage");
	switch (opp) {
		case 0:
			drawRow[0].classList.add("onPage");
			descText.innerHTML = "Every available Killer Card has the same chances at being drawn";
			weightEditor.classList.add("hidden");
		break;
		case 1:
			drawRow[1].classList.add("onPage");
			descText.innerHTML = "Odds for drawing Killer Cards are dependent on their tier";
			weightEditor.classList.remove("hidden");
		break;
		default:
			console.log("Alter draw style opp switch error");
	}
	drawStyle = opp;
	localStorage.setItem("drawStyle",drawStyle);
}

function subKillerDraw() {
	let descText = document.getElementById("drawAmtKill");
	killDrawNum --;
	if (killDrawNum < 0) {
		killDrawNum = 0;
	}
	descText.innerHTML = killDrawNum;
}

function addKillerDraw() {
	let descText = document.getElementById("drawAmtKill");
	let maxValue = deckKillers.length;
	killDrawNum ++;
	if (killDrawNum > maxValue) {
		killDrawNum = maxValue;
	}
	descText.innerHTML = killDrawNum;
}

function subLoadoutDraw() {
	let descText = document.getElementById("drawAmtLoad");
	loadDrawNum --;
	if (loadDrawNum < 0) {
		loadDrawNum = 0;
	}
	descText.innerHTML = loadDrawNum;
}

function addLoadoutDraw() {
	let descText = document.getElementById("drawAmtLoad");
	let maxValue = 0;
	switch(loadDrawStyle) {
		case 0:
			maxValue = deckLoadouts.length + activeLoadouts.length;
		break;
		case 1:
			maxValue = deckLoadouts.length;
		break;
		case 2:
			maxValue = deckLoadouts.length;
		break;
		case 3:
			maxValue = deckLoadouts.length + activeLoadouts.length + graveLoadouts.length;
		break;
		case 4:
			maxValue = deckLoadouts.length + graveLoadouts.length;
		break;
		default:
	}
	loadDrawNum ++;
	if (loadDrawNum > maxValue) {
		loadDrawNum = maxValue;
	}
	descText.innerHTML = loadDrawNum;
}

function loadoutDrawStyle(opp) {
	let loadoutTable = document.getElementById("loadoutStyleTable").getElementsByTagName("td");
	let btns = document.getElementById("loadoutStyleTable").getElementsByTagName("button");
	loadoutTable[0].style.backgroundColor = '#FFCCCB'; //Red Hex Code
	loadoutTable[5].style.backgroundColor = '#FFCCCB'; //Red Hex Code
	loadoutTable[2].style.backgroundColor = '#FFCCCB'; //Red Hex Code
	loadoutTable[3].style.backgroundColor = '#FFCCCB'; //Red Hex Code
	loadoutTable[4].style.backgroundColor = '#FFCCCB'; //Red Hex Code
	loadDrawStyle = 0;
	btns[0].classList.remove("onPage");
	btns[1].classList.remove("onPage");
	btns[2].classList.remove("onPage");
	btns[3].classList.remove("onPage");
	btns[4].classList.remove("onPage");
	let descText = document.getElementById("loadoutStyleDesc");
	switch (opp) {
		case 0:
			loadDrawStyle = 0;
			descText.innerHTML = ("Shuffle entire hand back into deck and redraw cards");
			loadoutTable[0].style.backgroundColor = '#90EE90'; //Light Green Hex Code
			btns[0].classList.add("onPage");
		break;
		case 1:
			loadDrawStyle = 1;
			descText.innerHTML = ("Keep current cards, add drawn cards to hand");
			loadoutTable[2].style.backgroundColor = '#90EE90'; //Light Green Hex Code
			btns[1].classList.add("onPage");
		break;
		case 2:
			loadDrawStyle = 2;
			descText.innerHTML = ("Discard current hand into the graveyard, redraw cards");
			loadoutTable[3].style.backgroundColor = '#90EE90'; //Light Green Hex Code
			btns[2].classList.add("onPage");
		break;
		case 3:
			loadDrawStyle = 3;
			descText.innerHTML = ("Shuffle entire hand and graveyard back into deck. Redraw cards");
			loadoutTable[4].style.backgroundColor = '#90EE90'; //Light Green Hex Code
			btns[3].classList.add("onPage");
		break;
		case 4:
			loadDrawStyle = 4;
			descText.innerHTML = ("Shuffle graveyard cards back into deck, add drawn cards to current hand");
			loadoutTable[5].style.backgroundColor = '#90EE90'; //Light Green Hex Code
			btns[4].classList.add("onPage");
		break;
		default:
		console.log("Invalid opp - loadoutDrawStyle");
	}
	let maxValue = 0;
	switch(loadDrawStyle) {
		case 0:
			maxValue = deckLoadouts.length + activeLoadouts.length;
		break;
		case 1:
			maxValue = deckLoadouts.length;
		break;
		case 2:
			maxValue = deckLoadouts.length;
		break;
		case 3:
			maxValue = deckLoadouts.length + activeLoadouts.length + graveLoadouts.length;
		break;
		case 4:
			maxValue = deckLoadouts.length + graveLoadouts.length;
		break;
		default:
	}
	if (loadDrawNum > maxValue) {
		loadDrawNum = maxValue;
	}
	let descDrawAmt = document.getElementById("drawAmtLoad");
	descDrawAmt.innerHTML = loadDrawNum;
	localStorage.setItem("loadDrawStyle",loadDrawStyle);
}

function milestoneReached() {
	newHistKillers = [];
	histColor = 0;
	let amount = killDrawNum;
	let opp = loadDrawStyle;
	let finalHistStr = "Milestone reached! Added " + amount + " Killer Cards: ";
	let drawHist = "dummy";
	drawKillers(amount);
	finalHistStr = finalHistStr + newHistKillers + ". ";
	switch (opp) {
		case 0:
			for (index = 0; index < activeLoadouts.length; index ++) {
				let kard = activeLoadouts[index];
				kard = removeEndingNumbers(kard);
				deckLoadouts.push(kard);
			}
			activeLoadouts = [];
			chooseLoadouts(loadDrawNum);
			drawHist = "Fresh hand of " + loadDrawNum + " Loadout Cards drawn.";
		break;
		case 1:
			chooseLoadouts(loadDrawNum);
			drawHist = "Kept current hand, added " + loadDrawNum + " Loadout Cards.";
		break;
		case 2:
			for (index = activeLoadouts.length-1; index > 0; index --) {
				graveLoadouts.push(activeLoadouts[index]);
			}
			activeLoadouts = [];
			chooseLoadouts(loadDrawNum);
			drawHist = "Discarded Loadout Cards into the Graveyard and drew " + loadDrawNum + " Loadout Cards.";
		break;
		case 3:
			//console.log(deckLoadouts + " - prior to milestone");
			for (let index = 0; index < graveLoadouts.length; index++) {
				deckLoadouts.push(graveLoadouts[index]);
			}
			graveLoadouts = [];
			graveLoadoutsDesc = [];
			for (index = 0; index < activeLoadouts.length; index ++) {
				let kard = activeLoadouts[index];
				kard = removeEndingNumbers(kard);
				deckLoadouts.push(kard);
			}
			//console.log(deckLoadouts + " - after milestone");
			activeLoadouts = [];
			chooseLoadouts(loadDrawNum);
			drawHist = "Fresh hand of " + loadDrawNum + " Loadout Cards drawn; Graveyard Loadout Cards shuffled back into the deck.";
		break;
		case 4:
			for (let index = 0; index < graveLoadouts.length; index++) {
				deckLoadouts.push(graveLoadouts[index]);
			}
			graveLoadouts = [];
			graveLoadoutsDesc = [];
			chooseLoadouts(loadDrawNum);
			drawHist = "Kept current hand, added " + loadDrawNum + " Loadout Cards; Graveyard Loadout Cards shuffled back into the deck.";
		break;
		default:
			console.log("Invalid opp - milestoneReached");
	}
	createLoadoutList();
	for (index = cooldowns.length-1; index > 0; index--) {
		cooldowns.splice(index,1);
	}
	closeManual();
	selectedLoadouts = ["No Killer Selected"];
	loadoutCost = 0;
	selectedLoadout = ["No Killer Selected"];
	resetLists();
	window.scrollTo(0,0);
	finalHistStr = finalHistStr + drawHist;
	updateHistoryTab(finalHistStr);
	saveStatus();
}

function manualEdit() {
	let popupK = document.getElementById("killerSettings");
	let popupL = document.getElementById("loadoutSettings");
	let popupT = document.getElementById("tierSettings");
	mEditNameK = everyKiller[mEditIndexK];
	mEditK.innerHTMl = mEditNameK;
	mEditorToggle(maxCostStyle);
	mTierToggle(killerTier[mEditIndexK]);
	popupK.style.opacity = 1;
	popupK.style.zIndex = 9;
	popupL.style.opacity = 0;
	popupL.style.zIndex = -1;
	popupT.style.opacity = 0;
	popupT.style.zIndex = -1;
	document.getElementById("mDesc").innerHTML = manualDescReturn(mEditNameK);
	checkPushedButtonStatusK(mEditNameK);
	editMaxCost(0);
	saveStatus();
}

function manualLoadoutEdit() {
	mEditL.innerHTML = loadoutExplain[mEditIndexL];
	mEditNameL = everyLoadout[mEditIndexL];
	let popupK = document.getElementById("killerSettings");
	let popupL = document.getElementById("loadoutSettings");
	let popupT = document.getElementById("tierSettings");
	popupK.style.opacity = 0;
	popupK.style.zIndex = -1;
	popupL.style.opacity = 1;
	popupL.style.zIndex = 9;
	popupT.style.opacity = 0;
	popupT.style.zIndex = -1;
	manualAdjustmentLoadout(9);
	totalLoadoutCards();
}

function manualMiscEdit() {
	let popupK = document.getElementById("killerSettings");
	let popupL = document.getElementById("loadoutSettings");
	let popupT = document.getElementById("tierSettings");
	let popupM = document.getElementById("milestoneSettings");
	updateTierEdits();
	adjustHandicap(enableHandicap);
	popupK.style.opacity = 0;
	popupK.style.zIndex = -1;
	popupL.style.opacity = 0;
	popupL.style.zIndex = -1;
	popupT.style.opacity = 1;
	popupT.style.zIndex = 9;
	popupM.style.opacity = 0;
	popupM.style.zIndex = -1;
}

function updateTierEdits() {
	let descLow = document.getElementById("descLow");
	descLow.innerHTML = tierLowLoadoutCost;
	let descMid = document.getElementById("descMid");
	descMid.innerHTML = tierMidLoadoutCost;
	let descTop = document.getElementById("descTop");
	descTop.innerHTML = tierTopLoadoutCost;
	//
	let lowDesc = document.getElementById("weightLow").getElementsByTagName("h2");
	let midDesc = document.getElementById("weightMid").getElementsByTagName("h2");
	let topDesc = document.getElementById("weightTop").getElementsByTagName("h2");
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
	checkPushedButtonStatusK(mEditNameK);
	editMaxCost(0);
	mTierToggle(killerTier[mEditIndexK]);
}

function manualKillerLast() {
	mEditIndexK --;
	if (mEditIndexK < 0) {
		mEditIndexK = everyKiller.length-1;
	}
	mEditK.innerHTML = everyKiller[mEditIndexK];
	mEditNameK = everyKiller[mEditIndexK];
	document.getElementById("mDesc").innerHTML = manualDescReturn(mEditNameK);
	checkPushedButtonStatusK(mEditNameK);
	editMaxCost(0);
	mTierToggle(killerTier[mEditIndexK]);
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

function totalLoadoutCards() {
	let total = activeLoadouts.length + deckLoadouts.length + graveLoadouts.length;
	document.getElementById("mEditTotalL").innerHTML = total;
	document.getElementById("mEditTotalLDeck").innerHTML = deckLoadouts.length;
	document.getElementById("mEditTotalLHand").innerHTML = activeLoadouts.length;
	document.getElementById("mEditTotalLGrave").innerHTML = graveLoadouts.length;
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

function checkPushedButtonStatusK(kid) {
	let buttons = document.getElementById("killerMButtons").getElementsByTagName("button");
	buttons[0].classList.remove("onPage");
	buttons[1].classList.remove("onPage");
	buttons[2].classList.remove("onPage");
	buttons[3].classList.remove("onPage");
	buttons[4].classList.remove("onPage");
	if (cooldowns.includes(kid) && activeKillers.includes(kid)) {
		buttons[4].classList.add("onPage");
	} else if (activeKillers.includes(kid)) {
		buttons[3].classList.add("onPage");
	} else if (deckKillers.includes(kid)) {
		buttons[2].classList.add("onPage");
	} else if (graveKillers.includes(kid)) {
		buttons[1].classList.add("onPage");
	} else if (everyKiller.includes(kid)) {
		buttons[0].classList.add("onPage");
	}
}

function manualAdjustmentKill(opp) {
	let buttons = document.getElementById("killerMButtons").getElementsByTagName("button");
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
	buttons[0].classList.remove("onPage");
	buttons[1].classList.remove("onPage");
	buttons[2].classList.remove("onPage");
	buttons[3].classList.remove("onPage");
	buttons[4].classList.remove("onPage");
	switch (opp) {
		case 0:
			//console.log("Not in deck");
			descc = "Completely Unavailable";
			buttons[0].classList.add("onPage");
		break;
		case 1:
			//console.log("In graveyard");
			graveKillers.push(kid);
			descc = "Killer in the graveyard";
			buttons[1].classList.add("onPage");
			killerTiers[kid] = Math.abs(killerTiers[kid]);
			killerTiers[kid] *= -1;
		break;
		case 2:
			//console.log("Available, not in hand");
			deckKillers.push(kid);
			descc = "Can be pulled, not currently in hand";
			buttons[2].classList.add("onPage");
		break;
		case 3:
			//console.log("In hand, no cooldown");
			activeKillers.push(kid);
			descc = "In hand, able to be played";
			buttons[3].classList.add("onPage");
			killerTiers[kid] = 0;
		break;
		case 4:
			//console.log("Cooldown");
			activeKillers.push(kid);
			cooldowns[0] = kid;
			descc = "Under cooldown, but in hand";
			buttons[4].classList.add("onPage");
			killerTiers[kid] = 0;
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
	let popupM = document.getElementById("milestoneSettings");
	let popupT = document.getElementById("tierSettings");
	popupK.style.opacity = 0;
	popupK.style.zIndex = -1;
	popupL.style.opacity = 0;
	popupL.style.zIndex = -1;
	popupT.style.opacity = 0;
	popupT.style.zIndex = -1;
	popupM.style.opacity = 0;
	popupM.style.zIndex = -1;
}

function grabFirstGraveName(name) {
	let refNameGrab = name;
	for (index = 0; index < graveLoadouts.length; index ++) {
		let checkName = graveLoadouts[index];
		let checkNumless = removeEndingNumbers(checkName);
		if (checkName === name) {
			refNameGrab = checkName;
			index = graveLoadouts.length;
		}
	}
	return refNameGrab;
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
	//console.log(name + " ----- " + total);
	//console.log("Loadout ref name --- Total in play");
	switch (opp) {
		case 0:
			console.log("Case 0, no longer used");
		break;
		case 1:
			//console.log("Case 1, subtract grave");
			if (amtGrave > 0) {
				//amtGrave --;
				//total --;
				let nameGrab = grabFirstGraveName(name);
				lindex = graveLoadouts.indexOf(nameGrab);
				graveLoadouts.splice(lindex,1);
			}
		break;
		case 2:
			//console.log("Case 2, add grave");
			if (total < 9) {
				//amtGrave ++;
				//total ++;
				numName = name + mManualAddNum;
				graveLoadouts.push(numName);
			}
		break;
		case 3:
			//console.log("Case 3, subtract deck");
			if (amtDeck > 0) {
				//amtDeck --;
				//total --;
				lindex = deckLoadouts.indexOf(name);
				deckLoadouts.splice(lindex,1);
			}
		break;
		case 4:
			//console.log("Case 4, add deck");
			if (total < 9) {
				//amtDeck ++;
				//total ++;
				deckLoadouts.push(name);
			}
		break;
		case 5:
			//console.log("Case 5, subtract hand");
			if (amtHand > 0 && amtHand > amtCooldown) {
				//console.log("Case 5 TRIGGERED");
				//amtHand --;
				//total --;
				//console.log(name + " - input name into function");
				lindex = loadoutExactIndexHand(name);
				//console.log(lindex + " -output index value");
				activeLoadouts.splice(lindex,1);
			}
		break;
		case 6:
			//console.log("Case 6, add hand");
			if (total < 9) {
				//amtHand ++;
				//total ++;
				amtLive = activeLoadouts.length + mManualAddNum;
				numName = name + amtLive;
				activeLoadouts.push(numName);
			}
		break;
		case 7:
			//console.log("Case 7, subtract cooldown");
			if (amtCooldown > 0) {
				//amtCooldown --;
				//lindex = loadoutExactIndexHand(name);
				//activeLoadouts.splice(lindex,1);
				lindex2 = loadoutExactIndexCooldown(name);
				cooldowns.splice(lindex2,1);
			}
		break;
		case 8:
			//console.log("Case 8, add cooldown");
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
	//console.log(amtGrave + " - " + amtDeck + " - " + amtHand + " - " + amtCooldown);
	document.getElementById("mEditLoadGrave").innerHTML = amtGrave;
	document.getElementById("mEditLoadAvail").innerHTML = amtDeck;
	document.getElementById("mEditLoadHand").innerHTML = amtHand;
	amtCooldown2 = amtCooldown + "/" + amtHand;
	document.getElementById("mEditLoadCooldown").innerHTML = amtCooldown2;
	let left = 9 - total;
	let leftLoad = left + "/9";
	document.getElementById("mEditLoadLeft").innerHTML = leftLoad;
	mManualAddNum ++;
	totalLoadoutCards();
	resetLists();
}

function everyKillerExactIndex(name) {
	let total=0;
	for (index = 0; index < everyKiller.length; index ++) {
		let refName = everyKiller[index];
		if (name === refName) {
			return index;
		}
	}
}

function deckKillerExactIndex(name) {
	let total=0;
	for (index=0; index < deckKillers.length; index++) {
		let refName = deckKillers[index];
		if (name === refName) {
			return index;
		}
	}
}

function loadoutExactIndexHand(name) {
	let total = 0;
	for (index = 0; index < activeLoadouts.length; index ++) {
		let refName = activeLoadouts[index];
		let numlessName = removeEndingNumbers(refName);
		//let slength = activeLoadouts[index].length;
		//let refName = activeLoadouts[index].substring(0,slength-1);
		//console.log(refName);
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
	let tempCostEdit = 0;
	let finalCost = 0;
	let index = mEditIndexK;
	let tier = 1;
	if (Math.sign(num)) {
		tempCostEdit += num;
	} else {
		tempCostEdit -= num;
	}
	switch (maxCostStyle) {
		case 0:
			globalLoadoutCostMax = globalLoadoutCostMax + tempCostEdit;
			if (globalLoadoutCostMax < 0) {
					globalLoadoutCostMax = 0;
			}
			finalCost = globalLoadoutCostMax;
		break;
		case 1:
			tier = killerTier[index];
			switch (tier) {
				case 1:
					tierLowLoadoutCost = tierLowLoadoutCost + tempCostEdit;
					if (tierLowLoadoutCost < 0) {
						tierLowLoadoutCost = 0;
					}
					finalCost = tierLowLoadoutCost;
				break;
				case 2:
					tierMidLoadoutCost = tierMidLoadoutCost + tempCostEdit;
					if (tierMidLoadoutCost < 0) {
						tierMidLoadoutCost = 0;
					}
					finalCost = tierMidLoadoutCost;
				break;
				case 3:
					tierTopLoadoutCost = tierTopLoadoutCost + tempCostEdit;
					if (tierTopLoadoutCost < 0) {
						tierTopLoadoutCost = 0;
					}
					finalCost = tierTopLoadoutCost;
				break;
				default:
					console.log("Killer Tier error within editMaxCost");
			}
		break;
		case 2:
			killerCost[index] = killerCost[index] + tempCostEdit;
			if (killerCost[index] < 0) {
					killerCost[index] = 0;
			}
			finalCost = killerCost[index];
		break;
		default:
			console.log("Edit max cost style error!");
	}
	document.getElementById("maxCost").innerHTML = finalCost;
	updateChosenCards();
}

function mTierToggle(opp) {
	let pushies = document.getElementById("tierEditStyler").getElementsByTagName("button");
	let index = mEditIndexK;
	switch (opp) {
		case 0: //Default to mid tier
			killerTier[index] = 2;
			pushies[0].classList.remove("onPage");
			pushies[1].classList.add("onPage");
			pushies[2].classList.remove("onPage");
		break;
		case 1:
			killerTier[index] = 1;
			pushies[0].classList.add("onPage");
			pushies[1].classList.remove("onPage");
			pushies[2].classList.remove("onPage");
		break;
		case 2:
			killerTier[index] = 2;
			pushies[0].classList.remove("onPage");
			pushies[1].classList.add("onPage");
			pushies[2].classList.remove("onPage");
		break;
		case 3:
			killerTier[index] = 3;
			pushies[0].classList.remove("onPage");
			pushies[1].classList.remove("onPage");
			pushies[2].classList.add("onPage");
		break;
		default:
			console.log("Tier toggle Opp error - " + opp);
	}
	let tempName = everyKiller[index];
	/*if (activeKillers.includes(tempName)) {
		killerTier[index] = -1;
	}*/
	editMaxCost(0);
}

function mEditorToggle(opp) {
	let pushies = document.getElementById("maxCostStyler").getElementsByTagName("button");
	let descText = document.getElementById("maxCostDesc").getElementsByTagName("h4");
	switch (opp) {
		case 0:
			maxCostStyle = 0;
			pushies[0].classList.add("onPage");
			pushies[1].classList.remove("onPage");
			pushies[2].classList.remove("onPage");
			descText[0].innerHTML = ("Global Loadout Cost Setting");
		break;
		case 1:
			maxCostStyle = 1;
			pushies[0].classList.remove("onPage");
			pushies[1].classList.add("onPage");
			pushies[2].classList.remove("onPage");
			descText[0].innerHTML = ("Tier Loadout Cost Setting");
		break;
		case 2:
			maxCostStyle = 2;
			pushies[0].classList.remove("onPage");
			pushies[1].classList.remove("onPage");
			pushies[2].classList.add("onPage");
			descText[0].innerHTML = ("Unique Loadout Cost Setting");
		break;
		default:
			console.log("Swap Max Cost Style Opp error");
	}
	editMaxCost(0);
}

function saveStatus() {
	localStorage.clear();
	localStorage.setItem("maxCostStyle",maxCostStyle);
	localStorage.setItem("saveMaxCost",loadoutCostMax);
	localStorage.setItem("saveLoadDraw",startLoadNum);
	localStorage.setItem("loadDrawStyle",loadDrawStyle);
	localStorage.setItem("globalLoadoutCostMax",globalLoadoutCostMax);
	localStorage.setItem("tierLowLoadoutCost",tierLowLoadoutCost);
	localStorage.setItem("tierMidLoadoutCost",tierMidLoadoutCost);
	localStorage.setItem("tierTopLoadoutCost",tierTopLoadoutCost);
	localStorage.setItem("drawStyle",drawStyle);
	localStorage.setItem("lowTierWeight",lowTierWeight);
	localStorage.setItem("midTierWeight",midTierWeight);
	localStorage.setItem("topTierWeight",topTierWeight);
	localStorage.setItem("custAsh",custAsh);
	localStorage.setItem("custBronze",custBronze);
	localStorage.setItem("custSilver",custSilver);
	localStorage.setItem("custGold",custGold);
	localStorage.setItem("custIri",custIri);
	localStorage.setItem("resultStyle",resultStyle);
	localStorage.setItem("enableHandicap",enableHandicap);
	localStorage.setItem("handicapCustom",handicapCustom);
	for (index = 0; index < activeKillers.length; index ++ ) {
		let temp = activeKillers[index];
		localStorage.setItem("saveK" + index, temp);
	}
	for (index = 0; index < killerTier.length; index ++ ) {
		let temp = killerTier[index];
		localStorage.setItem("saveKTier" + index, temp);
	}
	for (index = 0; index < killerCost.length; index ++ ) {
		let temp = killerCost[index];
		localStorage.setItem("saveKCost" + index, temp);
	}
	for (index = 0; index < activeLoadouts.length; index ++ ) {
		let temp = activeLoadouts[index];
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
	let histList = document.getElementById("matchHistList").getElementsByTagName("li");
	let amtHist = document.getElementById("matchHistList").querySelectorAll('li').length;
	for (inH = 0; inH < amtHist; inH++) {
		let temp = histList[inH].innerHTML;
		localStorage.setItem("matchHistory" + inH, temp);
	}
}

function loadSave() {
	let stat = true;
	let index = 0;
	let temp = "dummy";
	maxCostStyle = Number(localStorage.getItem("maxCostStyle"));
	loadDrawStyle = Number(localStorage.getItem("loadDrawStyle"));
	globalLoadoutCostMax = Number(localStorage.getItem("globalLoadoutCostMax"));
	tierLowLoadoutCost = Number(localStorage.getItem("tierLowLoadoutCost"));
	if (!tierLowLoadoutCost) {
		tierLowLoaodutCost = 4;
	}
	tierMidLoadoutCost = Number(localStorage.getItem("tierMidLoadoutCost"));
	if (!tierMidLoadoutCost) {
		tierMidLoadoutCost = 4;
	}
	tierTopLoadoutCost = Number(localStorage.getItem("tierTopLoadoutCost"));
	if (!tierTopLoadoutCost) {
		tierTopLoadoutCost = 3;
	}
	drawStyle = Number(localStorage.getItem("drawStyle"));
	lowTierWeight = Number(localStorage.getItem("lowTierWeight"));
	midTierWeight = Number(localStorage.getItem("midTierWeight"));
	topTierWeight = Number(localStorage.getItem("topTierWeight"));
	totalTierWeight = lowTierWeight + midTierWeight + topTierWeight;
	custAsh = Number(localStorage.getItem("custAsh"));
	custBronze = Number(localStorage.getItem("custBronze"));
	custSilver = Number(localStorage.getItem("custSilver"));
	custGold = Number(localStorage.getItem("custGold"));
	custIri = Number(localStorage.getItem("custIri"));
	resultStyle = Number(localStorage.getItem("resultStyle"));
	enableHandicap = Number(localStorage.getItem("enableHandicap"));
	handicapCustom = localStorage.getItem("handicapCustom");
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
		temp = localStorage.getItem("saveKTier" + index);
		if (temp) {
			killerTier[index] = Number(temp);
			index ++;
		} else {
			stat = false;
		}
	}
		stat = true;
	index = 0;
	temp = "dummy";
	while (stat) {
		temp = localStorage.getItem("saveKCost" + index);
		if (temp) {
			killerCost[index] = Number(temp);
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
	stat = true;
	index = 0;
	temp = "dummy";
	histColor = 3;
	while (stat) {
		temp = localStorage.getItem("matchHistory" + index);
		if (temp) {
			updateHistoryTab(temp);
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
			let noNumTemp = removeEndingNumbers(temp);
			cooldowns.push(noNumTemp);
			index ++;
			for (i = 0; i < activeLoadouts.length; i ++) {
				let tempChecker = localStorage.getItem("saveC" + index);
				if (tempChecker) {
					let temp = tempChecker.slice(0,-1);
					let checkie = activeLoadouts[i];
					//console.log("localStorage item ------- check item from activeLoadouts");
					//console.log(temp + " ----------- " + checkie);
					if (temp === checkie) {
						//console.log("Check match success!");
						cooldowns.push(checkie);
						index ++;
						i = 0;
					}
				} else {
					stat = false;
				}
			}
			stat = false;
		} else {
			stat = false;
		}
	}
}

function openHistory() {
	let popupH = document.getElementById("matchHist");
	popupH.style.opacity = 1;
	popupH.style.zIndex = 9;
}

function updateHistoryTab(string) {
	let histTable = document.getElementById("matchHistList");
	let histLength = histTable.querySelectorAll('li').length;
	let li=document.createElement('li');
	li.innerHTML = string;
	li.id = "hist" + histLength;
	switch (histColor) {
		case 0:
			li.style.backgroundColor = '#FFFFE0'; //Light Yellow Code
		break;
		case 1:
			li.style.backgroundColor = '#90D5FF'; //Light blue hex code
		break;
		case 2:
			li.style.backgroundColor = '#FFC0CB'; //Pink hex code
		break;
		case 3:
			li.style.backgroundColor = '#808080'; //Gray hex Code
		break;
		default:
			li.style.backgroundColor = '#FFFFE0'; //Light Yellow Code
	}
	histTable.appendChild(li);
}

function closeHistory() {
	let popupH = document.getElementById("matchHist");
	popupH.style.opacity = 0;
	popupH.style.zIndex = -1;
}

function clearStorage() {
	let indCount = 0;
	let firstString = "saveDK";
	let clearStorage = true;
	while (clearStorage) {
		let fullString = firstString + indCount;
		let tempStorage = localStorage.getItem(fullString);
		if (tempStorage) {
			localStorage.removeItem(fullString);
			indCount ++;
		} else {
			clearStorage = false;
		}
	}
	indCount = 0;
	firstString = "saveDL";
	clearStorage = true;
	while (clearStorage) {
		let fullString = firstString + indCount;
		let tempStorage = localStorage.getItem(fullString);
		if (tempStorage) {
			localStorage.removeItem(fullString);
			indCount ++;
		} else {
			clearStorage = false;
		}
	}
	indCount = 0;
	firstString = "saveK";
	clearStorage = true;
	while (clearStorage) {
		let fullString = firstString + indCount;
		let tempStorage = localStorage.getItem(fullString);
		if (tempStorage) {
			localStorage.removeItem(fullString);
			indCount ++;
		} else {
			clearStorage = false;
		}
	}
	indCount = 0;
	firstString = "saveKCost";
	clearStorage = true;
	while (clearStorage) {
		let fullString = firstString + indCount;
		let tempStorage = localStorage.getItem(fullString);
		if (tempStorage) {
			localStorage.removeItem(fullString);
			indCount ++;
		} else {
			clearStorage = false;
		}
	}
	indCount = 0;
	firstString = "saveKTier";
	clearStorage = true;
	while (clearStorage) {
		let fullString = firstString + indCount;
		let tempStorage = localStorage.getItem(fullString);
		if (tempStorage) {
			localStorage.removeItem(fullString);
			indCount ++;
		} else {
			clearStorage = false;
		}
	}
	indCount = 0;
	firstString = "saveL";
	clearStorage = true;
	while (clearStorage) {
		let fullString = firstString + indCount;
		let tempStorage = localStorage.getItem(fullString);
		if (tempStorage) {
			localStorage.removeItem(fullString);
			indCount ++;
		} else {
			clearStorage = false;
		}
	}
	indCount = 0;
	firstString = "matchHistory";
	clearStorage = true;
	while (clearStorage) {
		let fullString = firstString + indCount;
		let tempStorage = localStorage.getItem(fullString);
		if (tempStorage) {
			localStorage.removeItem(fullString);
			indCount ++;
		} else {
			clearStorage = false;
		}
	}
}

window.onload = (event) => {
  //console.log("page is fully loaded");
  let isNewSes = 0;
  isNewSes = Number(sessionStorage.getItem("new"));
  //console.log(isNewSes);
  switch(isNewSes) {
	  case 0:
		//console.log("Load Save Function");
		loadSave();
	  break;
	  case 1:
		//console.log("Session Transfer Info Function");
		clearStorage();
		sessionTransferInfo();
		chooseKillers();
		chooseLoadouts(startLoadNum);
	  break;
	  default:
		console.log("Session state error!");
  }
	sessionStorage.removeItem("new");
	createKillerList();
	createLoadoutList();
	resetLists();
	changeResultStyle(3);
	saveStatus();
	let handiSet = document.getElementById("handicapSet");	
	handiSet.classList.add("hidden");
};