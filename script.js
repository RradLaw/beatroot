var drum = {
	cost: 0,
	snare: {
		total: 0,
		cost: 5,
		multiplier: 0,
		nextmultiplier: 1
	},
	hihat: {
		total: 0,
		cost: 10,
		multiplier: 1,
		nextmultiplier: 2
	},
	cymbals: {
		cost: 100,
		multiplier: 1,
		nextmultiplier: 2
	},
	tomtoms: {
		total: 0,
		cost: 200,
		multiplier: 0,
		nextmultiplier: 1
	},
	upgrade: {
		total: 0,
		cost: 0,
		multiplier: 0,
		nextmultiplier: 0
	}
};
var guitar = {
	fansneeded: 0,
	total: 0,
	cost: 0,
	multiplier: 0,
	nextmultiplier: 0,
	pickofdestiny: 0
}
var bass = {
	fansneeded: 0,
	cost: 0,
	strings: {
		total: 0,
		cost: 0,
		multiplier: 0,
		nextmultiplier: 0
	}
}
var manager = {
	cost: 0,
	fansneeded: 0
}
var fans = 0;
var clicks = 0;
var dollars = 0;
var beat=0;
var beatsperfan=16;

var venue = "basement";
//basement, lounge, pub, gig, concert

$(document).ready(function () {
beginTick();
updateValues();

$('#drum').click(function () {
	clicks++;
	beat++;
	beats();
	updateValues();
});

$('#upgradehihat').click(function() {
	if(dollars>=drum.hihat.cost){
		dollars-=drum.hihat.cost;
		drum.hihat.total++;
		drum.hihat.cost*=10;
		drum.hihat.multiplier=drum.hihat.nextmultiplier;
		drum.hihat.nextmultiplier++;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#upgradesnare').click(function() {
	if(dollars>=drum.snare.cost){
		dollars-=drum.snare.cost;
		drum.snare.total++;
		drum.snare.cost*=2;
		drum.snare.multiplier=drum.snare.nextmultiplier;
		drum.snare.nextmultiplier++;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#upgradecymbals').click(function() {
	if(dollars>=drum.cymbals.cost){
		dollars-=drum.cymbals.cost;
		drum.cymbals.total++;
		drum.cymbals.cost*=2;
		drum.cymbals.multiplier=drum.cymbals.nextmultiplier;
		drum.cymbals.nextmultiplier++;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#upgradetomtoms').click(function() {
	if(dollars>=drum.tomtoms.cost){
		dollars-=drum.tomtoms.cost;
		drum.tomtoms.total++;
		drum.tomtoms.cost*=2;
		drum.tomtoms.multiplier=drum.tomtoms.nextmultiplier;
		drum.tomtoms.nextmultiplier++;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

function beginTick() {
    nIntervId = setInterval(tick, 1000);
}

function beats() {
	if(beat>=beatsperfan){
		beat=0;
		fans+=drum.hihat.multiplier;
	}
}
function updateValues(){
	document.getElementById('beat').innerHTML= beat;
	document.getElementById('fans').innerHTML= fans;
	document.getElementById('dollars').innerHTML= dollars;
	document.getElementById('bpf').innerHTML= beatsperfan;
	document.getElementById('bpf2').innerHTML= beatsperfan;
	document.getElementById('dpf').innerHTML = drum.cymbals.multiplier;
	document.getElementById('fpbc').innerHTML = drum.hihat.multiplier;
	if(drum.snare.multiplier!=1) document.getElementById('s').innerHTML = 's';
	document.getElementById('hihatmulti').innerHTML = drum.hihat.nextmultiplier;
	document.getElementById('hihatcost').innerHTML = drum.hihat.cost;
	document.getElementById('snaremulti').innerHTML = drum.snare.nextmultiplier;
	document.getElementById('snarecost').innerHTML = drum.snare.cost;
	document.getElementById('cymbalsmulti').innerHTML = drum.cymbals.nextmultiplier;
	document.getElementById('cymbalscost').innerHTML = drum.cymbals.cost;
	document.getElementById('tomtomsmulti').innerHTML = drum.tomtoms.nextmultiplier;
	document.getElementById('tomtomscost').innerHTML = drum.tomtoms.cost;
	document.getElementById('guitarcost').innerHTML = guitar.cost;
	document.getElementById('guitarmulti').innerHTML = guitar.nextmultiplier;
	if(guitar.total) document.getElementById('guitartext').innerHtml = 'Upgrade';
}

function tick() {
    dollars+=fans*drum.cymbals.multiplier;
    beat+=drum.snare.multiplier;
   	fans+=drum.tomtoms.multiplier;
    beats();
	updateValues();
}
});