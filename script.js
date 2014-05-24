var drum = {
	cost: 0,
	snare: {
		total: 0,
		cost: 20,
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
	sticks: {
		total: 0,
		cost: 2000,
		multiplier: 1
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
	cost: 5000,
	multiplier: 1,
	nextmultiplier: 2
};
var pick = {
	pickofdestiny: 0,
	cost: 1000000,
	multiplier: 1
};
var bass = {
	fansneeded: 0,
	cost: 100000,
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

$('#buydrumsticks').click(function() {
	if(dollars>=drum.sticks.cost){
		dollars-=drum.sticks.cost;
		drum.sticks.total++;
		beatsperfan-=drum.sticks.multiplier;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#buyguitar').click(function() {
	if(dollars>=guitar.cost){
		dollars-=guitar.cost;
		guitar.total++;
		guitar.multiplier++;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#buybass').click(function() {
	if(dollars>=bass.cost){
		dollars-=bass.cost;
		bass.total++;
		beatsperfan-=drum.sticks.multiplier;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#buypick').click(function() {
	if(dollars>=pick.cost){
		dollars-=pick.cost;
		pick.pickofdestiny++;
		pick.multiplier*=0.5;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

function beginTick() {
    nIntervId = setInterval(tick, 1000);
}

function beats() {
	if(beat>=Math.floor(beatsperfan*pick.multiplier)){
		beat=0;
		fans+=drum.hihat.multiplier;
	}
}
function updateValues(){
	document.getElementById('beat').innerHTML= beutify(beat);
	document.getElementById('fans').innerHTML= beutify(fans);
	document.getElementById('dollars').innerHTML= beutify(dollars);
	document.getElementById('bpf').innerHTML= beutify(Math.floor(beatsperfan*pick.multiplier));//make sure it cannot go below 1
	document.getElementById('bpf2').innerHTML= beutify(beatsperfan);
	document.getElementById('dpf').innerHTML = beutify(drum.cymbals.multiplier);
	document.getElementById('fpbc').innerHTML = beutify(drum.hihat.multiplier);
	if(drum.snare.multiplier!=1) document.getElementById('s').innerHTML = 's';
	document.getElementById('hihatmulti').innerHTML = beutify(drum.hihat.nextmultiplier);
	document.getElementById('hihatcost').innerHTML = beutify(drum.hihat.cost);
	document.getElementById('snaremulti').innerHTML = beutify(drum.snare.nextmultiplier);
	document.getElementById('snarecost').innerHTML = beutify(drum.snare.cost);
	document.getElementById('cymbalsmulti').innerHTML = beutify(drum.cymbals.nextmultiplier);
	document.getElementById('cymbalscost').innerHTML = beutify(drum.cymbals.cost);
	document.getElementById('tomtomsmulti').innerHTML = beutify(drum.tomtoms.nextmultiplier);
	document.getElementById('tomtomscost').innerHTML = beutify(drum.tomtoms.cost);
	document.getElementById('guitarcost').innerHTML = beutify(guitar.cost);
	document.getElementById('guitarmulti').innerHTML = beutify(guitar.nextmultiplier);
	document.getElementById('basscost').innerHTML = beutify(bass.cost);
	document.getElementById('fps').innerHTML = beutify(drum.tomtoms.multiplier);
	document.getElementById('bpa').innerHTML = beutify(drum.snare.multiplier*guitar.multiplier);
	document.getElementById('drumstickscost').innerHTML = beutify(drum.sticks.cost);
	document.getElementById('guitarmulti').innerHTML = beutify(guitar.nextmultiplier);
	document.getElementById('pickcost').innerHTML = beutify(pick.cost);
	if(guitar.total>0) document.getElementById('guitartext').innerHtml = 'Upgrade';
}

function beutify(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function tick() {
    dollars+=fans*drum.cymbals.multiplier;
    beat+=drum.snare.multiplier*guitar.multiplier;
   	fans+=drum.tomtoms.multiplier;
    beats();
	updateValues();
}

});