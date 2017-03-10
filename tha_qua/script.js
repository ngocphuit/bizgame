startLoad();
// Game
var stage = new createjs.Stage("game");
var nen,objNen, nen2, objNen2, luanen, objluanen, lua, objlua;
var o1, o2, o3, o4, objo1, objo2, objo3, objo4 ;
var day, cau, objday, objcau;
var nut, objnut;
var text, text2, abc;

function startLoad() {
	queue = new createjs.LoadQueue(true);
	queue.on("complete", stopLoad, this);

	queue.loadManifest([
		{id:'nen', src:'images/luat.png'},
		{id:'nen2', src:'images/nen.png'},
		{id:'o1', src:'images/ong1.png'},
		{id:'o2', src:'images/ong2.png'},
		{id:'o3', src:'images/ong3.png'},
		{id:'o4', src:'images/ong1.png'},
		{id:'day', src:'images/day1.png'},
		{id:'lua', src:'images/lua2.png'},
		{id:'luanen', src:'images/lua.png'},
		{id:'nut', src:'images/choi.png'},
		{id:'cau', src:'images/quacau.png'}
	]);
}

function stopLoad(event) {
	nen = queue.getResult("nen");
	o1 = queue.getResult("o1");
	o2 = queue.getResult("o2");
	o3 = queue.getResult("o3");
	o4 = queue.getResult("o4");
	day = queue.getResult("day");
	lua = queue.getResult("lua");
	luanen = queue.getResult("luanen");
	nut = queue.getResult("nut"); 
	cau = queue.getResult("cau");

	objNen = new createjs.Bitmap(nen);
	objo1 = new createjs.Bitmap(o1);
	objo2 = new createjs.Bitmap(o2);
	objo3 = new createjs.Bitmap(o3);
	objo4 = new createjs.Bitmap(o4);
	objday = new createjs.Bitmap(day);
	objcau = new createjs.Bitmap(cau);
	objlua = new createjs.Bitmap(lua);
	objluanen = new createjs.Bitmap(luanen);
	objnut = new createjs.Bitmap(nut);

	nen2 = queue.getResult("nen2");
	objNen2 = new createjs.Bitmap(nen2);

	$('.fullscreen-bg').hide();
	init(event);
	stage.update();
}
function ActiveX(doituong,event) {

   	if(objo1 == objo1){
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
		text2.visible = true;
   		abc.visible = true;
   		createjs.Tween.get(text)
          .to({alpha: 10, y: 240},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        createjs.Tween.get(abc)
          .to({alpha: 60, y: 190},1000, createjs.Ease.getBackIn(1));
        createjs.Ticker.setFPS(60);
        setTimeout(function(){getGift();},3000);
        
    };

	stage.update(event);
}
var cham = true;
var gameStarted = false;
function shake(event) {
	if(!cham) return;
	createjs.Tween.get(event.target,  {loop: true})
          .to({alpha: 20, x: 900},2500)
          .to({alpha: 20, x: 0},2500);
};
var ViTri = [
	{
		'x':10,
		'y':165,
		'roration':0
	},
	{
		'x':153,
		'y':180,
		'roration':90
	},
	{
		'x':425,
		'y':120,
		'roration':0
	},
	{
		'x':726,
		'y':205,
		'roration':0
	}
];

var ViTriO = [
	{
		'x':5,
		'y':252,
		'roration':0
	},
	{
		'x':160,
		'y':255,
		'roration':0
	},
	{
		'x':430,
		'y':203,
		'roration':0
	},
	{
		'x':720,
		'y':285,
		'roration':0
	}
];
var intViTri = 0;
var fireChangeTimer;
function init(event) {
	objNen.width = 900;
	objNen.height = 500;

	objo1.visible = false;
	objo2.visible = false;
	objo3.visible = false;
	objo4.visible = false;
	objlua.visible = false;
	objluanen.visible = false;
	objday.visible = false;
	objcau.visible = false;

	objlua.x = ViTri[0].x;
	objlua.y = ViTri[0].y;

	objday.y = 25;
	objday.scaleX = 0.4;
	objday.scaleY = 0.2;

	objcau.scaleX = 0.5;
	objcau.scaleY = 0.5;

	objluanen.x = 1;
	objluanen.y = 350;
	objluanen.scaleX = 1;

	objnut.x = 400;
	objnut.y = 460;

	objo1.x = 5;
	objo1.y = 252;

	objo2.x = 160;
	objo2.y = 255;

	objo3.x = 430;
	objo3.y = 203;

	objo4.x = 720;
	objo4.y = 285;

	objNen2.visible = false;	

	text = new createjs.Text("Chúc mừng bạn đã trúng thưởng", "60px 'Times New Roman'", "#f25e75");
	text.x = 70;
	text.y = 50;
	text.textBaseline = "alphabetic";
abc = new createjs.Shape();
	abc.graphics.beginFill('white').drawRoundRect(50, 0, 820, 70, 10);

	text2 = new createjs.Text("Chúc bạn may mắn lần sau", "60px 'Times New Roman'", "#f25e75");
	text2.x = 70;
	text2.y = 50;
	text.textBaseline = "alphabetic";

	text.visible = false;
	text2.visible = false;
	abc.visible = false;	
	
	fireChangeTimer = setInterval(function(){
	objlua.x = ViTri[intViTri].x;
	objlua.y = ViTri[intViTri].y;
	objlua.roration = ViTri[intViTri].roration;
	intViTri++;
	if(intViTri==ViTri.length) {
		intViTri=0;
	};
	}, 250);

	stage.addChild(objNen);
	stage.addChild(objNen2);
	stage.addChild(objday);
	stage.addChild(objcau);
	stage.addChild(objlua);
	stage.addChild(objo1);
	stage.addChild(objo2);
	stage.addChild(objo3);
	stage.addChild(objo4);
	stage.addChild(objluanen);

	stage.enableMouseOver(20);

	objcau.on('mouseover',function(evt){
		shake(evt);
	});
	function VaoLo(target) {
		for (var i = 0; i < ViTriO.length; i++) {
			//console.log(objcau.x + '-' + ViTriO[2].x + '-' + 110  + ' ' + objcau.y + ' ' + ViTriO[2].y);
			if(target.x>=ViTriO[i].x-30&&target.x<=ViTriO[i].x+110 && target.y >= ViTriO[i].y-10 && target.y < ViTriO[i].y+30 )
			return true; 
		}
		return false;
	}
	objcau.addEventListener('click', function(evt){
		console.log(evt);
		if (cham == false) {return;}
		cham = false;

		createjs.Tween.removeTweens(objcau);
		objcau.roration=0;
		var cauTimer = setInterval(function(){
		objcau.y += 2;
		//console.log(objcau.x + '-' + ViTriO[2].x + ' ' + objcau.y + ' ' + ViTriO[2].y);
		// objcau.roration = ViTri[intViTri].roration;
		// intViTri++;
		// if(intViTri==ViTri.length) {
		// 	intViTri=0;
		// }

		// if ((objcau.y != objlua.y) && (objcau.y == objo1.y || objcau.y == objo2.y || objcau.y == objo3.y  || objcau.y == objo4.y) ) {
		// 	alert('Thang');
		// }
		// else{alert('Thua');}
		if(Math.abs(objcau.x - objlua.x) <= 30 && Math.abs(objcau.y - objlua.y) <= 30) {
			clearInterval(cauTimer);
			createjs.Tween.removeTweens(objcau);

			alert('Thua');
		}
		else if(VaoLo(objcau)) {
			clearInterval(cauTimer);
			createjs.Tween.removeTweens(objcau);
			alert('Thang');
		}
		else if(objcau.y >= 400) {
			clearInterval(cauTimer);
			createjs.Tween.removeTweens(objcau);
			alert('Thua');
		}
	}, 10);

	
		setTimeout(function(){ActiveX(evt.target, evt);},2000);
	});

	stage.addChild(objnut);
	objnut.addEventListener("click", BatDauGame);
	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.on('tick', function () {
	  stage.update();
	});
};

var BatDauGame = () => {
	gameStarted = true;
	objNen.visible = false;
	objNen2.visible = true;
	objnut.visible = false;
	objo1.visible = true;
	objo2.visible = true;
	objo3.visible = true;
	objo4.visible = true;
	objlua.visible = true;
	objluanen.visible = true;
	objday.visible = true;
	objcau.visible = true;
};
//var MyRewards = MyGameData.rewards,
//TotalRewards = Object.keys(MyRewards).length;
let getGift = () => {
//	SendMyResults(MyGameData.rewards[Math.floor(Math.random() * TotalRewards)]._id);
};