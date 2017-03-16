startLoad();
// Game
var stage = new createjs.Stage("game");
var nen,objNen,hop_qua,nut,objNut, q1, q2, q3, q4, q5, bom;
var nen2,objNen2;
var objHopQua = [];
function startLoad() {
    queue = new createjs.LoadQueue(true);
    queue.on("complete", stopLoad, this);

    queue.loadManifest([
        {id:'nen', src:'images/tl.png'},
        {id:'nen2', src:'images/nen.png'},
        {id:'hop_qua', src:'images/hop-qua.png'},
        {id:'nut', src:'images/nut.png'},
        {id:'q1', src:'images/1.png'},
        {id:'q2', src:'images/2.png'},
        {id:'q3', src:'images/4.png'},
        {id:'q4', src:'images/10.png'},
        {id:'q5', src:'images/13.png'},
        {id:'bom', src:'images/bom.png'},
    ]);
}
var createTimer;
var current=0;

function TaoHopQua() {
    if(current >= objHopQua.length) {clearInterval(createTimer);return;}
    objHopQua[current].visible = true;
    createjs.Tween.get(objHopQua[current], {loop: true}).to({y: 700}, 8000, 
    createjs.Ease.getPowInOut(4)).call(() => {objHopQua.x = Math.floor(Math.random() * (900 - 100 + 1) + 100)});
    current++;
}



function stopLoad(event) {
    nen = queue.getResult("nen");
    hop_qua = queue.getResult("hop_qua");
    nut = queue.getResult("nut");
    q1 = queue.getResult("q1");
    q2 = queue.getResult("q2");
    q3 = queue.getResult("q3");
    q4 = queue.getResult("q4");
    q5 = queue.getResult("q5");
    bom = queue.getResult("bom");


    objNen = new createjs.Bitmap(nen);


    for(var i=0;i<24;i++) {
        if(i==0 || i==6 || i==17 || i==18)
            objHopQua[i] = new createjs.Bitmap(bom);
        else if(i==1 || i==7 || i==16 || i==19)
            objHopQua[i] = new createjs.Bitmap(q1);
        else if(i==2 || i==8 || i==15 || i==20)
            objHopQua[i] = new createjs.Bitmap(q2);
        else if(i==3 || i==9 || i==14 || i==21)
            objHopQua[i] = new createjs.Bitmap(q3);
        else if(i==4 || i==10 || i==13 || i==22)
            objHopQua[i] = new createjs.Bitmap(q4);
        else(i==5 || i==11 || i==12 || i==23)
            objHopQua[i] = new createjs.Bitmap(q5);
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
    
    objNut.x = 350;
    objNut.y = 420;

    objNen2.visible = false;
    stage.addChild(objNen);
    stage.addChild(objNen2);

    for(var i=0;i<objHopQua.length;i++) {
        objHopQua[i].y = -200;
        objHopQua[i].x = Math.floor(Math.random() * (900 - 100 + 1) + 100);
        stage.addChild(objHopQua[i]);
        objHopQua[i].addEventListener("click", getGift);
    }

    
    stage.addChild(objNut);
    // setTimeout(() => {
    //  SendMyResults(idRewards);
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