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
		cost: 100,
		multiplier: 1,
		nextmultiplier: 2,
		fansneeded: 0,
	},
	cymbals: {
		cost: 1000,
		multiplier: 1,
		nextmultiplier: 2,
		fansneeded: 0,
	},
	tomtoms: {
		total: 0,
		cost: 5000,
		multiplier: 0,
		nextmultiplier: 1,
		fansneeded: 0,
	},
	sticks: {
		total: 0,
		cost: 150,
		multiplier: 1,
		nextmultiplier: 2,
		fansneeded: 1,
	},
};
var guitar = {
	fansneeded: 50,
	total: 0,
	cost: 5000,
	multiplier: 1,
	nextmultiplier: 2
};
var pick = {
	pickofdestiny: 0,
	cost: 1000000,
	multiplier: 1,
	fansneeded: 2000
};
var bass = {
	fansneeded: 500,
	cost: 100000,
	total: 0,
	multiplier: 1,
	nextmultiplier: 1,
};

var fans = 0;
var clicks = 0;
var dollars = 0;
var beat=0;
var beatsperfan=16;
var hidden=0;

var venue = "basement";
//basement, lounge, pub, gig, concert

$(document).ready(function () {
beginTick();
updateValues();

$('#drum').click(function () {
	clicks++;
	beat+=drum.sticks.multiplier;
	beats();
	updateValues();
});

$('#upgradehihat').click(function() {
	if(dollars>=drum.hihat.cost){
		dollars-=drum.hihat.cost;
		drum.hihat.total++;
		drum.hihat.cost*=3;
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
		drum.snare.cost=Math.floor(1.5*drum.snare.cost);
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
		drum.sticks.cost*=2*drum.sticks.multiplier;
		drum.sticks.multiplier=drum.sticks.nextmultiplier;
		drum.sticks.nextmultiplier*=2;
		drum.sticks.fansneeded*=100;
		$('.drumsticks').addClass('hidden');
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
		updateValues();
		beatsperfan-=bass.multiplier;
		$('.buybass').addClass('hidden');
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#buypick').click(function() {
	if(dollars>=pick.cost){
		dollars-=pick.cost;
		pick.pickofdestiny++;
		pick.multiplier*=0.5;
		$('.buypick').addClass('hidden');
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
	}	
});

$('#statstab').click(function(){
		$('.info').addClass('hidden');
		$('.gear').addClass('hidden');
		$('.help').addClass('hidden');
		$('.stats').removeClass('hidden');
});

$('#infotab').click(function(){
		$('.stats').addClass('hidden');
		$('.gear').addClass('hidden');
		$('.help').addClass('hidden');
		$('.info').removeClass('hidden');
});

$('#geartab').click(function(){
		$('.stats').addClass('hidden');
		$('.info').addClass('hidden');
		$('.help').addClass('hidden');
		$('.gear').removeClass('hidden');
});

$('#helptab').click(function(){
		$('.info').addClass('hidden');
		$('.gear').addClass('hidden');
		$('.stats').addClass('hidden');
		$('.help').removeClass('hidden');
});

function beginTick() {
    nIntervId = setInterval(tick, 1000);
}

function geartext() {
	var str1='',str2='',str3='',str4='',str5='',str6='',str7='',str8='';
	if(drum.snare.total) str1='<h3>Snare:</h3>'+drum.snare.multiplier+' Autobeats per second';
	if(drum.hihat.total) str2='<h3>Hihat</h3>'+drum.hihat.multiplier+' fans per beat cycle';
	if(drum.cymbals.total) str3='<h3>Cymbals</h3>$'+drum.cymbals.multiplier+' per fan';
	if(drum.tomtoms.total) str4='<h3>Tomtoms</h3>'+drum.tomtoms.multiplier+' new fans per second';
	if(drum.sticks.total) str5='<h3>Drumsticks</h3>'+drum.sticks.multiplier+' beats per click';

	if(guitar.total) str6='<hr><h3>Guitar</h3>Each autobeat hits '+guitar.multiplier+'times per second';
	if(pick.pickofdestiny) str7='<h3>Pick of Destiny</h3>Halfed beats per cycle';
	if(bass.total) str8='<h3>Bass</h3>Beats per cycle reduced by '+bass.multiplier;

	l('geartexts').innerHTML=str1+str2+str3+str4+str5+str6+str7+str8;
}

function beats() {
	if(beat>=Math.floor(beatsperfan*pick.multiplier)){
		fans+=drum.hihat.multiplier;
		beat-=Math.floor(beatsperfan*pick.multiplier);
		beats();
	}
}

function updateValues(){
	l('beat').innerHTML= beutify(beat);
	l('fans').innerHTML= beutify(fans);
	l('dollars').innerHTML= beutify(dollars);
	l('bpf').innerHTML= beutify(Math.floor(beatsperfan*pick.multiplier));//make sure it cannot go below 1
	l('bpf2').innerHTML= beutify(beatsperfan);
	l('dpf').innerHTML = beutify(drum.cymbals.multiplier);
	l('fpbc').innerHTML = beutify(drum.hihat.multiplier);
	if(drum.snare.multiplier!=1) document.getElementById('s').innerHTML = 's';
	l('hihatmulti').innerHTML = beutify(drum.hihat.nextmultiplier);
	l('hihatcost').innerHTML = beutify(drum.hihat.cost);
	l('snaremulti').innerHTML = beutify(drum.snare.nextmultiplier);
	l('snarecost').innerHTML = beutify(drum.snare.cost);
	l('cymbalsmulti').innerHTML = beutify(drum.cymbals.nextmultiplier);
	l('cymbalscost').innerHTML = beutify(drum.cymbals.cost);
	l('tomtomsmulti').innerHTML = beutify(drum.tomtoms.nextmultiplier);
	l('tomtomscost').innerHTML = beutify(drum.tomtoms.cost);
	l('guitarcost').innerHTML = beutify(guitar.cost);
	l('guitarmulti').innerHTML = beutify(guitar.nextmultiplier);
	l('basscost').innerHTML = beutify(bass.cost);
	l('fps').innerHTML = beutify(drum.tomtoms.multiplier);
	l('bpa').innerHTML = beutify(drum.snare.multiplier*guitar.multiplier);
	l('drumstickscost').innerHTML = beutify(drum.sticks.cost);
	l('guitarmulti').innerHTML = beutify(guitar.nextmultiplier);
	l('pickcost').innerHTML = beutify(pick.cost);
	if(guitar.total>0) document.getElementById('guitartext').innerHtml = 'Upgrade';
	geartext();
}

function show(){
	if(fans>=guitar.fansneeded) $('.buyguitar').removeClass('hidden');
	if(fans>=bass.fansneeded) $('.buybass').removeClass('hidden');
	if(fans>=pick.fansneeded) $('.buypick').removeClass('hidden');
	if(fans>=drum.sticks.fansneeded) $('.drumsticks').removeClass('hidden');
}

function hidden(){
	$('.buyguitar').removeClass('hidden');
	$('.buybass').removeClass('hidden');
	$('.buypick').removeClass('hidden');
	$('.drumsticks').removeClass('hidden');
}

function l(a) {return document.getElementById(a);}

function beutify(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function tick() {
    dollars+=Math.round(Math.random()*fans*drum.cymbals.multiplier);
    beat+=drum.snare.multiplier*guitar.multiplier;
   	fans+=drum.tomtoms.multiplier;
    beats();
	updateValues();
	show();
	if(!hidden) hidden();
}

//var hidden=1;
//var dollars=1000000000000;


});