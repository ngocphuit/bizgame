function init() {
  var stage = new createjs.Stage("demoCanvas");
  var circle = new createjs.Shape();
    circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    createjs.Tween.get(circle, {loop: true})
      .to({x: 400}, 1000, createjs.Ease.sineOut (4))
      .to({alpha: 0, y: 75}, 500, createjs.Ease.sineOut (4))
      .to({alpha: 0, y: 125}, 100)
      .to({alpha: 1, y: 100}, 500, createjs.Ease.sineOut (4))
      .to({x: 100}, 800, createjs.Ease.sineOut (4));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}