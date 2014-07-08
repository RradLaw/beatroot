var t1=0;
var test1old=0;
var t2=0;
var t3=0;
var t4=0;
var t5=0;
var testbuy=0;
var e=0;
$(document).ready(function () {


beginTick();
function beginTick() {
    nIntervId = setInterval(tick, 1000);
}


/*$('#upgradesnare').click(function() {
	if(dollars>=drum.snare.cost){
		dollars-=drum.snare.cost;
		drum.snare.total++;
		drum.snare.cost=drum.snare.cost*1.5^drum.snare.total;
		drum.snare.multiplier=drum.snare.nextmultiplier;
		drum.snare.nextmultiplier++;
		updateValues();
	} else{
		$("#information").prepend($('<p>You can\'t afford that.</p>').fadeIn('slow'));
		information=true;
	}	
});*/
function test1(){
	while(t1){
		test1old=drum.snare.cost;
		dollars=drum.snare.cost;
		$('#upgradesnare').click();
		if (test1old >= drum.snare.cost) {
			e=1
			t1=0;
		}
	}
	if (e&&isFinite(drum.snare.cost)) console.log("Test 1 failed.\nDrum Snare cost old ="+test1old+"\nDrum Snare cost new = "+drum.snare.cost+"\nDrum snare total = "+drum.snare.total+"\n");
	else console.log("Test 1 passed.");
	e=0;
	t1=0;
}
function test2(){
	while(t2){
		test1old=drum.hihat.cost;
		dollars=drum.hihat.cost;
		$('#upgradehihat').click();
		if (test1old >= drum.hihat.cost) {
			e=1
			t2=0;
		}
	}
	if (e&&isFinite(drum.hihat.cost)) console.log("Test 2 failed.\nHihat cost old ="+test1old+"\nHihat cost new = "+drum.hihat.cost+"\nSnare total = "+drum.hihat.total+"\n");
	else console.log("Test 2 passed.");
	e=0;
	t2=0;
}
function test3(){
	while(t3){
		test1old=drum.cymbals.cost;
		dollars=drum.cymbals.cost;
		$('#upgradecymbals').click();
		if (test1old >= drum.cymbals.cost) {
			e=1;
			t3=0;
		}
	}
	if (e&&isFinite(drum.cymbals.cost)) console.log("Test 3 failed.\nCymbals cost old ="+test1old+"\nCymbals cost new = "+drum.cymbals.cost+"\nCymbals total = "+drum.cymbals.total+"\n");	
	else console.log("Test 3 passed.");
	e=0;
	t3=0;
	}
function test4(){
	while(t4){
		test1old=drum.tomtoms.cost;
		dollars=drum.tomtoms.cost;
		$('#upgradetomtoms').click();
		if (test1old >= drum.tomtoms.cost) {
			e=1;
			t4=0;
		}
	}
	if (e&&isFinite(drum.tomtoms.cost)) console.log("Test 4 failed.\nTomtoms cost old ="+test1old+"\nTomtoms cost new = "+drum.tomtoms.cost+"\nTomtoms total = "+drum.tomtoms.total+"\n");
	else console.log("Test 4 passed.");
	e=0;
	t4=0;
	}

/*$('#infotab').click(function(){
	informationon=false;
	$('.stats').addClass('hidden');
	$('.help').addClass('hidden');
	$('.info').removeClass('hidden');
});*/
function test5(){
	information=true;
	$('#infotab').click();
	if (information==true) console.log("Test 5 failed.\nInformation still true after running code to set it false.");
	else console.log("Test 5 passed.");
	t5=0;
}

function tick() {
	if (testbuy!=0){
		t1=1;t2=1;t3=1;t4=1;
		testbuy=0;
	}
	if(t1!=0) test1();
	if(t2!=0) test2();
	if(t3!=0) test3();
	if(t4!=0) test4();
	if(t5!=0) test5();
}

});
