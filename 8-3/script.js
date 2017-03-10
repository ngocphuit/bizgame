startLoad();
// Game
var stage = new createjs.Stage("game");
var nen,objNen, nen2,objNen2,objNut;
var q1, q2, q3, q4, q5, objq1, objq2, objq3, objq4, objq5 ;
var nut, objnut;
var abc, text2;

function startLoad() {
	queue = new createjs.LoadQueue(true);
	queue.on("complete", stopLoad, this);

	queue.loadManifest([
		{id:'nen', src:'images/nen.png'},
		{id:'nen2', src:'images/nen2.png'},
		{id:'q1', src:'images/q1.png'},
		{id:'q2', src:'images/q2.png'},
		{id:'q3', src:'images/q3.png'},
		{id:'q4', src:'images/q4.png'},
		{id:'q5', src:'images/q5.png'},
		{id: 'nut', src:'images/choi.png'},
		{id: 'ktrung', src:'images/mayman.png'}
	]);
}

function stopLoad(event) {
	nen = queue.getResult("nen");
	q1 = queue.getResult("q1");
	q2 = queue.getResult("q2");
	q3 = queue.getResult("q3");
	q4 = queue.getResult("q4");
	q5 = queue.getResult("q5");
	ktrung = queue.getResult("ktrung");

	objNen = new createjs.Bitmap(nen);
	objq1 = new createjs.Bitmap(q1);
	objq2 = new createjs.Bitmap(q2);
	objq3 = new createjs.Bitmap(q3);
	objq4 = new createjs.Bitmap(q4);
	objq5 = new createjs.Bitmap(q5);

	objktrung = new createjs.Bitmap(ktrung);

	nut = queue.getResult("nut");
	objNut = new createjs.Bitmap(nut)

	nen2 = queue.getResult("nen2");
	objNen2 = new createjs.Bitmap(nen2);

	$('.fullscreen-bg').hide();
	init(event);
	stage.update();
}
function ActiveX(doituong,event) {
	var i = Math.floor(Math.random() * (1 - 1 + 1) + 1);

   	if(i == 3){
   		text.visible = true;
   		abc.visible = true;
   		createjs.Tween.get(text)
          .to({alpha: 10, y: 240},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        createjs.Tween.get(abc)
          .to({alpha: 60, y: 190},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        setTimeout(function(){getGift();},3000);
   		
   	}
   	else{
		doituong.image = ktrung;
		doituong.x = 200;
		doituong.y = 150;
		doituong.scaleX = 1;
		doituong.scaleY = 1;

        createjs.Tween.get(doituong)
          .to({alpha: 20, y: 100},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        setTimeout(function(){SendMyResults(-1);},5000);
        
    };

	stage.update(event);
}
var cham = true;
var gameStarted = false;
function shake(event) {
	createjs.Tween.get(event.target, {loop: false})
          .to({rotation : 10}, 100).to({rotation: -10}, 100).to({rotation: 0}, 100);
        
}
function init(event) {
	objNen.width = 900;
	objNen.height = 500;

	objq1.name = 'objq1';
	objq1.visible = false;
	objq2.visible = false;
	objq3.visible = false;
	objq4.visible = false;
	objq5.visible = false;
	objktrung.visible = false;

	objNut.x = 530;
	objNut.y = 400;

	objq1.x = 50;
	objq1.y = 250;
	objq1.scaleX = 0.7;
	objq1.scaleY = 0.7;

	objq2.x = 210;
	objq2.y = 250;
	objq2.scaleX = 0.7;
	objq2.scaleY = 0.7;

	objq3.x = 370;
	objq3.y = 250;
	objq3.scaleX = 0.7;
	objq3.scaleY = 0.7;

	objq4.x = 530;
	objq4.y = 250;
	objq4.scaleX = 0.7;
	objq4.scaleY = 0.7;

	objq5.x = 690;
	objq5.y = 250;
	objq5.scaleX = 0.7;
	objq5.scaleY = 0.7;

	objNen2.visible = false;

	text = new createjs.Text("Chúc mừng bạn đã trúng thưởng", "60px 'Times New Roman'", "#f25e75");
	text.x = 70;
	text.y = 50;
	text.textBaseline = "alphabetic";

	text2 = new createjs.Text("Mời bạn chọn phần quà mình thích nhất", "30px 'Times New Roman'", "white");
	text2.x = 180;
	text2.y = 50;
	text.textBaseline = "alphabetic";

	abc = new createjs.Shape();
	abc.graphics.beginFill('white').drawRoundRect(50, 0, 820, 70, 10);

	text.visible = false;
	text2.visible = false;
	abc.visible = false;		
	
	stage.addChild(objNen);
	stage.addChild(objNen2);
	stage.addChild(objq1);
	stage.addChild(objq2);
	stage.addChild(objq3);
	stage.addChild(objq4);
	stage.addChild(objq5);
	stage.addChild(text2);
	// stage.addChild(objktrung);
	stage.addChild(abc);
	stage.addChild(text);
	stage.enableMouseOver(20);
	objq1.on('mouseover',function(evt){
		shake(evt);
	});
	objq2.on('mouseover',function(evt){
		shake(evt);
	});
	objq3.on('mouseover',function(evt){
		shake(evt);
	});
	objq4.on('mouseover',function(evt){
		shake(evt);
	});
	objq5.on('mouseover',function(evt){
		shake(evt);
	});
	objq1.addEventListener('click', function(evt){
		console.log(evt);
		if (cham == false) {return;}
		cham = false;
		objq1.image = false;
		objq2.image = false;
		objq3.image = false;
		objq4.image = false;
		objq5.image = false;
		setTimeout(function(){ActiveX(evt.target, evt);},2000);
	});
	objq2.addEventListener('click', function(evt){
		console.log(evt);
		if (cham == false) {return;}
		cham = false;
		text2.visible = false;
		objq1.image = false;
		objq2.image = false;
		objq3.image = false;
		objq4.image = false;
		objq5.image = false;
		setTimeout(function(){ActiveX(evt.target, evt);},2000);
	});
	objq3.addEventListener('click', function(evt){
		console.log(evt);
		if (cham == false) {return;}
		cham = false;
		text2.visible = false;
		objq1.image = false;
		objq2.image = false;
		objq3.image = false;
		objq4.image = false;
		objq5.image = false;
		setTimeout(function(){ActiveX(evt.target, evt);},2000);
	});
	objq4.addEventListener('click', function(evt){
		console.log(evt);
		if (cham == false) {return;}
		cham = false;
		text2.visible = false;
		objq1.image = false;
		objq2.image = false;
		objq3.image = false;
		objq4.image = false;
		objq5.image = false;
		setTimeout(function(){ActiveX(evt.target, evt);},2000);
	});
	objq5.addEventListener('click', function(evt){
		console.log(evt);
		if (cham == false) {return;}
		cham = false;
		text2.visible = false;
		objq1.image = false;
		objq2.image = false;
		objq3.image = false;
		objq4.image = false;
		objq5.image = false;
		setTimeout(function(){ActiveX(evt.target, evt);},2000);
	});
	
	stage.addChild(objNut);
	objNut.addEventListener("click", BatDauGame);


	
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
	objq1.visible = true;
	objq2.visible = true;
	objq3.visible = true;
	objq4.visible = true;
	objq5.visible = true;
	text2.visible = true;
};
var MyRewards = MyGameData.rewards,
TotalRewards = Object.keys(MyRewards).length;
let getGift = () => {
	SendMyResults(MyGameData.rewards[Math.floor(Math.random() * TotalRewards)]._id);
};