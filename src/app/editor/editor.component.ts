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
  constructor() {}
  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {selection: false});
    //working but cannot dynamically resize
    this.canvas.setHeight((this.rightMC.nativeElement as HTMLElement).offsetHeight);
    this.canvas.setWidth((this.rightMC.nativeElement as HTMLElement).offsetWidth);
    this.canvas.renderAll();
  }

  //PARSING, ETC.
  private readFunc(f: string) {
    if (f != undefined || f.length > 0) {
      var func: string[] = f.split(" ");
      var call: string = func[0];

      //draw primitive shapes
      if(call.match(/^(circle|line|text|rectangle|oval|polygon)$/)){
        this.drawShape(func);
      //draw data structures
      }else if(call.match(/^(array|queue|stack|list|listpointer|tree|graph|node|marker)$/)){
        this.drawDataStruct(func);
      //use commands that target a structure or shape
      }else if(call.match(/^(changeParam|moveRelative|scale|remove|push|pop|enqueue|dequeue|moveMarker)$/)){
        this.targetCommands(func);
      //use commands that regulate rendering (excluding connectNodes)
      }else if(call.match(/^(begin|delay|groupObject|connectNodes)$/)){
        this.otherCommands(func);
      }else {
        this.isValid = false;
        this.errorOut = "ERROR: Call to command, " + call + ", could not be found!"
      }
    }
  }
  //function to draw primitive shapes [SHOUT OUT TO SHOUT OUT TO: http://fabricjs.com/]
  private drawShape(func : string[]) {
    var call: string = func[0];
    var name: string = func[1];
    var shape: any;

    //save in hashmap of variable names to fabric.js objects
    if (call == "circle") {
      shape = new fabric.Circle({
        radius: 20, fill: 'green'
      });
    } else if (call == "line") {
      shape = new fabric.Line([50, 100, 200, 200], {
        left: 170,
        top: 150,
        stroke: 'black'
      });
    } else if (call == "text") {
      shape = new fabric.Text('TEXT', {
        fill: 'blue'
      });
    } else if (call == "rectangle") {
      shape = new fabric.Rect({
        width: 10, height: 20, fill: 'red'
      });
    } else if (call == "oval") {
      shape = new fabric.Ellipse({
        stroke: 'pink'
      });
    } else if (call == "polygon") {
      shape = new fabric.Rect({
        fill: 'red'
      });
    }
    this.canvas.add(shape);
  }

  //function to render data structure
  private drawDataStruct(func: string[]) {

  }

  //function to target and modify a current structures
  private targetCommands(func: string[]){

  }

  //function for all other functions (connect nodes excluded, most are grouping and regulatory)
  private otherCommands(func: string[]){

  }

  private drawCircle() {
  }

  //modifyCircle
  private modifyCircle() {

  }

  //Handle errors if found
  private errorHandler() {

  }


  onSubmit() {
    //variable functions name is confusing
    this.hasSubmit=false;
    this.isValid=true;
    var functions: string[] = this.userInput.split("\n");
    for (var i = 0; i < functions.length; i++) {
      this.readFunc(functions[i]);
    }
    //if everything worked
    if(this.isValid){
      this.errorOut = "SUCCESS: code ran without any noticeable errors!"
    }
    this.hasSubmit=true;
  }
  clearCanvas(){
    this.canvas.clear();
  }
}
