startLoad();
// Game
var stage = new createjs.Stage("game");
var nen,objNen, nen2,objNen2;
var q1, q2, q3, q4, objq1, objq2, objq3, objq4 ;
var nut, objnut, nut2, objnut2;
var abc, text2;
var cau, objcau1, objcau2;
var tieu, objtieu;

function startLoad() {
	queue = new createjs.LoadQueue(true);
	queue.on("complete", stopLoad, this);

	queue.loadManifest([
		{id:'nen', src:'images/TL.png'},
		{id:'nen2', src:'images/nen.png'},
		{id:'q1', src:'images/phomai.png'},
		{id:'q2', src:'images/suachua.png'},
		{id:'q3', src:'images/sualon.png'},
		{id:'q4', src:'images/thungsua.png'},
		{id: 'nut', src:'images/choi.png'},
		{id: 'cau', src:'images/quacau.png'},
		{id:'nut2', src:'images/phong.png'},
		{id:'tieu', src:'images/phitieu.png'},
	]);
}

function stopLoad(event) {
	nen = queue.getResult("nen");
	q1 = queue.getResult("q1");
	q2 = queue.getResult("q2");
	q3 = queue.getResult("q3");
	q4 = queue.getResult("q4");
	cau = queue.getResult("cau");
	tieu = queue.getResult("tieu")

	objNen = new createjs.Bitmap(nen);
	objq1 = new createjs.Bitmap(q1);
	objq2 = new createjs.Bitmap(q2);
	objq3 = new createjs.Bitmap(q3);
	objq4 = new createjs.Bitmap(q4);
	objcau1 = new createjs.Bitmap(cau);
	objcau2 = new createjs.Bitmap(cau);
	objtieu = new createjs.Bitmap(tieu);

	nut = queue.getResult("nut");
	objNut = new createjs.Bitmap(nut);

nut2 = queue.getResult("nut2");
	objnut2 = new createjs.Bitmap(nut2);

	nen2 = queue.getResult("nen2");
	objNen2 = new createjs.Bitmap(nen2);

	$('.fullscreen-bg').hide();
	init(event);
	stage.update();
}
function ActiveX(doituong,event) {
   	alert(1);
   	objtieu.visible=true;
   	objtieu.x = objcau1.x;
   	objtieu.y = objcau2.y;
   	objtieu.scaleX = 0.5;
   	objtieu.scaleY = 0.5;
   	
   	if( ( ( ( objcau1.x-257)*( objcau1.x-257) ) + ( ( objcau2.y-250)*( objcau2.y-250) ) ) <=57*57 ) {
   		
		objq4.visible = true;

		text.visible = true;
		createjs.Tween.get(text)
          .to({alpha: 10, y: 280},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        abc.visible = true;
		createjs.Tween.get(abc)
          .to({alpha: 10, y: 240},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);

   		createjs.Tween.removeTweens(doituong);
			alert('qua số 4');
        setTimeout(function(){getGift();},3000);
        
   		
   	}
   	else if((( ( ( objcau1.x-257)*( objcau1.x-257) ) + ( ( objcau2.y-250)*( objcau2.y-250) ) ) <=103*103 ) && (( ( ( objcau1.x-257)*( objcau1.x-257) ) + ( ( objcau2.y-250)*( objcau2.y-250) ) ) >57*57 )){
   		objq3.visible = true;

   		text.visible = true;
		createjs.Tween.get(text)
          .to({alpha: 10, y: 280},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        abc.visible = true;
		createjs.Tween.get(abc)
          .to({alpha: 10, y: 240},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);

   		createjs.Tween.removeTweens(doituong);
			alert('qua số 3');
        setTimeout(function(){getGift();},3000);
        
   	}
   	else if((( ( ( objcau1.x-257)*( objcau1.x-257) ) + ( ( objcau2.y-250)*( objcau2.y-250) ) ) <=140*140 ) && (( ( (  objcau1.x-257)*(  objcau1.x-257) ) + ( ( objcau2.y-250)*(  objcau2.y-250) ) ) >103*103 )){
   		objq2.visible = true;



   		text.visible = true;
		createjs.Tween.get(text)
          .to({alpha: 10, y: 280},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        abc.visible = true;
		createjs.Tween.get(abc)
          .to({alpha: 10, y: 240},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);

   		createjs.Tween.removeTweens(doituong);
			alert('qua số 2');
        setTimeout(function(){getGift();},3000);
   	}
   	else if((( ( ( objcau1.x-257)*( objcau1.x-257) ) + ( ( objcau2.y-250)*( objcau2.y-250) ) ) <=190*190 ) && (( ( (  objcau1.x-257)*( objcau1.x-257) ) + ( (  objcau2.y-250)*( objcau2.y-250) ) ) >140*140 )){
   		objq1.visible = true;

   		text.visible = true;
		createjs.Tween.get(text)
          .to({alpha: 10, y: 280},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        abc.visible = true;
		createjs.Tween.get(abc)
          .to({alpha: 10, y: 240},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);



   		createjs.Tween.removeTweens(doituong);
			alert('qua số 1');
        setTimeout(function(){getGift();},3000);
   	}
   	else{

   		text2.visible = true;
		createjs.Tween.get(text2)
          .to({alpha: 10, y: 255},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        abc.visible = true;
		createjs.Tween.get(abc)
          .to({alpha: 10, y: 240},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);


   		createjs.Tween.removeTweens(doituong);
		alert('không trúng');
        
    }

    

	stage.update(event);
}

var intViTri = 0;
var fireChangeTimer;

var cham = true;
var gameStarted = false;
function shake(event) {
	 createjs.Tween.get(objcau1, {loop: true})
          .to({alpha: 20, x: 500}, 1000)
          .to({alpha: 20, x: 5}, 1000);
    createjs.Tween.get(objcau2, {loop: true})
          .to({alpha: 20, y: 14}, 1000)
          .to({alpha: 20, y: 150}, 200);
    setInterval(()=>{
    	document.title = Math.floor(objcau1.x) + ' ' + Math.floor(objcau2.y);
    }, 1);
        
}
function init(event) {
	objNen.width = 900;
	objNen.height = 500;

	objcau1.x = 5;
	objcau1.y = 14;
	objcau1.scaleX = 0.3;
	objcau1.scaleY = 0.3;

	objcau2.x = 500;
	objcau2.y = 450;
	objcau2.scaleX = 0.3;
	objcau2.scaleY = 0.3;

	objq1.visible = false;
	objq2.visible = false;
	objq3.visible = false;
	objq4.visible = false;
	objcau1.visible = false;
	objcau2.visible = false;
	objtieu.visible = false;

	objNut.x = 220;
	objNut.y = 350;

	objnut2.x = 600;
	objnut2.y = 250;

	objnut2.visible = false;

	objq1.x = 570;
	objq1.y = 10;
	objq1.scaleX = 0.7;
	objq1.scaleY = 0.7;

	objq2.x = 575;
	objq2.y = 100;
	objq2.scaleX = 0.7;
	objq2.scaleY = 0.7;

	objq3.x = 750;
	objq3.y = 10;
	objq3.scaleX = 0.7;
	objq3.scaleY = 0.7;

	objq4.x = 770;
	objq4.y = 135;
	objq4.scaleX = 0.5;
	objq4.scaleY = 0.5;

	objNen2.visible = false; 

	text = new createjs.Text("Chúc mùng bạn đã trúng thưởng, Phần quà của bạn là: ", "30px 'Times New Roman'", "black");
	text.x = 70;
	text.y = 80;
	text.textBaseline = "alphabetic";

	text2 = new createjs.Text("Chúc bạn may mắn lần sau !!!", "40px 'Times New Roman'", "black");
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
	stage.addChild(text2);
	
	stage.addChild(objcau1);
	stage.addChild(objcau2);
	stage.addChild(objnut2);
	stage.addChild(objtieu);
	stage.addChild(abc);
	stage.addChild(text);
	stage.addChild(text2);
	stage.enableMouseOver(20);

	objnut2.on('mouseover',function(evt){
		
	});
	objnut2.addEventListener('click', function(evt){
		 console.log(evt);
		 if (cham == false) {return;}
		 cham = false;
		 createjs.Tween.removeTweens(objcau1);
		 createjs.Tween.removeTweens(objcau2);

		setTimeout(function(){ActiveX(evt.target, evt);},1);
	});
	
	stage.addChild(objNut);
	objNut.addEventListener("click", BatDauGame);


	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.on('tick', function () {
	  stage.update();
	});
}

var BatDauGame = (evt) => {
	gameStarted = true;
	objNen.visible = false;
	objNen2.visible = true;
	objNut.visible = false;
	objq1.visible = false;
	objq2.visible = false;
	objq3.visible = false;
	objq4.visible = false;
	text2.visible = false;
	objcau1.visible = true;
	objcau2.visible = true;
	objnut2.visible = true;
	objtieu.visible = false;
	shake(evt);
};
var MyRewards = MyGameData.rewards,
TotalRewards = Object.keys(MyRewards).length;
let getGift = () => {
	SendMyResults(MyGameData.rewards[Math.floor(Math.random() * TotalRewards)]._id);
};