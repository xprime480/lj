$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

//    var c;
//    for ( var x = 25 ; x < 400 ; x += 50 ) {
//	for ( var y = 25 ; y < 400 ; y += 50 ) {
//	    c = Shape.Circle(x, y, 25);
//	    if ( x === y ) {
//		c.fillColor = 'red';
//	    }
//	    else {
//		c.fillColor = 'green';
//	    }
//	}
//    }

//    var tool = new Tool();
//    tool.onMouseDown = function(event) {
//	var c = Shape.Circle(event.point, 25);
//	c.fillColor = 'blue';
//    };

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'purple';
    
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello, world';
	
    paper.view.draw();

});

