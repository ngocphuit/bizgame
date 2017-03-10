startLoad();
// Game
var stage = new createjs.Stage("game");
var nen,objNen,off,objNut,on,objNut1,nut2,objNut2;
var input;
var check, objcheck;
function startLoad() {
	queue = new createjs.LoadQueue(true);
	queue.on("complete", stopLoad, this);

	queue.loadManifest([
		{id:'nen', src:'images/nen.png'},
		{id:'off', src:'images/radio-button-off-icon.png'},
		{id:'on', src:'images/radio-button-on-icon.png'},
		{id: 'check', src:'images/check.png'},
	]);
}

 var text = new createjs.Text("nhập số may mắn từ: 1 đến 999 ", "20px Arial", "#ff7700");
 text.x = 100;
 text.textBaseline = "alphabetic";

function stopLoad(event) {
	nen = queue.getResult("nen");
	off = queue.getResult("off");
	on = queue.getResult("on");
	check = queue.getResult("check");

	objNen = new createjs.Bitmap(nen);
	objNut = new createjs.Bitmap(off);
	objNut1 = new createjs.Bitmap(off);
	objNut2 = new createjs.Bitmap(off);
	objcheck = new createjs.Bitmap(check)

	$('.fullscreen-bg').hide();
	init(event);
	//stage.update();
}
var gameStarted = false;
function init(event) {
	objNen.width = 900;
	objNen.height = 200;
	
	objNut.x = 580;
	objNut.y = 250;

	objNut1.x = 700;
	objNut1.y = 250;

	objNut2.x = 825;
	objNut2.y = 250;

	text.x = 50;
	text.y = 420;

	input = new TextInput();
	input.x = 50;
	input.y = 450;
	input.width = 300;
	input.placeHolder = "...";

	objcheck.x = 480;
	objcheck.y = 440;

	objcheck.scaleX = 0.5;
	objcheck.scaleY = 0.5;

	stage.addChild(objNen);
	stage.addChild(objNut);
	stage.addChild(objNut1);
	stage.addChild(objNut2);
	stage.addChild(text);
	stage.addChild(input);
	stage.addChild(objcheck);
 	input.update();

 	objcheck.addEventListener('click', function(evt){
 		alert( input._preCursorTextN);
 	});

	objNut.addEventListener('click', function(evt){
		console.log(evt);
		objNut.image = off;
		objNut1.image = off;
		objNut2.image = off;
		evt.target.image = on;
	});

	objNut1.addEventListener('click', function(evt){
		console.log(evt);
		objNut.image = off;
		objNut1.image = off;
		objNut2.image = off;
		evt.target.image = on;
	});

	objNut2.addEventListener('click', function(evt){
		console.log(evt);
		objNut.image = off;
		objNut1.image = off;
		objNut2.image = off;
		evt.target.image = on;
	});

	createjs.Ticker.setFPS(60);
	createjs.Ticker.on('tick', function () {
	  stage.update();
	});
}

let getGift = () => {
	//SendMyResults(MyGameData.rewards[Math.floor(Math.random() * TotalRewards)]._id);
};