var rectangle = new Rectangle(new Point(150, 500), new Point(450, 400));
var cornerSize = new Size(20, 20);
var path = new Path.RoundRectangle(rectangle, cornerSize);
path.fillColor = 'pink';


var rectangle = new Rectangle(new Point(200, 300), new Point(400, 400));
var cornerSize = new Size(20, 20);
var path = new Path.RoundRectangle(rectangle, cornerSize);
path.fillColor = 'pink';

var rectangle = new Rectangle(new Point(250, 300), new Point(350, 200));
var cornerSize = new Size(20, 20);
var path = new Path.RoundRectangle(rectangle, cornerSize);
path.fillColor = 'pink';


var rectangle = new Rectangle(new Point(295, 170), new Point(305, 200));
var cornerSize = new Size(1, 1);
var candle1 = new Path.RoundRectangle(rectangle, cornerSize);
candle1.fillColor = 'white';
candle1.strokeColor = "black";

var rectangle = new Rectangle(new Point(293, 170), new Point(305, 140));
var cornerSize = new Size(40, 40);
var candle = new Path.RoundRectangle(rectangle, cornerSize);
candle.fillColor = 'yellow';

var blowOut = 0;
var head = new Path.Circle(new Point(300, 130), 30);
 
 var eye = new Path.Circle(new Point(290, 120), 2);

  var eye2 = new Path.Circle(new Point(310, 120), 2);

 var from = new Point(300, 160);
var to = new Point(300, 200);
var body = new Path.Line(from, to);

 var from = new Point(270, 150);
var to = new Point(300, 190);
var arm = new Path.Line(from, to);

 var from = new Point(330, 150);
var to = new Point(300, 190);
var arm2 = new Path.Line(from, to);


var text = new PointText(view.center);
var text2 = new PointText(view.center);
        text2.content = 'Blow out the candle by moving mouse over the flame';
text2.style = {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    fillColor: 'blue',
    justification: 'left'
};

 var from = new Point(310, 140);
var through = new Point(300, 150);
var to = new Point(290, 140);
var mouth = new Path.Arc(from, through, to);

candle.onMouseMove = function(event) {
      blowOut ++
    if (blowOut <= 50){
    this.opacity = Math.random();

    } else {candle.fillColor = "white";
    candle1.strokeColor = "white";
    head.strokeColor = 'black';
    text.content = 'Happy Birthday!';
text.style = {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    fillColor: 'blue',
    justification: 'left'
};
text2.style = {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 0,
    fillColor: 'white',
    justification: 'left'
};

head.strokeColor = 'black';
 eye.strokeColor = 'black';
  eye2.strokeColor = 'black';
  mouth.strokeColor = 'red';
  arm.strokeColor = 'black';
  arm2.strokeColor = 'black';
  body.strokeColor = 'black';
        
    }
  
    
    console.log(blowOut);
}