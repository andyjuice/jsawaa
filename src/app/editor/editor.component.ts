import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import 'fabric';
declare const fabric: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  @ViewChild('rMatCard') rightMC: ElementRef;
  //potentially problematic
  private context: CanvasRenderingContext2D;
  private userInput: string = "";
  private errorOut: string;
  private isValid: boolean = null;
  private hasSubmit: boolean = false;
  private canvas: any;
  //IMPORTANT: SAVE OBJECTS IN DATA STRUCTURES

  //CONSTRCTOR & INIT
  constructor() { }
  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', { selection: false });
    //working but cannot dynamically resize ——> rightMC is a the right column HTMLElement
    this.canvas.setHeight((this.rightMC.nativeElement as HTMLElement).offsetHeight);
    this.canvas.setWidth((this.rightMC.nativeElement as HTMLElement).offsetWidth);
    this.canvas.renderAll();
  }

/* PARSING & MORE */

  private readFunc(f: string) {
    if (f != undefined || f.length > 0) {
      var func: string[] = f.split(" ").filter(Boolean);
      var call: string = func[0];

      //draw primitive shapes
      if (call.match(/^(circle|line|text|rectangle|oval|polygon)$/)) {
        this.drawShape(func);
        //draw data structures
      } else if (call.match(/^(array|queue|stack|list|listpointer|tree|graph|node|marker)$/)) {
        this.drawDataStruct(func);
        //use commands that target a structure or shape
      } else if (call.match(/^(changeParam|moveRelative|scale|remove|push|pop|enqueue|dequeue|moveMarker)$/)) {
        this.targetCommands(func);
        //use commands that regulate rendering (excluding connectNodes)
      } else if (call.match(/^(begin|delay|groupObject|connectNodes)$/)) {
        this.otherCommands(func);
      } else {
        this.isValid = false;
        this.errorOut = "ERROR: Call to command, " + call + ", could not be found!"
      }
    }
  }

  //function to draw primitive shapes [SHOUT OUT TO SHOUT OUT TO: http://fabricjs.com/]

  private drawShape(func: string[]) {
    var call: string = func[0];

    //error reporting for whether or not name exists or not.
    if (1 > (func.length - 1)) { //if the index is greater than the list of function it's out of bounds and does not exist
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters given for " + func[0] + "@" + name + "function (found @ name parameter)!";
      return;
    } else {
      var name: string = func[1];
    }

    var shape: any;
    //save in hashmap of variable names to fabric.js objects

    // THIS IS THE CIRCLE CREATION IF STATEMENT
    if (call == "circle") {
      shape = this.drawCircle(func, name);
    } else if (call == "line") {
      shape = this.drawLine(func, name);
    } else if (call == "text") {
      shape = this.drawText(func, name);
    } else if (call == "rectangle") {
      shape = this.drawRectOrOval(func, name);
    } else if (call == "oval") {
      shape = this.drawRectOrOval(func, name);
    } else if (call == "polygon") {
      shape = this.drawPolygon(func, name);
    }

    if (shape == null) {
      return;
    } else {
      this.canvas.add(shape);
    }
  }

  //function to render data structure

  private drawDataStruct(func: string[]) {

  }

  //function to target and modify a current structures
  private targetCommands(func: string[]) {

  }

  //function for all other functions (connect nodes excluded, most are grouping and regulatory)
  private otherCommands(func: string[]) {

  }

  // DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES

  private drawCircle(func: string[], name: string) {
    var shape: any;
    if (2 <= func.length - 1) { // x-position
      if (isNaN(parseFloat(func[2]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ x-position parameter";
        return;
      }
      var x = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ x-position parameter)!";
      return;
    }
    if (3 <= func.length - 1) { // y-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y-position parameter";
        return;
      }
      var y = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ y-position parameter)! ";
      return;
    }
    if (4 <= func.length - 1) { // width (diameter)
      if (isNaN(parseFloat(func[4]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ width parameter";
        return;
      }
      var radius = parseFloat(func[4]) / 2;
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ width-position parameter)!";
      return;
    }
    if (5 <= func.length - 1) { // line color
      var stroke = func[5];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ color parameter)!";
      return;
    }
    if (6 <= func.length - 1) { // fill color
      var fill = func[6];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ background color parameter)!";
      return;
    }
    shape = new fabric.Circle({
      radius: radius, top: y, left: x, fill: fill, stroke: stroke
    }); // colors tbd how to determine
    return shape;
  }
  private drawLine(func: string[], name: string) {
    var shape: any;
    if (2 <= func.length - 1) { // x1-position
      if (isNaN(parseFloat(func[2]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ x1-position parameter";
        return;
      }
      var x1 = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ x1-position parameter)!";
      return;
    }
    if (3 <= func.length - 1) { // y1-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y1-position parameter";
        return;
      }
      var y1 = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ y1-position parameter)! ";
      return;
    }
    if (4 <= func.length - 1) { // x1-position
      if (isNaN(parseFloat(func[4]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ x2-position parameter";
        return;
      }
      var x2 = parseFloat(func[4]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ x2-position parameter)!";
      return;
    }
    if (5 <= func.length - 1) { // y2-position
      if (isNaN(parseFloat(func[5]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y2-position parameter";
        return;
      }
      var y2 = parseFloat(func[5]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ y2-position parameter)! ";
      return;
    }
    if (6 <= func.length - 1) { // fill stroke
      var stroke = func[6];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ color parameter)! ";
      return;
    }
    return shape = new fabric.Line([x1, y1, x2, y2], {
      stroke: stroke, selectable: 'false'
    });
  }
  private drawRectOrOval(func: string[], name: string) {
    var call = func[0] // this is to determine whether it's rect or oval
    var shape: any;
    if (2 <= func.length - 1) { // x-position
      if (isNaN(parseFloat(func[2]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ x-position parameter";
        return;
      }
      var x = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ x-position parameter)!";
      return;
    }
    if (3 <= func.length - 1) { // y-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y-position parameter";
        return;
      }
      var y = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ y-position parameter)! ";
      return;
    }
    if (4 <= func.length - 1) { // width
      if (isNaN(parseFloat(func[4]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ width parameter";
        return;
      }
      var width = parseFloat(func[4]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ width parameter)!";
      return;
    }
    if (5 <= func.length - 1) { // height
      if (isNaN(parseFloat(func[5]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ height parameter";
        return;
      }
      var height = parseFloat(func[5]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ height parameter)!";
      return;
    }
    if (6 <= func.length - 1) { // stroke color
      var stroke = func[6]
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ color parameter)!";
      return;
    }
    if (7 <= func.length - 1) { // fill color
      var fill = func[7]
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ background color parameter)!";
      return;
    }
    if (call == 'oval') {
      shape = new fabric.Ellipse({
        top: y, left: x, rx: width / 2, ry: height / 2, fill: fill, stroke: stroke
      });
    } else {
      shape = new fabric.Rect({
        top: y, left: x, width: width, height: height, fill: fill, stroke: stroke
      });
    }
    return shape;

  }
  private drawText(func: string[], name: string) {
    var shape: any;
    if (2 <= func.length - 1) { // x-position
      if (isNaN(parseFloat(func[2]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ x-position parameter";
        return;
      }
      var x = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ x-position parameter)!";
      return;
    }
    if (3 <= func.length - 1) { // y-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y-position parameter";
        return;
      }
      var y = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ y-position parameter)! ";
      return;
    }
    if (4 <= func.length - 1) { // text value
      if (func[4].substring(0, 1) != "\"" && func[4].substring(func[4].length - 1, func[4].length) != "\"") {
        this.isValid = false;
        this.errorOut = "ERROR: Expected a string in quotation marks @ text-value";
        return;
      }

      //NEED TO FIGURE HOW TO SPLIT STRINGS while ignoring quotation marked phrases
      var text = func[4].substring(1, func[4].length - 1);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ text parameter)!";
      return;
    }
    if (5 <= func.length - 1) { // color
      var stroke = func[5];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ color parameter)!";
      return;
    }
    if (6 <= func.length - 1) { // text size
      if (isNaN(parseFloat(func[6]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ size parameter";
        return;
      }
      var size = parseFloat(func[6]);
    } else {
      var size = 40;
    }
    return shape = new fabric.Text(text, {
      fill: stroke, top: y, left: x, fontSize: size
    });
  }
  private drawPolygon(func: string[], name: string) {
    var shape: any;
    if (2 <= func.length - 1) { // x-position
      if (isNaN(parseFloat(func[2]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ n (number of edges) parameter";
        return;
      }
      var n = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (found @ n, number of edges, parameter)!";
      return;
    }
    var points = [];
    var val = 1;
    for (var i = 3; i < 3 + n * 2; i += 2) {
      if (i <= func.length - 1) { // x-position
        if (isNaN(parseFloat(func[i]))) {
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type @ x-position parameter";
          return;
        } else {
          var x = parseFloat(func[i]);
        }
      }else{
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (value not found @ x"+ val +" parameter)!";
        return;
      }
      if(i+1 <= func.length - 1){
        if (isNaN(parseFloat(func[i + 1]))) {
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type @ y-position parameter";
          return;
        } else {
          var y = parseFloat(func[i + 1]);
        }
      }else{
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (value not found @ y"+ val +" parameter)!";
        return;
      }
      points.push({x: x, y: y});
      val++;
    }

    if (i <= func.length - 1) { // line color
      var stroke = func[i];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (value not found @ color parameter)!";
      return;
    }
    if (i+1 <= func.length - 1) { // fill color
      var fill = func[i+1];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function (value not found @ background color parameter)!";
      return;
    }
    console.log("edges" + n);
    console.log("color index" + i)
    return shape = new fabric.Polygon(points, {
      stroke: stroke, fill: fill
    });
  }

  //modifyCircle
  private modifyCircle() {

  }

  onSubmit() {
    //variable functions name is confusing
    this.hasSubmit = false;
    this.isValid = true;
    this.errorOut = "";
    this.clearCanvas();
    var functions: string[] = this.userInput.split("\n").filter(Boolean);
    for (var i = 0; i < functions.length; i++) {
      this.readFunc(functions[i]);
    }
    //if everything worked
    if (this.isValid) {
      this.errorOut = "SUCCESS: code ran without any noticeable errors!"
    }
    this.hasSubmit = true;
  }
  clearCanvas() {
    this.canvas.clear();
  }
}
