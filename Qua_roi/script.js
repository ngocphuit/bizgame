startLoad();
// Game
var stage = new createjs.Stage("game");
var nen,objNen,hop_qua,nut,objNut;
var nen2,objNen2;
var objHopQua = [];
function startLoad() {
	queue = new createjs.LoadQueue(true);
	queue.on("complete", stopLoad, this);

	queue.loadManifest([
		{id:'nen', src:'images/the_le.png'},
		{id:'nen2', src:'images/Qua_roi.png'},
		{id:'hop_qua', src:'images/hop_qua.png'},
		{id:'nut', src:'images/nut.png'},
	]);
}
var createTimer;
var current=0;
function TaoHopQua() {
	if(current >= objHopQua.length) {clearInterval(createTimer);return;}
	objHopQua[current].visible = true;
	createjs.Tween.get(objHopQua[current], {loop: true}).to({y: 600}, 8000, createjs.Ease.getPowInOut(4)).call(() => {objHopQua.x = Math.floor(Math.random() * (900 - 100 + 1) + 100)});
	current++;
}

function stopLoad(event) {
	nen = queue.getResult("nen");
	hop_qua = queue.getResult("hop_qua");
	nut = queue.getResult("nut");
	objNen = new createjs.Bitmap(nen);
	for(var i=0;i<20;i++) {
		objHopQua[i] = new createjs.Bitmap(hop_qua);
		objHopQua[i].visible = false;
		
	}
	
	//objHopQua = new createjs.Bitmap(hop_qua);
	objNut = new createjs.Bitmap(nut);
	
	nen2 = queue.getResult("nen2");
	objNen2 = new createjs.Bitmap(nen2);

	$('.fullscreen-bg').hide();
	init(event);
	stage.update();
}
var gameStarted = false;
function init(event) {
	objNen.width = 900;
	objNen.height = 530;

	//objHopQua.x = 400;
	//objHopQua.y = 0;
	
	objNut.x = 310;
	objNut.y = 400;
	objNen2.visible = false;
	stage.addChild(objNen);
	stage.addChild(objNen2);
	for(var i=0;i<objHopQua.length;i++) {
		objHopQua[i].y = -100;
		objHopQua[i].x = Math.floor(Math.random() * (800 - 100 + 1) + 100);
		stage.addChild(objHopQua[i]);
		objHopQua[i].addEventListener("click", getGift);
	}
	stage.addChild(objNut);
	// setTimeout(() => {
	// 	SendMyResults(idRewards);
	// }, 5000);
	
	// Click
	objNut.addEventListener("click", BatDauGame);
	
	// Standard auto refresh
	createjs.Ticker.setFPS(60);
	createjs.Ticker.on('tick', function () {
	  stage.update();
	});
}

var BatDauGame = () => {
	gameStarted = true;
	objNen.visible = false;
	objNen2.visible = true;
	objNut.visible = false;
	var createTimer = setInterval(TaoHopQua, 500);
};
//var MyRewards = MyGameData.rewards,
//TotalRewards = Object.keys(MyRewards).length;
let getGift = () => {
	//SendMyResults(MyGameData.rewards[Math.floor(Math.random() * TotalRewards)]._id);
};