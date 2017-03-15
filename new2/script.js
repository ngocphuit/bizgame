startLoad();
// Game
var stage = new createjs.Stage("game");
var nen,objNen,hop_qua,nut,objNut, q1, q2, q3, q4, q5, bom;
var nen2,objNen2;
var objHopQua = [], obj1 = [], obj2 = [], obj3 = [], obj4 = [], obj5 = [], objbom = [] ;
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
    createjs.Tween.get(objHopQua[current], {loop: true}).to({y: 700}, 8000, createjs.Ease.getPowInOut(4)).call(() => {objHopQua.x = Math.floor(Math.random() * (900 - 100 + 1) + 100)});
    current++;
}

function TaoQua1() {
    if(current >= obj1.length) {clearInterval(createTimer);return;}
    obj1[current].visible = true;
    createjs.Tween.get(obj1[current], {loop: true}).to({y: 700}, 8000, createjs.Ease.getPowInOut(2)).call(() => {obj1.x = Math.floor(Math.random() * (900 - 100 + 1) + 100)});
    current++;
}

function TaoQua2() {
    if(current >= obj2.length) {clearInterval(createTimer);return;}
    obj2[current].visible = true;
    createjs.Tween.get(obj2[current], {loop: true}).to({y: 700}, 6500, createjs.Ease.getPowInOut(7)).call(() => {obj2.x = Math.floor(Math.random() * (900 - 100 + 1) + 100)});
    current++;
}

function TaoQua3() {
    if(current >= obj3.length) {clearInterval(createTimer);return;}
    obj3[current].visible = true;
    createjs.Tween.get(obj3[current], {loop: true}).to({y: 700}, 7500, createjs.Ease.getPowInOut(3)).call(() => {obj3.x = Math.floor(Math.random() * (700 - 100 + 1) + 100)});
    current++;
}

function TaoQua4() {
    if(current >= obj4.length) {clearInterval(createTimer);return;}
    obj4[current].visible = true;
    createjs.Tween.get(obj4[current], {loop: true}).to({y: 700}, 6000, createjs.Ease.getPowInOut(5)).call(() => {obj4.x = Math.floor(Math.random() * (600 - 100 + 1) + 100)});
    current++;
}

function TaoQua5() {
    if(current >= obj5.length) {clearInterval(createTimer);return;}
    obj5[current].visible = true;
    createjs.Tween.get(obj5[current], {loop: true}).to({y: 700}, 7000, createjs.Ease.getPowInOut(6)).call(() => {obj5.x = Math.floor(Math.random() * (800 - 100 + 1) + 100)});
    current++;
}

function TaoBom() {
    if(current >= objbom.length) {clearInterval(createTimer);return;}
    objbom[current].visible = true;
    createjs.Tween.get(objbom[current], {loop: true}).to({y: 700}, 4000, createjs.Ease.getPowInOut(6)).call(() => {objbom.x = Math.floor(Math.random() * (900 - 100 + 1) + 100)});
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

    for(var i=0;i<20;i++) {
        obj1[i] = new createjs.Bitmap(q1);
        obj1[i].visible = false;
        
    }

    for(var i=0;i<20;i++) {
        obj2[i] = new createjs.Bitmap(q2);
        obj2[i].visible = false;
        
    }

    for(var i=0;i<20;i++) {
        obj3[i] = new createjs.Bitmap(q3);
        obj3[i].visible = false;
        
    }

    for(var i=0;i<20;i++) {
        obj4[i] = new createjs.Bitmap(q4);
        obj4[i].visible = false;
        
    }

    for(var i=0;i<20;i++) {
        obj5[i] = new createjs.Bitmap(q5);
        obj5[i].visible = false;
        
    }

    for(var i=0;i<20;i++) {
        objbom[i] = new createjs.Bitmap(bom);
        objbom[i].visible = false;
        
    }


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

    for(var i=0;i<obj1.length;i++) {
        obj1[i].y = -200;
        obj1[i].x = Math.floor(Math.random() * (900 - 100 + 1) + 100);
        stage.addChild(obj1[i]);
        obj1[i].addEventListener("click", getGift);
    }

    for(var i=0;i<obj2.length;i++) {
        obj2[i].y = -200;
        obj2[i].x = Math.floor(Math.random() * (900 - 100 + 1) + 100);
        stage.addChild(obj2[i]);
        obj2[i].addEventListener("click", getGift);
    }

    for(var i=0;i<obj3.length;i++) {
        obj3[i].y = -200;
        obj3[i].x = Math.floor(Math.random() * (700 - 100 + 1) + 100);
        stage.addChild(obj3[i]);
        obj3[i].addEventListener("click", getGift);
    }

    for(var i=0;i<obj4.length;i++) {
        obj4[i].y = -200;
        obj4[i].x = Math.floor(Math.random() * (600 - 100 + 1) + 100);
        stage.addChild(obj4[i]);
        obj4[i].addEventListener("click", getGift);
    }

    for(var i=0;i<obj5.length;i++) {
        obj5[i].y = -200;
        obj5[i].x = Math.floor(Math.random() * (800 - 100 + 1) + 100);
        stage.addChild(obj5[i]);
        obj5[i].addEventListener("click", getGift);
    }

    for(var i=0;i<objbom.length;i++) {
        objbom[i].y = -200;
        objbom[i].x = Math.floor(Math.random() * (900 - 100 + 1) + 100);
        stage.addChild(objbom[i]);
        objbom[i].addEventListener("click", getGift);
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
    var createTimer = setInterval(TaoQua1, 400);
    var createTimer = setInterval(TaoQua4, 300);
    var createTimer = setInterval(TaoQua3, 200);
    var createTimer = setInterval(TaoQua2, 100);
    var createTimer = setInterval(TaoQua5, 600);
    var createTimer = setInterval(TaoBom, 500);
};
//var MyRewards = MyGameData.rewards,
//TotalRewards = Object.keys(MyRewards).length;
let getGift = () => {
    //SendMyResults(MyGameData.rewards[Math.floor(Math.random() * TotalRewards)]._id);
};