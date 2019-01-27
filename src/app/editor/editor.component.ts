import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import 'fabric';
declare const fabric: any;

import 'hashmap';
//not sure how this works, but this could be problematic in the future...
declare function require(name: string);
var HashMap = require('hashmap');

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  @ViewChild('rMatCard') rightMC: ElementRef;
  //canvas element
  private canvas: any;
  //potentially problematic
  private userInput: string = "";
  //error message
  private errorOut: string;
  //whether there is an error or not
  private isValid: boolean = null;
  //whether user has submitted or not
  private hasSubmit: boolean = false;
  //map to store objects' names to their index in the canvas element
  private map = new HashMap();
  //index in hashmap of each object
  private index = 0;
  //line number of each call
  private line = 1;
  //speed slider display
  private showSS = false;
  // intial speed & used for determining delay
  private displaySpeed = 0.5;
  //speed slider curr value
  private speedVal: number;
  //array to keep track of all the indeces removed, used to calculate shift
  private removedIndices = new Array();

  //IMPORTANT: SAVE OBJECTS IN DATA STRUCTURES

  /* CONSTRCTOR & INIT */
  constructor() { }
  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', { selection: false });
    //working but cannot dynamically resize ——> rightMC is a the right column HTMLElement
    this.canvas.setHeight((this.rightMC.nativeElement as HTMLElement).offsetHeight);
    this.canvas.setWidth((this.rightMC.nativeElement as HTMLElement).offsetWidth);
    // this.canvas.renderAll();
  }
  onResize() {
    this.canvas.setHeight((this.rightMC.nativeElement as HTMLElement).offsetHeight);
    this.canvas.setWidth((this.rightMC.nativeElement as HTMLElement).offsetWidth);
    // this.canvas.renderAll();

  }

  /* SLEEPER FUNC */
  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* PARSING & MORE */
  private readFunc(f: string) {
    var func = [];
    if (f != undefined || f.length > 0) {
      if (f.indexOf("\"") > 0) {
        var start = 0;
        var inQuote = 0;
        for (var i = 0; i < f.length; i++) {
          //first quotation mark
          var pushed = "";
          if (f.charAt(i) === "\"" && inQuote === 0) {
            pushed = f.substring(start, i).trim();
            inQuote = 1;
            start = i;
          } else if (f.charAt(i) == " " && inQuote === 0) {
            pushed = f.substring(start, i).trim();
            start = i;
          } else if (f.charAt(i) == "\"" && inQuote === 1) {
            pushed = f.substring(start, i + 1);
            inQuote = 0;
            start = i + 1;
          } else if (i == f.length - 1) {
            pushed = f.substring(start, i + 1);
          }
          if (pushed !== "") {
            func.push(pushed);
          }
        }
        func.filter(Boolean);
        console.log(func);
      } else {
        func = f.split(" ").filter(Boolean);
      }
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
      if(this.map.has(name)){
        this.isValid = false;
        this.errorOut = "ERROR: object with variable name, " + name + ", already exists [line " + this.line + "]";
        return;
      }
      shape.set('selectable', false);
      this.canvas.add(shape);
      this.map.set(name, this.index);
      this.index++;
    }
  }

  //function to render data structure

  private drawDataStruct(func: string[]) {
  }

  //function to target and modify a current structures

  private targetCommands(func: string[]) {
    var call: string = func[0];

    if(call === "changeParam"){
      this.changeParam(func);
    }else if(call === "moveRelative"){
      // this.moveRelative(func);
    }else if(call === "scale"){
      // this.scale(func);
    }else if(call === "remove"){
      this.remove(func);
    }else if(call === "push"){

    }else if(call === "pop"){

    }else if(call === "enqueue"){

    }else if(call === "dequeue"){

    }else if(call === "moveMarker"){

    }
    this.canvas.renderAll();
  }

  //function for all other functions (connect nodes excluded, most are grouping and regulatory)

  private otherCommands(func: string[]) {
    var call: string = func[0];

    if(call == "begin"){

    }else if(call == "delay"){
      this.delay(func);
    }else if(call == "groupObject"){
      this.groupObject(func);
    }

  }

  /* DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES */

  private drawCircle(func: string[], name: any) {
    var shape: any;
    if (2 <= func.length - 1) { // x-position
      if (isNaN(parseFloat(func[2]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
        return;
      }
      var x = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (3 <= func.length - 1) { // y-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
        return;
      }
      var y = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (4 <= func.length - 1) { // width (diameter)
      if (isNaN(parseFloat(func[4]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ width parameter [line " + this.line + "]";
        return;
      }
      var radius = parseFloat(func[4]) / 2;
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (5 <= func.length - 1) { // line color
      var stroke = func[5];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (6 <= func.length - 1) { // fill color
      var fill = func[6];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
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
        this.errorOut = "ERROR: Incorrect type @ x1-position parameter [line " + this.line + "]";
        return;
      }
      var x1 = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (3 <= func.length - 1) { // y1-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y1-position parameter [line " + this.line + "]";
        return;
      }
      var y1 = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (4 <= func.length - 1) { // x1-position
      if (isNaN(parseFloat(func[4]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ x2-position parameter [line " + this.line + "]";
        return;
      }
      var x2 = parseFloat(func[4]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (5 <= func.length - 1) { // y2-position
      if (isNaN(parseFloat(func[5]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y2-position parameter [line " + this.line + "]";
        return;
      }
      var y2 = parseFloat(func[5]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (6 <= func.length - 1) { // fill stroke
      var stroke = func[6];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
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
        this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
        return;
      }
      var x = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (3 <= func.length - 1) { // y-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
        return;
      }
      var y = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (4 <= func.length - 1) { // width
      if (isNaN(parseFloat(func[4]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ width parameter [line " + this.line + "]";
        return;
      }
      var width = parseFloat(func[4]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (5 <= func.length - 1) { // height
      if (isNaN(parseFloat(func[5]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ height parameter [line " + this.line + "]";
        return;
      }
      var height = parseFloat(func[5]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (6 <= func.length - 1) { // stroke color
      var stroke = func[6]
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (7 <= func.length - 1) { // fill color
      var fill = func[7]
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
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
        this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
        return;
      }
      var x = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (3 <= func.length - 1) { // y-position
      if (isNaN(parseFloat(func[3]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
        return;
      }
      var y = parseFloat(func[3]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (4 <= func.length - 1) { // text value
      if (func[4].substring(0, 1) != "\"" && func[4].substring(func[4].length - 1, func[4].length) != "\"") {
        this.isValid = false;
        this.errorOut = "ERROR: Expected a string in quotation marks @ text-value [line " + this.line + "]";
        return;
      }

      //NEED TO FIGURE HOW TO SPLIT STRINGS while ignoring quotation marked phrases
      var text = func[4].substring(1, func[4].length - 1);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (5 <= func.length - 1) { // color
      var stroke = func[5];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (6 <= func.length - 1) { // text size
      if (isNaN(parseFloat(func[6]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ size parameter [line " + this.line + "]";
        return;
      }
      var size = parseFloat(func[6]);
    } else {
      var size = 12;
    }
    return shape = new fabric.Text(text, {
      fill: stroke, top: y, left: x, fontSize: size, textAlign: "center"
    });
  }
  private drawPolygon(func: string[], name: string) {
    var shape: any;
    if (2 <= func.length - 1) { // x-position
      if (isNaN(parseFloat(func[2]))) {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect type @ n (number of edges) parameter [line " + this.line + "]";
        return;
      }
      var n = parseFloat(func[2]);
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    var points = [];
    var val = 1;
    for (var i = 3; i < 3 + n * 2; i += 2) {
      if (i <= func.length - 1) { // x-position
        if (isNaN(parseFloat(func[i]))) {
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
          return;
        } else {
          var x = parseFloat(func[i]);
        }
      } else {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
        return;
      }
      if (i + 1 <= func.length - 1) {
        if (isNaN(parseFloat(func[i + 1]))) {
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
          return;
        } else {
          var y = parseFloat(func[i + 1]);
        }
      } else {
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
        return;
      }
      points.push({ x: x, y: y });
      val++;
    }

    if (i <= func.length - 1) { // line color
      var stroke = func[i];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    if (i + 1 <= func.length - 1) { // fill color
      var fill = func[i + 1];
    } else {
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
      return;
    }
    console.log("edges" + n);
    console.log("color index" + i)
    return shape = new fabric.Polygon(points, {
      stroke: stroke, fill: fill
    });
  }

  /* TARGETING RENDERED OBJECTS | TARGETING RENDERED OBJECTS | TARGETING RENDERED OBJECTS | TARGETING RENDERED OBJECTS */

  /* CHANGE THE PARAMETERS */
  private changeParam(func: string[]){
    var name = func[1];

    if(1 > func.length - 1){
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + "[line " + this.line + "]";
      return;
    }else{
      if(this.map.get(func[1]) < 0){
        this.isValid = false;
        this.errorOut = "ERROR: Could not find target name, " + func[1] +  "[line "+ this.line + "]";
        return;
      }
      var shape = this.canvas.item(this.map.get(func[1]));
      console.log("index: " + this.map.get(func[1]) + " | " + shape);

    }
    if(2 > func.length - 1){
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + "[line " + this.line + "]";
      return;
    }else{
      if(3 > func.length - 1){
        this.isValid = false;
        this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + "[line " + this.line + "]";
        return;
      }
      var change = func[3]
      if(func[2] === "color"){
        console.log(change)
        shape.set({stroke: change})
      }else if(func[2] === "bkgrd" || func[2] === "textcolor"){
        shape.set({fill: change})
      }else if(func[2] === "text"){
        if(shape.get('type') !== "text"){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected text " + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        console.log("text change: " + change)
        shape.set({text: change});
      }else if(func[2] === "width"){
        if(shape.get('type') === "text" || shape.get('type') === "polygon" || shape.get('type') === "line"){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected circle, rect, or oval" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        if(isNaN(parseFloat(change))){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        console.log("width change: " + change)
        if(shape.get('type') === "circle"){
          shape.set({radius: parseFloat(change)/2});
        }else{
          shape.set({width: parseFloat(change)});
        }
      }else if(func[2] === "height"){
        if(shape.get('type') === "text" || shape.get('type') === "polygon" || shape.get('type') === "line" || shape.get('type') === "circle"){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected rect or oval" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        if(isNaN(parseFloat(change))){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        console.log("width change: " + change)
        shape.set({height: parseFloat(change)});
      }else if(func[2] === "point"){
        if(shape.get('type') !== 'text'){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected text " + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        if(isNaN(parseFloat(change))){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        shape.set({fontSize: parseFloat(change)})
      }else if(func[2] === "x"){
        if(shape.get('type') === "polygon"){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, cannot take polygon" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        if(isNaN(parseFloat(change))){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        shape.set({left: parseFloat(change)})
      }else if(func[2] === "y"){
        if(shape.get('type') === "polygon"){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, cannot take polygon" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        if(isNaN(parseFloat(change))){
          this.isValid = false;
          this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
          return;
        }
        shape.set({top: parseFloat(change)})
      }else if(func[2] === "xn"){
        //continue work here
      }else if(func[2] === "yn"){

      }else{
        this.isValid = false;
        this.errorOut = "ERROR: Could not understand parameter to be changed: " + func[0] + "@" + name + "[line " + this.line + "]";
        return;
      }
    }
  }
  /* REMOVE A VALUE */
  private remove(func: string[]){
    if(1 > func.length-1){
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + func[0] + "[line " + this.line + "]";
      return;
    }else{
      var removedItem = func[1];
      if(this.map.has(removedItem)){
        var shift = 0;
        var number = this.map.get(removedItem);
        for(var i = 0; i < this.removedIndices.length; i++){
          if(this.removedIndices[i] < number){
            console.log(this.removedIndices[i] + " ? " + number);
            shift++;
          }
        }
        console.log("shift = " + shift);
      }else{
        this.isValid = false;
        this.errorOut = "ERROR: Cannot find variable with name " + removedItem + "@" + func[0] + "[line " + this.line + "]";
        return;
      }
      console.log(this.canvas.item(number-shift));
      this.canvas.remove(this.canvas.item(number-shift));
      this.removedIndices.push(number);
    }

  }

  /* OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS */

  /* NOT WORKING BUT DELAY */
  async delay(func: string[]){
    if(isNaN(parseFloat(func[1]))){
      this.isValid = false;
      this.errorOut = "ERROR: Incorrect type @ time (milliseconds) parameter [line " + this.line + "]";
      return;
    }
    var millidelay = parseFloat(func[1])
    console.log(millidelay)
    await this.sleep(millidelay)
  }
  /* GROUP OBJECTS */
  private groupObject(func: string[]){

  }

  /*ON SUBMISSION FUNCTIONS | ON SUBMISSION FUNCTIONS | ON SUBMISSION FUNCTIONS | ON SUBMISSION FUNCTIONS*/

  async onSubmit() {
    //clears the stuff in the hashmap
    this.map.clear();
    //clears the values in the removedIndices
    this.removedIndices.splice(0, this.removedIndices.length);
    //variable functions name is confusing
    this.hasSubmit = false;
    this.isValid = true;
    this.errorOut = "";
    this.line = 0;
    this.index = 0;
    this.clearCanvas();

    var functions: string[] = this.userInput.split("\n").filter(Boolean);
    var cleaned: string;
    var milliseconds = this.displaySpeed * 1000;
    console.log(milliseconds);
    //NOT COMPLETE: STOP THE CODE WHEN ERROR FOUND
    for (var i = 0; i < functions.length; i++) {
      cleaned = functions[i].trim();
      this.line = i + 1;
      this.readFunc(cleaned);
      //break if error
      if(!this.isValid){
        break;
      }
      await this.sleep(milliseconds);
    }
    //if everything worked
    if (this.isValid) {
      this.errorOut = "SUCCESS: code ran without any noticeable errors!"
    }
    this.hasSubmit = true;
    this.map.forEach(function(value, key) {
      console.log(key + " : " + value);
    });
  }
  /* BUTTON FUNCS */

  //Clears the canvas
  clearCanvas() {
    this.canvas.clear();
    this.map.clear();
  }
  //Shows the slider
  showSlider(){
    this.showSS = !this.showSS;
    this.displaySpeed = this.speedVal;
  }
  //display speed
  formatLabel(speedVal: number | null) {
    return speedVal + '″';
  }
}
