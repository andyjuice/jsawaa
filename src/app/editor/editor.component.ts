import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  @ViewChild('sCanvas') sCanvas: ElementRef;
  //potentially problematic
  private context: CanvasRenderingContext2D;
  private userInput: string = "";
  private errorOut: string;
  private isValid: boolean = null;
  private hasSubmit: boolean = false;
  //IMPORTANT: SAVE OBJECTS IN DATA STRUCTURES

  //CONSTRCTOR & INIT
  constructor() {}
  ngOnInit() {
    this.context = (this.sCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
  }

  //PARSING, ETC.
  private readFunc(f: string) {
    if (f != undefined || f.length > 0) {
      var func: string[] = f.split(" ");
      var call: string = func[0];

      //draw primitive shapes
      if(call.match(/^(circle|line|text|rectange|oval|polygon)$/)){
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

    if (call == "circle") {
    } else if (call == "line") {

    } else if (call == "text") {

    } else if (call == "rectangle") {

    } else if (call == "oval") {

    } else if (call == "polygon") {

    }
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
  clearCanvas() {
    this.context.clearRect(0, 0, (this.sCanvas.nativeElement as HTMLCanvasElement).width, (this.sCanvas.nativeElement as HTMLCanvasElement).height);
  }
}
