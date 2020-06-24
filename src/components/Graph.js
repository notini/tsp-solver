class Graph {
  //now i need to pass the coords here so the graph can be drawn
  //then, figure out a way to update when the user asks to. when props change might be a good idea
  constructor(nodes, coords, route, width, height) {
    this.nodes = nodes;
    this.route = route;
    this.width = width;
    this.height = height;
    this.coords = coords;
    this.s = function(sketch) {
      let cities = [];
      sketch.setup = function() {
        sketch.createCanvas(width, height);
        sketch.noLoop();
        for (var i = 0; i < coords.length; i++) {
          let v = sketch.createVector(coords[i][0], coords[i][1]);
          cities[i] = v;
        }
      };

      sketch.draw = function() {
        sketch.background(0);
        sketch.fill(255);
        for (var i = 0; i < cities.length; i++) {
          sketch.ellipse(cities[i].x, cities[i].y, 6, 6);
        }

        if (route.length > 0) {
          sketch.stroke(255);
          sketch.strokeWeight(2);
          sketch.noFill();
          for (i = 0; i < route.length - 1; i++) {
            //sketch.vertex(cities[i].x, cities[i].y);
            sketch.line(
              cities[route[i]].x,
              cities[route[i]].y,
              cities[route[i + 1]].x,
              cities[route[i + 1]].y
            );
            //the 'line' function might also be a good option
          }
          //return to depot
          sketch.stroke("red");
          sketch.line(
            cities[0].x,
            cities[0].y,
            cities[route[route.length - 1]].x,
            cities[route[route.length - 1]].y
          );
          sketch.stroke(255);
        }
      };
    };
    //https://p5js.org/examples/hello-p5-drawing.html
    //initialize 's' with the nodes and then update route
  }

  updateSketch(nodes, route) {
    this.nodes = nodes;
    this.route = route;
  }
}

export default Graph;
